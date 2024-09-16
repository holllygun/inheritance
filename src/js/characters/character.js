import { types } from "@babel/core";

export default class Character {
    constructor(name, type) { 
        const types = ["Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"]
        if (name.length < 2 || name.length > 10) {
            throw new Error('Имя должно содержать от 2 до 10 символов');
        }

        if(!types.includes(type)) {
            throw new Error('Такого героя нет! Выберите подходящий тип');
        }

        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;

        this.attack = undefined;
        this.defence = undefined;
    }
}
