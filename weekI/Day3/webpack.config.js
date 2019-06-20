const path=require('path');


module.exports={
    entry:"./events.js",
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    }
}