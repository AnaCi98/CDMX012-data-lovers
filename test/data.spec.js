import { ordenar, porNombre, porGenero} from '../src/data.js';
import data from './dataMocks.js'

describe('Test de ordenado', () => {
  it('ordenar is a function', () => {
    expect(typeof ordenar).toBe('function');
  });
  it('ordenar returns an object', () => {
      expect(typeof ordenar(data.results)).toBe('object');
  });
  it('Ordenado de datos', () => {
    expect(ordenar(data.results)).toStrictEqual(data.ordenados);
  });
  it('Ordenado de datos', () => {
    expect(ordenar(data.results)).not.toStrictEqual(data.resultsDos);
  });
}); 

describe('Test de filtrado por nombre', () => {
  it('is a function', () => {
    expect(typeof porNombre).toBe('function');
  });
  it('filtrado por nombre', () => {
   expect(porNombre(data.results)).toStrictEqual(data.ordenados);
  });
  it('filtrado por nombre', () => {
    expect(porNombre(data.results)).not.toStrictEqual(data.resultsDos);
    });
  it('ordenar returns an object', () => {
    expect(typeof porNombre(data.results)).toBe('object');
  });
});

describe('Test de filtrado por genero', () => {
  it('is a function', () => {
    expect(typeof porGenero).toBe('function');
  });
  it('filtrado por genero', () => {
   expect(porGenero('Male',data.results)).toStrictEqual(data.hombres);
  });
  it('filtrado por genero', () => {
   expect(porGenero('Female',data.results)).toStrictEqual(data.mujeres);
   });
  it('filtrado por genero', () => {
    expect(porGenero('Female',data.results)).not.toStrictEqual(data.hombres);
    });
  it('filtrado por genero', () => {
      expect(porGenero('Male',data.results)).not.toStrictEqual(data.mujeres);
      });
  it('ordenar returns an object', () => {
    expect(typeof porGenero('Male',data.results)).toBe('object');
  });
  it('ordenar returns an object', () => {
    expect(typeof porGenero('Female',data.results)).toBe('object');
  });
});
