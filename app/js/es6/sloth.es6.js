/* exported Sloth */
/* global calculateDamage: true */
class Sloth
{
  constructor(gender, weapon, name='Nameless', age='0', photoURL='media/no_picture.png')
  {
    this.gender = gender;
    this.weapon = weapon;
    this.name = name;
    this.age = age * 1;
    this.photoURL = photoURL;
    this.species = 'sloth';
    this.health = 100;
    this.damage = calculateDamage(weapon);
  }
}