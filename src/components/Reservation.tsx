import { useState, type FormEvent, type ReactNode } from "react";
import { motion } from "motion/react";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { useI18n } from "../hooks/useI18n";
import { submitReservation, type ReservationPayload } from "../lib/reservations";

type FormState = {
  date: string;
  time: string;
  partySize: string;
  name: string;
  phone: string;
  email: string;
  message: string;
};

const emptyState: FormState = {
  date: "",
  time: "",
  partySize: "2",
  name: "",
  phone: "",
  email: "",
  message: "",
};

const PHONE_RE = /^[0-9+()\s.-]{6,20}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Reservation() {
  const { t } = useI18n();
  const [form, setForm] = useState<FormState>(emptyState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");

  function update<K extends keyof FormState>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};

    if (!form.date) next.date = t.reservation.errors.required;
    else {
      const picked = new Date(form.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (picked < today) next.date = t.reservation.errors.pastDate;
    }

    if (!form.time) next.time = t.reservation.errors.required;

    const size = Number(form.partySize);
    if (!form.partySize || Number.isNaN(size) || size < 1) {
      next.partySize = t.reservation.errors.invalidPartySize;
    }

    if (!form.name.trim()) next.name = t.reservation.errors.required;

    if (!form.phone.trim()) next.phone = t.reservation.errors.required;
    else if (!PHONE_RE.test(form.phone.trim())) next.phone = t.reservation.errors.invalidPhone;

    if (form.email.trim() && !EMAIL_RE.test(form.email.trim())) {
      next.email = t.reservation.errors.invalidEmail;
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    const payload: ReservationPayload = {
      date: form.date,
      time: form.time,
      partySize: Number(form.partySize),
      name: form.name.trim(),
      phone: form.phone.trim(),
      email: form.email.trim() || undefined,
      message: form.message.trim() || undefined,
    };

    await submitReservation(payload);
    setStatus("done");
  }

  const inputClass =
    "w-full rounded-lg border border-navy/15 bg-ivory px-4 py-2.5 text-sm text-navy outline-none transition-colors focus:border-ocean";

  if (status === "done") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-lg border border-gold/40 bg-gold/10 p-8 text-center"
        style={{ borderRadius: "var(--radius-md)" }}
      >
        <CheckCircle2 className="mx-auto mb-4 text-gold" size={36} />
        <h3 className="mb-2 font-display text-xl font-semibold text-navy">
          {t.reservation.successTitle}
        </h3>
        <p className="mx-auto max-w-md text-sm leading-relaxed text-grey/80">
          {t.reservation.demoNotice}
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-2xl" noValidate>
      <div className="mb-6 flex gap-3 rounded-lg border border-ocean/25 bg-ocean/5 p-4">
        <AlertCircle size={18} className="mt-0.5 shrink-0 text-ocean" />
        <p className="text-sm leading-relaxed text-navy/80">
          <span className="font-semibold">{t.reservation.demoNoticeTitle}.</span>{" "}
          {t.reservation.demoNotice}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label={t.reservation.fields.date} error={errors.date}>
          <input
            type="date"
            className={inputClass}
            value={form.date}
            onChange={(e) => update("date", e.target.value)}
          />
        </Field>

        <Field label={t.reservation.fields.time} error={errors.time}>
          <input
            type="time"
            className={inputClass}
            value={form.time}
            onChange={(e) => update("time", e.target.value)}
          />
        </Field>

        <Field label={t.reservation.fields.partySize} error={errors.partySize}>
          <input
            type="number"
            min={1}
            max={30}
            className={inputClass}
            value={form.partySize}
            onChange={(e) => update("partySize", e.target.value)}
          />
        </Field>

        <Field label={t.reservation.fields.name} error={errors.name}>
          <input
            type="text"
            className={inputClass}
            placeholder={t.reservation.placeholders.name}
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
          />
        </Field>

        <Field label={t.reservation.fields.phone} error={errors.phone}>
          <input
            type="tel"
            className={inputClass}
            placeholder={t.reservation.placeholders.phone}
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
          />
        </Field>

        <Field label={t.reservation.fields.email} error={errors.email}>
          <input
            type="email"
            className={inputClass}
            placeholder={t.reservation.placeholders.email}
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
          />
        </Field>

        <div className="sm:col-span-2">
          <Field label={t.reservation.fields.message}>
            <textarea
              className={inputClass}
              rows={3}
              placeholder={t.reservation.placeholders.message}
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
            />
          </Field>
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 w-full rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-ivory transition-colors hover:bg-ocean disabled:opacity-60"
      >
        {status === "submitting" ? t.reservation.submitting : t.reservation.submit}
      </button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-navy">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-600">{error}</span>}
    </label>
  );
}
