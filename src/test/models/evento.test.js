import {
    describe, expect, it, jest,
} from '@jest/globals';
import Evento from '../../models/evento.js';

describe('Modelo Evento', () => {

    const objetoEvento = {
        nome: 'Evento Teste',
        descricao: 'descricao do evento teste',
        data: '2023-01-01',
        autor_id: 1
    }
    it('deve instanciar um novo evento', () => {
        const evento = new Evento(objetoEvento);

        expect(evento).toEqual(
            expect.objectContaining(objetoEvento)
        )
    });
});