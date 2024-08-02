var http=require('http')

http.createServer((req,res)=>{
    res.write("Welcome to BE")
    res.end()
}).listen(8080)
