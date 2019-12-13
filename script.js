var express = require('express')
var bodyParser = require('body-parser')
var multer = require('multer')

//SERVIDOR PRINCIPAL
var app = express()
var puerto1 = process.env.PORT || 3000

app.use(express.static('./recursos-estaticos'))

app.get("/busqueda", async function(consulta, respuesta) {
    await db.collection("tiposReciclados")
    findOne( {categoria: c.params.buscar }) /*NO ENTIENDO CÓMO BUSCAR*/
})

app.listen(puerto1, function() {
    console.log(`Servidor escuchando en ${puerto1}`)

})

//PARA AGREGAR IDEAS DE RECICLADO
var upload_img = multer({ dest: "recursos-estaticos/secciones/images" })
var upload_txt = multer({ dest: "recursos-estaticos/secciones/text" }) 

app.post("/index", upload_img.single("foto_ejemplo"), upload_txt.single("newIdea"), function(consulta, respuesta){
    db.collection.push({ 
        newIdea: consulta.body.newIdea,
        foto_ejemplo: "/images" + consulta.file.filename
    })
        respuesta.status(201).redirect("/reciclaje-carton")
})

//base de datos con info que ya tengo

var MongoClient = require('mongodb').MongoClient;

var url = "mongodb+srv://dbNataliaPetito:dbRatainmunda@cluster0-fusyk.mongodb.net/test?retryWrites=true&w=majority";

var db_name = "reciclados";

MongoClient.connect(url, async function(err, client) {
    console.log("Connected successfully to server");
    var db = client.db(db_name);
    await db.collection("tiposReciclado").insertMany([
        { categoria: "vidrio",
            ideas: ["ejemplo1", "ejemplo2"] },
        { categoria: "carton",
            ideas: ["ejemplo1", "ejemplo2"] },
        { categoria: "plastico",
            ideas: ["ejemplo1", "ejemplo2"] },
        { categoria: "papel",
            ideas: "ejemplo1"}
    ]
 )
    
    var tiposReciclado = await db.collection("tiposReciclado").find().toArray() 
    console.log("Listado: " + JSON.stringify(tiposReciclado))
//no estoy segura de para qué me serviría esto del find.toArray; en la terminal..
//..me da resultado, pero ¿qué utilidad tiene para algún servidor?


    client.close(); 
})

//quiero agregar base de datos con info que carga el cliente, que pueda.. 
//..modificarlo o eliminar y se actualiza el contenido de la pag inmediatamente..
//..sin tener que hacer refresh

