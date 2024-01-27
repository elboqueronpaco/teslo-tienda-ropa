import { Title } from "@/components";
import { ListProducts } from "@/components/products";
import { Gender } from "@/interfaces";
import { initialData } from "@/seed";

interface Props{
    params: {
        gender: Gender
    }
}
const seedProduct = initialData.products
export default function ProductsPage({params}: Props) {
    const {gender} = params
    const products = seedProduct.filter(product => product.gender === gender)
    const labels: Record<Gender, string> = {
        'men': 'para hombres',
        'women': 'para mujeres',
        'kid': 'para niños',
        'unisex': 'para todos',
    }
  return (
    <>
      <Title title={`Articulos de ${labels[gender]}`} subTitle="Todos los productos"/>
      <ListProducts products={products}/>
    </>
  );
}