describe('Mastermind', () => {
    it("Full match", () => {
        const userCombination = ["red", "red", "red", "red"]
        
        const game = new Mastermind(userCombination)
        const match = game.compare(userCombination)

        expect(match).toEqual({wellPlaced: 4, misPlaced: 0})
    })
})

class Mastermind {
    constructor (combination) {
        this.secretCombination = combination;
    }

    compare(combination) {
        const match = { wellPlaced: 0, misPlaced: 0}


        return match
    }
}