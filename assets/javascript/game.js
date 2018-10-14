
    //Number of wins
      var numWin = 0; 
      var List = ["lion"]
      var textCtent = document.getElementById("user-text")
      var textW = document.getElementById("num-W")
      textW.textContent=numWin;
      var mask='';
      

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {
          //This part shows _ _ _ according the lengh of word
          //use for loop 
          //Number of wins
          
          var wd = List[0];
          var stra=[];
          var correctLetter;
          
          for(i=0;i<wd.length;i++){
             stra[i]=wd.charAt(i);
             mask=mask+' _ ';
             }
          textCtent.textContent=mask;
    
          var letterInput = event.key;
  
            for(i=0;i<stra.length;i++){
                 if(letterInput == stra[i]){
                   
                 }
                 alert(letterInput);
             }
  }

