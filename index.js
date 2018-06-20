const express = require('express');
const app = express();


app.use(express.json());
 const users =[

   {id : 1, name : "suneel"},
   {id : 2, name : "rahul"},
   {id : 3, name : "ramesh"},
   {id : 4, name : "rakesh"},
   {id : 5, name : "manjesh"}
 ];


 //////
 app.get('/', (req, res)=>{

  res.send("hello word ");

 });



 /////

 app.get('/api/users', (req, res) =>{

 res.send(users);

});

/////
 app.get('/api/users/:id', (req, res) =>{

// res.send(req.params.id);
const user=users.find(c => c.id === parseInt(req.params.id));
if(!user)res.status(404).send('the user with the given id are not found');
res.send(user);

 });


//
 app.post('/api/users',(req, res) =>{


if( !req.body.name || req.body.name < 3 ) {
  res.status(400).send('name is required and should be minimum 3 character');
  return;
}


   const user ={
     id : users.length + 1,
     name : req.body.name
   };
   users.push(user);
   res.send(user);
 });

 app.listen(6061, () => console.log('listning on port 6061'));
