const express = require('express');
const router = express.Router();
const admin = require('../controllers/admin');
const { paramsSchema, createAdminSchema, updateAdminSchema } = require('../validations/admin');
const validator = require('../middlewares/validator');

router.get('/admins', admin.getAdmin);
router.get('/admins/:id', validator.params(paramsSchema), admin.getAdminById);
router.post('/admins', validator.body(createAdminSchema), admin.insertAdmin);
router.put('/admins/:id', validator.params(paramsSchema), validator.body(updateAdminSchema), admin.updateAdmin);
router.delete('/admins/:id', validator.params(paramsSchema), admin.deleteAdmin);

module.exports = router;
