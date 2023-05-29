import Link from "next/link";
import { productActions } from "../../store/product";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Popup from "@/components/popup";

const Product = () => {
  const product = useSelector((state) => state.product);
  console.log("productEditList", product.productEditList);

  const productEditList = product.productEditList
    ? product.productEditList
    : [];
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);

  const [selected, setSelected] = useState({});
  const [showModal, setShowModal] = useState(false);
  const showEditBox = (p) => {
    setSelected(p);
    setShowModal((old) => true);
  };
  const modalCloseHandler = (p) => {
    setSelected({});
    setShowModal((old) => false);
  };
  const modalPassData = (p) => {
    console.log(p);
    dispatch(productActions.setEditProductData(p));
  };

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
      <p> {products.length}</p>
      {/* <p>{productList && productList.length}</p> */}
      {/* <p>{showModal ? "showModal" : "hideModal"}</p> */}

      {showModal && (
        <Popup
          showModal={true}
          modalClose={modalCloseHandler}
          CurentItem={selected}
          header="Item Edit"
          onSaveData={modalPassData}
        />
      )}

      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="flex items-center justify-center border border-gray-300">
          <h4 className="p-2">Main List</h4>

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
              {products.map((item, index) => {
                return (
                  <tr className="item" key={index}>
                    <td className="py-2 px-4">{item.name}</td>
                    <td className="py-2 px-4">{item.params.cylinders}</td>
                    <td className="py-2 px-4">{item.params.volume}</td>
                    <td className="py-2 px-4" onClick={() => showEditBox(item)}>
                      {/* <Link href={`/product/${i.id}`}>Edit</Link> */}
                      Edit
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <hr />
          <h4 className="p-2">Edited</h4>
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
              {productEditList &&
                productEditList.map((item, index) => {
                  return (
                    <tr className="item" key={index}>
                      <td className="py-2 px-4">{item.name}</td>
                      <td className="py-2 px-4">{item.params.cylinders}</td>
                      <td className="py-2 px-4">{item.params.volume}</td>
                      {/* <td
                        className="py-2 px-4"
                        onClick={() => showEditBox(item)}
                      >
                        <Link href={`/product/${i.id}`}>Edit</Link>
                        Edit
                      </td> */}
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
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
