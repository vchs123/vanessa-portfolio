"use client";

import { useState } from "react";
import { login } from "./api";
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

export default function PinGate({ onAuth }: Props) {
  const [loginType, setLoginType] = useState<"owner" | "commenter" | "visitor">("visitor");
  const [pin, setPin] = useState("");
  const [showPin, setShowPin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Visitor access request form
  const [showRequest, setShowRequest] = useState(false);
  const [reqName, setReqName] = useState("");
  const [reqEmail, setReqEmail] = useState("");
  const [reqNote, setReqNote] = useState("");
  const [reqSending, setReqSending] = useState(false);
  const [reqDone, setReqDone] = useState(false);
  const [reqError, setReqError] = useState("");

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
          <h1 className="text-2xl font-light text-stone-800">Enter PIN to continue</h1>
          <p className="text-sm text-stone-500 mt-2">
            This page is access-restricted.
            <br />
            Contact Vanessa for a PIN.
          </p>
        </div>

        {/* Login form */}
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
              className="w-full border border-stone-200 rounded-lg px-4 py-3 pr-11 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-stone-400 font-mono uppercase tracking-wider"
              autoComplete="off"
              autoFocus
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

        {/* Divider */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-stone-200" />
          <span className="text-xs text-stone-400">Don't have a PIN?</span>
          <div className="flex-1 h-px bg-stone-200" />
        </div>

        {/* Visitor access request */}
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
            <input
              type="text"
              placeholder="Your name"
              value={reqName}
              onChange={(e) => setReqName(e.target.value)}
              required
              className="w-full border border-stone-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-stone-300"
            />
            <input
              type="email"
              placeholder="Your email"
              value={reqEmail}
              onChange={(e) => setReqEmail(e.target.value)}
              required
              className="w-full border border-stone-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-stone-300"
            />
            <textarea
              placeholder="Brief note (optional) — e.g. how you know Vanessa"
              value={reqNote}
              onChange={(e) => setReqNote(e.target.value)}
              rows={2}
              className="w-full border border-stone-200 rounded-lg px-3 py-2.5 text-sm resize-none focus:outline-none focus:ring-1 focus:ring-stone-300"
            />
            {reqError && <p className="text-xs text-red-500">{reqError}</p>}
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setShowRequest(false)}
                className="flex-1 border border-stone-200 rounded-lg py-2 text-sm text-stone-500 hover:bg-stone-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={reqSending || !reqName.trim() || !reqEmail.trim()}
                className="flex-1 bg-stone-800 text-white py-2 rounded-lg text-sm hover:bg-stone-700 disabled:opacity-40 transition-colors"
              >
                {reqSending ? "Sending…" : "Send request"}
              </button>
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
