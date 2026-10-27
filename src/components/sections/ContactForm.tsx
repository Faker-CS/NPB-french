"use client";

import { useState, type FormEvent } from "react";
import { Checkbox, TextArea, TextField } from "@/components/ui/FormFields";
import { PillButton } from "@/components/ui/PillButton";

type ContactFormProps = {
  fields: {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    postalCode: string;
    message: string;
  };
  consent: string;
  submit: string;
  success: string;
};

/*
 * Enquiry form (Figma "Frame 2147225497", 31:4357, 616 × 654): white 5 % glass with a 175.8 background blur
 * (→ 87.9 px), radius 8, padding 16, rows 20 px apart: first + last name (284 px each), phone, email,
 * postal code, message (142 px), consent, then "SEND MY REQUEST" right-aligned.
 * No backend (PROGRESS.md, D16): native validation, then the form resets and a polite status confirms.
 */
export function ContactForm({ fields, consent, submit, success }: ContactFormProps) {
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.currentTarget.reset();
    setSent(true);
  };

  return (
    <form
      onSubmit={onSubmit}
      onChange={() => setSent(false)}
      aria-label="Formulaire de demande"
      className="flex w-full flex-col gap-5 rounded-button p-4 backdrop-blur-form-panel"
    >
      <div className="flex flex-col items-end gap-5">
        <div className="grid w-full gap-5 sm:grid-cols-2 sm:gap-4">
          <TextField label={fields.firstName} name="prenom" autoComplete="given-name" required />
          <TextField label={fields.lastName} name="nom" autoComplete="family-name" required />
        </div>
        <TextField label={fields.phone} name="telephone" type="tel" autoComplete="tel" required className="w-full" />
        <TextField label={fields.email} name="email" type="email" autoComplete="email" required className="w-full" />
        <TextField
          label={fields.postalCode}
          name="code-postal"
          inputMode="numeric"
          pattern="[0-9]{5}"
          title="Code postal à 5 chiffres"
          autoComplete="postal-code"
          required
          className="w-full"
        />
        <TextArea label={fields.message} name="message" className="w-full" />
      </div>

      <Checkbox name="consentement" required>
        {consent}
      </Checkbox>

      <div className="flex flex-col items-end gap-2 px-4 py-2">
        <PillButton type="submit" variant="signal">
          {submit}
        </PillButton>
        <p role="status" className="font-medium text-snow empty:hidden">
          {sent ? success : ""}
        </p>
      </div>
    </form>
  );
}
