import Image from "next/image";
import imgProd from "../../assets/1.png";

import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product";

export default function Product() {
  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={imgProd} alt="" />
      </ImageContainer>
      <ProductDetails>
        <h1>Camiseta Beyound the Limits</h1>
        <span>R$ 79,90</span>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, error veritatis, unde
          mollitia incidunt quisquam laudantium impedit consequuntur eveniet porro, iste
          perspiciatis. Vel minus, amet rem odit ab incidunt dicta.
        </p>
        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}
