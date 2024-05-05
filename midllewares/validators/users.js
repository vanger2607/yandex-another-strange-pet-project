const checkEmptyNameAndEmailAndPassword = async (req, res, next) => {
    if (!req.body.username || !req.body.email || !req.body.password) {
        res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Введите имя, email и пароль" }));
    } else {
        next();
    }
};
const checkEmptyNameAndEmail = async (req, res, next) => {
    if (!req.body.username || !req.body.email) {
        res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Введите имя и email" }));
    } else {
        next();
    }
};
module.exports = {checkEmptyNameAndEmailAndPassword, checkEmptyNameAndEmail};
