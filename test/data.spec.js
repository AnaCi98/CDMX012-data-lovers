import { describe, it } from 'eslint/lib/rule-tester/rule-tester';
import { ordenar, porNombre, porGenero } from '../src/data.js';
import data from './dataMock.js';


describe('ordenar', () => {
  it('is a function', () => {
    expect(typeof ordenar).toBe('function');
  });

  it('Retorna data ordenada alfabéticamente', () => {
    expect(ordenar("ASC", data.results)).toStrictEqual(data.personajesOrdenados);
    });

    it('Retorna data ordenada alfabéticamente', () => {
      expect(ordenar("ASC", data.results)).not.toStrictEqual(data.personajesDesordenados);
      });

      it('Retorna data ordenada alfabéticamente', () => {
        expect(ordenar("DESC", data.results)).toStrictEqual(data.personajesDescendente);
        });
    
        it('Retorna data ordenada alfabéticamente', () => {
          expect(ordenar("DESC", data.results)).not.toStrictEqual(data.personajesDesordenados);
          });

});


describe('porNombre', () => {
  it('is a function', () => {
    expect(typeof porNombre).toBe('function');
  });

  it('Retorna porNombre', () => {
    expect(porNombre(data.results)).toStrictEqual(data.results);
     });

  it('Retorna porNombre', () => {
      expect(porNombre(data.results)).not.toStrictEqual(data.personajesDesordenados);
       });
  });



describe('porGenero', () => {
  it('is a function', () => {
    expect(typeof porGenero).toBe('function');
  });
  it('Retorna porGenero', () => {
    //
      expect(porGenero("Male", data.results)).toEqual(
        expect.arrayContaining(data.personajesMale))
      });
  it('Retorna porGenero', () => {
      expect(porGenero("Male", data.results)).not.toStrictEqual(data.personajesFemale);
       });

  it('Retorna porGenero', () => {
    expect(porGenero("Female", data.results)).toEqual(
      expect.arrayContaining(data.personajesFemale))
    });
    
  it('Retorna porGenero', () => {
    expect(porGenero("Female", data.results)).not.toStrictEqual(data.personajesMale);
           });
  });

  /*toEqual(
    expect.arrayContaining(*/

    