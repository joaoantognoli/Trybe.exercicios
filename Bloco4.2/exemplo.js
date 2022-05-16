let fruits = [2,5,2,32,44,55,66];
let sum = 0;

for(let index = 0; index < fruits.length; index+=1) {
    sum+=fruits[index];
}
if (sum>15){
    console.log(sum)
} else{
    console.log("menor que 15")
}