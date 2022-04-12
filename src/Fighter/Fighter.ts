import Energy from '../Energy';

interface Figther {
  lifePoints: number,
  strength: number,
  defense: number,
  energy?: Energy

  attack(enemy: Figther): void;
  special(enemy: Figther): void;
  levelUp(): void;
  receiveDamage(attackPoints: number): void;
}

export default Figther;