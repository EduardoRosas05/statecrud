import db from 'database/models';

export default function handler(req, res) {
    switch(req.method){
        case 'POST':
            return addCustomers(req, res);

        case 'GET':
            return listCustomers(req, res);

        case 'DELETE':
            return deleteUser(req, res);

        case 'PUT':
            return updateUser(req,res);

        default:
            res.status(400).json({error: true, message:'Petición errónea'});

    }
  }

  const listCustomers = async (req, res) => {
    try{
        //los datos vienen del req.body
        console.log(req.body);
        //guardar cliente
    const states1 = await db.state.findAll({
        include:['Municipios'],
    });
        
        return res.json(states1)
    
    }catch(error){
        console.log(error);
        let errors = []

        if(error.errors){
            //extrae la info
            errors = error.errors.map((item) => ({
                error: item.message, 
                field: item.path,
            }));
        }

        return res.status(400).json({
            message: `Ocurrió un error al procesar la petición: ${error.message}`,
            errors,
        })
    }
}

const updateUser = async (req,res) => {

    try{

        let {id} = req.query;
        await db.state.update({...req.body},
            {
            where :{
                id : id
            },

        })

        res.json({
            message: 'El estado fue actualizado'
        })

      }
         catch (error){
            res.status(400).json({ error: "error al momento de actualizar el estado"})
    }
}



const deleteUser = async (req,res) => {

    try{
      const {id} = req.query;
      
        await db.state.destroy({
            where: {
                id: id
            }
        })

        res.json({
            message: 'El estado a sido eliminado'
        })

      }
         catch (error){
            res.status(400).json({ error: "error al momento de borrar el estado"})
    }
}

  
const addCustomers = async (req, res) => {
    try{
        //los datos vienen del req.body
        console.log(req.body);
        //guardar cliente
        const customer = await db.state.create({...req.body});


        res.json({
            customer,
            message: 'El estado fue agregado correctamente'
        })
    }catch(error){
        console.log(error);
        let errors = []

        if(error.errors){
            //extrae la info
            errors = error.errors.map((item) => ({
                error: item.message, 
                field: item.path,
            }));
        }

        return res.status(400).json({
            message: `Ocurrió un error al procesar la petición: ${error.message}`,
            errors,
        })
    }
}

