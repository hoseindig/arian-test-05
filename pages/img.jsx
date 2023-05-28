import Image from "next/image";

import img from "../public/6.jpg";
const ImagePage = () => {
  const imgList = ["1", "2", "3", "4", "5", "6", "7"];
  return (
    <div className="content">
      <h1>Image</h1>
      <Image
        placeholder="blur"
        blurDataURL=""
        src={img}
        alt=""
        width="450"
        height="470"
      />

      {imgList.map((path) => {
        return (
          <div key={path}>
            <Image src={`/${path}.jpg`} alt="" width="450" height="470" />
          </div>
        );
      })}
    </div>
  );
};

export default ImagePage;
