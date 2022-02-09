import useLocalStorageState from "./useLocalStorageState";
import { v4 as uuidv4 } from "uuid";

export default (initialFoods) => {
  const [foods, setFoods] = useLocalStorageState("foods", initialFoods);
  return {
    foods,
    addFood: (newFoodItem, carb, protein, fat) => {
      setFoods([
        ...foods,
        {
          id: uuidv4(),
          item: newFoodItem,
          carb: carb,
          protein: protein,
          fat: fat,
        },
      ]);
    },
    removeFood: (foodId) => {
      const updatedFoods = foods.filter((food) => food.id !== foodId);
      setFoods(updatedFoods);
    },
    allowEdit: (foodId, item) => {
      const edittingFood = foods.map((food) =>
        food.id === foodId ? { ...food, item: item } : food
      );
      setFoods(edittingFood);
    },
    allowEditCarb: (foodId, carb) => {
      const edittingCarb = foods.map((food) =>
        food.id === foodId ? { ...food, carb: carb } : food
      );
      setFoods(edittingCarb);
    },
    allowEditProtein: (foodId, protein) => {
      const edittingProtein = foods.map((food) =>
        food.id === foodId ? { ...food, protein: protein } : food
      );
      setFoods(edittingProtein);
    },
    allowEditFat: (foodId, fat) => {
      const edittingFat = foods.map((food) =>
        food.id === foodId ? { ...food, fat: fat } : food
      );
      console.log("in fat")
      setFoods(edittingFat);
    },
  };
};
