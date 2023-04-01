const express = require("express");
const app = express();

const { Client } = require('pg')

const obtenerUsuarios = async ()  => {

  const client = new Client({
  
    user: 'usuarios_s6zc_user',
    host: 'postgres://usuarios_s6zc_user:39oFrRW6QCuw8eqw6tYAslTTYfF53hfm@dpg-cgk8970rddleudtf32ng-a.oregon-postgres.render.com/usuarios_s6zc',
    database: 'usuarios_s6zc',
    password: '39oFrRW6QCuw8eqw6tYAslTTYfF53hfm',
    port: 5432,

  });

  client.connect();
  
  client.query('SELECT * FROM usuarios').then(res => {
  
    const result = res.rows[0].message;
  
  });

  return result;

}

obtenerUsuarios().then((result)  => {

  console.log(result);

});

app.get('/', (req, res) => {

  res.sendFile('./static/iniciar_sesion.html', {

      root: __dirname

  });

});

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

