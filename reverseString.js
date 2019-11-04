const reverseString = function(string){
  if (string === ""){
      return "";
  }
  else{
  
  return reverseString(string.substr(1)) + string[0];
  
  
  }
}


console.log(reverseString('Hey'));
