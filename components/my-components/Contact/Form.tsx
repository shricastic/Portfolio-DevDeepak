"use client";
import React, { FormEvent, ReactElement, useEffect, useState } from "react";
import { db, auth } from "@/lib/firebase";
import { signInAnonymously } from "firebase/auth";

import { Timestamp, doc, setDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Props {}

export default function Form({}: Props): ReactElement {
  const [userId, setUserId] = useState("");
  useEffect(() => {
    async function run() {
      try {
        const user = await signInAnonymously(auth);
        setUserId(user.user.uid);
      } catch (e) {
        console.log(e);
      }
    }
    run();
  }, []);
  return (
    <div className="text-black ">
      <ToastContainer></ToastContainer>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4 mb-4">
          <div>
            <label htmlFor="name" className="block font-bold">
              Your Name
            </label>
            <input
              placeholder="Your name"
              className="p-2.5 w-full placeholder:text-gray-500/50  border-gray-500/70 focus:border-black border rounded-lg"
              type="text"
              name="name"
              id="name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-bold">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              placeholder="Email"
              required
              name="email"
              className="p-2.5 w-full  placeholder:text-gray-500/50  border-gray-500/70 focus:border-black border rounded-lg"
              type="text"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block font-bold">
              Message
            </label>
            <textarea
              rows={8}
              placeholder="Message"
              name="message"
              className="p-2.5 w-full h-full  placeholder:text-gray-500/50  border-gray-500/70 focus:border-black border rounded-lg"
              id="message"
            />
          </div>
        </div>{" "}
        <div className="text-center">
          <button
            type="submit"
            className="px-4 py-2 font-bold text-white tracking-wide bg-blue-600 rounded-md active:scale-95 cursor-pointer hover:bg-blue-700 transition-all duration-150"
          >
            Lets Collaborate
          </button>
        </div>
      </form>
    </div>
  );
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); // Prevents the form from submitting normally

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    // Access form data using the 'name' attribute of the input fields
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message", message);
    console.log(userId);
    try {
      const usersCollectionRef = await doc(db, "users", userId);
      await setDoc(usersCollectionRef, {
        userName: name,
        email,
        message,
        created_at: Timestamp.fromDate(new Date()),
      });

      toast.success(
        `Thank you for contacting me!  \nI have received your message and will get back to you shortly.`,
        {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
    } catch (e) {
      toast.error("Oops something went wrong", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      console.log(e);
    }

    // Reset the form after processing the data
    form.reset();
  }
}
