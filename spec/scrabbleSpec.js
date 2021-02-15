describe("scrabble", function() {
  var scrabble;

  beforeEach (function () {
    scrabble = new Scrabble();
  });

  describe('Returns a single letter', function() {
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



 


   


  


  

});
