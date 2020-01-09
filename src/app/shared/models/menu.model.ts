import { Meal } from './meal.model';

export interface Menu {

    id?:                number; //out
    availableForWeeks:  number;
    description:        string;
    image:              string;
    label:              string;
    meals?:             Meal; //out
    mealIds?:           number; //in
    priceDF:            number;
    status?:            number; //out
    
}