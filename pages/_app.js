import Footer from "@/components/footer";
import Header from "@/components/header";
import "@/styles/globals.css";

import "@/styles/layout.scss";
export default function App({ Component, pageProps }) {
  if (Component.getLayout)
    return Component.getLayout(<Component {...pageProps} />);
  return (
    <>
      <Header></Header>
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  );
}
