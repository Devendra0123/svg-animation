import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Header/Navbar";
import MessageSection from "@/components/Sections/MessageSecton";
import ChatBot from "@/components/Chatbot";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative w-full overflow-x-hidden bg-[#F0F7FF] py-[30px] font-poppins flex flex-col items-center">
        <Navbar />
        {children}
        <MessageSection />
        <ChatBot />
      </body>
    </html>
  );
}
