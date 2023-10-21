const connect = require('connect');
const servestatic = require('serve-static');

connect().use(servestatic(__dirname)).listen(3000,function (){
    console.log('server running');
})