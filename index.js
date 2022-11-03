// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue -42);

}

function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue);
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
    return Math.abs(blocks * 264);
  }

  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    return Math.abs((destination-start)*264);
  }

  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    const feet = distanceTravelledInFeet(start, destination);
    let price =0;
    
    if (feet<=400) {
        return price;
    }else if (feet<=2000){
        
        price = 2* (feet-400)/100;
        return price;
    }else if (feet<=2500){
        price =25;
        return price;
    }else {
        return 'cannot travel that far';
    }
  }