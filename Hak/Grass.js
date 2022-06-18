
let LivingCreature = require('./LivingCreature')

module.exports = class Grass extends LivingCreature {


    mul() {
        var emptyCells = this.chooseCell(0);
        var empty = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (empty) {

            let x = empty[0];
            let y = empty[1];

            matrix[y][x] = 1;
            grasssses.push(new Grass(x, y))
        }


    }
}