import User from '../models/User';
import Role from '../models/Role';
import Marca from '../models/Marca';
import Modelo from '../models/Modelo';

export const getUsers = async (req, res) => {
    try {
        const infoUsuario = await User.find().populate("roles");
        res.status(200).json(infoUsuario)
    } catch (error) {
        res.status(400).json(error)
    }

}

export const createUser = async (req, res) => {
    try {
        const { email, nombres, apellidos, telefono, password, roles, universidad } = req.body;
        const newUser = new User({ email, nombres, apellidos, telefono, universidad, password: await User.encryptPassword(password), roles });
        if (roles) {
            const foundRoles = await Role.find({ name: { $in: roles } })
            newUser.roles = foundRoles.map(role => role._id)
        } else {
            const role = await Role.findOne({ name: "usuario" })
            newUser.roles = [role._id]
        }
        const userSaved = await newUser.save()
        res.status(201).json(userSaved);

    } catch (error) {
        res.status(400).json(error)
    }
}


export const getUserById = async (req, res) => {
    const user = await User.findById(req.params.userId).populate("roles");
    console.log(user)
    res.status(200).json(user);
    try {
       
    } catch (error) {
        res.status(400).json(error)
    }

}

export const updateUserById = async (req, res) => {
    const {
        email,
        nombres,
        apellidos,
        telefono,
        universidad,
        roles,
    } = req.body;
    console.log(req.params.userId)
    console.log(req.body)

    if (roles) {
        console.log(roles)
        const foundRoles = await Role.find({ name: { $in: roles } })
        console.log(foundRoles)
        const r = foundRoles.map(role => role._id)
        console.log(r)
        const updateUser = await User.findByIdAndUpdate(req.params.userId, {

            email,
            nombres,
            apellidos,
            universidad,
            telefono,
            roles: r,
        }, { new: true, useFindAndModify: false }).catch((e) => { console.log(e) })

        res.status(200).json(updateUser);
    } else {
        const role = await Role.findOne({ name: 'usuario' })
        const r = [role._id]
        const updateUser = await User.findByIdAndUpdate(req.params.userId, {

            email,
            nombres,
            apellidos,
            universidad,
            telefono,
            roles: r,
        }, { new: true, useFindAndModify: false })
        res.status(200).json(updateUser);
    }
}
export const deleteUserById = async (req, res) => {
    try {
        const { userId } = req.params
        await User.findByIdAndDelete(userId)
        res.status(204).json()

    } catch (error) {
        res.status(400).json(error)
    }

}





// CRUD MARCAS

export const createBrand = async (req, res) => {
    const { marca} = req.body;
    const newBrand = new Marca({ marca });
    const brandSaved = await newBrand.save()
    res.status(201).json(brandSaved);

    try {
       
    } catch (error) {
        res.status(400).json(error)
    }
}
export const getBrands = async (req, res) => {
    try {
        const infoBrands = await Marca.find().populate("roles");
        res.status(200).json(infoBrands)
    } catch (error) {
        res.status(400).json(error)
    }
}
export const getByIdBrand = async (req, res) => {
    const brand = await Marca.findById(req.params.brandId)
    console.log(brand)
    res.status(200).json(brand);
    try {
       
    } catch (error) {
        res.status(400).json(error)
    }
    
}
export const updateBrand = async (req, res) => {
   try {
    const {
        marca
     } = req.body;
     console.log(req.params.brandId)
     console.log(req.body)
     const updateUser = await Marca.findByIdAndUpdate(req.params.brandId, {
         marca
     }, { new: true, useFindAndModify: false }).catch((e) => { console.log(e) })
     res.status(200).json(updateUser);
   } catch (error) {
       res.status(400).json(error)
   }

}
export const deleteBrand = async (req, res) => {
    try {
        await Marca.findByIdAndDelete(req.params.brandId)
        res.status(204).json()

    } catch (error) {
        res.status(400).json(error)
    }
}



// CRUD MODELO

export const createModelo = async (req, res) => {
    const { marca, modelo} = req.body;
    const newModelo = new Modelo({ marca, modelo });
    const brandSaved = await newModelo.save()
    res.status(201).json(brandSaved);

    try {
       
    } catch (error) {
        res.status(400).json(error)
    }
}
export const getModelos = async (req, res) => {
    try {
        const infoModelos = await Marca.find().populate("roles");
        res.status(200).json(infoModelos)
    } catch (error) {
        res.status(400).json(error)
    }
}
export const getByIdModelo = async (req, res) => {
    const brand = await Marca.findById(req.params.brandId)
    console.log(brand)
    res.status(200).json(brand);
    try {
       
    } catch (error) {
        res.status(400).json(error)
    }
    
}
export const updateModelo = async (req, res) => {
   try {
    const {
        marca
     } = req.body;
     console.log(req.params.brandId)
     console.log(req.body)
     const updateUser = await Marca.findByIdAndUpdate(req.params.brandId, {
         marca
     }, { new: true, useFindAndModify: false }).catch((e) => { console.log(e) })
     res.status(200).json(updateUser);
   } catch (error) {
       res.status(400).json(error)
   }

}
export const deleteModelo = async (req, res) => {
    try {
        await Marca.findByIdAndDelete(req.params.brandId)
        res.status(204).json()

    } catch (error) {
        res.status(400).json(error)
    }
}
