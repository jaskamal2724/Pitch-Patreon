import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";
// import Link from "next/Link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PitchPatron",
  description: "Crowd Funding App for Developers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        
            <SessionWrapper>
              <Navbar />
              <div className="min-h-[82vh] bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]">

                {children}
                
              </div>
              <Footer />
            </SessionWrapper>
          </body>
        </html>
        );
}
