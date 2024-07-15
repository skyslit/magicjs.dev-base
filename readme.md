# Full Stack Web Application

## Table of Contents
- [System Requirements](#system-requirements)
- [Database Requirements](#database-requirements)
- [Environment Variables](#environment-variables)
- [Docker Build Instructions](#docker-build-instructions)

## System Requirements
Ensure your system meets the following requirements before setting up the project:

- **Operating System**: Windows 10, macOS Catalina, Linux (Ubuntu 18.04 or later)
- **Node.js**: v18.x or later
- **npm**: v8.9.x or later (usually installed with Node.js)

## Database Requirements
The project uses MongoDB as the primary database. Ensure the following:

- **MongoDB**: v7.x or later

## Environment Variables

|Key|Description|Required|Default Value
|-|-|-|-
|NODE_ENV|This variable should be set to "production" in order for some cloud services to function|Optional|development
|MONGO_CONNECTION_STRING|MongoDB connection string (if your application require MongoDB access)|Optional|
|DEV_PORT|Port which serves the application (both backend and frontend)|Optional|8081

## Enabling <mern.ai /> Cloud Services

This project is integrated with various <mern.ai /> services, including Cloud Storage, Email Verification, and more. These services are automatically activated when you publish your app on the MERN.AI Cloud. If you choose to deploy your app elsewhere while still utilizing these services, you must configure specific <mern.ai /> credentials in the environment variables. The necessary environment variables are listed below:

|Key|Description|Required
|-|-|-
|WS_ENVIRONMENT_ID|As mentioned in your mern.ai cloud|Yes
|WS_PROJECT_ID|As mentioned in your mern.ai project|Yes
|WS_CRED_SERVICE_TENANT_ID|As mentioned in your mern.ai cloud|Yes
|WS_CRED_SERVICE_CLIENT_ID|As mentioned in your mern.ai cloud|Yes
|WS_CRED_SERVICE_CLIENT_SECRET|As mentioned in your mern.ai cloud|Yes


## Docker
To build application using Docker, follow these steps:

Run the following command from the root of the project directory: `docker build . -t new-project:latest`