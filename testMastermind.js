describe('Mastermind', () => {

  it('no matches found', () => {
    // Arrange
    const masterCombination = ["red", "green", "blue", "yellow"]
    const userCombination = ["white", "white", "white", "white"]
    const masterMind = new MasterMind(masterCombination)
    
    // Act
    const result = masterMind.compare(userCombination)
  
    // Assert  
    const expected = { wellPlaced: 0, misPlaced: 0 }
    assert.deepEqual(result, expected)
  })
  
  it('all matches', () => {
    // Arrange
    const masterCombination = ["red", "green", "blue", "yellow"]
    const userCombination = ["red", "green", "blue", "yellow"]
    const masterMind = new MasterMind(masterCombination)
    
    // Act
    const result = masterMind.compare(userCombination)
    
    // Assert  
    const expected = { wellPlaced: 4, misPlaced: 0 }
    assert.deepEqual(result, expected)
  })
  
  it('one wellPlaced', () => {
    // Arrange
    const masterCombination = ["red", "green", "blue", "yellow"]
    const userCombination = ["white", "green", "white", "white"]
    const masterMind = new MasterMind(masterCombination)
    
    // Act
    const result = masterMind.compare(userCombination)
    
    // Assert  
    const expected = { wellPlaced: 1, misPlaced: 0 }
    assert.deepEqual(result, expected)
  })

  it('more than one wellPlaced', () => {
    // Arrange
    const masterCombination = ["red", "green", "blue", "yellow"]
    const userCombination = ["white", "green", "white", "yellow"]
    const masterMind = new MasterMind(masterCombination)
    
    // Act
    const result = masterMind.compare(userCombination)
    
    // Assert  
    const expected = { wellPlaced: 2, misPlaced: 0 }
    assert.deepEqual(result, expected)
  })
  
  it('one misPlace found', () => {
   // Arrange
    const masterCombination = ["red", "green", "blue", "yellow"]
    const userCombination = ["green", "white", "white", "white"]
    const masterMind = new MasterMind(masterCombination)
    
    // Act
    const result = masterMind.compare(userCombination)
    
    // Assert  
    const expected = { wellPlaced: 0, misPlaced: 1 }
    assert.deepEqual(result, expected)    
  })
  
    it('more than one misPlace found', () => {
   // Arrange
    const masterCombination = ["red", "green", "blue", "yellow"]
    const userCombination = ["green", "white", "red", "red"]
    const masterMind = new MasterMind(masterCombination)
    
    // Act
    const result = masterMind.compare(userCombination)
    
    // Assert  
    const expected = { wellPlaced: 0, misPlaced: 2 }
    assert.deepEqual(result, expected)    
  })
  
  
  it('more than one misPlace and wellPlaced found', () => {
   // Arrange
    const masterCombination = ["red", "green", "red", "yellow"]
    const userCombination = ["green", "green", "red", "red"]
    const masterMind = new MasterMind(masterCombination)
    
    // Act
    const result = masterMind.compare(userCombination)
    
    // Assert  
    const expected = { wellPlaced: 2, misPlaced: 1 }
    assert.deepEqual(result, expected)    
  })
  
});

class MasterMind {
  constructor (combination) {
    this.masterCombination = combination
  }
  
  compare (userCombination) {
    let wellPlaced = 0
    let misPlaced = 0
    for(let i = 0; i < userCombination.length; i++) {
      if (this.masterCombination[i] === userCombination[i]) {
        wellPlaced++
        continue;
      }
      for (let j = 0; j < userCombination.length; j++) {
         if (i !== j && this.masterCombination[i] === userCombination[j]) {
          misPlaced++
          break;
        }
      }

    }
    
    return { wellPlaced: wellPlaced, misPlaced: misPlaced }
  }
}