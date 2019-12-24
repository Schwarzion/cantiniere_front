export const noConnexionNeeded = [
  '/forgotpassword',
  '/ingredient/find',
  '/meal/find',
  '/meal/findallavailablefortoday',
  '/meal/findallavailableforweek',
  '/menu/find',
  '/menu/findallavailablefortoday',
  '/menu/findallavailableforweek',
];

export const isJWTRequired = (url: string) => {
  for (const item of noConnexionNeeded) {
    if (url.includes(item)) {
      return false;
    }
  }
  return true;
};
