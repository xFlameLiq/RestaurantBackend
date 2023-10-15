
const express = require('express');
const router = express.Router();
const { getEmployees, getEmployeeById, insertEmployee, updateEmployee, deleteEmployee } = require('../controllers/employee');

router.get('/employee', getEmployees);
router.get('/employee/:id', getEmployeeById);
router.post('/employee', insertEmployee);
router.put('/employee/:id', updateEmployee)
router.delete('/employee/:id', deleteEmployee);

module.exports = router
