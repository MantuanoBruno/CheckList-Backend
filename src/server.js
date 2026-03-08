import dotenv from "dotenv";
dotenv.config({ path: ".env.development" });

import app from "#src/app.js";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server rodando na porta ${PORT}`);
});

console.log("POSTGRES_USER:", process.env.POSTGRES_USER);
console.log("POSTGRES_DB:", process.env.POSTGRES_DB);
