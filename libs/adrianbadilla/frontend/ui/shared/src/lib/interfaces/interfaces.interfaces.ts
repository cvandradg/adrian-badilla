export interface IngredientLine {
  id: string;
  position: number;
  ingredients: string[];
}

export interface Meal {
  name: string;
  id: string;
  position: number;
  foodLines: any;
}
