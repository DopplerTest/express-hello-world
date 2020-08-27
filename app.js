const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const secrets = {};
for (const key of Object.keys(process.env)) {
  if (key.startsWith("DOPPLER_") && key !== "DOPPLER_TOKEN") {
    secrets[key] = process.env[key];
  }
}

app.get("/", (req, res) =>
  res.send(
    `Hello from Render! Your variables starting with DOPPLER_ are:  ${JSON.stringify(
      secrets
    )}`
  )
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
