import express from "express";
import CollectionController from "../controllers/collectionController.js";

const collectionRouter = express.Router();

// Rotas de Coleções
// GET /colecoes - Listar todas as Coleções
collectionRouter.get("/", CollectionController.getAllCollections);

// GET /colecoes/:id - Obter uma Coleção pelo ID
collectionRouter.get("/:id", CollectionController.getCollectionById);

// POST /colecoes - Criar um nova Coleção
collectionRouter.post("/", CollectionController.createCollection);

// PUT /colecoes/:id - Atualizar um Coleção
collectionRouter.put("/:id", CollectionController.updateCollection);

// DELETE /colecoes/:id - Remover um Coleção
collectionRouter.delete("/:id", CollectionController.deleteCollection);

export default collectionRouter;
