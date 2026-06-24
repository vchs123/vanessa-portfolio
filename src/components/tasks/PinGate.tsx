"use client";

import { useState, useEffect } from "react";
import { login, passkeyStatus, passkeyLoginBegin, passkeyLoginComplete } from "./api";
import type { AuthState } from "./types";

const BASE = process.env.NEXT_PUBLIC_TASKS_API_URL ?? "https://tasks-api.vanessachs-work.workers.dev";

interface Props {
  onAuth: (state: AuthState) => void;
}

function EyeIcon({ open }: { open: boolean }) {
  return open ? (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ) : (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19M1 1l22 22" />
    </svg>
  );
}

function b64uToBuf(b64: string): ArrayBuffer {
  const padded = b64.replace(/-/g, "+").replace(/_/g, "/");
  const bin = atob(padded);
  const buf = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) buf[i] = bin.charCodeAt(i);
  return buf.buffer;
}

function bufToB64u(buf: ArrayBuffer): string {
  const bytes = new Uint8Array(buf);
  let bin = "";
  for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}

export default function PinGate({ onAuth }: Props) {
  const [loginType, setLoginType] = useState<"owner" | "commenter" | "visitor">("visitor");
  const [pin, setPin] = useState("");
  const [showPin, setShowPin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Biometric
  const [biometricAvailable, setBiometricAvailable] = useState(false);
  const [biometricLoading, setBiometricLoading] = useState(false);

  // Visitor access request form
  const [showRequest, setShowRequest] = useState(false);
  const [reqName, setReqName] = useState("");
  const [reqEmail, setReqEmail] = useState("");
  const [reqNote, setReqNote] = useState("");
  const [reqSending, setReqSending] = useState(false);
  const [reqDone, setReqDone] = useState(false);
  const [reqError, setReqError] = useState("");

  useEffect(() => {
    if (typeof window === "undefined" || !window.PublicKeyCredential) return;
    passkeyStatus().then((s) => {
      if (s.registered) setBiometricAvailable(true);
    }).catch(() => {});
  }, []);

  async function handleBiometric() {
    setBiometricLoading(true);
    setError("");
    try {
      const opts = await passkeyLoginBegin();
      const credential = await navigator.credentials.get({
        publicKey: {
          challenge: b64uToBuf(opts.challenge),
          allowCredentials: opts.allowCredentials.map((c) => ({
            type: "public-key" as const,
            id: b64uToBuf(c.id),
          })),
          userVerification: "required",
          timeout: opts.timeout,
        },
      }) as PublicKeyCredential | null;

      if (!credential) throw new Error("Authentication cancelled");
      const resp = credential.response as AuthenticatorAssertionResponse;

      const result = await passkeyLoginComplete({
        id: credential.id,
        clientDataJSON: bufToB64u(resp.clientDataJSON),
        authenticatorData: bufToB64u(resp.authenticatorData),
        signature: bufToB64u(resp.signature),
      });
      onAuth({ token: result.token, role: result.role as AuthState["role"] });
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Biometric login failed";
      if (!msg.includes("cancelled") && !msg.includes("NotAllowedError")) {
        setError(msg);
      }
    } finally {
      setBiometricLoading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await login(loginType, loginType === "visitor" ? pin.trim().toUpperCase() : pin.trim());
      onAuth({ token: res.token, role: res.role as AuthState["role"] });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid PIN");
    } finally {
      setLoading(false);
    }
  }

  async function handleRequest(e: React.FormEvent) {
    e.preventDefault();
    setReqError("");
    setReqSending(true);
    try {
      const res = await fetch(`${BASE}/visitor-requests`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: reqName.trim(), email: reqEmail.trim(), note: reqNote.trim() }),
      });
      if (!res.ok) throw new Error(await res.text());
      setReqDone(true);
    } catch (err) {
      setReqError(err instanceof Error ? err.message : "Failed to send request");
    } finally {
      setReqSending(false);
    }
  }

  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm space-y-6">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs tracking-widest text-stone-400 uppercase mb-2">Vanessa Chua · Tasks</p>
          <h1 className="text-2xl font-light text-stone-800">Sign in</h1>
          <p className="text-sm text-stone-500 mt-2">Access-restricted. Contact Vanessa for a PIN.</p>
        </div>

        {/* Biometric button — shown when a passkey is registered */}
        {biometricAvailable && (
          <button
            onClick={handleBiometric}
            disabled={biometricLoading}
            className="w-full flex items-center justify-center gap-2.5 bg-stone-800 text-white py-3.5 rounded-xl text-sm font-medium hover:bg-stone-700 disabled:opacity-50 transition-colors"
          >
            {biometricLoading ? (
              <span>Waiting for biometric…</span>
            ) : (
              <>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C9.38 2 7 3.61 7 6v1" />
                  <path d="M12 2c2.62 0 5 1.61 5 4v1" />
                  <path d="M7 7C5.34 7 4 8.34 4 10v4c0 4.42 3.58 8 8 8s8-3.58 8-8v-4c0-1.66-1.34-3-3-3" />
                  <path d="M9 12a3 3 0 006 0" />
                </svg>
                Use Face ID / Touch ID / Fingerprint
              </>
            )}
          </button>
        )}

        {biometricAvailable && (
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-stone-200" />
            <span className="text-xs text-stone-400">or use PIN</span>
            <div className="flex-1 h-px bg-stone-200" />
          </div>
        )}

        {/* PIN login form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex rounded-lg overflow-hidden border border-stone-200">
            {(["visitor", "commenter", "owner"] as const).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setLoginType(t)}
                className={`flex-1 py-2 text-xs capitalize transition-colors ${
                  loginType === t ? "bg-stone-800 text-white" : "bg-white text-stone-500 hover:bg-stone-50"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="relative">
            <input
              type={showPin ? "text" : "password"}
              placeholder={loginType === "visitor" ? "Visitor PIN (e.g. ABCD1234)" : "PIN"}
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              className="w-full border border-stone-200 rounded-lg px-4 py-3 pr-11 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-stone-400 font-mono tracking-wider"
              autoComplete="off"
            />
            <button
              type="button"
              onClick={() => setShowPin((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
              tabIndex={-1}
              aria-label={showPin ? "Hide PIN" : "Show PIN"}
            >
              <EyeIcon open={showPin} />
            </button>
          </div>

          {error && <p className="text-xs text-red-500">{error}</p>}

          <button
            type="submit"
            disabled={loading || !pin.trim()}
            className="w-full bg-stone-800 text-white py-3 rounded-lg text-sm hover:bg-stone-700 disabled:opacity-40 transition-colors"
          >
            {loading ? "Checking…" : "Continue"}
          </button>
        </form>

        {/* Visitor request */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-stone-200" />
          <span className="text-xs text-stone-400">Don't have a PIN?</span>
          <div className="flex-1 h-px bg-stone-200" />
        </div>

        {!showRequest && !reqDone && (
          <button
            onClick={() => setShowRequest(true)}
            className="w-full border border-stone-200 rounded-lg py-2.5 text-sm text-stone-500 hover:border-stone-400 hover:text-stone-700 transition-colors"
          >
            Request visitor access
          </button>
        )}

        {showRequest && !reqDone && (
          <form onSubmit={handleRequest} className="space-y-3 border border-stone-200 rounded-xl p-4 bg-white">
            <p className="text-xs text-stone-500">Vanessa will review your request and email you a one-time PIN.</p>
            <input type="text" placeholder="Your name" value={reqName} onChange={(e) => setReqName(e.target.value)} required className="w-full border border-stone-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-stone-300" />
            <input type="email" placeholder="Your email" value={reqEmail} onChange={(e) => setReqEmail(e.target.value)} required className="w-full border border-stone-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-stone-300" />
            <textarea placeholder="Brief note (optional) — e.g. how you know Vanessa" value={reqNote} onChange={(e) => setReqNote(e.target.value)} rows={2} className="w-full border border-stone-200 rounded-lg px-3 py-2.5 text-sm resize-none focus:outline-none focus:ring-1 focus:ring-stone-300" />
            {reqError && <p className="text-xs text-red-500">{reqError}</p>}
            <div className="flex gap-2">
              <button type="button" onClick={() => setShowRequest(false)} className="flex-1 border border-stone-200 rounded-lg py-2 text-sm text-stone-500 hover:bg-stone-50">Cancel</button>
              <button type="submit" disabled={reqSending || !reqName.trim() || !reqEmail.trim()} className="flex-1 bg-stone-800 text-white py-2 rounded-lg text-sm hover:bg-stone-700 disabled:opacity-40 transition-colors">{reqSending ? "Sending…" : "Send request"}</button>
            </div>
          </form>
        )}

        {reqDone && (
          <div className="border border-green-100 bg-green-50 rounded-xl p-4 text-center space-y-1">
            <p className="text-sm font-medium text-green-800">Request sent ✓</p>
            <p className="text-xs text-green-600">Vanessa will be in touch with a visitor PIN shortly.</p>
          </div>
        )}
      </div>
    </div>
  );
}
