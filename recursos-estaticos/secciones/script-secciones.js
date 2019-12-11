var http = require('http')
var fs = require('fs')
var puerto2 = 5500 //servidor2 - /vidrios-reciclaje
var puerto3 = 5501 //servidor3 - /plastico-reciclaje
var puerto4 = 5502 //servidor4 - /carton-reciclaje
var puerto5 = 5503 //servidor5 - /papel-reciclaje
var host = "127.0.0.1"

function leer_archivo(rutaArchivo) {
    return fs.readFileSync(rutaArchivo, 'utf-8')
}

//SERVERS PARA ./SECCIONES 

var servidor2 = http.createServer(function(cons, res) {
    if (cons.url === "/vidrios-reciclaje" && cons.method === "GET") {
        var v_r = leer_archivo("vidrio.html");
        res.setHeader('Content-type', 'text/html');
        res.end(v_r);
    }
    else {
        res.statusCode = 404 
        res.end("Algo anda mal, mmm")
    }
})

servidor2.listen(puerto2, function() {
    console.log(`Servidor escuchando en el puerto: ${puerto2}`)
})

var servidor3 = http.createServer(function(cons, res) {
    if (cons.url === "/plastico-reciclaje" && cons.method === "GET") {
        var pl_r = leer_archivo("plástico.html");
        res.end(pl_r)
    }
})

servidor3.listen(puerto3, function() {
    console.log(`Servidor escuchando en el puerto: ${puerto3}`)
})

var servidor4 = http.createServer(function(cons, res) {
    if (cons.url === "/carton-reciclaje" && cons.method === "GET") {
        var c_r = leer_archivo("carton.html");
        //res.setHeader('Content-type', 'text/html')
        res.end(c_r)
    }
})

servidor4.listen(puerto4, function() {
    console.log(`Servidor escuchando en el puerto: ${puerto4}`)
})

var servidor5 = http.createServer(function(cons, res) {
    if (cons.url === "/papel-reciclaje" && cons.method === "GET") {
        var p_r = leer_archivo("papel.html");
        res.end(p_r)
    }
})

servidor5.listen(puerto5, function() {
    console.log(`Servidor escuchando en el puerto: ${puerto5}`)
})


//Quiero que al hacer Click en el botón de "Vidrios" (en el index.html), se abra la página web /vidrios-reciclaje