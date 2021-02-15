describe("scrabble", function() {
  var scrabble;

  beforeEach (function () {
    scrabble = new Scrabble();
  });

  describe('Tests for one point values', function() {
      it ("1) returns a single letter A ",function() {
        expect(scrabble.get_score("A")).toEqual(1);
      })
      it ("2) returns a Double letter AE ",function() {
        expect(scrabble.get_score("AE")).toEqual(2);
      })
      it ("3) returns 10 which is all the one point letters",function() {
        expect(scrabble.get_score("AEIOULNRST")).toEqual(10);
      })
  })
  describe('Tests for two point values', function() {
    it ("1) returns a single letter D ",function() {
      expect(scrabble.get_score("D")).toEqual(2);
    })
    it ("2) returns a Double letter GG ",function() {
      expect(scrabble.get_score("GG")).toEqual(4);
    })
    it ("3) returns 4  DG",function() {
      expect(scrabble.get_score("DG")).toEqual(4);
    })
})
describe('Returns the right score for when having different tile values', function() {
  it ("1) DA returns a value of 3 ",function() {
    expect(scrabble.get_score("DA")).toEqual(3);
  })
  it ("2) DAD returns a value of 5",function() {
    expect(scrabble.get_score("DAD")).toEqual(5);
  })
  it ("3) DEED returns a value of 6",function() {
    expect(scrabble.get_score("DEED")).toEqual(6);
  })
  it ("4) DAGGER returns a value of 9",function() {
    expect(scrabble.get_score("DAGGER")).toEqual(9);
  })

})






 


   


  


  

});
