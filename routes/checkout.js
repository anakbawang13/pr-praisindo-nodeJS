const express = require('express');
const router = express.Router();
const { Checkouts } = require("../models")
const { CheckoutsDet } = require("../models")
const validator = require("fastest-validator");
const v = new validator();
const verify = require("../middleware/verify");
// const checkoutsDet = require('../models/checkoutsDet');

router.post("/create", verify, async function (req, res, next) {
    const schema = {
        // kodebeli: "string",
        firstname: "string",
        lastname: "string",
        address1: "string",
        address2: "string",
        city: "string",
        state: "string",
        postalcode: "string|optional",
        country: "string|optional"
        // dataDet: checkoutsDet
    }

    // let checkoutsDet = await CheckoutsDet.create({
    //     kodebelidet: "string",
    //     name: "string",
    //     qty: "number",
    //     price: "number"
    // });

    const validate = v.validate(req.body, schema);
    if (validate.length) {
        return res.status(422).json(validate);
    }

    const checkouts = await Checkouts.create(req.body);
    return res.json({
        status: 201,
        message: "Success Insert Data",
        data: checkouts
    })
});

module.exports = router;