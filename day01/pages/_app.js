

import Navbarr from "@component/components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
import '@component/styles/globals.css'
import {sessionProvider, useSession} from 'next-auth/react';




export default function App({ Component, pageProps:{session, ...pageProps} }) {
 
  useEffect(()=>{
    import ('react-bootstrap/dist/react-bootstrap.min.js');
  },[])
  if(Component.getLayout){
    return Component.getLayout(<Component {...pageProps} />)
  }
  return (
  <>
 <Navbarr/>
  <Component {...pageProps} />;
  </>
  );
}
