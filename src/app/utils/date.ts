export const getTodayDate = () => {
  const date = new Date();
  const todayDate = {
    date,
    string: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
  };
  return todayDate;
};

export interface CustomDateObject {
  date: Date;
  string: string;
}
