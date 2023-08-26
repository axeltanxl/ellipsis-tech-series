const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const { PORT } = require('../utils/config');

require("dotenv").config();

app = express();

const options = {
  definition: {
    openapi: "3.0.3",
    info: {
      title: "ELLIPSIS-TECH-SERIES API with Swagger",
      version: "0.1.0",
      description:
        "This is the APIs that our project for the ELLIPSIS-TECH-SERIES and documented with Swagger"
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
      },
    ], 
    securityDefinitions: {
      BasicAuth: {
        type: "bearer"
      },
    }, 
    security: {
      basicAuth: [],
    }
  },
  apis: ["./swaggerDoc/*.yml"],
};

const specs = swaggerJsdoc(options);

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);

module.exports = app;