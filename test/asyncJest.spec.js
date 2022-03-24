// const assert = require('assert');
// const { expect } = require('chai');
const answerPhone = require('../src/asyncJest');

describe('1 - O retorno do telefonema', () => {
  test('atende', () => {
    answerPhone(true).then((response) => {
      expect(response).toEqual('Oi!');
    });
  });
  test('ocupado', () => {
    answerPhone(false).catch((response) => {
      expect(response).toEqual(new Error('Infelizmente não podemos atender...'));
    });
  });
});
