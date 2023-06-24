import '@/pages/globals.css';
import 'animate.css';
import Header from "@/components/semantic/Header";
import Footer from "@/components/semantic/Footer";
import type { AppProps } from "next/app";
import { Provider } from 'react-redux';
import store from '../redux/store';
// This default export is required in a new `pages/_app.js` file.
const MyApp = ({ Component, pageProps }:AppProps) => {
  
  return (
    <>
    <Provider store={store}>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </Provider>
    </>
  ) 
}

export default MyApp;