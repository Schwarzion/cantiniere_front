export interface User {

    id?:                number; //out
    address:            string;
    email:              string;
    firstname:          string;
    image:              string;
    isLunchLady:        boolean;
    name:               string;
    password?:          string; //in
    phone:              string;
    postalCode:         string;
    registrationDate?:  string; //out
    sex:                number;
    status?:            number; //out
    town:               string;
    wallet:             number;
}