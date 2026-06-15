import logo from './logo.png'
import search_icon from './search_icon.png'
import profile_icon from './profile_icon.png'
import cart_icon from './cart_icon.png'
import menu_icon from './menu_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import quality_icon from './quality_icon.png'
import cross_icon from './cross_icon.png'
import support_img from './support_img.png'
import star_icon from './star_icon.png'
import bin_icon from './bin_icon.png'
import star_dull_icon from './star_dull_icon.png'
import hero_img from './hero_img.png'
import p_img1 from './p_img1.png'
import p_img2 from './p_img2.png'
import p_img3 from './p_img3.png'
import p_img4 from './p_img4.png'
import p_img5 from './p_img5.png'
import p_img6 from './p_img6.png'
export const assets = {
    logo,
    search_icon,
    profile_icon,
    cart_icon,
    hero_img,
    menu_icon,
    dropdown_icon,
    exchange_icon,
    quality_icon,
    support_img,
    search_icon,
    cross_icon,
    star_icon,
    star_dull_icon,
    bin_icon
}
export const products = [
  {
    _id: "hm001",
    name: "Hand-Painted Clay Vase",
    description: "Beautiful handcrafted clay vase with traditional artwork.",
    price: 799,
    image: [p_img1,p_img2,p_img3],
    category: "Home Decor",
    subCategory: "Decorative",
    sizes: ['S'],
    date: 1716634345448,
    bestseller: true
  },
  {
    _id: "hm002",
    name: "Macrame Wall Hanging",
    description: "Handwoven cotton macrame wall decor for modern homes.",
    price: 999,
    image: [p_img2],
    category: "Home Decor",
    subCategory: "Decorative",
    sizes: [],
    date: 1716634345448,
    bestseller: true
  },
  {
    _id: "hm003",
    name: "Handmade Scented Candle",
    description: "Eco-friendly soy wax candle with lavender fragrance.",
    price: 349,
    image: [p_img3],
    category: "Candles",
    subCategory: "Decorative",
    sizes: [],
    date: 1716634345448,
    bestseller: false
  },
  {
    _id: "hm004",
    name: "Wooden Jewelry Box",
    description: "Handcrafted wooden box for storing jewelry and accessories.",
    price: 1299,
    image: [p_img4],
    category: "Wood Crafts",
    subCategory: "Utility",
    sizes: [],
    date: 1716634345448,
    bestseller: true
  },
  {
    _id: "hm005",
    name: "Crochet Teddy Bear",
    description: "Cute handmade crochet teddy bear made with soft yarn.",
    price: 599,
    image: [p_img5],
    category: "Crochet",
    subCategory: "Decorative",
    sizes: [],
    date: 1716634345448,
    bestseller: false
  },
  {
    _id: "hm006",
    name: "Resin Art Coaster Set",
    description: "Premium handmade resin coasters with artistic designs.",
    price: 699,
    image: [p_img6],
    category: "Resin Art",
    subCategory: "Utility",
    sizes: [],
    date: 1716634345448,
    bestseller: true
  }
];