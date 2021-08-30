import load from '../modules/load';
jest.mock('../modules/load');

describe('Test load function', () =>{
  test('load', () => {

    document.body.innerHTML = 
    `<main>
      <section id="recent-scores" class="recent-scores"></section>
      <section id="add-scores" class="add-scores"></section>
    </main>`
    const recentContainer = document.getElementById('recent-scores');
    const addContainer = document.getElementById('add-scores');
    





    const result = 'hello';


    expect(result).toBe();
  })
});

export default load;