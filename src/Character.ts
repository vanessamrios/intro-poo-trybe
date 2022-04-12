import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Figther from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

class Character implements Figther {
  private _race: Race; 
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string) {
    this._race = new Elf(name, 10);
    this._archetype = new Mage(name);
    this._maxLifePoints = (this._race.maxLifePoints) / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._dexterity = this._race.dexterity;
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  // retorna um objeto novo com as propriedades de this._energy, ta sempre criando um objeto novo pra não expor a propriedade e ela não ser alterada
  get energy(): Energy {
    return { ...this._energy };
  }

  receiveDamage(attackPoints: number): number {
    const demage = (attackPoints - this._defense);
    if (demage > 0) {
      this._lifePoints -= demage;
    }
    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    } 
    return this._lifePoints;
  }

  attack(enemy: Figther): void {
    return enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._energy.amount = 10;

    if (this._maxLifePoints > this.race.maxLifePoints) {
      this._maxLifePoints = this.race.maxLifePoints;
    }
    
    this._lifePoints = this._maxLifePoints;
  }

  special(enemy: Figther): void {
    enemy.receiveDamage(this._strength);
  }
}
export default Character;
