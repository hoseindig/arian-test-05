import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { authAction } from "../store/auth";
import { useRouter } from "next/router";

const Header = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  console.log(auth);
  const logOut = () => {
    dispatch(authAction.logout());
    router.push("/");
  };
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
        {!auth.isAuth && (
          <Link href="login">
            {!auth.isAuth && <span>login</span>}{" "}
            {auth.isAuth && (
              <span onClick={logOut}>logout ( {auth.username} ) </span>
            )}{" "}
          </Link>
        )}
        {auth.isAuth && (
          <Link href="product">
            <span>product</span>{" "}
          </Link>
        )}
        {auth.isAuth && (
          <p className="logout" onClick={logOut}>
            logout ( {auth.username} ){" "}
          </p>
        )}
      </div>
    </>
  );
};

export default Header;
