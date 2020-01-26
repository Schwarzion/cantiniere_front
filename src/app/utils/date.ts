import { getWeek } from 'date-fns';

export const getTodayDate = () => {
  const date = new Date();
  const todayDate = {
    date,
    string: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
  };
  return todayDate;
};

export const getCurrentWeek = () => {
  return getWeek(new Date());
};

export interface CustomDateObject {
  date: Date;
  string: string;
}
