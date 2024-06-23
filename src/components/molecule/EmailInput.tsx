"use client";

import { useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";

export const EmailInput = () => {
  const form = useRef<HTMLFormElement>(null);

  const onSubmitHandler = (event: FormEvent) => {
    event.preventDefault();

    if (form.current) {
      emailjs
        .sendForm("service_bgzlljs", "template_1586lee", form.current, {
          publicKey: "RjP6YTZ4yUUcE9-Xl",
        })
        .then(
          () => {
            alert("Message sent successfully");
          },
          (error) => {
            alert(`Failed to send message, with error: ${error}`);
          },
        );
    }
  };

  return (
    <>
      <form ref={form} onSubmit={onSubmitHandler}>
        <div className="grid-cols-2 gap-4 md:grid">
          <div className="mb-4">
            <label className="mb-1 block" htmlFor="name">
              Name
            </label>
            <input
              className="w-full rounded-md border border-zinc-200 p-2 focus:outline-none dark:border-zinc-800"
              id="name"
              type="text"
              name="name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="mb-1 block" htmlFor="email">
              Email
            </label>
            <input
              className="w-full rounded-md border border-zinc-200 p-2 focus:outline-none dark:border-zinc-800"
              id="email"
              type="email"
              name="email"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="mb-1 block" htmlFor="subject">
            Subject
          </label>
          <input
            className="w-full rounded-md border border-zinc-200 p-2 focus:outline-none dark:border-zinc-800"
            id="subject"
            type="text"
            name="subject"
            required
          />
        </div>
        <div className="mb-4">
          <label className="mb-1 block" htmlFor="message">
            Message
          </label>
          <textarea
            className="min-h-28 w-full rounded-md border border-zinc-200 p-2 focus:outline-none dark:border-zinc-800"
            id="message"
            name="message"
            required
          ></textarea>
        </div>
        <button
          className="w-full rounded-md bg-gradient-to-r from-emerald-200 to-cyan-400 px-4 py-3 font-bold text-white hover:from-emerald-300 hover:to-cyan-500 dark:from-emerald-300 dark:to-cyan-500 dark:text-zinc-950 dark:hover:from-emerald-200 dark:hover:to-cyan-400"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </>
  );
};
