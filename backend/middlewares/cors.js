// Массив доменов, с которых разрешены кросс-доменные запросы
const allowedCors = [
  'http://malinavichus.students.nomoredomains.xyz',
  'https://malinavichus.students.nomoredomains.xyz',
];
// eslint-disable-next-line consistent-return
const cors = (req, res, next) => {
  // Сохраняем источник запроса в переменную origin
  const { origin } = req.headers;
  // Сохраняем тип запроса (HTTP-метод) в соответствующую переменную
  const { method } = req;
  // сохраняем список заголовков исходного запроса
  const requestHeaders = req.headers['access-control-request-headers'];
  // Значение для заголовка Access-Control-Allow-Methods по умолчанию (разрешены все типы запросов)
  const DEFAULT_ALLOWED_METHODS = 'GET,PUT,PATCH,POST,DELETE';
  // проверяем, что источник запроса есть среди разрешённых
  if (allowedCors.includes(origin)) {
    // устанавливаем заголовок, который разрешает браузеру запросы с этого источника
    res.header('Access-Control-Allow-Origin', origin);
  }
  if (method === 'OPTIONS') {
    // разрешаем кросс-доменные запросы любых типов (по умолчанию)
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    // разрешаем кросс-доменные запросы с этими заголовками
    res.header('Access-Control-Allow-Headers', requestHeaders);
    // завершаем обработку запроса и возвращаем результат клиенту
    return res.end();
  }
  next();
};

module.exports = cors;
