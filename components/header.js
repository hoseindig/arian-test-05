import Link from "next/link";
const Header = () => {
  return (
    <>
      <div className="header-layout">
        <h1>Header</h1>
        <Link href="\">
          <span>home</span>
        </Link>{" "}
        |{" "}
        <Link href="about">
          <span>about</span>{" "}
        </Link>
        |{" "}
        <Link href="login">
          <span>login</span>{" "}
        </Link>
      </div>
    </>
  );
};

export default Header;
