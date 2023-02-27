const express=require('express');
const app=express();

//const dataRoutes = require('./Router/data.js'); //  importing the file from router folder


const bodyParser=require('body-parser');
const router =require('./routes/routers.js');

var cors = require('cors');

const sequelize = require('./util/database.js');


const User = require('./models/createtable.js');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(router);


// without using routing
//   app.post('/expensetable/add-user',async(req,res,next)=>{          
//             const expense = req.body.expense;
//             const discription = req.body.discription
//             const category =  req.body.category;
//           const data = await User.create({expense:expense, discription: discription, category: category});
//            res.status(201).json({details: data})

//            })

//  app.get('/expensetable/get-user', async(req, res, next)=>{

//     const users = await User.findAll();
//     res.status(200).json({details: users})
//  }) 

//  app.delete('/expensetable/delete-user/:id', async(req, res) =>{
//     //console.log(req.params.id)
//   var user_Id = (req.params.id);
//   //console.log(user_Id);
//   //console.log(user_Id.typeOf())
//   await User.destroy({where: {id:user_Id}})
//     res.status(200);
//  })


sequelize.sync().then((result)=>{
    console.log("-------"+result);
    app.listen(7000);
}).catch(err=>{
    console.log(err);
});