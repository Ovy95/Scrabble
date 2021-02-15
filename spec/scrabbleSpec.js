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
  

    describe('Returns the right score for when having different tile values', function() {
      it ("1) Returns the correct value of one tile of each ",function() {
        expect(scrabble.get_score("ADBFKJQ")).toEqual(33);
      })
      it ("2) Returns 6 for 'street' ",function() {
        expect(scrabble.get_score("street")).toEqual(6);
      })
      it ("3) Returns 22  'quirky' ",function() {
        expect(scrabble.get_score("quirky")).toEqual(22);
      })
      it ("4) Returns 41  for 'OXYPHENBUTAZONE'",function() {
        expect(scrabble.get_score("OXYPHENBUTAZONE")).toEqual(41);
      })


  })
})


