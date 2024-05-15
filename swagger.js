const swaggerAutogen = require('swagger-autogen')({openapi:'3.1.0'});

const doc = {
    info: {
        version: "1.0.0",
        title: "MVC Example",
        description: "showing how to use mvc"
    },
    servers: [
        {
            url: 'http://localhost:3000'
        }
    ],
    components:{
        securitySchemes:{
            bearerAuth:{
                type: 'http',
                scheme: 'bearer',
                bearerFormat:'JWT'
            }
        }
    }
    
};

const outputFile = './swagger-output.json';
const endpointFiles = ['./app.js'];

swaggerAutogen(outputFile, endpointFiles, doc).then(()=>{
    require('./');
})