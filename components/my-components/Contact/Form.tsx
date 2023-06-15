"use client";
import React, { FormEvent, ReactElement } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Props {}

export default function Form({}: Props): ReactElement {
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
              className="p-2.5 w-full placeholder:text-gray-500/50 focus:outline-transparent border-gray-500/70 focus:border-black border rounded-lg"
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
              className="p-2.5 w-full  placeholder:text-gray-500/50 focus:outline-transparent border-gray-500/70 focus:border-black border rounded-lg"
              type="text"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block font-bold">
              Message
            </label>
            <textarea
              rows={7}
              placeholder="Message"
              name="message"
              className="p-2.5 w-full h-full  placeholder:text-gray-500/50 focus:outline-transparent border-gray-500/70 focus:border-black border rounded-lg"
              id="message"
            />
          </div>
        </div>{" "}
        <div className="text-center">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 rounded-md active:scale-95 cursor-pointer hover:bg-blue-400 transition-all duration-150"
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
    try {
      const usersCollectionRef = await collection(db, "users");
      await addDoc(usersCollectionRef, {
        userName: name,
        email,
        message,
      });

      toast.success(
        ` Thank you for contacting me!
      I have received your message and will get back to you shortly.`,
        {
          position: "top-right",
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
        position: "top-right",
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
