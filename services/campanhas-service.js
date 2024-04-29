class CampanhasService {
    constructor(campanhasModel, logsModel){
        this.campanhasModel = campanhasModel;
        this.logsModel = logsModel;
    }

    async campanhas_consult() {
        try {
            const campanhas = await this.campanhasModel.Campanhas.findAll();
            return campanhas;
        } catch (error) {
            console.error('Error al obtener las campañas ', error)
        }
    }
}

module.exports.CampanhasService = CampanhasService;