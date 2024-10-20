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
  const [userId, setUserId] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    amount: "",
  });

  useEffect(() => {
    const initializeSDK = async () => {
      try {
        const sdk = await load({ mode: "sandbox" });
        setCashfree(sdk);
      } catch (error) {
        console.error("Failed to load Cashfree SDK", error);
      }
    };
    initializeSDK();
  }, []);

  const handlePayment = async (e) => {
    e.preventDefault();
  
    if (formData.amount <= 0) {
      alert("Donation amount must be greater than 0");
      return;
    }
  
    try {
      // Save user data and create payment session
      const saveResponse = await axios.post("http://localhost:8000/api/save", formData);
      if (saveResponse.status !== 201) {
        alert("Failed to save user data");
        return;
      }
      
      const { user, paymentSession } = saveResponse.data;
      setUserId(user._id);
      setOrderId(user.orderId);

      if (cashfree && paymentSession.payment_session_id) {
        const checkoutOptions = {
          paymentSessionId: paymentSession.payment_session_id,
          redirectTarget: "_modal",
        };
  
        // Initialize Cashfree checkout
        cashfree.checkout(checkoutOptions).then(() => {
          console.log("Payment initialized");
          verifyPayment(user.orderId);
        }).catch(error => {
          console.error("Payment initialization failed", error);
        });
      }
    } catch (error) {
      console.error("Error during payment process:", error);
    }
  };

  const verifyPayment = async (orderId) => {
    try {
      const res = await axios.post("http://localhost:8000/api/verify-payment", { orderId });
      if (res && res.data) {
        if (res.data.status === 'SUCCESS') {
          alert("Payment successful!");
        } else if (res.data.status === 'PENDING') {
          alert("Payment is still pending. Please check again later.");
        } else {
          alert("Payment failed. Please try again.");
        }
      } else {
        alert("Payment verification failed!");
      }
    } catch (error) {
      console.error("Payment verification failed:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCancel = () => {
    setFormData({ name: "", phone: "", email: "", amount: "" });
    setIsModalOpen(false);
  };

  return (
    <div className="py-40 flex items-center justify-center">
      <Modal open={isModalOpen} onOpenChange={setIsModalOpen}>
        <ModalTrigger
          className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn fixed bottom-4 right-4 z-50"
          onClick={() => setIsModalOpen(true)}
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
