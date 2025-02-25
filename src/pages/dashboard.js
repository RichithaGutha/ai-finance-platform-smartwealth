// pages/dashboard.js
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error || !data?.user) {
        router.push("/login"); // Redirect to login if not authenticated
      } else {
        setUser(data.user);
      }
    };

    checkUser();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login"); // Redirect to login after logout
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-lg w-full bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        {user ? (
          <div>
            <p className="mb-4">Welcome, {user.email}!</p>
            <button
              onClick={handleLogout}
              className="w-full bg-red-600 text-white p-2 rounded hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
