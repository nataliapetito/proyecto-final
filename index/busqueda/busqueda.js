var http = require('http')
var fs = require('fs')
var puerto = 4999 
var host = "127.0.0.1"


function leer_archivo(rutaArchivo) {
    return fs.readFileSync(rutaArchivo, 'utf-8')
}

//QUIERO QUE CONECTE CON EL METHOD POST DE index/index.html
var servidor = http.createServer(function(cons, res) {
    if (cons.url === "/busqueda" && cons.method === "POST") {
        var principal = leer_archivo("index/busqueda/busqueda.html");
        res.end(principal)
    }
    else {
        res.statusCode = 404
        res.end("Ándale, encuentra el error que quiero mostrar mi contenido wey")
    }
})

servidor.listen(puerto, function() {
    console.log(`Escuchando en http://${host}:${puerto}/`)
})
