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
              className="w-full rounded-md border p-2"
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
              className="dark:bg-dark w-full rounded-md border p-2"
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
            className="dark:bg-dark w-full rounded-md border p-2"
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
            className="dark:bg-dark min-h-28 w-full rounded-md border p-2"
            id="message"
            name="message"
            required
          ></textarea>
        </div>
        <button
          className="w-full rounded-md bg-gradient-to-r from-lime-200 to-teal-400 p-2 text-center text-white dark:text-slate-950"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </>
  );
};
