module.exports = function(err, req, res, next){
    res.status(500).json({
        message: "Ocurrió un error inesperado",
        messageDev: "Hubo un error no manejado internamente en el código",
        code: "500",
        error: "ERR_UNKNOWN",
        details: err
    });
    
};