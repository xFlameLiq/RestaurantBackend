const express = require("express");
const router = express.Router();
const jwtValidator = require('../middlewares/jwt');

const {
  getAliments,
  getAlimentByID,
  insertAliment,
  updateAliment,
  deleteAliment,
} = require("../controllers/aliment");
const validator = require("../middlewares/validator");
const {
  paramsSchema,
  createAlimentSchema,
  updateAlimentSchema,
} = require("../validations/aliment");

router.get("/aliment", getAliments);
router.get("/aliment/:id", validator.params(paramsSchema), getAlimentByID);
router.post("/aliment",jwtValidator, validator.body(createAlimentSchema), insertAliment);
router.put(
  "/aliment/:id",jwtValidator,
  validator.params(paramsSchema),
  validator.body(updateAlimentSchema),
  updateAliment
);
router.delete("/aliment/:id",jwtValidator, validator.params(paramsSchema), deleteAliment);

module.exports = router;
