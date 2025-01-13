'use client';
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Main from "./components/main";
import { useEffect } from "react";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  
  const styles = {
    opacity: "1",
    zIndex: "0"
  }
  return (
    <html lang="en">
      <head>
        {/* <!-- SEO Optimization -->
        <!-- Update Content Attributes --> */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Simon Blamo" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="rating" content="safe for kids" />
        <meta name="revised" content="Friday, January 12th, 2023, 10:36 PM" />

        {/* <!-- Open Graph Protocol -->
        <!-- If you wish to share this webpage on social media, uncomment this HTML Section, and update the content attributes --> */}

        <meta property="og:title" content="It's me, Simon." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.simonblamo" />
        <meta
          property="og:description"
          content="This is Simon Blamo's personal website. Displays info about young developer and his projects that he developed over his career."
        />
        <meta property="og:image" content="images/project3.png" />

        {/* <!-- Icons --> */}
        <link rel="icon" type="image/x-icon" href="icons/titleIcon.ico" />

        {/* <!-- Include your CSS files here --> */}
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap"
          rel="stylesheet"
        />
      
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link
          href="https://fonts.googleapis.com/css2?family=Prompt:wght@300&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-8 sm:p-10 overflow-x-hidden h-[100svh]`}
        style={styles}
      >
        <Navbar />
        <Main>
          {children}
        </Main>
        <Footer/>
      </body>
    </html>
  );
}
