import load from '../modules/load';
jest.mock('../modules/load');

describe('Test load function', () =>{
  test('load', () => {
    const result = 'hello';


    expect(result).toBe('hello');
  })
})