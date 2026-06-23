"use client";

import { useState, useEffect } from "react";
import PinGate from "@/components/tasks/PinGate";
import TaskBoard from "@/components/tasks/TaskBoard";
import type { AuthState } from "@/components/tasks/types";

const SESSION_KEY = "tasks_auth";

export default function TasksPage() {
  const [auth, setAuth] = useState<AuthState | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(SESSION_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as AuthState;
        if (parsed.token && parsed.role) setAuth(parsed);
      }
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  function handleAuth(state: AuthState) {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(state));
    setAuth(state);
  }

  function handleLogout() {
    sessionStorage.removeItem(SESSION_KEY);
    setAuth(null);
  }

  if (!ready) return null;
  if (!auth) return <PinGate onAuth={handleAuth} />;
  return <TaskBoard auth={auth} onLogout={handleLogout} />;
}
