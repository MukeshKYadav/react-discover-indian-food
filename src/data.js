const menu = [
  {
    id: 1,
    title: 'buttermilk pancakes',
    city: 'Delhi',
    price: 249,
    img: './images/item-1.jpeg',
    desc: `Yummy pancakes made using buttermilk`,
  },
  {
    id: 2,
    title: 'Cheese Burger with Fries',
    city: 'Delhi',
    price: 299,
    img: './images/item-2.jpeg',
    desc: `Mouth Watering Cheese Burger with Fries`,
  },
  {
    id: 3,
    title: 'godzilla milkshake',
    city: 'Delhi',
    price: 179,
    img: './images/item-3.jpeg',
    desc: `Organic milkshake with Icecream`,
  },
  {
    id: 4,
    title: 'country delight spread  ',
    city: 'Delhi',
    price:  349,
    img: './images/item-4.jpeg',
    desc: `Country Delight spread `,
  },
  {
    id: 5,
    title: 'egg attack',
    city: 'Delhi',
    price: 199,
    img: './images/item-5.jpeg',
    desc: `Delicious Egg Burger, `,
  },
  {
    id: 6,
    title: 'oreo dream',
    city: 'Delhi',
    price: 99,
    img: './images/item-6.jpeg',
    desc: `Yummy Oreo Shake`,
  },
  {
    id: 7,
    title: 'bacon overflow burger',
    city: 'Delhi',
    price: 399,
    img: './images/item-7.jpeg',
    desc: `Bacon overflow Burger `,
  },
  {
    id: 8,
    title: 'american classic lunch',
    city: 'Delhi',
    price: 449,
    img: './images/item-8.jpeg',
    desc: `american classic lunch  `,
  },
  {
    id: 9,
    title: 'masala poori',
    city: 'Delhi',
    price: 129,
    img: './images/masala-poori-370x220.jpg',
    desc: `Spicy tasty masala poori `,
  },
  {
    id: 10,
    title: 'mango-sandesh',
    city: 'Delhi',
    price: 49,
    img: './images/mango-sandesh-370x220.jpg',
    desc: `Delicious dessert mango-sandesh `,
  },
  {
    id: 11,
    title: 'Aloo Fry ',
    city: 'Mumbai',
    price: 249,
    img: './images/aloo-fry-370x220.jpg',
    desc: `Spicy Potato fired in ghee `,
  },
  {
    id: 12,
    title: 'besan ladoo',
    city: 'Mumbai',
    price: 299,
    img: './images/besan-ladoo-280x165.jpg',
    desc: `Yummy Dessert besan ladoo`,
  },
  {
    id: 13,
    title: 'pancakes',
    city: 'Mumbai',
    price: 249,
    img: './images/paal-poli-370x220.jpg',
    desc: `Yummy pancakes dessert`,
  },
  {
    id: 14,
    title: 'bhindi fry  ',
    city: 'Mumbai',
    price:  349,
    img: './images/bhindi-fry-370x220.jpg',
    desc: `Special spicy bhindi fry 65`,
  },
  {
    id: 15,
    title: 'cheese corn balls',
    city: 'Mumbai',
    price: 199,
    img: './images/cheese-corn-balls-370x220.jpg',
    desc: `Yummy healthy cheese corn balls `,
  },
  {
    id: 16,
    title: 'oreo dream',
    city: 'Mumbai',
    price: 99,
    img: './images/item-6.jpeg',
    desc: `Yummy Oreo Shake`,
  },
  {
    id: 17,
    title: 'egg gravy',
    city: 'Mumbai',
    price: 399,
    img: './images/egg-gravy-370x220.jpg',
    desc: `Special Spicy egg gravy `,
  },
  {
    id: 18,
    title: 'mango pudding',
    city: 'Mumbai',
    price: 449,
    img: './images/mango-pudding-370x220.jpg',
    desc: `Delicious mango pudding `,
  },
  {
    id: 19,
    title: 'masala poori',
    city: 'Mumbai',
    price: 129,
    img: './images/masala-poori-370x220.jpg',
    desc: `Spicy tasty masala poori `,
  },
  {
    id: 20,
    title: 'gulab jamun',
    city: 'Mumbai',
    price: 149,
    img: './images/bread-gulab-jamun-recipe-370x220.jpg',
    desc: `Delicious dessert gulab jamun `,
  },
  {
    id: 21,
    title: 'masala khichdi',
    city: 'Kolkatta',
    price: 249,
    img: './images/masala-khichdi-370x220.jpg',
    desc: `Yummy healthy masala khichdi`,
  },
  {
    id: 22,
    title: 'masala paratha',
    city: 'Kolkatta',
    price: 299,
    img: './images/masala-paratha-370x220.jpg',
    desc: `Yummy sumptous masala paratha`,
  },
  {
    id: 23,
    title: 'Organic milkshake',
    city: 'Kolkatta',
    price: 179,
    img: './images/item-3.jpeg',
    desc: `Organic milkshake with Icecream`,
  },
  {
    id: 24,
    title: 'bhindi-fry  ',
    city: 'Kolkatta',
    price:  349,
    img: './images/bhindi-fry-370x220.jpg',
    desc: `Special spicy bhindi fry 65`,
  },
  {
    id: 25,
    title: 'cheese corn balls',
    city: 'Kolkatta',
    price: 199,
    img: './images/cheese-corn-balls-370x220.jpg',
    desc: `Yummy cheese corn balls `,
  },
  {
    id: 26,
    title: 'oreo dream',
    city: 'Kolkatta',
    price: 99,
    img: './images/item-6.jpeg',
    desc: `Yummy Oreo Shake`,
  },
  {
    id: 27,
    title: 'egg gravy',
    city: 'Kolkatta',
    price: 399,
    img: './images/egg-gravy-370x220.jpg',
    desc: `Spicy hot egg gravy `,
  },
  {
    id: 28,
    title: 'mango pudding',
    city: 'Kolkatta',
    price: 149,
    img: './images/mango-pudding-370x220.jpg',
    desc: `Delicious mango pudding `,
  },
  {
    id: 29,
    title: 'masala poori',
    city: 'Kolkatta',
    price: 129,
    img: './images/masala-poori-370x220.jpg',
    desc: `Spicy tasty masala poori `,
  },
  {
    id: 30,
    title: 'gulab jamun',
    city: 'Kolkatta',
    price: 49,
    img: './images/bread-gulab-jamun-recipe-370x220.jpg',
    desc: `Delicious dessert gulab jamun `,
  },
  {
    id: 31,
    title: 'mushroom fried rice',
    city: 'Banglore',
    price: 249,
    img: './images/mushroom-fried-rice-370x220.jpg',
    desc: `Yummy healthy mushroom fried rice`,
  },
  {
    id: 32,
    title: 'paal poli',
    city: 'Banglore',
    price: 299,
    img: './images/paal-poli-370x220.jpg',
    desc: `Yummy healthy paal poli`,
  },
  {
    id: 33,
    title: 'mushroom-pulao',
    city: 'Banglore',
    price: 179,
    img: './images/mushroom-pulao-370x220.jpg',
    desc: `Yummy healthy mushroom pulao`,
  },
  {
    id: 34,
    title: 'panjiri ',
    city: 'Banglore',
    price:  349,
    img: './images/panjiri-370x220.jpg',
    desc: `Delicious dessert panjiri`,
  },
  {
    id: 35,
    title: 'cheese corn balls',
    city: 'Banglore',
    price: 199,
    img: './images/cheese-corn-balls-370x220.jpg',
    desc: `Yummy healthy cheese corn balls `,
  },
  {
    id: 36,
    title: 'oreo dream',
    city: 'Banglore',
    price: 99,
    img: './images/item-6.jpeg',
    desc: `Yummy Oreo Shake`,
  },
  {
    id: 37,
    title: 'egg gravy',
    city: 'Banglore',
    price: 399,
    img: './images/egg-gravy-370x220.jpg',
    desc: `Special Spicy egg gravy `,
  },
  {
    id: 38,
    title: 'mango pudding',
    city: 'Banglore',
    price: 149,
    img: './images/mango-pudding-370x220.jpg',
    desc: `Delicious mango pudding `,
  },
  {
    id: 39,
    title: 'masala poori',
    city: 'Banglore',
    price: 129,
    img: './images/masala-poori-370x220.jpg',
    desc: `Spicy tasty masala poori `,
  },
  {
    id: 40,
    title: 'gulab jamun',
    city: 'Banglore',
    price: 149,
    img: './images/bread-gulab-jamun-recipe-370x220.jpg',
    desc: `Delicious dessert gulab jamun `,
  },
  {
    id: 41,
    title: 'khara bath',
    city: 'Chennai',
    price: 249,
    img: './images/khara-bath-370x220.jpg',
    desc: `Tamil special khara bath `,
  },
  {
    id: 42,
    title: 'urad dal',
    city: 'Chennai',
    price: 299,
    img: './images/urad-dal-recipe-370x220.jpg',
    desc: `Yummy healthy urad dal `,
  },
  {
    id: 43,
    title: 'spicy chicken curry',
    city: 'Chennai',
    price: 179,
    img: './images/spicy-chicken-curry-370x220.jpg',
    desc: `Yummy spicy chicken curry with rice`,
  },
  {
    id: 44,
    title: 'veg momos ',
    city: 'Chennai',
    price:  349,
    img: './images/veg-momos-recipe-370x220.jpg',
    desc: `Yummy spicy veg momos `,
  },
  {
    id: 45,
    title: 'cheese corn balls',
    city: 'Chennai',
    price: 199,
    img: './images/cheese-corn-balls-370x220.jpg',
    desc: `Yummy healthy cheese corn balls `,
  },
  {
    id: 46,
    title: 'oreo dream',
    city: 'Chennai',
    price: 99,
    img: './images/item-6.jpeg',
    desc: `Yummy Oreo Shake`,
  },
  {
    id: 47,
    title: 'egg gravy',
    city: 'Chennai',
    price: 399,
    img: './images/egg-gravy-370x220.jpg',
    desc: `Special Spicy egg gravy `,
  },
  {
    id: 48,
    title: 'mango pudding',
    city: 'Chennai',
    price: 149,
    img: './images/mango-pudding-370x220.jpg',
    desc: `Delicious mango pudding `,
  },
  {
    id: 49,
    title: 'masala poori',
    city: 'Chennai',
    price: 129,
    img: './images/masala-poori-370x220.jpg',
    desc: `Spicy tasty masala poori `,
  },
  {
    id: 50,
    title: 'gulab jamun',
    city: 'Chennai',
    price: 149,
    img: './images/bread-gulab-jamun-recipe-370x220.jpg',
    desc: `Delicious dessert gulab jamun `,
  },
];
export default menu;
