"use client";

import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function EmailInput() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);

  const onSubmitHandler = handleSubmit((formData) => {
    if (form.current) {
      setIsSending(true);

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
        )
        .finally(() => {
          setIsSending(false);
        });
    }
  });

  const fieldInputClassName =
    "w-full rounded-md border border-zinc-200 p-2 focus:outline-none dark:border-zinc-800";

  return (
    <form ref={form} onSubmit={onSubmitHandler}>
      <div className="grid-cols-2 gap-4 md:grid">
        <div className="mb-4">
          <label className="mb-1 block" htmlFor="name">
            Name
          </label>
          <input
            className={fieldInputClassName}
            id="name"
            type="text"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <p role="alert" className="text-red-500">
              *Name is required
            </p>
          )}
        </div>
        <div className="mb-4">
          <label className="mb-1 block" htmlFor="email">
            Email
          </label>
          <input
            className={fieldInputClassName}
            id="email"
            type="email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <p role="alert" className="text-red-500">
              *Email is required
            </p>
          )}
        </div>
      </div>
      <div className="mb-4">
        <label className="mb-1 block" htmlFor="subject">
          Subject
        </label>
        <input
          className={fieldInputClassName}
          id="subject"
          type="text"
          {...register("subject", { required: true })}
        />
        {errors.subject && (
          <p role="alert" className="text-red-500">
            *Subject is required
          </p>
        )}
      </div>
      <div className="mb-4">
        <label className="mb-1 block" htmlFor="message">
          Message
        </label>
        <textarea
          className={`min-h-28 ${fieldInputClassName}`}
          id="message"
          {...register("message", { required: true })}
        ></textarea>
        {errors.message && (
          <p role="alert" className="text-red-500">
            *Message is required
          </p>
        )}
      </div>
      <button
        className="w-full rounded-md bg-gradient-to-r from-emerald-200 to-cyan-400 px-4 py-3 font-bold text-white hover:from-emerald-300 hover:to-cyan-500 dark:from-emerald-300 dark:to-cyan-500 dark:text-zinc-950 dark:hover:from-emerald-200 dark:hover:to-cyan-400"
        type="submit"
        disabled={isSending || isSubmitting}
      >
        {isSending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
