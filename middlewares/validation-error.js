module.exports = function(err, req, res, next){
    if(err && err.error && err.error.isJoi){
        console.log(err);
        res.status(400).json({
            message: "Los datos de entrada son inválidos",
            messageDev: "Error en el middleware",
            code: "400",
            error: "ERR_VALIDATION",
            details: err.error.details
        });
    }
    else{
        next(err);
    }
};