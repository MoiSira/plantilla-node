const moment = require('moment');

class PlantillasTdcService {
    constructor(plantillasTdcModel, logsModel){
        this.plantillasTdcModel = plantillasTdcModel;
        this.logsModel = logsModel;
    }

    async plantillas_tdc_create(tdcData) {
        try {
            await this.plantillasTdcModel.PlantillasTdc.create({
                id_cod_respuesta: tdcData.id_cod_respuesta,
                mensaje: tdcData.mensaje
            });
            console.log(`Plantilla TDC creada`);
            await this.logsModel.Logs.create({
                accion: `Plantilla TDC creada`,
                fecha: moment().format('YYYY-MM-DD HH:mm:ss'), // fecha actual
                usuario: tdcData.usernameLog
            });
            return {'Estatus': `Plantilla TDC creada`};
        } catch (error) {
            console.error(error)
        }
    }

    async plantillas_tdc_consult() {
        try {
            const plantillasTdc = await this.plantillasTdcModel.PlantillasTdc.findAll();
            return plantillasTdc;
        } catch (error) {
            console.error(error)
        }
    }

    async plantillas_tdc_update(tdcData) {
        let columns = {};
        try {
            if (tdcData.id_cod_respuesta && tdcData.mensaje) {
                columns.id_cod_respuesta = tdcData.id_cod_respuesta;
                columns.mensaje = tdcData.mensaje;
            } else if (tdcData.id_cod_respuesta) {
                columns.id_cod_respuesta = tdcData.id_cod_respuesta;
            } else if (tdcData.mensaje) {
                columns.mensaje = tdcData.mensaje;
            }
            await this.plantillasTdcModel.PlantillasTdc.update(
                columns,
                {
                    where: {
                        id_mensaje: tdcData.id_mensaje,
                    },
                },
            );
            console.log(`Plantilla TDC ${tdcData.id_mensaje} actualizada`);
            await this.logsModel.Logs.create({
                accion: `Plantilla TDC ${tdcData.id_mensaje} actualizada`,
                fecha: moment().format('YYYY-MM-DD HH:mm:ss'), // fecha actual
                usuario: tdcData.usernameLog
            });
            return {'Estatus': `Plantilla TDC ${tdcData.id_mensaje} actualizada`};
        } catch (error) {
            console.error(error)
        }
    }

    async plantillas_tdc_delete(tdcData) {
        try {
            await this.plantillasTdcModel.PlantillasTdc.destroy({
                where: {
                    id_mensaje: tdcData.id_mensaje
                }
            });
            console.log(`Plantilla TDC ${tdcData.id_mensaje} eliminada`);
            await this.logsModel.Logs.create({
                accion: `Plantilla TDC ${tdcData.id_mensaje} eliminada`,
                fecha: moment().format('YYYY-MM-DD HH:mm:ss'), // fecha actual
                usuario: tdcData.usernameLog
            });
            return {'Estatus': `Plantilla TDC ${tdcData.id_mensaje} eliminada`};
        } catch (error) {
            console.error(error)
        }
    }
}

module.exports.PlantillasTdcService = PlantillasTdcService;