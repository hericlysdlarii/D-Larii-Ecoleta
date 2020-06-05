const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database("./src/database/database.db");

module.exports = db

/*
db.serialize(() => {

  //Create table
  db.run(`
    CREATE TABLE IF NOT EXISTS places (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      image TEXT,
      name TEXT,
      address TEXT,
      address2 TEXT, 
      state TEXT,
      city TEXT,
      itens TEXT
    );
  `)

  //Insert data
  const query = `
    INSERT INTO places (
      image,
      name, 
      address,
      address2,
      state,
      city,
      itens
    ) VALUES (?,?,?,?,?,?,?);
  `

  const values = [
    "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "Papersider",
    "Guilherme Gembala, Jardim América",
    "Nº 260",
    "Santa Catarina",
    "Rio do Sul",
    "Papéis, Papelão"
  ]

  function afterInsertData(err) {
    if(err){
      return console.log(err)
    }
    console.log("Cadastrado com sucesso!")
    console.log(this)
  }

  //db.run(query, values, afterInsertData)

  //Query data
  /* db.all(`SELECT * FROM places`, function(err, rows) {
    if(err){
      return console.log(err)
    }
    console.log("Seus registros:")
    console.log(rows)
  }) */

  //Delete data
  /* db.run(`DELETE FROM places WHERE id = ?`, [3], function(err){
    if(err){
      return console.log(err)
    }
    console.log("Registro deletado!")
  }) */

//})