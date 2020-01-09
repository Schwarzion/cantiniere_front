import { Time } from './time.model';

export interface ConstraintIn {

    id?:                number; //out
    maximumOrderPerDay: number;
    orderTimeLimit:     Time | string; // out | in
    rateVAT:            number;

}