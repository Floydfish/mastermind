
describe('Mastermind', () => {
  it('retrieves a comparison where colors are well placed', () => {
    const secretCombination = ['red', 'red', 'red', 'red']
    
    const game = new Mastermind(secretCombination)

    const comparison = game.compare(secretCombination)

    expect(comparison).toEqual({ wellPlaced: 4, missPlaced: 0 })
  })

  it('retrieves a comparison where colors are well placed', () => {
    const secretCombination = ['red', 'red', 'red', 'red', 'blue']
    const game = new Mastermind(secretCombination)

    const comparison = game.compare(secretCombination)

    expect(comparison).toEqual({ wellPlaced: 5, missPlaced: 0 })
  })

  it('retrieves a comparison where colors are missed', () => {
    const game = new Mastermind(['red', 'red', 'red', 'red'])

    const comparison = game.compare(['blue', 'blue', 'blue', 'blue'])

    expect(comparison).toEqual({ wellPlaced: 0, missPlaced: 0 })
  })

  it('retrieves a comparison where some colors are well placed', () => {
    const game = new Mastermind(['red', 'red', 'red', 'red'])

    const comparison = game.compare(['red', 'blue', 'blue', 'blue'])

    expect(comparison).toEqual({ wellPlaced: 1, missPlaced: 0 })
  })

  it('retrieves a comparison where colors are miss placed', () => {
    const game = new Mastermind(['blue', 'red'])

    const comparison = game.compare(['red', 'blue'])

    expect(comparison).toEqual({ wellPlaced: 0, missPlaced: 2 })
  })

  it('retrieves a comparison where are a miss placed for multiple occurrences', () => {
    const game = new Mastermind(['red', 'yellow', 'yellow', 'yellow'])

    const comparison = game.compare(['blue', 'red', 'red', 'red'])

    expect(comparison).toEqual({ wellPlaced: 0, missPlaced: 1 })
  })

  it('retrieves a comparison where are a miss placed for multiple occurrences', () => {
    const game = new Mastermind(['red', 'blue', 'yellow', 'blue'])

    const comparison = game.compare(['blue', 'red', 'blue', 'red'])

    expect(comparison).toEqual({ wellPlaced: 0, missPlaced: 3 })
  })
})

class Mastermind {
  constructor(combination) {
    this.secretCombination = combination
  }

  compare(combination) {
    const comparison = { wellPlaced: 0, missPlaced: 0 }
    let colorsMatched = []

    combination.forEach((color, index) => {
      if (this.isWellPlaced(color, index)) {
        comparison.wellPlaced ++
      }

      if (this.isMissPlaced(color, index)) {
        if (!colorsMatched.includes(color)) {
          comparison.missPlaced ++
        }

        colorsMatched.push(color)
      }
    })

    return comparison
  }

  isWellPlaced(color, index) {
    return color === this.secretCombination[index]
  }

  isMissPlaced(color, index) {
    return !this.isWellPlaced(color, index) && this.secretCombination.includes(color)
  }
}
