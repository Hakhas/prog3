let LivingCreature = require('./LivingCreature')

module.exports = class Grass extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.energy = 3;
    }


    mul() {
        var emptyCells = this.chooseCell(0);
        var empty = emptyCells[Math.floor(Math.random() * emptyCells.length)]
        this.energy++
        if (empty && this.energy > 4) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 1

            grasssses.push(new Grass(newX, newY))
            this.energy--
        }
    }
}
