class RolesService {
    constructor(rolesModel){
        this.rolesModel = rolesModel;
    }

    async findAll() {
        try {
            const roles = await this.rolesModel.Roles.findAll();
            return roles;
        } catch (error) {
            console.error('Error al obtener los roles ', error)
        }
    }
}

module.exports.RolesService = RolesService;