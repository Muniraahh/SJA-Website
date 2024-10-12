"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { load } from "@cashfreepayments/cashfree-js";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "./ui/animated-modal";
import { motion } from "framer-motion";

export function AnimatedModalDemo() {
  const [cashfree, setCashfree] = useState(null);
  const [orderId, setOrderId] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // Track modal state
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    amount: "",
  });

  // Initialize Cashfree SDK
  useEffect(() => {
    const initializeSDK = async () => {
      try {
        const sdk = await load({ mode: "sandbox" }); // Switch to 'production' for live mode
        setCashfree(sdk);
      } catch (error) {
        console.error("Failed to load Cashfree SDK", error);
      }
    };
    initializeSDK();
  }, []);

  // Get Session ID from backend
  const getSessionId = async () => {
    try {
      const res = await axios.post("http://localhost:8000/payment", formData); // Use POST to send form data
      if (res.data && res.data.payment_session_id) {
        setOrderId(res.data.order_id);
        return res.data.payment_session_id;
      }
    } catch (error) {
      console.error("Error fetching session ID:", error);
    }
  };

  // Verify Payment
  const verifyPayment = async () => {
    try {
      const res = await axios.post("http://localhost:8000/verify", { orderId });
      if (res && res.data) {
        alert("Payment verified successfully!");
      } else {
        alert("Payment verification failed!");
      }
    } catch (error) {
      console.error("Payment verification failed:", error);
    }
  };

  // Handle Payment Process
  const handlePayment = async (e) => {
    e.preventDefault();

    // Validate form data
    if (formData.amount <= 0) {
      alert("Donation amount must be greater than 0");
      return;
    }

    try {
      const sessionId = await getSessionId(); // Fetch session ID from backend
      if (cashfree && sessionId) {
        const checkoutOptions = {
          paymentSessionId: sessionId,
          redirectTarget: "_modal",
        };

        // Initialize Cashfree checkout
        cashfree.checkout(checkoutOptions).then(() => {
          console.log("Payment initialized");
          // Move verification logic here if needed after payment completion
        }).catch(error => {
          console.error("Payment initialization failed", error);
        });
      }
    } catch (error) {
      console.error("Payment initialization failed:", error);
    }
  };

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle Cancel Button
  const handleCancel = () => {
    setFormData({ name: "", phone: "", email: "", amount: "" }); // Reset form
    setIsModalOpen(false); // Close modal
  };

  return (
    <div className="py-40 flex items-center justify-center">
      <Modal open={isModalOpen} onOpenChange={setIsModalOpen}>
        <ModalTrigger
          className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn fixed bottom-4 right-4 z-50"
          onClick={() => setIsModalOpen(true)} // Open modal
        >
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Donate Now
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            💸
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              Help us by donating now!
            </h4>

            <form className="space-y-4" onSubmit={handlePayment}>
              <div>
                <label className="block text-neutral-600 dark:text-neutral-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-2 w-full"
                  required
                />
              </div>

              <div>
                <label className="block text-neutral-600 dark:text-neutral-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-2 w-full"
                  required
                />
              </div>

              <div>
                <label className="block text-neutral-600 dark:text-neutral-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-2 w-full"
                  required
                />
              </div>

              <div>
                <label className="block text-neutral-600 dark:text-neutral-300 mb-2">
                  Donation Amount (₹)
                </label>
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-2 w-full"
                  required
                />
              </div>

              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28"
                >
                  Donate Now
                </button>
              </div>
            </form>
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
}
