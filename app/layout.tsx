import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Header/Navbar";
import MessageSection from "@/components/Sections/MessageSecton";

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
      <head>
          <script>

    const iframe = document.createElement("iframe");

    const iframeStyles = (styleString) => {
      const style = document.createElement('style');
      style.textContent = styleString;
      document.head.append(style);
    }

    iframeStyles(`
        .chat-frame {
            position: fixed;
            bottom: 50px;
            right: 50px;
            border: none;
        }
    `)

    iframe.src = "https://deven-chatbot.vercel.app/chatbot"
    iframe.classList.add('chat-frame')
    document.body.appendChild(iframe)

    window.addEventListener("message", (e) => {
      if (e.origin !== "https://deven-chatbot.vercel.app") return null
      let dimensions = JSON.parse(e.data)
      iframe.width = dimensions.width
      iframe.height = dimensions.height
      iframe.contentWindow.postMessage("94ee4e80-1eb6-4907-8533-654467eed2af", "https://deven-chatbot.vercel.app/")
    })

  </script>
      </head>
      <body className="relative w-full overflow-x-hidden bg-[#F0F7FF] py-[30px] font-poppins flex flex-col items-center">
        <Navbar />
        {children}
        <MessageSection />
      </body>
    </html>
  );
}
