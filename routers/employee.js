const express = require("express");
const router = express.Router();
const jwtValidator = require('../middlewares/jwt');

const {
  getEmployees,
  getEmployeeById,
  insertEmployee,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/employee");
const validator = require("../middlewares/validator");
const {
  paramsSchema,
  createEmployeeSchema,
  updateEmployeeSchema
} = require("../validations/employee");

router.get("/employee",jwtValidator, getEmployees);
router.get("/employee/:id",jwtValidator, validator.params(paramsSchema), getEmployeeById);
router.post("/employee",jwtValidator, validator.body(createEmployeeSchema), insertEmployee);
router.put(
  "/employee/:id",jwtValidator,
  validator.params(paramsSchema),
  validator.body(updateEmployeeSchema),
  updateEmployee
);
router.delete("/employee/:id",jwtValidator, validator.params(paramsSchema), deleteEmployee);

module.exports = router;
