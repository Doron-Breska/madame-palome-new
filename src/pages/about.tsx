import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
// import { json } from "stream/consumers";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [productsInfo, setProductsInfo] = useState([]);
  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((json) => setProductsInfo(json));
  }),
    [];

  return (
    <div style={{ background: "green" }}>
      <h1>products</h1>
      {productsInfo.length > 0 &&
        productsInfo.map((item: any) => {
          return <div key={item._id}>{item.name}</div>;
        })}
    </div>
  );
}
