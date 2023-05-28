import { useSelector, useDispatch } from "react-redux";
const MainPage = () => {
  const counter = useSelector((state) => state.counter);
  const auth = useSelector((state) => state.auth);
  debugger;
  return (
    <>
      <div className="content">
        <h1>Main Page</h1>
      </div>
    </>
  );
};

export default MainPage;
