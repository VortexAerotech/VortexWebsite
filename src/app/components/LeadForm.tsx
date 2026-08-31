"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function LeadForm() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, contact }),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error ?? "Iets het verkeerd geloop.");
        return;
      }

      setStatus("success");
      setMessage("Dankie! Ons kontak jou binnekort.");
      setName("");
      setContact("");
    } catch {
      setStatus("error");
      setMessage("Netwerkfout. Probeer weer.");
    }
  }

  if (status === "success") {
    return (
      <p className="rounded border border-safety-orange/40 bg-surface-container px-6 py-4 font-medium text-safety-orange">
        {message}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-3">
      <input
        type="text"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Naam"
        className="rounded border border-border-muted bg-surface-container px-5 py-3 text-on-surface placeholder-on-surface-variant/50 outline-none focus:border-safety-orange"
      />
      <input
        type="text"
        required
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        placeholder="Kontaknommer of e-pos"
        className="rounded border border-border-muted bg-surface-container px-5 py-3 text-on-surface placeholder-on-surface-variant/50 outline-none focus:border-safety-orange"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded bg-safety-orange px-6 py-3 font-mono text-sm font-bold tracking-[0.08em] text-field-white uppercase transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {status === "loading" ? "Stuur..." : "Vra vir 'n Terugbel"}
      </button>
      {status === "error" && <p className="text-sm text-error">{message}</p>}
    </form>
  );
}
