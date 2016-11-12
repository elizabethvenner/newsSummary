var assert = {
  isTrue: function(assertionToCheck, assertion){
    if(assertionToCheck !== assertion){
      throw new Error("Assertion failed: " + assertionToCheck + " is not equal to " + assertion + ".");
    } 
  }
};
