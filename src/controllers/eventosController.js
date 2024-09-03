import Evento from '../models/evento.js';

class EventosController {
  static async listarEvento(req, res) {
    try {
      const eventos = await Evento.pegarEventos();
      return res.status(200).json(eventos);
    } catch (err) {
      return res.status(404).json({ message: err.message });
    }
  }
}

export default EventosController;
