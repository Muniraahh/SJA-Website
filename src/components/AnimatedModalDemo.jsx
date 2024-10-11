"use client"; 
import React, { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "./ui/animated-modal";
import { motion } from "framer-motion";
import { FaCreditCard, FaPaypal, FaGooglePay, FaUniversity } from "react-icons/fa"; // Import icons

export function AnimatedModalDemo() {
  const [selectedMethod, setSelectedMethod] = useState(""); // Store selected payment method

  const images = [
    // Add your image links here
  ];

  const paymentMethods = [
    { label: "Credit/Debit Card", icon: <FaCreditCard /> },
    { label: "PayPal", icon: <FaPaypal /> },
    { label: "Google Pay", icon: <FaGooglePay /> },
    { label: "Bank Transfer", icon: <FaUniversity /> },
  ];

  return (
    <div className="py-40 flex items-center justify-center">
      <Modal>
        <ModalTrigger
          className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn fixed bottom-4 right-4 z-50"
        >
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Donate Now
          </span>
          <div
            className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20"
          >
            💸
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              Help us by donating now!
            </h4>
            <div className="flex justify-center items-center">
              {images.map((image, idx) => (
                <motion.div
                  key={"images" + idx}
                  style={{
                    rotate: Math.random() * 20 - 10,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  whileTap={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                >
                  <img
                    src={image}
                    alt="donation images"
                    width="500"
                    height="500"
                    className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                  />
                </motion.div>
              ))}
            </div>
            <div className="py-10 text-center">
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                Choose a payment method:
              </p>
              <select
                value={selectedMethod}
                onChange={(e) => setSelectedMethod(e.target.value)}
                className="border border-gray-300 rounded-md p-2 w-64 text-sm"
              >
                <option value="" disabled>
                  Select a payment method
                </option>
                {paymentMethods.map((method, idx) => (
                  <option key={idx} value={method.label}>
                    {method.label}
                  </option>
                ))}
              </select>
              <div className="mt-4 flex justify-center items-center space-x-4">
                {selectedMethod && (
                  <div className="flex items-center space-x-2">
                    {paymentMethods.find((m) => m.label === selectedMethod)?.icon}
                    <span className="text-neutral-600 dark:text-neutral-300 text-sm">
                      {selectedMethod}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </ModalContent>
          <ModalFooter className="gap-4">
            <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
              Cancel
            </button>
            <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
              Donate Now
            </button>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
}
