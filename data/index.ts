/**
 * Beskriver en produkt som ska säljas på sidan.
 * OBS: Kan utökas men inte ändras pga cypress.
 **/
export interface Product {
  id: string;
  articleNumber: string;
  image: string;
  title: string;
  description: string;
  price: number;
}

export interface CartItem extends Product {
  quantity: number;
}

/* Lägg till era produkter här */
export const products: Product[] = [
    {
      id: "1",
      articleNumber: "123451",
      image: "URL",
      title: "Suna",
      description: "Suna 砂 – The Essence of Sand",
      price: 790,
    },
    {
      id: "2",
      articleNumber: "123452",
      image: "URL",
      title: "Aka",
      description: "Aka 赤 – The Essence of Red",
      price: 790,
    },
    {
      id: "3",
      articleNumber: "123453",
      image: "URL",
      title: "Kaze",
      description: "Kaze 風 – The Essence of the Wind",
      price: 790,
    },
    {
      id: "4",
      articleNumber: "123454",
      image: "URL",
      title: "Kaigan",
      description: "Kaigan 海岸  – The Essence of Coast",
      price: 790,
    },
    {
      id: "5",
      articleNumber: "123455",
      image: "URL",
      title: "Haru",
      description: "Haru 春 – The Essence of Spring",
      price: 790,
    },
    {
      id: "6",
      articleNumber: "123456",
      image: "URL",
      title: "Mori",
      description: "Mori 森 – The Essence of the Forest",
      price: 790,
    }
];
