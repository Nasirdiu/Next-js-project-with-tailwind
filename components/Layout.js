import Head from "next/head";
import React from "react";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import Slider from "./Slider/Slider";
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Next Project</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <header>
          <Navbar></Navbar>
        </header>
        <div className="mt-2">
          <main>
            {children}
            <Slider />
          </main>
        </div>
        <footer>
          <Footer/>
        </footer>
      </div>
    </>
  );
};

export default Layout;
