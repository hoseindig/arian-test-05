import Link from "next/link";
import { productActions } from "../../store/product";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Popup from "@/components/popup";

const Product = ({ productList = [] }) => {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulating an asynchronous API call
        const response = await fetch("/arian-pars-motor-code-challenge.json");
        const jsonData = await response.json();
        jsonData.forEach((element, i) => {
          element.id = i;
        });
        console.log(jsonData);
        setProducts(jsonData);
        dispatch(productActions.setProductData(jsonData));
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
      <Popup toggle={true} />

      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="flex items-center justify-center border border-gray-300">
          <table className="min-w-full divide-y divide-gray-200 bg-white ">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-2 px-4 text-left">Name</th>
                <th className="py-2 px-4 text-left">Cylinders</th>
                <th className="py-2 px-4 text-left">Volume</th>
                <th className="py-2 px-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 productItems">
              {products.map((i) => {
                return (
                  <tr className="item">
                    <td className="py-2 px-4">{i.name}</td>
                    <td className="py-2 px-4">{i.params.cylinders}</td>
                    <td className="py-2 px-4">{i.params.volume}</td>
                    <td className="py-2 px-4">
                      <Link href={`/product/${i.id}`}>Edit</Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* <div className="flex flex-wrap justify-center">
        {products.map((i) => {
          return (
            <div className="w-1/4 p-2">
              <div className=" mx-auto rounded overflow-hidden shadow-lg p-1">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{i.name}</div>
                  <p className="text-gray-700 text-base">{"description"}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div> */}
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
