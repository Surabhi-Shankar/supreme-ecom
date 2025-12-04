    import AloeGel from "../assets/images/aloe-vera.jpg";
import bamboo from "../assets/images/Bamboo Toothbrush.jpg";
import blue from "../assets/images/Bluetooth Speaker.jpg";
import mug from "../assets/images/Ceramic Mug Set.jpg";
import Charcol from "../assets/images/charcol-face-mask.jpg";
import Coconut from "../assets/images/coconut.jpg";
import cotton from "../assets/images/Cotton Bath Towel.jpg";
import daniel from "../assets/images/Denim Jacket.jpg";
import HerbalOil from "../assets/images/herbal-oil.jpg";
import laptop from "../assets/images/Laptop Backpack.jpg";
import belt from "../assets/images/Leather Belt.webp";
import Neem from "../assets/images/Neem Anti-Dandruff Oil.jpg";
import RoseMist from "../assets/images/rose-mist.jpg";
import candle from "../assets/images/Scented Candle Set.jpg";
import smart from "../assets/images/Smart Watch.jpg";
import wireless from "../assets/images/Wireless Earbuds.jpg";
    // You can add more real images later, these URLs are just placeholders.
    const products = [
    // Skincare
    {
        id: 1,
        name: "Aloe Vera Gel",
        price: 299,
        description: "Hydrates and nourishes skin with pure aloe essence.",
        image: AloeGel,
        category: "Skincare",
    },
    {
        id: 2,
        name: "Rose Face Mist",
        price: 199,
        description: "Refreshes your skin and gives an instant glow.",
        image: RoseMist,
        category: "Skincare",
    },
    {
        id: 3,
        name: "Herbal Hair Oil",
        price: 349,
        description: "Strengthens roots and promotes healthy hair growth.",
        image: HerbalOil,
        category: "Haircare",
    },
    {
        id: 4,
        name: "Green Tea Cleanser",
        price: 249,
        description: "Cleanses gently while maintaining natural moisture.",
        image: "https://images.unsplash.com/photo-1600431521340-491eca880813",
        category: "Skincare",
    },
    {
        id: 5,
        name: "Charcoal Face Mask",
        price: 399,
        description: "Deep cleanses pores and removes impurities.",
        image: Charcol,
        category: "Skincare",
    },

    // Haircare
    {
        id: 6,
        name: "Coconut Shampoo",
        price: 299,
        description: "Nourishing shampoo for shiny, strong hair.",
        image:Coconut,
        category: "Haircare",
    },
    {
        id: 7,
        name: "Argan Hair Serum",
        price: 499,
        description: "Repairs split ends and adds silky smoothness.",
        image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e",
        category: "Haircare",
    },
    {
        id: 8,
        name: "Neem Anti-Dandruff Oil",
        price: 299,
        description: "Natural neem formula for dandruff-free scalp.",
        image:Neem,
        category: "Haircare",
    },

    // Electronics
    {
        id: 9,
        name: "Wireless Earbuds",
        price: 1999,
        description: "Crystal-clear sound with noise cancellation.",
        image:wireless,
        category: "Electronics",
    },
    {
        id: 10,
        name: "Smart Watch",
        price: 2499,
        description: "Track your health and stay connected on the go.",
        image: smart,
        category: "Electronics",
    },
    {
        id: 11,
        name: "Bluetooth Speaker",
        price: 999,
        description: "Portable speaker with powerful bass.",
        image:blue,
        category: "Electronics",
    },
    {
        id: 12,
        name: "Laptop Backpack",
        price: 1299,
        description: "Waterproof and lightweight travel backpack.",
        image: laptop,
        category: "Electronics",
    },

    // Fashion
    {
        id: 13,
        name: "Classic T-Shirt",
        price: 599,
        description: "Soft cotton T-shirt with supreme comfort.",
        image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820",
        category: "Fashion",
    },
    {
        id: 14,
        name: "Denim Jacket",
        price: 1599,
        description: "Trendy and durable denim jacket.",
        image: daniel,
        category: "Fashion",
    },
    {
        id: 15,
        name: "Sneakers",
        price: 1999,
        description: "Stylish sneakers perfect for everyday wear.",
        image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
        category: "Fashion",
    },
    {
        id: 16,
        name: "Leather Belt",
        price: 799,
        description: "Premium leather belt for men.",
        image: belt,
        category: "Fashion",
    },

    // Home Essentials
    {
        id: 17,
        name: "Scented Candle Set",
        price: 499,
        description: "Relaxing aroma for your home and mind.",
        image: candle,
        category: "Home Essentials",
    },
    {
        id: 18,
        name: "Bamboo Toothbrush",
        price: 199,
        description: "Eco-friendly toothbrush with soft bristles.",
        image:bamboo,
        category: "Home Essentials",
    },
    {
        id: 19, 
        name: "Cotton Bath Towel",
        price: 699,
        description: "Super absorbent and soft touch.",
        image: cotton,
        category: "Home Essentials",
    },
    {
        id: 20,
        name: "Ceramic Mug Set",
        price: 899,
        description: "Elegant mugs for your morning coffee.",
        image: mug,
        category: "Home Essentials",
    },
    ];

    export default products;
