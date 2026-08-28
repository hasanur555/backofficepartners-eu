export const NOTIFY_EMAIL = "contact@backofficepartners.eu";

/**
 * Sends a notification of a form submission to the operations inbox.
 * Uses FormSubmit's AJAX endpoint so no backend is required.
 * (The very first submission triggers a one-time activation email
 * to the inbox above — confirm it once and all later submissions arrive directly.)
 */
export async function notifySubmission(
  subject: string,
  payload: Record<string, string>,
): Promise<boolean> {
  try {
    const res = await fetch(`https://formsubmit.co/ajax/${NOTIFY_EMAIL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ _subject: subject, _template: "table", ...payload }),
    });
    return res.ok;
  } catch {
    return false;
  }
}
