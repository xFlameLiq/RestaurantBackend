const Aliment = require("../models/aliment");

exports.findAll = async function () {
  return Aliment.findAll();
};

exports.findById =  function (id) {
  return Aliment.findByPk(id);
};

exports.createAliment =  function (data) {

  return Aliment.create(data);
};

exports.deleteById = async function (id) {
  const aliment = await Aliment.findByPk(id);
  await aliment.destroy();
};

exports.update = async function (id, data) {
  await Aliment.update(data, {
    where: {
      id: id,
    },
  });
};
