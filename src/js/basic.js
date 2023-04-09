const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40}

function orderByProps(obj, ordArray) {
  const result = [];

   if (ordArray.length) {
    for (prop in ordArray) {
      result.push({key: prop, value: obj[prop]})
    }

    let rest = Object.keys(ordArray).filter((prop) => !ordArray.includes(prop));

    for (rest in ordArray) {
      result.push({key: rest, value: obj[rest]})
    }

   } else {
     for (prop in obj) {
       result.push({key: prop, value: obj[prop]})
     }
     
   }

  return result;
}

console.log(orderByProps(obj, ["name", "level"]));