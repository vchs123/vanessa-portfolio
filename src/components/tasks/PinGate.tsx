"use client";

import { useState } from "react";
import { login } from "./api";
import type { AuthState } from "./types";

interface Props {
  onAuth: (state: AuthState) => void;
}

export default function PinGate({ onAuth }: Props) {
  const [loginType, setLoginType] = useState<"owner" | "commenter" | "visitor">("visitor");
  const [pin, setPin] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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

  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <p className="text-xs tracking-widest text-stone-400 uppercase mb-2">Vanessa Chua · Tasks</p>
          <h1 className="text-2xl font-light text-stone-800">Enter PIN to continue</h1>
          <p className="text-sm text-stone-500 mt-2">
            This page is unlisted and not in the nav.
            <br />
            Contact Vanessa for access.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
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

          <input
            type="text"
            placeholder={loginType === "visitor" ? "Visitor PIN (e.g. ABCD1234)" : "PIN"}
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            className="w-full border border-stone-200 rounded-lg px-4 py-3 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-stone-400 font-mono uppercase tracking-wider"
            autoComplete="off"
            autoFocus
          />

          {error && <p className="text-xs text-red-500">{error}</p>}

          <button
            type="submit"
            disabled={loading || !pin.trim()}
            className="w-full bg-stone-800 text-white py-3 rounded-lg text-sm hover:bg-stone-700 disabled:opacity-40 transition-colors"
          >
            {loading ? "Checking…" : "Continue"}
          </button>
        </form>
      </div>
    </div>
  );
}
