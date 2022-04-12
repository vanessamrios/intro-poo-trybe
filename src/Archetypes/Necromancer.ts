import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private static _instancesCount = 0;
  private _energyType: EnergyType = 'mana';

  constructor(_name: string) {
    super(_name);
    this._energyType = 'mana';
    Necromancer._instancesCount += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._instancesCount;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Necromancer;