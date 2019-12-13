var express = require('express')
var bodyParser = require('body-parser')
var multer = require('multer')
var puerto1 = process.env.PORT || 3001


app.use(express.static('./recursos-estaticos'))

app.get("/busqueda", async function(consulta,respuesta) {
     await /*que espere contenido enviado en #search_button*/
})





