import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _instancesCount = 0;

  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    this._maxLifePoints = 80;
    Dwarf._instancesCount += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf._instancesCount;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Dwarf;