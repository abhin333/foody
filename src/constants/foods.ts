import { ImageSourcePropType } from "react-native";

export interface Food {
  id: number;
  categoryId: number;
  name: string;
  image: ImageSourcePropType;
  price: string;
  rating: number;
  description: string;
  selected?: boolean;
}

export const foods: Food[] = [
  {
    id: 1,
    categoryId: 1,
    name: "Zinger Burger",
    image: require("../../assets/images/burger.png"),
    price: "$12",
    rating: 5,
    description:
      "Crispy fried chicken fillet with fresh lettuce, mayo, and a soft toasted bun. A classic spicy favorite.",
    selected: true,
  },
  {
    id: 2,
    categoryId: 1,
    name: "Cheese Burger",
    image: require("../../assets/images/burger.png"),
    price: "$11",
    rating: 4,
    description:
      "Double cheddar on a juicy beef patty with caramelized onions and our house special sauce.",
    selected: false,
  },
  {
    id: 3,
    categoryId: 1,
    name: "Veg Burger",
    image: require("../../assets/images/burger.png"),
    price: "$10",
    rating: 4,
    description:
      "Crispy veggie patty with fresh tomato, lettuce, and herb mayo in a sesame bun.",
    selected: false,
  },
  {
    id: 4,
    categoryId: 1,
    name: "Beef Burger",
    image: require("../../assets/images/burger.png"),
    price: "$14",
    rating: 5,
    description:
      "Premium grilled beef patty with smoked cheese, pickles, and tangy BBQ sauce.",
    selected: false,
  },
  {
    id: 5,
    categoryId: 2,
    name: "Cheese Pizza",
    image: require("../../assets/images/pizza.png"),
    price: "$12",
    rating: 5,
    description:
      "Wood-fired pizza with melted mozzarella, rich tomato sauce, and a golden crispy crust.",
    selected: true,
  },
  {
    id: 6,
    categoryId: 2,
    name: "Pepperoni Pizza",
    image: require("../../assets/images/pizza.png"),
    price: "$14",
    rating: 5,
    description:
      "Classic pepperoni slices on a cheesy base with Italian herbs and tomato sauce.",
    selected: false,
  },
  {
    id: 7,
    categoryId: 2,
    name: "Margherita Pizza",
    image: require("../../assets/images/pizza.png"),
    price: "$11",
    rating: 4,
    description:
      "Fresh basil, mozzarella, and olive oil on a thin crust with San Marzano tomatoes.",
    selected: false,
  },
  {
    id: 8,
    categoryId: 2,
    name: "Veggie Supreme",
    image: require("../../assets/images/pizza.png"),
    price: "$13",
    rating: 4,
    description:
      "Loaded with bell peppers, olives, mushrooms, onions, and extra cheese.",
    selected: false,
  },
  {
    id: 9,
    categoryId: 3,
    name: "Chicken 65",
    image: require("../../assets/images/chicken.png"),
    price: "$12",
    rating: 4,
    description:
      "Spicy deep-fried chicken bites tossed in curry leaves, ginger, and South Indian masala.",
    selected: true,
  },
  {
    id: 10,
    categoryId: 3,
    name: "Chicken Burger",
    image: require("../../assets/images/chicken.png"),
    price: "$13",
    rating: 4,
    description:
      "Juicy grilled chicken patty topped with cheese, pickles, and our signature sauce on a brioche bun.",
    selected: false,
  },
  {
    id: 11,
    categoryId: 3,
    name: "Fried Chicken",
    image: require("../../assets/images/chicken.png"),
    price: "$15",
    rating: 5,
    description:
      "Crispy golden fried chicken pieces seasoned with a secret blend of spices.",
    selected: false,
  },
  {
    id: 12,
    categoryId: 3,
    name: "Chicken Wings",
    image: require("../../assets/images/chicken.png"),
    price: "$11",
    rating: 4,
    description:
      "Tender wings glazed in spicy buffalo sauce, served with cool ranch dip.",
    selected: false,
  },
];

export function getFoodById(id: number): Food | undefined {
  return foods.find((food) => food.id === id);
}

export function getFoodsByCategory(categoryId: number): Food[] {
  return foods.filter((food) => food.categoryId === categoryId);
}
