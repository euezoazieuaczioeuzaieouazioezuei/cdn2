const fs =require("fs");
const b64=require("node:crypto")
console.log(b64)
fs.appendFileSync("./main.js",`const temp =document.createElement("div")
temp.innerHTML="ceci est une div ajoutée par texte"
temp.innerHTML+="<img src=\\\"base64:`)
fs.appendFileSync("./main.js",fs.readFileSync('./img.svg').toString("base64"))
fs.appendFileSync("./main.js",">\"\ndocument.getElementById('content').appendChild(temp)")