import BeautifulTextbox from "@/components/MyInput";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";

const ProductInfo = () => {
  const product = useSelector((state) => state.product);
  const { productList } = product;
  const router = useRouter();
  const { pid } = router.query;
  const CurentItem = productList.find((x) => x.id == pid);
  return (
    <>
      <p>ProductInfo</p>
      {CurentItem && (
        <div className="flex items-center justify-center h-screen bg-gray-100">
          <BeautifulTextbox value={CurentItem.name} />
          <BeautifulTextbox value={CurentItem.params.cylinders} />
          <BeautifulTextbox value={CurentItem.params.volume} />
        </div>
      )}

      <div className="flex items-center justify-center">
        <button className="bg-blue-500 hover:bg-blue-600  font-semibold py-2 px-4 rounded-md mr-2">
          Save
        </button>
        <Link href="/product">
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded-md">
            Cancel
          </button>
        </Link>
      </div>
    </>
  );
};

export default ProductInfo;
