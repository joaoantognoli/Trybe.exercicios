let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let mediAri = 0;

for (let index = 0; index < numbers.length; index+=1) {
    mediAri += numbers[index]/numbers.length;
    
}



console.log(mediAri);