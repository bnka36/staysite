/**
 * Reservation submission — currently a local-only demo stub.
 *
 * Supabase (or any other backend) is NOT configured in this repo. This
 * function is the single place to wire in a real API call later, e.g.:
 *
 *   const { error } = await supabase
 *     .from("reservations")
 *     .insert({ ...payload, status: "en attente" });
 *   if (error) throw error;
 *
 * Until then it only resolves locally after a short simulated delay, so
 * the UI's loading/success states can be built and tested honestly.
 * Callers MUST present the result as a demo, never as a confirmed
 * reservation — see the `demoNotice` strings in the locale files.
 */

export type ReservationPayload = {
  date: string;
  time: string;
  partySize: number;
  name: string;
  phone: string;
  email?: string;
  message?: string;
};

export type ReservationResult = {
  ok: true;
  demo: true;
};

export async function submitReservation(
  payload: ReservationPayload
): Promise<ReservationResult> {
  // Simulated latency only — nothing is sent anywhere.
  await new Promise((resolve) => setTimeout(resolve, 500));

  // eslint-disable-next-line no-console
  console.info("[demo] Reservation request captured locally (not transmitted):", payload);

  return { ok: true, demo: true };
}
