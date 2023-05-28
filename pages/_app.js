import Footer from "@/components/footer";
import Header from "@/components/header";
import "@/styles/globals.css";

import "@/styles/layout.scss";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  if (Component.getLayout)
    return Component.getLayout(<Component {...pageProps} />);
  return (
    <>
      <Header></Header>
      <Component {...pageProps} />
      <Footer></Footer>
      <ToastContainer position="bottom-right" />
    </>
  );
}
