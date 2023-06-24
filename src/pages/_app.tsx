import '@/pages/globals.css';
import 'animate.css';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { AppProps } from "next/app";

// This default export is required in a new `pages/_app.js` file.
const MyApp = ({ Component, pageProps }:AppProps) => {
  
  return (
    <>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </>
  ) 
}

export default MyApp;