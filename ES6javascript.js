class Character{
    constructor(health, power){
        this.health = health;
        this.power = power;
    }
    attack = (enemy) => {
        enemy.health =- this.power;
    }
    print = ()=>{
        console.log(`The health of ${this.name} is ${this.health} and power is ${this.power}`);
    }
}
class Hero extends Character{
    constructor(health, power){
        super(health, power);
        this.name = "hero";
    }
}
class Goblin extends Character{
    constructor(health, power){
        super(health, power);
        this.name = "goblin";
    }
}
let hero = new Hero(10, 4);
let goblin = new Goblin(8, 5);