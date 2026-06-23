"use client";

interface Props {
  state: "idle" | "saving" | "saved";
}

export default function SaveIndicator({ state }: Props) {
  if (state === "idle") return null;
  return (
    <span className="text-xs text-stone-400 select-none transition-opacity">
      {state === "saving" ? "Saving…" : "Saved ✓"}
    </span>
  );
}
