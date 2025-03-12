/**
 * Beskriver en produkt som ska säljas på sidan.
 * OBS: Kan utökas men inte ändras pga cypress.
 **/
export interface Product {
  id: string;
  articleNumber: string;
  image: string;
  imageDark?: string;
  title: string;
  titleSign?: string;
  titleDescription?: string;
  titleWithDescription?: string;
  description: string;
  price: number;
  weight?: string;
  brand?: string;
  height?: string;
  diameter?: string;
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
    imageDark: "URL",
    title: "Suna",
    titleSign: "砂",
    titleDescription: "The Essence of Sand",
    titleWithDescription: "Suna 砂 – The Essence of Sand",
    description:
      "Warm, grounding, and subtly sweet, Suna captures the quiet beauty of sunlit shores and golden dunes. The rich aroma of sandalwood blends with the softness of musk and vanilla, creating a scent that is both comforting and timeless. Suna - Feel the warmth, embrace the calm.",
    price: 790,
    weight: "280 g",
    brand: "Hikari",
    height: "10.7 cm",
    diameter: "8 cm",
  },
  {
    id: "2",
    articleNumber: "123452",
    image: "URL",
    imageDark: "URL",
    title: "Aka",
    titleSign: "赤",
    titleDescription: "The Essence of Red",
    titleWithDescription: "Aka 赤 – The Essence of Red",
    description:
      "Passionate and bold, Aka embodies the vibrant hues of cherry blossoms in full bloom, rich rosewood, and the luscious sweetness of crimson berries. This candle is a celebration of life, love, and renewal. Aka - Ignite passion, embrace the beauty.",
    price: 790,
    weight: "280 g",
    brand: "Hikari",
    height: "10.7 cm",
    diameter: "8 cm",
  },
  {
    id: "3",
    articleNumber: "123453",
    image: "URL",
    imageDark: "URL",
    title: "Kaze",
    titleSign: "風",
    titleDescription: "The Essence of the Wind",
    titleWithDescription: "Kaze 風 – The Essence of the Wind",
    description:
      "Light and invigorating, Kaze captures the crisp freshness of a breeze dancing through open landscapes. With cooling eucalyptus, uplifting mint, and a burst of citrus, this scent awakens the senses and refreshes the mind. Kaze - Let the wind carry you, feel refreshed.",
    price: 790,
    weight: "280 g",
    brand: "Hikari",
    height: "10.7 cm",
    diameter: "8 cm",
  },
  {
    id: "4",
    articleNumber: "123454",
    image: "URL",
    imageDark: "URL",
    title: "Kaigan 海岸",
    titleSign: "海岸",
    titleDescription: "The Essence of Coast",
    titleWithDescription: "Kaigan 海岸 – The Essence of Coast",
    description:
      "Inspired by the tranquil beauty of the shoreline, Kaigan captures the refreshing harmony of sea salt, delicate lotus, and vibrant bergamot. This candle evokes the feeling of ocean waves meeting soft sand, carrying the crisp scent of salty air and blooming coastal flowers. Kaigan - Breathe in the coast, feel the calm.",
    price: 790,
    weight: "280 g",
    brand: "Hikari",
    height: "10.7 cm",
    diameter: "8 cm",
  },
  {
    id: "5",
    articleNumber: "123455",
    image: "URL",
    imageDark: "URL",
    title: "Haru",
    titleSign: "春",
    titleDescription: "The Essence of Spring",
    titleWithDescription: "Haru 春 – The Essence of Spring",
    description:
      "Fresh, floral, and full of life, Haru captures the awakening of springtime. The scent of dewy grass, wildflowers in bloom, and delicate morning mist creates a light and uplifting atmosphere. Haru - Awaken your senses, welcome the season.",
    price: 790,
    weight: "280 g",
    brand: "Hikari",
    height: "10.7 cm",
    diameter: "8 cm",
  },
  {
    id: "6",
    articleNumber: "123456",
    image: "URL",
    imageDark: "URL",
    title: "Mori",
    titleSign: "森",
    titleDescription: "The Essence of the Forest",
    titleWithDescription: "Mori 森 – The Essence of the Forest",
    description:
      "Step into the heart of the forest with Mori, a scent inspired by towering trees and crisp woodland air. Infused with the grounding aroma of cypress, juniper, and fresh pine needles, this candle brings the tranquility of nature into your home. Mori - Breathe deeply, find your stillness.",
    price: 790,
    weight: "280 g",
    brand: "Hikari",
    height: "10.7 cm",
    diameter: "8 cm",
  },
];
