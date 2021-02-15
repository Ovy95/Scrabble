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
    console.log(len)
    var score = 0
    var arr = [...word]

    console.log(arr)
    for (; i < len;)  {

      console.log(arr[i]) 
      if(this.onePoint.includes(arr[i])){
        (score+=1);
        console.log(score);
       
      } else if(this.twoPoint.includes(arr[i])){
        (score+=2);
        console.log(score);

      }else if(this.threePoint.includes(arr[i])){
        (score+=3);
        console.log(score);

      }else if(this.fourPoint.includes(arr[i])){
        (score+=4);
        console.log(score);

      }else if(this.fivePoint.includes(arr[i])){
        (score+=5);
        console.log(score);

      }else if(this.eightPoint.includes(arr[i])){
        (score+=8);
        console.log(score);

      }else if(this.tenPoint.includes(arr[i])){
        (score+=10);
        console.log(score);
      }

      i++;
    }

    return score
  }

    
  

}