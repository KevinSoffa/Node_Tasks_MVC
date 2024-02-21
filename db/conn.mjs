import { Sequelize } from "sequelize";

const sequelize = new Sequelize('nodemvc', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

try {
    sequelize.authenticate()
    console.log("Conectado ao MySQL")
} catch(error) {
    console.log(`Não foi possível conectar: ${error}`)
}

export default sequelize;