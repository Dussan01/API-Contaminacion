import mongoose from "mongoose";



mongoose.connect("mongodb://localhost/semillero", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
        useCreateIndex: true
    })
    .then(db => console.log('Db esta conectadad'))
    .catch(error => console.log(error))



// try {

//     // mongoose.connect(
//     //     `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.ymr7x.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`,{
//     //     useNewUrlParser: true,
//     //     useUnifiedTopology: true,
//     //     useFindAndModify: true,
//     //     useCreateIndex: true
//     // }
//     // ).then(db => console.log('Base de datos conectada')).catch(error => console.log(error))

// } catch (error) {
//     console.log(error)    
// }