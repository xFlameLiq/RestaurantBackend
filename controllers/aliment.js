const {
  update,
  deleteById,
  findById,
  findAll,
  createAliment,
} = require("../services/aliment");

exports.getAliments = async function (request, response) {
  try {
    const aliment = await findAll();
    response.status(200).json(aliment);
  } catch (e) {
    response.status(500).json({
      message: e.message,
      messageDev: "No se han podido leer los datos",
      code: "500",
      error: "ERR_READ_ALIMENT",
    });
    console.error(">>> OH, error");
    console.error(e);
  }
};

exports.getAlimentByID = async function (request, response) {
  try {
    const id = request.params.id;
    const aliment = await findById(id);
    response.status(200).json(aliment);
  } catch (e) {
    response.status(500).json({
      message: e.message,
      messageDev: "No se ha podido leer los datos",
      code: "500",
      error: "ERR_READ_ALIMENT",
    });
    console.error(">>> OH, error");
    console.error(e);
  }
};

exports.insertAliment = async function (request, response) {
  const { name, type, price, description } = request.body;
  try {
    const aliment = await createAliment({ name, type, price, description });
    response.status(201).json(aliment);
  } catch (e) {
    response.status(500).json({
      message: e.message,
      messageDev: "No se ha podido crear el alimento",
      code: "500",
      error: "ERR_CREATE_ALIMENT",
    });
    console.error(">>> OH, error");
    console.error(e);
  }
};

exports.updateAliment = async function (request, response) {
  try {
    const id = request.params.id;
    const content = request.body;
    const aliment = await update(id, content);
    response.status(204).json(aliment);
  } catch (e) {
    response.status(500).json({
      message: e.message,
      messageDev: "No se ha podido actualizar el alimento",
      code: "500",
      error: "ERR_UPDATE_ALIMENT",
    });
    console.error(">>> OH, error");
    console.error(e);
  }
};

exports.deleteAliment = async function (request, response) {
  try {
    const id = request.params.id;
    await deleteById(id);
    response.status(204).end();
  } catch (e) {
    response.status(500).json({
      message: e.message,
      messageDev: "No se ha podido eliminar el alimento",
      code: "500",
      error: "ERR_DELETE_ALIMENT",
    });
    console.error(">>> OH, error");
    console.error(e);
  }
};
