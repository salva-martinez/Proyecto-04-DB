const db = require("../models");
const loans = db.loans;

const LoansControllers = {};

LoansControllers.createLoan = async (req, res) => {

    try {
        let data = req.body;

        let resp = await loans.create({
            fechaloans: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
            userId: data.id_user,
            movieId: data.id_movie,
            showId: data.id_show
        })
        res.status(200).json({
            resp,
            user: data.id_user,
            message: "Done"
        })

    } catch (error) {
        res.json({ message: "Error" })
    }


}

module.exports = LoansControllers;