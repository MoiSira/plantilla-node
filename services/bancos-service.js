const moment = require('moment');

class BancosService {
    constructor(bancosModel, logsModel){
        this.bancosModel = bancosModel;
        this.logsModel = logsModel;
    }

    async bancos_consult() {
        try {
            const bancos = await this.bancosModel.Banco.findAll();
            return bancos;
        } catch (error) {
            console.error('Error al obtener los bancos ', error)
        }
    }

    async bancos_insert(bancoData) {
        try {
            const bancos = await this.bancosModel.Banco.findOne({ where: { cod_banco: bancoData.cod_banco } });
            if (bancos) {
                console.log(`El banco ${bancoData.banco} ya existe`);
                return {'Estatus': `El banco ${bancoData.banco} ya existe`};
            } else {
                await this.bancosModel.Banco.create({
                    cod_banco: bancoData.cod_banco,
                    banco: bancoData.banco
                });
                console.log(`Banco ${bancoData.banco} creado`);
                await this.logsModel.Logs.create({
                    accion: `Banco ${bancoData.banco} creado`,
                    fecha: moment().format('YYYY-MM-DD HH:mm:ss'), // fecha actual
                    usuario: bancoData.usernameLog
                });
                return {'Estatus': `Banco ${bancoData.banco} creado`};
            }
        } catch (error) {
            console.error('Error al obtener los bancos ', error)
        }
    }
}

module.exports.BancosService = BancosService;