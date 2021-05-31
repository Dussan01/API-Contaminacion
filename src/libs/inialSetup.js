import Role from "../models/Role";


export const createRoles = async() => {
    try {
        const count = await Role.estimatedDocumentCount();
        if (count > 0) return

        const values = await Promise.all([
            new Role({ name: "admin" }).save(),
            new Role({ name: "usuario" }).save(),
        ]);
    } catch (error) {
        console.log(error);
    }
}

// export const createTipos = async() => {
//     try {
//         const count = await Tipo.estimatedDocumentCount();
//         if (count > 0) return

//         const values = await Promise.all([
//             new Tipo({ name: "WI-FI" }).save(),
//             new Tipo({ name: "Bluetooth" }).save(),
//             new Tipo({ name: "2G" }).save(),
//             new Tipo({ name: "3G" }).save(),
//             new Tipo({ name: "4G" }).save(),
//             new Tipo({ name: "5G" }).save()
//         ]);
//     } catch (error) {
//         console.log(error);
//     }
// }