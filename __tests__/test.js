import Bowman from '../src/js/characters/bowman.js';
import Daemon from '../src/js/characters/daemon.js';
import Magician from '../src/js/characters/magician.js';
import Swordsman from '../src/js/characters/swordsman.js';
import Undead from '../src/js/characters/undead.js';
import Zombie from '../src/js/characters/zombie.js';
import Character from '../src/js/character.js';

test ('characterName', () => {
    const newCharacter = new Character("Legolas", "Zombie", 40, 10);
    expect(newCharacter.name).toBe("Legolas");
    expect(newCharacter.type).toBe("Zombie");
    expect(newCharacter.attack).toBe(40);
    expect(newCharacter.defence).toBe(10);
    expect(newCharacter.level).toBe(1);

});

test('nameError', () => {
    expect(() => {
        new Character('J', 'Bowman', 25, 25)
    }).toThrow('Имя должно содержать от 2 до 10 символов');

    expect(() => {
        new Character('Jooooohhhhhhnnnnnn', 'Bowman', 25, 25)
    }).toThrow('Имя должно содержать от 2 до 10 символов');
})

test ('bowmanAttack', () => {
    const newBowman = new Bowman("Vasiliy")
    const attackResult = newBowman.attack
    expect(attackResult).toBe(25)

    const defenceResult = newBowman.defence
    expect(defenceResult).toBe(25)
})

test ('swordsmanAttack', () => {
    const newSwordsman = new Swordsman("Daniel")
    const attackResult = newSwordsman.attack
    expect(attackResult).toBe(40)

    const defenceResult = newSwordsman.defence
    expect(defenceResult).toBe(10)
})

test ('magicianAttack', () => {
    const newMagician = new Magician("Chris")
    const attackResult = newMagician.attack
    expect(attackResult).toBe(10)
    
    const defenceResult = newMagician.defence
    expect(defenceResult).toBe(40)
})

test ('undeadAttack', () => {
    const newUndead = new Undead("Markus")
    const attackResult = newUndead.attack
    expect(attackResult).toBe(25)

    const defenceResult = newUndead.defence
    expect(defenceResult).toBe(25)
})

test ('zombieAttack', () => {
    const newZombie = new Zombie("Sean")
    const attackResult = newZombie.attack
    expect(attackResult).toBe(40)

    const defenceResult = newZombie.defence
    expect(defenceResult) .toBe(10)
})

test ('daemonAttack', () => {
    const newDaemon = new Daemon("Jack")
    const attackResult = newDaemon.attack
    expect(attackResult).toBe(10)

    const defenceResult = newDaemon.defence
    expect(defenceResult).toBe(40)
})
