const db = require('../dbms');

function register(req,res){
  const user = {
    firstname: req.body.fname,
    lastname: req.body.lname,
    email: req.body.email,
    password: req.body.password
  }

  db.query('INSERT INTO user (firstName, lastName, email, password) VALUES (?, ?, ?, ?)', 
    [user.firstname, user.lastname, user.email, user.password],
    async (err, result) => {
      try {
        console.log(result)
        res.status(200).send('User Registered');
      }
      catch(err) {
        console.error(err);
        res.status(500).send('Server Error');
      }
    }
  )
}

module.exports = register;