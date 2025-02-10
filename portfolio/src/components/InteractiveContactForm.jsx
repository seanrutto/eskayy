// src/components/InteractiveContactForm.js
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const InteractiveContactForm = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Transition variants for animated steps
  const variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const handleNext = () => setStep((prev) => prev + 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you could send the enquiry to your backend/API
    console.log("Contact Form Submission:", { name, email, message });
    setStep(4);
  };

  return (
    <div className="max-w-md mx-auto p-6">
      {/* Optionally, a progress bar or step indicator */}
      <div className="mb-4 text-center">
        Step {step} of 4
      </div>
      <AnimatePresence exitBeforeEnter>
        {step === 1 && (
          <motion.div
            key="step1"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-4">Welcome!</h2>
            <p className="mb-4">What's your name?</p>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border p-2 w-full mb-4 rounded"
            />
            <button
              onClick={() => {
                if (name.trim() !== "") {
                  handleNext();
                }
              }}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
            >
              Next
            </button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-4">Hi {name}!</h2>
            <p className="mb-4">What's your email address?</p>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-2 w-full mb-4 rounded"
            />
            <button
              onClick={() => {
                if (email.trim() !== "") {
                  handleNext();
                }
              }}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
            >
              Next
            </button>
          </motion.div>
        )}

        {step === 3 && (
          <motion.form
            key="step3"
            onSubmit={handleSubmit}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-4">Thanks, {name}!</h2>
            <p className="mb-4">
              What enquiry or comments would you like to send us?
            </p>
            <textarea
              placeholder="Your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border p-2 w-full mb-4 rounded"
              rows="5"
            />
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
            >
              Submit
            </button>
          </motion.form>
        )}

        {step === 4 && (
          <motion.div
            key="step4"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
            <p>Your enquiry has been submitted. We'll get back to you soon.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InteractiveContactForm;
