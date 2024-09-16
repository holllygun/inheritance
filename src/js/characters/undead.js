
import Character from '../characters/character';

class Undead extends Character {
    constructor(name) {
        super(name, "Undead");
        this.attack = 25;
        this.defence = 25;
    }
}

export default Undead;