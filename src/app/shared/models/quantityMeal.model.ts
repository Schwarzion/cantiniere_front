import { Meal } from './meal.model';

export interface QuantityMeal {

    id?:        number; //out
    meal?:      Meal; //out
    mealId?:    number; //in
    quantiy:    number;
}