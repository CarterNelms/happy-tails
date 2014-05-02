/* exported calculateDamage, animalId */

var animalId = 1;

function calculateDamage(weapon)
{
  'use strict';

  let max;

  switch(weapon)
  {
    case 'Claws':
      max = 15;
      break;
    case 'Teeth':
      max = 20;
      break;
    case 'Fire Breath':
      max = 30;
      break;
    case 'Poison':
      max = 25;
  }

  return Math.ceil(Math.random() * max);
}