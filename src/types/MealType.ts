import { MEAL_TYPES } from "constants/commons"

type MealType = {
  id: number;
  type: MEAL_TYPES.MORNING | MEAL_TYPES.LUNCH | MEAL_TYPES.DINNER | MEAL_TYPES.SNACK,
  enjoyAt: string;
}

export default MealType;
