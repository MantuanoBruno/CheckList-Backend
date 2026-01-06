// jest.setup.js
import * as dotenv from "dotenv";
dotenv.config({
  path: ".env.test", // MUITO IMPORTANTE: Use um arquivo de ambiente dedicado para testes
});
