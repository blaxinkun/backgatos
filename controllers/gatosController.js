const gatosService = require ('../service/gatosService');

let gatosController = {};


gatosController.addGatos = async (req, res) =>{
    try {
        console.log(req)
        let gatos = await gatosService.addGatos(req.body);
        if (gatos){
            return res.status(200).json({data: gatos});
        }
        return res.status(400).json({message: "gatos could not be saved"});
    } 
    catch (e) {        
        return res.status(400).json({message: e.message });     
    } 
};

gatosController.updateGatos = async (req, res) => {
    try {
        let gatos = await gatosService.updateGatos(req.params.id, req.body);
        if (gatos){
            return res.status(200).json({data: gatos});
        }
        return res.status(404).json({message: "gatos could not be updated"});
    } 
    catch (e) {
        return res.status(400).json({message: e.message });
    } 
};

gatosController.deleteGatos = async (req, res) => {
    try {
        let gatos = await gatosService.deleteGatos(req.params.id, req.body);
        if (gatos){
            return res.status(200).json({data: gatos});
        }
        return res.status(404).json({message: "gatos could not be deleted"});
    } 
    catch (e) {
        return res.status(400).json({message: e.message });
    } 
};








module.exports = gatosController