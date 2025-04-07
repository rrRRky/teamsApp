"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import TeamsApp from "@/app/approvals/teamsdata"
export default function HomePage() {
  const [greeting, setGreeting] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good Morning");
    else if (hour < 18) setGreeting("Good Afternoon");
    else setGreeting("Good Evening");
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex flex-1">
        {sidebarOpen && <Sidebar />}
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-4">{greeting}, Rakesh!</h1>
          <p>Welcome to your dashboard. You can access approval tasks and other tools here.</p>
          <div><TeamsApp/></div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
