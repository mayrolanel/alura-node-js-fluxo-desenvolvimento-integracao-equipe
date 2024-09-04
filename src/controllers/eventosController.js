import Evento from '../models/evento.js';

class EventosController {

  static liberaAcessoEventos = () => process.env.EVENTO_FLAG === 'true';

  static async listarEvento(req, res) {

    if (EventosController.liberaAcessoEventos()) {
      try {
        const eventos = await Evento.pegarEventos();
        return res.status(200).json(eventos);
      } catch (err) {
        return res.status(404).json({ message: err.message });
      }
    } else {
      return res.status(404).json({ message: 'Função não encontrada' });
    }
  }
}

export default EventosController;
