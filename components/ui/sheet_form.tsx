"use client";

import { useState } from "react";

export default function RSVPForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);

    const form = new FormData(e.target);

    const data = Object.fromEntries(form.entries());

    const res = await fetch("/api/rsvp", {
      method: "POST",
      body: JSON.stringify(data),
    });

    setLoading(false);

    if (res.ok) alert("Submitted!");
    else alert("Error");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input name="name" placeholder="Name" required />
      <input name="attendance" type="radio" placeholder="Attendance" required />
      <input name="phone" placeholder="Phone" />
      <input name="total" type="number" placeholder="Total" />
      <textarea name="message" placeholder="Message" />
      <button disabled={loading}>
        {loading ? "Sending..." : "RSVP"}
      </button>
    </form>
  );
}