import React from "react";
export default function ServiceIcon({ name }: { name: "audit"|"optimize"|"govern"|"forecast" }) {
  const common = "h-6 w-6 text-emerald-600";
  if (name === "audit") return (
    <svg className={common} viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M3 4h14a2 2 0 0 1 2 2v9l-4 4H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm2 3h10v2H5V7Zm0 4h10v2H5v-2Zm0 4h7v2H5v-2Z"/></svg>
  );
  if (name === "optimize") return (
    <svg className={common} viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 1 0 7.07 2.93L12 12V2Z"/></svg>
  );
  if (name === "govern") return (
    <svg className={common} viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M3 10h18v2H3v-2Zm2 4h14v6H5v-6Zm2-8h10v2H7V6Z"/></svg>
  );
  return (
    <svg className={common} viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 19h16v2H4v-2ZM12 3l4 7h-3v5h-2V10H8l4-7Z"/></svg>
  );
}
