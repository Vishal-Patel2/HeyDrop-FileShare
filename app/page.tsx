"use client"

import { motion } from "framer-motion"
import CreateRoomButton from "@/components/CreateRoomButton"
import { useEffect, useState } from "react"

export default function HomePage() {
  // Define the type for the beforeinstallprompt event
  interface BeforeInstallPromptEvent extends Event {
    prompt: () => Promise<void>;
    userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
  }

  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [showInstall, setShowInstall] = useState(false)

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault()
      const event = e as BeforeInstallPromptEvent
      setDeferredPrompt(event)
      setShowInstall(true)
    }

    window.addEventListener("beforeinstallprompt", handler)
    return () => window.removeEventListener("beforeinstallprompt", handler)
  }, [])

  const installApp = async () => {
    if (!deferredPrompt) return
    deferredPrompt.prompt()
    const choice = await deferredPrompt.userChoice
    if (choice.outcome === "accepted") {
      console.log("App installed")
    }
    setDeferredPrompt(null)
    setShowInstall(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-white flex flex-col">
      {/* Header */}
      <nav className="w-full px-6 py-4 sticky top-0 bg-white/80 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-3"
          >
            <div className="md:w-10 md:h-10 w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg flex items-center justify-center shadow-md">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <h1 className="md:text-2xl text-xl font-extrabold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              HeyDrop
            </h1>
          </motion.div>

          {/* Ask Doubts Button */}
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            href="https://orooms.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center px-5 py-2.5 rounded-lg font-semibold text-white text-sm sm:text-base shadow-lg bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 transform hover:scale-105 transition-all duration-300 ease-out"
          >
            <span className="relative z-10">Ask Doubts</span>
            {/* Glow effect */}
            <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-orange-400 to-amber-400 opacity-40 blur-lg animate-pulse"></span>
          </motion.a>
        </div>
      </nav>


      {showInstall && (
        <button
          onClick={installApp}
          className="fixed bottom-4 right-4 bg-orange-600 text-white p-3 rounded-xl shadow-lg"
        >
          Install HeyDrop
        </button>
      )}

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 pt-20 flex-grow relative">
        <div className="text-center relative z-10">
          {/* Heading + Subtext */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="mb-10"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent drop-shadow-sm">
                Share Anything
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent animate-gradient-x">
                Instantly
              </span>
            </h1>

            <p className="mt-6 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Create temporary spaces to share files, text, and URLs with anyone.
             
              <span className="text-orange-600 font-semibold"> <br />
                No registration required.
              </span>
            </p>
          </motion.div>

          {/* Create Room Button with animations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="mb-24"
          >
            <div className="inline-block relative group">
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-500 rounded-xl blur-lg opacity-60 group-hover:opacity-80 transition duration-300"></div>

              {/* Your button */}
              <div className="relative z-10">
                <CreateRoomButton />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-orange-100 via-amber-100 to-transparent rounded-full blur-3xl opacity-40 animate-pulse"></div>
        </div>
      </main>


      {/* Features Section */}
      <section className="relative py-16 bg-gradient-to-br from-orange-50 via-white to-amber-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-10 sm:mb-12 bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent"
          >
            Why Choose <span className="text-orange-700">HeyDrop?</span>
          </motion.h2>

          {/* Features Grid */}
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Feature Card */}
            {[
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                ),
                title: "No Login Required",
                desc: "Start sharing instantly without creating an account. Privacy and simplicity first.",
                colors: "from-orange-400 to-amber-500"
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                ),
                title: "Auto-Delete in 24h",
                desc: "Shared files are automatically deleted after 24 hours, keeping your data secure.",
                colors: "from-amber-400 to-orange-500"
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342A3 3 0 118.684 9.66m0 3.682l6.632 3.316m-6.632-6l6.632-3.316a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684m0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                ),
                title: "Instant Sharing",
                desc: "Share files, text, and URLs instantly with a unique room link.",
                colors: "from-orange-500 to-amber-600"
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="p-6 sm:p-8 text-center bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-orange-100 flex flex-col items-center"
              >
                <div
                  className={`flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 mb-4 rounded-full bg-gradient-to-br ${feature.colors} text-white shadow-md`}
                >
                  <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    {feature.icon}
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 mt-3 text-sm sm:text-base">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-10 sm:mt-12 py-6 px-4 text-center text-gray-600 text-sm sm:text-base">
        © 2025 <span className="font-semibold">HeyDrop</span>. Made with <span className="text-red-500">♥</span> for the community.
        <br className="hidden sm:block" />
        Built with passion by{" "}
        <a
          href="https://www.linkedin.com/in/vishal-patel22/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-600 font-medium hover:underline"
        >
          HeyDrop Team (Vishal)
        </a>{" "}
        — your simple and secure file sharing platform, designed for every screen.
      </footer>

    </div>
  )
}
