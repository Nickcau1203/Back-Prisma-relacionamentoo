import CardModel from "../models/cardModel.js";

class CardController {
  // GET cartas
  async getAllCards(req, res) {
    try {
      const cartas = await CardModel.findAll();
      res.json(cartas);
    } catch (error) {
      console.error("Erro ao buscar as cartas:", error);
      res.status(500).json({ error: "Erro ao buscar as cartas" });
    }
  }

  // GET cartas/:id
  async getCardById(req, res) {
    try {
      const { id } = req.params;

      const carta = await CardModel.findById(id);

      if (!carta) {
        return res.status(404).json({ error: "Carta não encontrada" });
      }

      res.json(carta);
    } catch (error) {
      console.error("Erro ao buscar carta:", error);
      res.status(500).json({ error: "Erro ao buscar carta!" });
    }
  }

  // POST /cartas
  async createCard(req, res) {
    try {
      // Captura do dados do corpo da requisição (frontend)
      const {
        name,
        rarity, 
        attackPoints, 
        defensePoints, 
        imageUrl, 
        collectionId
      } = req.body;

      // Verifica se todos os campos da carta foram fornecidos
      if (
        !name ||
        !rarity || 
        !attackPoints ||
        !defensePoints ||
        !collectionId 
      ) {
        return res
          .status(400)
          .json({ error: "Os campos nome, raridade, pontos de ataque, pontos de defesa e o ID da coleção são obrigatórios",
});
      }

      // Criar uma nova Carta
      const newCard = await CardModel.create(
        name,
        rarity, 
        attackPoints, 
        defensePoints, 
        imageUrl, 
        collectionId
      );

      if (!newCard) {
        return res.status(400).json({ error: "Erro ao criar coleção" });
      }

      res.status(201).json({
        message: "Coleção criada com sucesso!",
        newCard});
    } catch (error) {
      console.error("Erro ao criar coleção:", error);
      res.status(500).json({ error: "Erro ao criar coleção" });
    }
  }

  // DELETE cartas/:id
  async updateCard(req, res) {
    try {
      const { id } = req.params;
      const {
        name,
        rarity, 
        attackPoints, 
        defensePoints, 
        imageUrl, 
        collectionId
      } = req.body;

      // Atualizar a Carta
      const updatedCard = await CardModel.update(
        id,
        name,
        rarity, 
        attackPoints, 
        defensePoints, 
        imageUrl, 
        collectionId
      );

      if (!updatedCard) {
        return res.status(404).json({ error: "Carta não encontrado" });
      }

      res.json(updatedCard);
    } catch (error) {
      console.error("Erro ao atualizar Carta:", error);
      res.status(500).json({ error: "Erro ao atualizar Carta!" });
    }
  }

  // DELETE cartas/:id
  async deleteCard(req, res) {
    try {
      const { id } = req.params;

      // Remover a carta
      const result = await CardModel.delete(id);

      if (!result) {
        return res.status(404).json({ error: "Carta não encontrada!" });
      }

      res.status(204).end(); // Resposta sem conteúdo
    } catch (error) {
      console.error("Erro ao remover carta:", error);
      res.status(500).json({ error: "Erro ao remover carta" });
    }
  }
}

export default new CardController();