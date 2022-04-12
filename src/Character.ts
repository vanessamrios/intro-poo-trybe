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

  get energy(): Energy {
    return this._energy;
  }

  receiveDamage(attackPoints: number): number {
    const demage = (this._defense - attackPoints);
    if (demage > 0) {
      this._lifePoints -= demage;
    }
    if (this._lifePoints === 0) {
      this._lifePoints = -1;
    } 
    return this._lifePoints;
  }

  attack(enemy: Figther): void {
    return enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
      
  }

  special(enemy: Figther): void {
      
  }
}
export default Character;
