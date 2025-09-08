import { Resend } from 'resend';

const ContactSchemaPlaceholder = null; // validation should be Zod on server

export default function ContactPage(){
  async function send(formData: FormData){
    'use server';
    const data = Object.fromEntries(formData.entries());
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'TP Helka <contact@tphelka.club>',
      to: [String(data.email)],
      subject: `Merci ${String(data.name)}`,
      html: `<p>${String(data.message)}</p>`
    });
    return { ok: true };
  }

  return (
    <form action={send} className="max-w-lg space-y-3">
      <h1 className="text-2xl font-bold">Contact</h1>
      <input name="name" className="input" placeholder="Votre nom" required />
      <input name="email" type="email" className="input" placeholder="Votre email" required />
      <textarea name="message" className="input h-40" placeholder="Votre message" required />
      <button className="rounded-2xl bg-brand px-5 py-2 text-white">Envoyer</button>
    </form>
  );
}
