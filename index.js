

function groupBy (objectArray,property){
  let result = objectArray.reduce(function(acc,curObj){
      let key = curObj[property] 
      if(!acc[key]){
        acc[key] = [];
      }  
         acc[key].push(curObj)
      return acc;
  },{})
  return result
}

let people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 }
];
let groupedPeople = groupBy(people, 'age')
console.log(groupedPeople)
// groupedPeople is:
// { 
//   20: [
//     { name: 'Max', age: 20 }, 
//     { name: 'Jane', age: 20 }
//   ], 
//   21: [{ name: 'Alice', age: 21 }] 
// }