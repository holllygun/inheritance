import Character from '../characters/character.js';

test ('commonCharacter', () => {
    const newCharacter = new Character("Legolas", "Zombie");
    const correct = {
        attack: undefined,
        defence: undefined,
        health: 100,
        level: 1,
        name: "Legolas",
        type: "Zombie",
    };

    expect(newCharacter).toEqual(correct);
});

test('Name error', () => {
    expect(() =>new Character('J', 'Bowman')).toThrow('Имя должно содержать от 2 до 10 символов');

    expect(() => new Character('Jooooohhhhhhnnnnnn', 'Bowman')).toThrow('Имя должно содержать от 2 до 10 символов');
});


test('Type error', () => {
    expect(() => new Character("Bo", "Bow")).toThrow('Такого героя нет! Выберите подходящий тип');
});
