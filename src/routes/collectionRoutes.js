import express from "express";
import CollectionController from "../controllers/collectionController.js";

const collectionRouter = express.Router();

// Rotas de Coleções
// GET /colecoes - Listar todas as Coleções
collectionRouter.get("/", CollectionController.getAllCollections);

// GET /personagens/:id - Obter um Collection pelo ID
//personagensRouter.get("/:id", CollectionController.getCollectionById);

// POST /personagens - Criar um novo Collection
//personagensRouter.post("/", CollectionController.createCollection);

// PUT /personagens/:id - Atualizar um Collection
//personagensRouter.put("/:id", CollectionController.updateCollection);

// DELETE /personagens/:id - Remover um Collection
//personagensRouter.delete("/:id", CollectionController.deleteCollection);

export default collectionRouter;
