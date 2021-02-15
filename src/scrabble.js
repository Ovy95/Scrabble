class Scrabble {

  onePoint = ["A" ,"E", "I", "O", "U", "L", "N", "R", "S", "T"]
  twoPoint = ["D", "G"]
  threePoint = ["B", "C", "M", "P"]
  fourPoint = ["F", "H", "V", "W", "Y"]
  fivePoint = ["K"]
  eightPoint = ["J", "X"]
  tenPoint = ["Q", "Z"]

  get_score(word) {
  word = word.toUpperCase()
    var i = 0;
    var len = word.length;

    var score = 0
    var arr = [...word]


    for (; i < len;)  {

      console.log(arr[i]) 
      if(this.onePoint.includes(arr[i])){
        (score+=1);
      } else if(this.twoPoint.includes(arr[i])){
        (score+=2);
      }else if(this.threePoint.includes(arr[i])){
        (score+=3);
      }else if(this.fourPoint.includes(arr[i])){
        (score+=4);
      }else if(this.fivePoint.includes(arr[i])){
        (score+=5);
      }else if(this.eightPoint.includes(arr[i])){
        (score+=8);
      }else if(this.tenPoint.includes(arr[i])){
        (score+=10);
      }
      i++;
    }

    return score
  }

    
  

}