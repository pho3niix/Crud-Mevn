const marioModel = require('../models/defaultDB');

const control = {};

control.greet = (req, res)=>{
    res.send("hola desde controladores");
};

/** Insertar nuevo registro */
control.newMario = (req, res)=>{
    const newCharacther = new marioModel(
        {
            name: req.body.name,
            power: req.body.power,
            life: req.body.life
        }
    );
    newCharacther.save(
        (err, Project)=>{
            if(err){
                return res.status(400).json(
                    {
                        success: false,
                        message: 'Could not save new characther',
                        err
                    }
                );
            }else{
                return res.status(200).json(
                    {
                        success: true,
                        message: 'Successfully save new project',
                        Project
                    }
                );
            }
        }
    );
};

/** Mostrar registros almacenados en la base de datos */
control.listMario = (req, res)=>{
    marioModel.find({}).sort({_id: -1}).exec((err, Projects)=>{// sort sirve para traer los ultimos registros insertados
        if(err){
            res.send(err);
        }else{
            res.send(Projects);
        }
    });
};

/** Buscar registro  */
control.findChar = (req, res)=>{
    marioModel.findById(
        {
            _id: req.params.id
        }
    ).exec((err, char)=>{
        if(err){
            return res.send(err)
        }else{
            return res.status(200).json(
                {
                    char
                }
            )
        }
    })
}

/** Actulizar registros por ID*/
control.upWorld = (req, res)=>{
    const updateWorld = {
        name: req.body.name,
        power: req.body.power,
        life: req.body.life
    };
    marioModel.findOneAndUpdate(
        {
            _id: req.body.id
        },
        updateWorld, {new: true}, (err, world)=>{
            if(err){
                return res.status(400).json(
                    {
                        success: false,
                        message: "could not update"
                    }
                );
            }else{
                return res.status(200).json(
                    {
                        status: true,
                        message: "Successfully updated",
                        world
                    }
                );
            }
        }
    );
};

/** Borrar registro por ID en la base de datos */
control.delWorld = (req, res)=>{
    marioModel.deleteOne(
        {
            _id: req.params.id
        },
        (err)=>{
            if(err){
                return res.status(400).json(
                    {
                        success: false,
                        message: "could not delete"
                    }
                )
            }else{
                return res.status(200).json(
                    {
                        success: true,
                        message: "Successfully deleted"
                    }
                );
            }
        }
    );
};

module.exports = control;