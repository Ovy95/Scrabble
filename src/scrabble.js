class Scrabble {

  onePoint = ["A" ,"E", "I", "O", "U", "L", "N", "R", "S", "T"]
  twoPoint = ["D", "G"]
  threePoint = ["B, C, M, P"]
  fourPoint = ["F, H, V, W, Y"]
  fivePoint = ["K"]
  eightPoint = ["J, X"]
  tenPoint = ["Q, Z"]

  get_score(word) {
    var i = 0;
    var len = word.length;
    console.log(len)
    var score = 0
    var arr = [...word]

    console.log(arr)
    for (; i < len;)  {
      console.log(arr[i]) 


      if(this.onePoint.includes(arr[i])){
        (score+=1);
        console.log(score);
        i++;
      }
    }

    return score
  }

    
  

}