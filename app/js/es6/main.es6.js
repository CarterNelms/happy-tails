/* global Dragon: true */
/* global Dog: true */
/* global Cat: true */
/* global Sloth: true */

(function()
{
  'use strict';

  $(document).ready(init);

  let animals = [];

  function init()
  {
    $('#add').click(add);
    $('#animals').on('click', '.training', train);
  }

  function train()
  {
    console.log(this);
    $(this).parent().parent().data('id');
    debugger;
  }

  function add()
  {
    let name = $('#name').val() || undefined;
    let age = $('#age').val() || undefined;
    let gender = $('#gender').val();
    let photoURL = $('#photo').val() || undefined;
    let weapon = $('#weapon').val();
    let inputs = [gender, weapon, name, age, photoURL];
    let animal;
    let species = $('#species').val();
    switch(species)
    {
      case 'Dragon':
        animal = new Dragon(...inputs);
        break;
      case 'Dog':
        animal = new Dog(...inputs);
        break;
      case 'Cat':
        animal = new Cat(...inputs);
        break;
      case 'Sloth':
        animal = new Sloth(...inputs);
    }

    animals.push(animal);
    display(animal);
  }

  function display(animal)
  {
    let $div = $('<div>');
    let $imgDiv = $('<div>').addClass('imageDiv');
    let $img = $('<img>').addClass('animalImg').attr('src', animal.photoURL);

    $imgDiv.append($img);
    let $trainImg = $('<img>').addClass('training').attr('src', 'media/train.png');
    $imgDiv.append($trainImg);
    $div.append($imgDiv);

    let $textDiv = $('<div>').addClass('windowText');
    $textDiv.append(`${animal.name} the ${animal.species}<br>
      Age: ${animal.age} - Sex: ${animal.gender}<br>
      Lif: ${animal.health} - Dmg: ${animal.damage}
    `);
    let $weaponIcon = $('<img>').attr('src', `media/weaponicons/${animal.weapon.toLowerCase().replace(' ', '')}.png`);
    $textDiv.append($weaponIcon);
    $div.append($textDiv);

    $div.attr('data-id', animal.id).addClass('dragon');

    let $section = $(`#${animal.species}s`);

    $section.append($div);
  }
})();