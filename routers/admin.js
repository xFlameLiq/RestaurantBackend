const express = require('express');
const router = express.Router();
const admin = require('../controllers/admin');
const AdminSchema = require('../validations/admin');
const validator = require('../middlewares/validator');
const jwtValidator = require('../middlewares/jwt');

router.get('/admins',jwtValidator ,admin.getAdmin);
router.get('/admins/:id',jwtValidator ,validator.params(AdminSchema.paramsSchema) ,admin.getAdminById);
router.post('/admins', validator.body(AdminSchema.createAdminSchema), admin.insertAdmin);
router.put('/admins/:id',jwtValidator ,validator.params(AdminSchema.paramsSchema), validator.body(AdminSchema.updateAdminSchema), admin.updateAdmin);
router.delete('/admins/:id', jwtValidator,validator.params(AdminSchema.paramsSchema), admin.deleteAdmin);

module.exports = router;
