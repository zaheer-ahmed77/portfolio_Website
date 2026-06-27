"use client";
import React, { useState } from "react";
import EmailSuccess from "@/components/cards/EmailSuccess";
import Icon from "../ui/Icon";
import User from "@/data/user.json";
interface ErrorInterface {
  nameError: boolean;
  emailError: boolean;
  emailErrorMessage: string;
  messageError: boolean;
}

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<ErrorInterface>({ nameError: false, emailError: false, emailErrorMessage: "", messageError: false });
  const [isSucess, setIsSucess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const userFirstName = User.name?.split(" ")[0];

  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim()) {
      setError((prev) => ({ ...prev, nameError: true }));
      return;
    }
    if (!email.trim()) {
      setError((prev) => ({ ...prev, emailError: true, emailErrorMessage: "This Field is required" }));
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError((prev) => ({ ...prev, emailError: true, emailErrorMessage: "Please enter a valid email address" }));
      return;
    }
    if (!message.trim()) {
      setError((prev) => ({ ...prev, messageError: true }));
      return;
    }

    setIsSubmitting(true);
    fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Something wrong happened!");
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setEmail("");
        setName("");
        setMessage("");
        setIsSucess(true);
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.log(error);
        setIsSubmitting(false);
      })
      .finally(() => {
        setTimeout(() => setIsSucess(false), 10000);
      });
  };

  return (
    <section
      className="min-w-dvw bg-white text-[#0f172a] dark:bg-[#0a0f1d] dark:text-[#f8f8f8] md:p-16 sm:p-8 p-6 pb-12 relative overflow-hidden"
      id="contact"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-violet-900/10 to-transparent -z-10 dark:block hidden"></div>
      <h2 className="text-4xl font-bold gradient-text inline-block">
        <u> Get </u>In Touch
      </h2>
      <div className="mt-14 grid sm:grid-flow-col items-start sm:col-span-2 gap-12">
        <div className="flex-1">
          <h3 className="text-2xl font-semibold">Contact Information</h3>

          <div className="flex items-start mt-6 space-x-4">
            <div className="pt-1">
              <Icon icon="ic:outline-email" className="w-7 h-7" />
            </div>

            <div className="flex flex-col">
              <p className="text-lg font-medium">Email</p>
              <p>{User.contact.email}</p>
            </div>
          </div>

          <div className="flex items-start mt-6 space-x-4">
            <div className="pt-1">
              <Icon icon="tabler:phone" className="w-7 h-7" />
            </div>

            <div className="flex flex-col">
              <p className="text-lg font-medium">Phone</p>
              <p>{User.contact.phone}</p>
            </div>
          </div>

          <div className="flex items-start mt-6 space-x-4">
            <div className="pt-1">
              <Icon icon="tdesign:location" className="w-7 h-7" />
            </div>

            <div className="flex flex-col">
              <p className="text-lg font-medium">Location</p>
              <p>{User.location}</p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold">Connect With Me</h3>
            <div className="flex mt-4 space-x-4">
              <a
                href={User.social.github.url}
                rel="noopener noreferrer"
                aria-label={`Visit ${User.name}'s Github profile`}
                target="_blank"
                className="p-3 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white rounded-full shadow-sm dark:shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:shadow-md dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]"
              >
                <Icon icon="lucide:github" className="w-5 h-5" />
              </a>
              <a
                href={User.social.linkedin}
                rel="noopener noreferrer"
                aria-label={`Visit ${User.name}'s Linkedin profile`}
                target="_blank"
                className="p-3 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-blue-500 dark:text-blue-400 rounded-full shadow-sm dark:shadow-[0_0_10px_rgba(96,165,250,0.1)] hover:shadow-md dark:hover:shadow-[0_0_15px_rgba(96,165,250,0.4)]"
              >
                <Icon icon="meteor-icons:linkedin" className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={(e) => formSubmit(e)} className="flex-1 sm:p-4 p-2 sm:pt-0 pl-0 pt-0">
          <h3 className="text-2xl font-semibold">Send Me a Message</h3>
          {isSucess && <EmailSuccess />}
          <div className="flex flex-col space-y-5 mt-6">
            <div>
              <label className="text-sm font-medium text-gray-300" htmlFor="name">
                Your Name
              </label>
              {error.nameError && <p className="text-red-400 my-1 text-sm flex">This field is required</p>}
              <input
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (error.nameError) setError((prev) => ({ ...prev, nameError: false }));
                }}
                className={`w-full bg-gray-100 dark:bg-[#1e293b]/50 backdrop-blur-sm py-3 px-4 mt-1 rounded-lg border placeholder:text-gray-500 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all ${error.nameError ? "border-red-500" : "border-gray-200 dark:border-white/10"}`}
                placeholder="Name"
                id="name"
                autoComplete="name"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-300" htmlFor="email">
                Your Email
              </label>
              {error.emailError && <p className="text-red-400 my-1 text-sm flex">{error.emailErrorMessage}</p>}
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error.emailError) setError((prev) => ({ ...prev, emailError: false }));
                }}
                className={`w-full py-3 bg-gray-100 dark:bg-[#1e293b]/50 backdrop-blur-sm px-4 mt-1 rounded-lg border placeholder:text-gray-500 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all ${error.emailError ? "border-red-500" : "border-gray-200 dark:border-white/10"}`}
                placeholder="Example@gmail.com"
                id="email"
                autoComplete="email"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-300" htmlFor="message">
                Your Message
              </label>
              {error.messageError && <p className="text-red-400 my-1 text-sm flex">This field is required</p>}
              <textarea
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  if (error.messageError) setError((prev) => ({ ...prev, messageError: false }));
                }}
                className={`w-full bg-gray-100 dark:bg-[#1e293b]/50 backdrop-blur-sm mt-1 py-3 px-4 rounded-lg border placeholder:text-gray-500 text-gray-900 dark:text-white resize-none min-h-[120px] focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all ${error.messageError ? "border-red-500" : "border-gray-200 dark:border-white/10"}`}
                placeholder={`Hello ${userFirstName}, I'd like to discuss a project...`}
                id="message"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full active:scale-[0.98] hover:opacity-90 font-semibold bg-gradient-to-r from-blue-500 to-violet-600 text-white shadow-[0_0_20px_rgba(139,92,246,0.3)] py-3.5 rounded-lg flex items-center justify-center transition-all duration-300"
            >
              <Icon icon="lucide:send" className="h-5 w-5 mr-2" />

              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
