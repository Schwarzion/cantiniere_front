import { Menu } from './menu.model';
import { Timestamp } from './timestamp.model';
import { QuantityMeal } from './quantityMeal.model';
import { User } from './user.model';

export interface Order {

    id?:            number; //out
    constraintId?:  number; //in
    creationDate?:  Timestamp; //out
    menu?:          Menu; //out
    menuId?:        number; //in
    quantityMeals:  QuantityMeal;
    status?:        number; //out
    user?:          User; //out
    userId?:        number; //in
    
}