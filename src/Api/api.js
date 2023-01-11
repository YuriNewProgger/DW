export const server = 'http://127.0.0.1:5000'; //Адрес сервера
export const allCarsGetQuery = `${server}/api/allCars`; //Get запрос на получение всех автомобилей
export const addCarQuery = `${server}/api/addCar`; //Post для добавления автомобиля в БД
export const deleteCarQuery = `${server}/api/deleteCar`; //Post для удаления автомобиля из БД
export const updateCarQuery = `${server}/api/updateCar`; //Post для обновления автомобиля в БД
export const loginPostQuery = `${server}/api/login`; //Post запрос на получение пользователя по логину
export const regPostQuery = `${server}/api/reg`; //Post запрос на регистрацию пользователя