import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-gray-600 text-white py-2 px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/Smart.png"
            alt="Smart Wealth Logo"
            width={50}
            height={50}
          />
          <span className="ml-2 text-lg font-bold">AI Finance Platform</span>
        </div>
        <div>
          <Link href="/login">
            <span className="text-white mx-2 cursor-pointer hover:underline">Login</span>
          </Link>
          <Link href="/signup">
            <span className="text-white mx-2 cursor-pointer hover:underline">Sign Up</span>
          </Link>
        </div>
      </nav>

      <div className="flex items-center justify-center flex-grow bg-cover bg-center h-screen" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
        <div className="bg-gray-200 bg-opacity-90 p-8 rounded-lg shadow-lg text-center w-full max-w-4xl h-full flex flex-col justify-center">
          <Image
            src="/Smart.png"
            alt="Smart Wealth Logo"
            width={220}
            height={150}
            className="mx-auto"
          />
          <h2 className="text-4xl font-bold mt-6">Welcome to AI Finance Platform</h2>
          <p className="mt-4 text-lg">Your one-stop solution for AI-driven financial insights.</p>
        </div>
      </div>

      <div className="py-16 bg-blue-200 text-center mt-16">
        <h3 className="text-3xl font-bold mb-8">Our Achievements</h3>
        <div className="flex justify-around">
          <div className="w-1/3 p-4">
            <h4 className="text-2xl font-semibold">4.8/5</h4>
            <p className="mt-2 text-gray-600">App Rating</p>
          </div>
          <div className="w-1/3 p-4">
            <h4 className="text-2xl font-semibold">1M+</h4>
            <p className="mt-2 text-gray-600">Downloads</p>
          </div>
          <div className="w-1/3 p-4">
            <h4 className="text-2xl font-semibold">$10B+</h4>
            <p className="mt-2 text-gray-600">Transactions Tracked</p>
          </div>
        </div>
      </div>

      <div className="py-16 bg-gray-100 text-center mt-16">
        <h3 className="text-3xl font-bold mb-8">Features</h3>
        <div className="flex justify-around">
          <div className="w-1/3 p-4 flex flex-col items-center">
            <Image src="/feature-1.png" alt="Feature 1" width={100} height={100} />
            <h4 className="text-xl font-semibold mt-4">Smart Receipt Scanner</h4>
            <p className="mt-2 text-gray-600 text-center">Extract data automatically from receipts using advanced AI technology.</p>
          </div>
          <div className="w-1/3 p-4 flex flex-col items-center">
            <Image src="/feature-2.jpg" alt="Feature 2" width={100} height={100} />
            <h4 className="text-xl font-semibold mt-4">Advanced Analytics</h4>
            <p className="mt-2 text-gray-600 text-center">Get detailed insights into your spending patterns with AI powered analytics.</p>
          </div>
          <div className="w-1/3 p-4 flex flex-col items-center">
            <Image src="/feature-3.png" alt="Feature 3" width={100} height={100} />
            <h4 className="text-xl font-semibold mt-4">Automated Insights</h4>
            <p className="mt-2 text-gray-600 text-center">Get automated financial insights and recommendations.</p>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white text-center">
        <h3 className="text-3xl font-bold mb-8">What Our Users Say</h3>
        <div className="flex justify-around">
          <div className="w-1/3 p-4">
            <p className="text-gray-600">"This platform has transformed my financial planning!"</p>
            <p className="mt-4 font-semibold">- Sushmitha</p>
          </div>
          <div className="w-1/3 p-4">
            <p className="text-gray-600">"Incredible insights and easy to use."</p>
            <p className="mt-4 font-semibold">- Ruchitha</p>
          </div>
          <div className="w-1/3 p-4">
            <p className="text-gray-600">"Highly recommend to anyone looking for financial advice."</p>
            <p className="mt-4 font-semibold">- Neha</p>
          </div>
        </div>
      </div>

      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; 2025 AI Finance Platform. All rights reserved.</p>
        <div className="mt-2">
          <Link href="/about">
            <span className="text-blue-400 hover:underline mx-2">About</span>
          </Link>
          <Link href="/contact">
            <span className="text-blue-400 hover:underline mx-2">Contact</span>
          </Link>
        </div>
      </footer>
    </div>
  );
}