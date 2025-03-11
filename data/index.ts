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
    image: "public/assets/herovideos/display-images/Suna - Display.png",
    title: "Suna",
    description: "Suna 砂 – The Essence of Sand",
    price: 790,
  },
  {
    id: "2",
    articleNumber: "123452",
    image: "public/assets/herovideos/display-images/Aka - Display.png",
    title: "Aka",
    description: "Aka 赤 – The Essence of Red",
    price: 790,
  },
  {
    id: "3",
    articleNumber: "123453",
    image: "public/assets/herovideos/display-images/Kaze - Display.png",
    title: "Kaze",
    description: "Kaze 風 – The Essence of the Wind",
    price: 790,
  },
  {
    id: "4",
    articleNumber: "123454",
    image: "public/assets/herovideos/display-images/Kaigan - Display.png",
    title: "Kaigan",
    description: "Kaigan 海岸  – The Essence of Coast",
    price: 790,
  },
  {
    id: "5",
    articleNumber: "123455",
    image: "public/assets/herovideos/display-images/Haru - Display.png",
    title: "Haru",
    description: "Haru 春 – The Essence of Spring",
    price: 790,
  },
  {
    id: "6",
    articleNumber: "123456",
    image: "public/assets/herovideos/display-images/Mori - Display.png",
    title: "Mori",
    description: "Mori 森 – The Essence of the Forest",
    price: 790,
  },
];
