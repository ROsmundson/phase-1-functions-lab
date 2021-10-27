//function distanceFromHqInBlocks(pickup){
//  return Math.abs(42 - pickup)
//}

function distanceFromHqInBlocks(pickup){
  if (pickup <= 42) {
    return 42 - pickup
  } else (pickup >= 42)
    return pickup - 42
}

function distanceFromHqInFeet(pickup){
  return distanceFromHqInBlocks(pickup) * 264
}

function distanceTravelledInFeet(start, destination){
  //return Math.abs(start - destination) * 264
  if (start <= 42){
    return (start - destination) * 264
  } else { (start >= 42)
    return (destination - start) * 264
  }
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination)
  if (distance < 400) {
    return 0
  } else if (distance <= 2000) {
    return .02 * (distance - 400)
  } else if (distance <= 2500) {
    return 25
  } else (distance > 25000)
    return 'cannot travel that far'
}
