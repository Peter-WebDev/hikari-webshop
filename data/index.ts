/**
 * Beskriver en produkt som ska säljas på sidan.
 * OBS: Kan utökas men inte ändras pga cypress.
 **/
export interface Product {
  id: string;
  articleNumber: string;
  image: string;
  imageDark?: string | null;
  title: string;
  titleSign?: string | null;
  titleSignColor?: string | null;
  titleDescription?: string | null;
  titleWithDescription?: string | null;
  description: string;
  price: number;
  slogan?: string | null;
  note?: string | null;
  weight?: string | null;
  brand?: string | null;
  height?: string | null;
  diameter?: string | null;
}

export interface CartItem extends Product {
  quantity: number;
}

/* Lägg till era produkter här */
export const products: Product[] = [
  {
    id: "1",
    articleNumber: "123451",
    image: "/assets/herovideos/display-images/suna-display.png",
    imageDark: "URL",
    title: "Suna",
    titleSign: "砂",
    titleSignColor: "#b6b47b",
    titleDescription: "The Essence of Sand",
    titleWithDescription: "Suna 砂 – The Essence of Sand",
    description:
      "Warm, grounding, and subtly sweet, Suna captures the quiet beauty of sunlit shores and golden dunes. The rich aroma of sandalwood blends with the softness of musk and vanilla, creating a scent that is both comforting and timeless.",
    price: 790,
    slogan: "Suna - Feel the warmth. Embrace the calm.",
    note: "Sandalwood, musk and vanilla",
    weight: "280 g",
    brand: "Hikari",
    height: "10.7 cm",
    diameter: "8 cm",
  },
  {
    id: "2",
    articleNumber: "123452",
    image: "/assets/herovideos/display-images/aka-display.png",
    imageDark: "URL",
    title: "Aka",
    titleSign: "赤",
    titleSignColor: "#ff0000",
    titleDescription: "The Essence of Red",
    titleWithDescription: "Aka 赤 – The Essence of Red",
    description:
      "Passionate and bold, Aka embodies the vibrant hues of cherry blossoms in full bloom, rich rosewood, and the luscious sweetness of crimson berries. This candle is a celebration of life, love, and renewal.",
    price: 790,
    slogan: "Aka - Ignite passion. Embrace the beauty.",
    note: "Cherry blossoms, rich rosewood and crimson berries",
    weight: "280 g",
    brand: "Hikari",
    height: "10.7 cm",
    diameter: "8 cm",
  },
  {
    id: "3",
    articleNumber: "123453",
    image: "/assets/herovideos/display-images/kaze -display.png",
    imageDark: "URL",
    title: "Kaze",
    titleSign: "風",
    titleSignColor: "#23d7ff",
    titleDescription: "The Essence of the Wind",
    titleWithDescription: "Kaze 風 – The Essence of the Wind",
    description:
      "Light and invigorating, Kaze captures the crisp freshness of a breeze dancing through open landscapes. With cooling eucalyptus, uplifting mint, and a burst of citrus, this scent awakens the senses and refreshes the mind.",
    price: 790,
    slogan: "Kaze - Let the wind carry you. Feel refreshed.",
    note: "Eucalyptus, uplifting mint and citrus",
    weight: "280 g",
    brand: "Hikari",
    height: "10.7 cm",
    diameter: "8 cm",
  },
  {
    id: "4",
    articleNumber: "123454",
    image: "/assets/herovideos/display-images/kaigan-display.png",
    imageDark: "URL",
    title: "Kaigan",
    titleSign: "海岸",
    titleSignColor: "#1d41ff",
    titleDescription: "The Essence of Coast",
    titleWithDescription: "Kaigan 海岸 – The Essence of Coast",
    description:
      "Inspired by the tranquil beauty of the shoreline, Kaigan captures the refreshing harmony of sea salt, delicate lotus, and vibrant bergamot. This candle evokes the feeling of ocean waves meeting soft sand, carrying the crisp scent of salty air and blooming coastal flowers.",
    price: 790,
    slogan: "Kaigan - Breathe in the coast. Feel the calm.",
    note: "Sea salt, lotus and bergamot",
    weight: "280 g",
    brand: "Hikari",
    height: "10.7 cm",
    diameter: "8 cm",
  },
  {
    id: "5",
    articleNumber: "123455",
    image: "/assets/herovideos/display-images/haru-display.png",
    imageDark: "URL",
    title: "Haru",
    titleSign: "春",
    titleSignColor: "#ff8900",
    titleDescription: "The Essence of Spring",
    titleWithDescription: "Haru 春 – The Essence of Spring",
    description:
      "Fresh, floral, and full of life, Haru captures the awakening of springtime. The scent of dewy grass, wildflowers in bloom, and delicate morning mist creates a light and uplifting atmosphere.",
    price: 790,
    slogan: "Haru - Awaken your senses. Welcome the season.",
    note: "Dewy grass, wildflowers in bloom and morning mist",
    weight: "280 g",
    brand: "Hikari",
    height: "10.7 cm",
    diameter: "8 cm",
  },
  {
    id: "6",
    articleNumber: "123456",
    image: "/assets/herovideos/display-images/mori-display.png",
    imageDark: "URL",
    title: "Mori",
    titleSign: "森",
    titleSignColor: "#62895c",
    titleDescription: "The Essence of the Forest",
    titleWithDescription: "Mori 森 – The Essence of the Forest",
    description:
      "Step into the heart of the forest with Mori, a scent inspired by towering trees and crisp woodland air. Infused with the grounding aroma of cypress, juniper, and fresh pine needles, this candle brings the tranquility of nature into your home.",
    price: 790,
    slogan: "Mori - Breathe deeply. Find your stillness.",
    note: "Cypress, juniper and fresh pine needles",
    weight: "280 g",
    brand: "Hikari",
    height: "10.7 cm",
    diameter: "8 cm",
  },
];
