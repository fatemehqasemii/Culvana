import { BaseRecord } from "@refinedev/core";

export interface RecipeRecord extends BaseRecord {
  id: string;
  name: string;
  category: string;
  Type: string;
  total_yield: number;
  servings: number;
  recipeCost: number;
  foodCosts: number;
  materialCosts: number;
}
