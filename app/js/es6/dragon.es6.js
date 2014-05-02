/* exported Dragon */
/* global calculateDamage: true */
/* global animalId: true */
class Dragon
{
  constructor(gender, weapon, name='Nameless', age='0', photoURL='media/no_picture.png')
  {
    this.id = animalId++;
    this.gender = gender;
    this.weapon = weapon;
    this.name = name;
    this.age = age * 1;
    this.photoURL = photoURL;
    this.species = 'dragon';
    this.health = 100;
    this.damage = calculateDamage(weapon);
  }
}