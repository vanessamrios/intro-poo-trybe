import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private static _instancesCount = 0;
  private _energyType: EnergyType = 'stamina';

  constructor(_name: string) {
    super(_name);
    this._energyType = 'stamina';
    Warrior._instancesCount += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior._instancesCount;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Warrior;