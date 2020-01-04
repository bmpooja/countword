

function countWord (arr){
  let result = arr.reduce(function (allNames, name) {
    //console.log(allNames)
    if (name in allNames){
       allNames[name]++;
    }else{
       allNames[name]=1
    }
    
    return allNames;
  },{})
  return result;
}

let people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 }
];
let groupedPeople = groupBy(people, 'age')
// groupedPeople is:
// { 
//   20: [
//     { name: 'Max', age: 20 }, 
//     { name: 'Jane', age: 20 }
//   ], 
//   21: [{ name: 'Alice', age: 21 }] 
// }