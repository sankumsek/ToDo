describe("scrabbleScore", function() {
  it("for letters from group1 assign a value of 1", function() {
    scrabbleScore("a").should.equal(1);
  });
  it("for letters from group2 assign a value of 2", function() {
    scrabbleScore("d").should.equal(2);
  });
  it("for letters from group3 assign a value of 3", function() {
    scrabbleScore("b").should.equal(3);
  });
  it("for letters form group4 assign a value of 4", function() {
    scrabbleScore("f").should.equal(4);
  });
  it("for letters from group5 assign a value of 5", function() {
    scrabbleScore("k").should.equal(5);
  });
  it("for letters from group8 assign a value of 8", function() {
    scrabbleScore("j").should.equal(8);
  });
  it("for letters from group10 assign a value of 10", function() {
    scrabbleScore("z").should.equal(10);
  });
   it("in each word assigning the correct scrabble value to each letter", function() {
     scrabbleScore("nat").should.equal(3);
   });
   it("in each word assigning the correct scrabble value to each letter despite different group numbers", function() {
      scrabbleScore("adbfkjq").should.equal(33);
   });
});
