import Footer from "@/components/footer";
import Head from "next/head";
const Login = () => {
  return (
    <div className="content">
      <Head>
        <title>Login</title>
        <meta name="description" content="my login page"></meta>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <h1>login</h1>
    </div>
  );
};

export default Login;

Login.getLayout = (page) => {
  return (
    <>
      {page}
      <Footer></Footer>
    </>
  );
};
