//Функции получения и записывания данных пользователя
export function getLocalStorage(key) {
    let string = localStorage.getItem(key);
    return JSON.parse(string);
}

export function writeLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

/*функция для склонения окончания слов*/
export function declination(number, txt) {
  let cases = [2, 0, 1, 1, 1, 2];
  return txt[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}