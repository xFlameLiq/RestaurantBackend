const express = require("express");
const router = express.Router();
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
} = require("../validations/employee");

router.get("/employee", getEmployees);
router.get("/employee/:id", validator.params(paramsSchema), getEmployeeById);
router.post("/employee", validator.body(createEmployeeSchema), insertEmployee);
router.put(
  "/employee/:id",
  validator.params(paramsSchema),
  validator.body(updateEmployeeSchema),
  updateEmployee
);
router.delete("/employee/:id", validator.params(paramsSchema), deleteEmployee);

module.exports = router;
