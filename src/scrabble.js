class Scrabble {
  
  onePoint = ["A" ,"E", "I", "O", "U", "L", "N", "R", "S", "T"]
  twoPoint = ["D", "G"]
  threePoint = ["B", "C", "M", "P"]
  fourPoint = ["F", "H", "V", "W", "Y"]
  fivePoint = ["K"]
  eightPoint = ["J", "X"]
  tenPoint = ["Q", "Z"]

  get_score_for_letter(letters){
    var score = 0
    for (var i = 0 ; i  < letters.length; i++)  { 
      if(this.onePoint.includes(letters[i])){
        (score+=1);
      }else if(this.twoPoint.includes(letters[i])){
        (score+=2);
      }else if(this.threePoint.includes(letters[i])){
        (score+=3);
      }else if(this.fourPoint.includes(letters[i])){
        (score+=4);
      }else if(this.fivePoint.includes(letters[i])){
        (score+=5);
      }else if(this.eightPoint.includes(letters[i])){
        (score+=8);
      }else if(this.tenPoint.includes(letters[i])){
        (score+=10);
      }
    }
    return score
  }
    get_score(word) {
    word = word.toUpperCase()
    var letters = [...word]
    return this.get_score_for_letter(letters)
  }
}