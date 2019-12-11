//base de datos con info que ya tengo-> PARA BUSQUEDA.HTML

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