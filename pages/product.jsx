import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Product = ({ productList = [] }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulating an asynchronous API call
        const response = await fetch("/arian-pars-motor-code-challenge.json");
        const jsonData = await response.json();
        setProducts(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="content">
      <h1>Product</h1>
      {products.length}
    </div>
  );
};

export default Product;

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts"); //
  const data = await res.json();
  console.log(data.length);
  return { props: { productList: data } };
}
