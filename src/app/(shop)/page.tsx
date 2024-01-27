
import { Title } from "@/components";
import { ListProducts } from "@/components/products/ListProducts";
import { initialData } from "@/seed";
import Image from "next/image";

const products = initialData.products
export default function Home() {
  return (
    <>
      <Title title="Tiendas de ropa" subTitle="Todos los productos..."/>
      <ListProducts products={products}/>
    </>
  );
}
