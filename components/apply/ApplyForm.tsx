"use client";

import { useState, type FormEvent } from "react";
import { apply } from "@/content/site";
import { cn } from "@/lib/cn";

type Status = "idle" | "submitting" | "success";

export function ApplyForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    const data = new FormData(event.currentTarget);
    const athlete = String(data.get("athlete") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const level = String(data.get("level") ?? "").trim();
    const interest = String(data.get("interest") ?? "").trim();

    if (!athlete || !email || !level || !interest) {
      setError("Athlete name, email, level, and program interest are required.");
      return;
    }
    if (!email.includes("@")) {
      setError("Enter a valid email.");
      return;
    }

    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 700));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="border border-line bg-void-2 p-8 md:p-12">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-stitch">
          Received
        </p>
        <h2 className="mt-4 font-display text-4xl uppercase text-bone md:text-5xl">
          Application in. We will review it.
        </h2>
        <p className="mt-4 max-w-md font-serif text-lg text-bone-dim">
          If there is a fit, you will hear back with next steps. Do not follow up
          with extra numbers — the form is enough.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="border border-line bg-void-2 p-6 md:p-10">
      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Athlete name" name="athlete" required />
        <Field label="Parent / guardian" name="parent" />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" />
        <SelectField label="Current level" name="level" options={apply.levels} required />
        <Field label="Current velo (optional)" name="velo" placeholder="e.g. 84" />
        <SelectField
          label="Program interest"
          name="interest"
          options={apply.interests}
          required
          className="md:col-span-2"
        />
        <label className="block md:col-span-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-ash">
            Goals / context
          </span>
          <textarea
            name="goals"
            rows={5}
            className="mt-2 w-full resize-y border border-line bg-void px-4 py-3 font-serif text-base text-bone outline-none transition-colors focus:border-bone/50"
          />
        </label>
      </div>
      {error ? (
        <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-stitch" role="alert">
          {error}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={status === "submitting"}
        className={cn(
          "mt-8 inline-flex bg-bone px-8 py-4 font-display text-[13px] font-semibold uppercase tracking-[0.22em] text-void transition-opacity",
          status === "submitting" && "opacity-60",
        )}
      >
        {status === "submitting" ? "Submitting" : "Submit application"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-ash">
        {label}
        {required ? <span className="text-stitch"> *</span> : null}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full border border-line bg-void px-4 py-3 font-serif text-base text-bone outline-none transition-colors placeholder:text-ash/50 focus:border-bone/50"
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
  required,
  className,
}: {
  label: string;
  name: string;
  options: readonly string[];
  required?: boolean;
  className?: string;
}) {
  return (
    <label className={cn("block", className)}>
      <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-ash">
        {label}
        {required ? <span className="text-stitch"> *</span> : null}
      </span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="mt-2 w-full appearance-none border border-line bg-void px-4 py-3 font-serif text-base text-bone outline-none focus:border-bone/50"
      >
        <option value="" disabled>
          Select
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
