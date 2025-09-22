"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BsFillSendFill } from "react-icons/bs";
import { PrimaryText, SecondaryText, TertiaryText } from "./texts";

import Input from "./input";
import Button from "./button";
import Textarea from "./textarea";
import DesignSVG from "./assets/DesignSVG";
import AnimatedSignature from "./animated-signature";

export const ContactForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setData({
      ...data,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xwpreael", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
        setData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrors({
        ...errors,
        submit: "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center p-8 border border-primary/10 rounded-lg">
        <h3 className="text-xl text-tertiary mb-2">Thank you for your message!</h3>
        <p>I Will get back to you soon.</p>
      </div>
    );
  }

  return (
    <>
      <div className="mt-5 p-2 w-full h-full min-h-full max-h-[335px] border border-primary/10 overflow-hidden md:mt-0">
        {Object.keys(data).some((key) => data[key].trim() !== "") ? (
          <div className="w-full h-full flex flex-col gap-3 text-sm overflow-y-auto">
            {/* Sender Address */}
            <div className="w-fit ml-auto">
              <PrimaryText>{data.name}</PrimaryText>
              <PrimaryText>{data.email}</PrimaryText>
              <PrimaryText>{new Date().toLocaleDateString()}</PrimaryText>
            </div>

            {/* Subject */}
            <div>
              <TertiaryText className="mx-auto underline font-bold w-fit">
                {data.subject.toUpperCase() || "No Subject..."}
              </TertiaryText>
            </div>

            {/* Message */}
            <div className="my-3">
              <PrimaryText className="">
                {data.message || "No Message..."}
              </PrimaryText>
            </div>

            {/* Sign */}
            <div className="w-fit mr-auto">
              <div className="max-h-[40px] max-w-[40%]">
                <AnimatedSignature />
              </div>
              <hr />
              <PrimaryText>{data.name}</PrimaryText>
              <PrimaryText>{data.email}</PrimaryText>
              {/* <PrimaryText>{new Date().toLocaleDateString()}</PrimaryText> */}
            </div>
          </div>
        ) : (
          <div className="w-full h-full flex justify-center items-center">
            <motion.div
              className="w-38 h-38"
              animate={{
                rotate: [0, 180, 360], // Flipping rotation
                scale: [1, 1.2, 1], // Scaling effect
                opacity: [1, 0.8, 1], // Subtle fade effect
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              <DesignSVG />
            </motion.div>
          </div>
        )}
      </div>

      <form
        onSubmit={handleSubmit}
        className={`mt-10 grid grid-cols-1 gap-3 md:grid-cols-[1fr_3fr] md:mt-0`}
      >
        <div className="hidden md:block"></div>
        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-2 gap-3">
            <Input
              type="text"
              name="name"
              placeholder="Name"
              label="Name"
              value={data.name}
              error={errors.name}
              onChange={handleChange}
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Email"
              label="Email"
              value={data.email}
              error={errors.email}
              onChange={handleChange}
              required
            />
          </div>

          <Input
            type="text"
            name="subject"
            placeholder="Subject"
            label="Subject"
            value={data.subject}
            error={errors.subject}
            onChange={handleChange}
            required
          />

          <Textarea
            type="text"
            name="message"
            placeholder="Message"
            label="Message"
            value={data.message}
            error={errors.message}
            onChange={handleChange}
            required
          />

          {errors.submit && (
            <div className="text-red-500 text-sm mt-2">{errors.submit}</div>
          )}

          <Button disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send"} <BsFillSendFill />
          </Button>
        </div>
      </form>
    </>
  );
};
