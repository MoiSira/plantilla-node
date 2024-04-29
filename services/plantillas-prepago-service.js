class PlantillasPrepagoService {
    constructor(plantillasPrepagoModel, logsModel){
        this.plantillasPrepagoModel = plantillasPrepagoModel;
        this.logsModel = logsModel;
    }

    async plantillas_prepago_consult() {
        try {
            const plantillasPrepago = await this.plantillasPrepagoModel.PlantillasPrepago.findAll();
            return plantillasPrepago;
        } catch (error) {
            console.error('Error al obtener las plantillas Prepago ', error)
        }
    }
}

module.exports.PlantillasPrepagoService = PlantillasPrepagoService;