import pg from "pg";


import {
  SecretsManagerClient,
  GetSecretValueCommand,
} from "@aws-sdk/client-secrets-manager";

const secret_name = "UNIVERSO_SECRETO3";

const client = new SecretsManagerClient({
  region: "us-east-1",
});

let response;

try {
  response = await client.send(
    new GetSecretValueCommand({
      SecretId: secret_name,
      VersionStage: "AWSCURRENT", // VersionStage defaults to AWSCURRENT if unspecified
    })
  );
} catch (error) {
  // For a list of exceptions thrown, see
  // https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html
  throw error;
}

const secret = JSON.parse(response.SecretString) 
console.log('secreto papuuu:', secret);
// console.log(typeof(secret));


export const pool = new pg.Pool({
    user: secret.username,
    host: secret.host,
    password: secret.password,
    database: secret.database,
    port: secret.port
})

pool.query('SELECT NOW()').then(result =>{
    //console.log('resultado de la db:', result);
    
})