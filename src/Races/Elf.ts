import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  private static _instancesCount = 0;

  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    this._maxLifePoints = 99;
    Elf._instancesCount += 1;
  }

  static createdRacesInstances(): number {
    return Elf._instancesCount;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Elf;