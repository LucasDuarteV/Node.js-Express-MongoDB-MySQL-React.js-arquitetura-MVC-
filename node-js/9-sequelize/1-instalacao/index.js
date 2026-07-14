const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn')

const User = require('./models/User')
const Adress = require('./models/Adress')

const app = express()

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

User.hasOne(Adress)
Adress.belongsTo(User)

app.use(express.urlencoded({
  extended: true,
}))

app.use(express.json())

app.use(express.static('public'))


app.get('/users/create', (req,res)=>{
  res.render('adduser')
})


app.post('/users/create', async(req,res)=>{

  const name = req.body.name
  const occupation = req.body.occupation

  let newsletter = req.body.newsletter

  if(newsletter == 'on'){
    newsletter = true
  }else{
    newsletter = false
  }

  await User.create({
    name,
    occupation,
    newsletter
  })

  res.redirect('/')
})


app.get('/', async(req,res)=>{

  const users = await User.findAll({
    raw:true
  })

  res.render('home',{
    users
  })

})


app.get('/users/:id', async(req,res)=>{

  const id = req.params.id

  const user = await User.findOne({
    raw:true,
    where:{
      id:id
    }
  })

  res.render('userview',{
    user
  })

})


app.get('/users/edit/:id', async(req,res)=>{

  const id = req.params.id

  const user = await User.findOne({
    where:{
      id:id
    },
    include: Adress
  })

  res.render('useredit',{
    user:user.get({plain:true})
  })

})


app.post('/users/update', async(req,res)=>{

  const id = req.body.id
  const name = req.body.name
  const occupation = req.body.occupation

  let newsletter = req.body.newsletter

  if(newsletter === 'on'){
    newsletter = true
  }else{
    newsletter = false
  }

  await User.update({
    name,
    occupation,
    newsletter
  },{
    where:{
      id:id
    }
  })

  res.redirect('/')

})


app.post('/users/delete/:id', async(req,res)=>{

  const id = req.params.id

  await User.destroy({
    where:{
      id:id
    }
  })

  res.redirect('/')

})


app.post('/adress/create', async(req,res)=>{

  console.log(req.body)

  const UserId = req.body.UserId
  const street = req.body.street
  const number = req.body.number
  const city = req.body.city

  await Adress.create({
    UserId,
    street,
    number,
    city
  })

  res.redirect(`/users/edit/${UserId}`)

})


conn
.sync()
//.sync({force:true})
.then(()=>{

  app.listen(3000,()=>{

    console.log('Servidor rodando na porta 3000')

  })

})
.catch(err=>console.log(err))