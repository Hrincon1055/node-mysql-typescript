import express, { Application } from "express";
import cors from "cors";
import userRoutes from "../routes/usuario.route";
import db from "../db/connection.db";
class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    usuarios: "/api/usuarios",
  };
  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8000";
    this.dbConnection();
    this.middlewares();
    this.routes();
  }
  async dbConnection() {
    try {
      await db.authenticate();
      console.log("Base de datos conectada");
    } catch (error) {
      console.log(`ERROR: ${error}`);
    }
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }
  routes() {
    this.app.use(this.apiPaths.usuarios, userRoutes);
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en el pueros ${this.port}.`);
    });
  }
}
export default Server;
