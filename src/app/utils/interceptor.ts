import { environment } from 'src/environments/environment';

export const noConnexionNeeded = [
  '/forgotpassword',
  '/ingredient/find',
  '/meal/find/',
  '/meal/findallavailablefortoday',
  '/meal/findallavailableforweek',
  '/menu/find/',
  '/menu/findallavailablefortoday',
  '/menu/findallavailableforweek',
];

export const isJWTRequired = (url: string) => {
  console.log(url);
  for (const item of noConnexionNeeded) {
    if (url.includes(`${environment.apiUrl}${item}`)) {
      return false;
    }
  }
  return true;
};
