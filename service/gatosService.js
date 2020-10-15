const connection = require('../config/db');
let gatosService = {};



gatosService.addGatos = async (params) =>{
    try {
        let {name, image, score} = params
        let queryGatos = `Insert into cats (name, image, score) values (?,?,?)`;
        let dataValues = [name, image, score];
        return await new Promise((resolve,reject)=>{
            connection.query(queryGatos, dataValues, (err, dataAddGatos) => {
                if (err) reject(err);
                else{
                    if (dataAddGatos.affectedRows){
                        let queryGatos = `select * from cats  where id = ${dataAddGatos.insertId}`;
                        connection.query(queryGatos, (err, dataGatos) => {
                            if (err) reject(err);
                            else{
                                resolve(dataGatos[0]);                                
                            }
                        });
                    }
                }
            });
        });    
    } 
    catch (e) {
        throw Error('cats could not be saved');
    }
};

gatosService.updateGatos = async (id, params) =>{
    try{
        let {name, image, score} = params
        let queryGatos = `update cats set name=?, image=?, score=? where cats.id = ${id}`;
        let dataValues = [name, image, score];
        return await new Promise ((resolve,reject)=>{
            connection.query(queryGatos, dataValues, (err, dataGatos) => {
                if (err) reject(err);
                else{
                    if (dataGatos.affectedRows){
                        let queryGatos = `select * from cats  where id = ${id}`;  
                        connection.query(queryGatos, (err, dataGatos) =>{
                            if (err) reject(err);
                            else{
                                resolve(dataGatos[0]) 
                            }
                        })
                    }
                }
            })

        })
    }
    catch (e) {
        throw Error ('cats could not be updated')
    }

}


gatosService.deleteGatos = async (query) =>{
    try {
        let queryGatos = `delete from cats where id = ${query}`;
        return await new Promise((resolve,reject)=>{
            connection.query(queryGatos, (err, dataGatos) => {
                if (err) reject(err);
                else{
                    resolve(dataGatos.affectedRows);                     
                }
            });
        })    
    } 
    catch (e) {
        throw Error('Equipment could not be removed');
    }
 };





module.exports = gatosService;