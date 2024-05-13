const logger = require("../../logger");

const checkIsVoteRequest = async (req, res, next) => {
    // Если в запросе присылают только поле users
    if (Object.keys(req.body).length === 1 && req.body.users) {
        req.isVoteRequest = true;
    }
    next();
};

const checkEmptyFields = async (req, res, next) => {
    // если это обычный юзер ставит лайк, пропускаем проверки
    if (req.isVoteRequest) {
        next();
        return;
    }
    if (
        !req.body.title ||
        !req.body.description ||
        !req.body.image ||
        !req.body.link ||
        !req.body.developer
    ) {
        // Если какое-то из полей отсутствует, то не будем обрабатывать запрос дальше,
        // а ответим кодом 400 — данные неверны.
        res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Заполни все поля" }));
    } else {
        // Если всё в порядке, то передадим управление следующим миддлварам
        next();
    }
};

const checkIfCategoriesAvaliable = async (req, res, next) => {
    // если это обычный юзер ставит лайк, пропускаем проверки
    if (req.isVoteRequest) {
        next();
        return;
    }
    // Проверяем наличие жанра у игры
    if (!req.body.categories || req.body.categories.length === 0) {
        res.setHeader("Content-Type", "application/json");
        res
            .status(400)
            .send(JSON.stringify({ message: "Выбери хотя бы одну категорию" }));
    } else {
        next();
    }
};

const checkIfUsersAreSafe = async (req, res, next) => {
    // Проверим, есть ли users в теле запроса
    if (!req.body.users) {

        next();
        return;
    }
    // Cверим, на сколько изменился массив пользователей в запросе
    // с актуальным значением пользователей в объекте game
    // Если больше чем на единицу, вернём статус ошибки 400 с сообщением
    
    if (req.body.users.length - 1 === req.game.users.length) {
        next();
        return;
    } else {
        res.setHeader("Content-Type", "application/json");
        res
            .status(400)
            .send(
                JSON.stringify({
                    message:
                        "Нельзя удалять пользователей или добавлять больше одного пользователя",
                })
            );
    }
};

const checkIsGameExists = async (req, res, next) => {
    const isInArray = req.gamesArray.find((game) => {
        logger.info(`${req.body}`);
        return req.body.link === game.link;
    });
    if (isInArray) {
        res.setHeader("Content-Type", "application/json");
        res
            .status(400)
            .send(
                JSON.stringify({ message: "Игра с таким гейм-плеем уже существует" })
            );
    } else {
        next();
    }
};


module.exports = {
    checkEmptyFields,
    checkIfCategoriesAvaliable,
    checkIfUsersAreSafe,
    checkIsGameExists,
    checkIsVoteRequest,
};
