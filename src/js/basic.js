export function heroLife(obj) {
  if (obj.health > 50) {
    return 'healthy';
  }
  if (obj.health <= 50 && obj.health >= 15) {
    return 'wounded';
  }
  if (obj.health < 15) {
    return 'critical';
  }
}
heroLife({ name: 'Маг', health: 90 });

const heroes = [
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
];


export function heroLifeLevel(arr) {
   arr.sort((a, b) => {
    return b.health - a.health
   })

   return arr;

}

heroLifeLevel(heroes); 
