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
    return <p className="text-lg font-medium text-emerald-400">{message}</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-3">
      <input
        type="text"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Naam"
        className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-white placeholder-white/40 outline-none focus:border-white/40"
      />
      <input
        type="text"
        required
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        placeholder="Kontaknommer of e-pos"
        className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-white placeholder-white/40 outline-none focus:border-white/40"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-full bg-white px-6 py-3 font-medium text-black transition-colors hover:bg-white/85 disabled:opacity-50"
      >
        {status === "loading" ? "Stuur..." : "Vra vir 'n terugbel"}
      </button>
      {status === "error" && <p className="text-sm text-red-400">{message}</p>}
    </form>
  );
}
