import { ImageSourcePropType } from "react-native";

export interface Food {
  id: number;
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
    name: "Chicken Burger",
    image: require("../../assets/images/chicken.png"),
    price: "$13",
    rating: 4,
    description:
      "Juicy grilled chicken patty topped with cheese, pickles, and our signature sauce on a brioche bun.",
    selected: false,
  },
  {
    id: 3,
    name: "Cheese Pizza",
    image: require("../../assets/images/pizza.png"),
    price: "$12",
    rating: 5,
    description:
      "Wood-fired pizza with melted mozzarella, rich tomato sauce, and a golden crispy crust.",
    selected: false,
  },
  {
    id: 4,
    name: "Chicken 65",
    image: require("../../assets/images/chicken.png"),
    price: "$12",
    rating: 4,
    description:
      "Spicy deep-fried chicken bites tossed in curry leaves, ginger, and South Indian masala.",
    selected: false,
  },
];

export function getFoodById(id: number): Food | undefined {
  return foods.find((food) => food.id === id);
}