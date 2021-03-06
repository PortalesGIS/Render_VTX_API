const { Router } = require("express");
const { check } = require("express-validator");
const { addPointCounter, getCounterList, getCounterListArko } = require("../controllers/counter");
const { validateCampos } = require("../middlewares/validateCampos");

const router = Router();

router.get("/list",getCounterList)
router.get("/list/arko",getCounterListArko)

router.post('/add/:id',[
    validateCampos
],addPointCounter)



module.exports = router;