const newman = require ('newman'); 
require('dotenv').config(); 

newman. run ({
    collection :`https://api.postman.com/collections/37996569-6ede7244-13ea-46cd-bd69-4ec3f10669d5?access_key=${process.env.secretKey}`,
    //collection:require('./collection/collection.json'),
    reporters: 'htmlextra', 
    iterationCount : 1, 
    reporter: { 
        htmlextra: { 
            export:'./Reports/report.html',
        }
    }
}, function (err) { 
    if (err) { throw err; }
    console.log('collection run complete!');
    
});