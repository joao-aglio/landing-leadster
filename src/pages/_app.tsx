import '@/pages/globals.css';
import 'animate.css';
import type { AppProps } from "next/app";
import { Provider } from 'react-redux';
import store from '../redux/store';
// This default export is required in a new `pages/_app.js` file.
const MyApp = ({ Component, pageProps }: AppProps) => {

  return (
    <>
      <Provider store={store}>
        
        <Component {...pageProps} />
        
      </Provider>
    </>
  )
}

export default MyApp;