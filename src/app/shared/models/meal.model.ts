import { Ingredient } from './ingredient.model';

export interface Meal {

    id?:                number; //out
    availableForWeeks:  number;
    description:        string;
    image:              string;
    ingredients?:       Ingredient; //out
    ingredientsId?:     number; //in
    label:              string;
    priceDF:            number;
    status?:            number; //out
}
