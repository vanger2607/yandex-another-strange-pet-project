const checkIsCategoryExists = async (req, res, next) => {
    // Среди существующих в базе категорий пытаемся найти категорию с тем же именем,
    // с которым хотим создать новую категорию
    const isInArray = req.categoriesArray.find((category) => {
        return req.body.name === category.name;
    });
    // Если нашли совпадение, то отвечаем кодом 400 и сообщением
    if (isInArray) {
        res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Категория с таким названием уже существует" }));
    } else {
        // Если категория, которую хотим создать, действительно новая, то передаём управление дальше
        next();
    }
};
const checkIfCategoriesAvaliable = async (req, res, next) => {
    if (!req.body.categories || req.body.categories.length === 0) {
        res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Выберите хотя бы одну категорию" }));
    } else {
        next();
    }
};
module.exports = { checkIsCategoryExists, checkIfCategoriesAvaliable }
