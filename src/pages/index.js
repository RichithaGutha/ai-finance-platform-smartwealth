import { CreditCardIcon, LightBulbIcon, SparklesIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export default function Home() {
  const [isInView, setIsInView] = useState(false);
  const robotRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      { threshold: 0.5 }
    );

    if (robotRef.current) {
      observer.observe(robotRef.current);
    }

    return () => {
      if (robotRef.current) {
        observer.unobserve(robotRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-blue-100 text-white py-4 px-6 flex justify-between items-center shadow-lg">
        <div className="flex items-center">
          <Image src="/Smart.png" alt="Smart Wealth Logo" width={120} height={120} />
          <span className="ml-3 text-3xl font-extrabold text-gray-900">AI Finance Platform</span>
        </div>
        <div>
          <Link href="/login" className="text-gray-900 mx-4 cursor-pointer hover:underline">Login</Link>
          <Link href="/signup" className="text-gray-900 mx-4 cursor-pointer hover:underline">Sign Up</Link>
        </div>
      </nav>

      {/* Welcome Message */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg text-center w-full max-w-4xl mt-8 mx-auto"
      >
        <h2 className="text-5xl font-extrabold text-gray-900">Welcome to AI Finance Platform</h2>
        <p className="mt-4 text-xl text-gray-700">Your one-stop solution for AI-driven financial insights.</p>
      </motion.div>

      {/* Robot Image */}
      <div className="bg-gray-100 py-8 text-center">
        <motion.div
          ref={robotRef}
          initial={{ scale: 1 }}
          animate={{ scale: isInView ? 1.1 : 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="flex justify-center items-center"
        >
          <Image src="/robot-finance.webp" alt="AI Finance Robot" width={1200} height={300} className="object-cover rounded-lg" />
        </motion.div>
      </div>

      {/* Achievements */}
      <section className="py-16 bg-blue-200 text-center">
        <h3 className="text-4xl font-bold mb-8 text-gray-900">Our Achievements</h3>
        <div className="flex flex-wrap justify-center gap-8 px-8">
          {[ 
            { value: "4.8/5", label: "App Rating" },
            { value: "1M+", label: "Downloads" },
            { value: "$10B+", label: "Transactions Tracked" },
          ].map(({ value, label }, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg w-64">
              <h4 className="text-3xl font-semibold text-gray-900">{value}</h4>
              <p className="mt-2 text-gray-600">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-16 bg-gray-100 text-center">
        <h3 className="text-4xl font-bold mb-8 text-gray-900">Platform Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
          {[ 
            { Icon: SparklesIcon, title: "Smart Budgeting", text: "Track your spending and set budget goals automatically." },
            { Icon: LightBulbIcon, title: "AI Insights", text: "Get personalized financial advice based on your data." },
            { Icon: CreditCardIcon, title: "Transaction Monitoring", text: "Stay updated with all your financial transactions in real-time." },
            { Icon: CreditCardIcon, title: "Multi Account Support", text: "Manage multiple accounts and credit cards at one place." },
          ].map(({ Icon, title, text }, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <Icon className="h-12 w-12 mx-auto text-blue-500" />
              <h4 className="text-2xl font-semibold mt-4">{title}</h4>
              <p className="mt-2 text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-100 text-center">
        <h3 className="text-4xl font-bold mb-8 text-gray-900">What Our Users Say</h3>
        <div className="flex flex-wrap justify-center gap-8 px-8">
          {[ 
            { text: "This platform has revolutionized my budgeting! Highly recommend.", name: "John D." },
            { text: "AI-driven insights helped me make better financial decisions.", name: "Sara K." },
            { text: "An amazing app that helped me save more money effortlessly!", name: "Mark W." },
          ].map(({ text, name }, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg w-64">
              <p className="text-xl text-gray-600">"{text}"</p>
              <p className="mt-4 font-semibold text-gray-900">{name}</p>
              <p className="text-gray-500">Loyal User</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; 2025 AI Finance Platform. All rights reserved.</p>
        <div className="mt-2">
          <Link href="/about" className="text-blue-400 hover:underline mx-2">About</Link>
          <Link href="/contact" className="text-blue-400 hover:underline mx-2">Contact</Link>
        </div>
      </footer>
    </div>
  );
}
