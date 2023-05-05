const db = require('../dbms');

function login(req,res){
  const user = {
    email: req.body.email,
    password: req.body.password,
  }

  db.query('SELECT * FROM user WHERE email = ? AND password = ?',
    [user.email, user.password],
    async (err, result) => {
      try{
        if(result.length>0){
          console.log(result)
          const user = result[0];
          res.status(200).send(user);
        } else {
          res.status(404).send('User Not Found');
        }
      } catch(err){
        console.error(err);
        res.status(500).send('Server Error');
      }
    }
  )
}

module.exports = login;