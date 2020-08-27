/*
Use the pokemon api to search for pokemon and display a card element

pokemon api root: https://pokeapi.co/api/v2
pokemon endpoint: /pokemon/{id or name}
  id .id#
  name .name''
  sprite img .sprites{}
  type .types[]
  ?description
  ?atk, ?def, ?spd

form
  one input [name or id]
  submit button

card
  img
  name
  ?description
  type
  ?atk, ?def, ?spd
*/

/*
FORM DATA
event listener for form submission
  send the user data in a request
*/
const ROOT_URL = 'https://pokeapi.co/api/v2';
const PKMN = '/pokemon/';

//function to display pokemon data
displayPKMN = (pkmn) => {
  const {id, name, stats, types, sprites, ...rest} = pkmn;
  $('main').html(`
    <div class="pkmn-card">
        <div class="pkmn-card_img pkmn-card_img-pkmn">
          <img src="${sprites.front_default}"/>
        </div>
      
      <div class="pkmn-name">
        ${name}
      </div>
    </div>`)
}

//function to fetch pokemon data
fetchPKMN = (pkmn) => {
  fetch(`${ROOT_URL}${PKMN}${pkmn}`)
  .then(res => res.json())
  .then(resJson => displayPKMN(resJson))
}

$(() => {
  $('form').on('submit', e => {
    e.preventDefault();
    const userData = $('[name=data]').val()
    //fetch the pokemon data
    fetchPKMN(userData);    
  })

  //auto fetch
  $('[name=data]').val(6);
  $('form').submit();
})