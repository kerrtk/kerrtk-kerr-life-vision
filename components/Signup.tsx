"use client";

import { useState, type FormEvent } from "react";
import "./signup.css";
import { signup } from "@/lib/content";

type Status = "idle" | "sending" | "done" | "error";

export default function Signup() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          firstName: form.get("firstName"),
          email: form.get("email"),
          website: form.get("website"),
        }),
      });
      const data = await response.json().catch(() => ({}));
      if (response.ok && data.ok) {
        setStatus("done");
        setMessage(signup.success);
      } else {
        setStatus("error");
        setMessage(data.error ?? signup.failure);
      }
    } catch {
      setStatus("error");
      setMessage(signup.failure);
    }
  }

  if (status === "done") {
    return (
      <p className="signup-note signup-done" role="status">
        {message}
      </p>
    );
  }

  return (
    <form className="signup" onSubmit={onSubmit}>
      <div className="signup-fields">
        <label>
          <span>First name</span>
          <input name="firstName" type="text" autoComplete="given-name" />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label className="signup-trap" aria-hidden="true">
          <span>Website</span>
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : signup.button}
      </button>
      <p className="signup-note" role="status" aria-live="polite">
        {status === "error" ? message : signup.fine}
      </p>
    </form>
  );
}
