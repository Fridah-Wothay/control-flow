//1
function numbers(arr){
    const  fourNums = arr.slice(0,4).map(
    item => item*item);
    console.log(fourNums)
    const lastNums = arr.slice(-2).map(
        item =>item+10);
        const middleNum = arr.slice(4, -2)
        const newArr = fourNums
        +(middleNum)+(
            lastNums)
            console.log(newArr)
    

    
}
numbers([20,30,45,65,45,78,90])





//2
 let arrayNum = [1,2,3,4,5,6,7,8,9];
 let i = 0;
 while(i<arrayNum.length){
    if(arrayNum[i]===arrayNum[3]){
        break;
    }
    console.log(arrayNum[i]);
    i++;
 }

 //3
 
 function thisFruits(arr){
for (let i=0; i<arr.length; i++){
    if(i===1){
        continue;
    }
    console.log(arr[i]);
}


 }

 let fruits = ['apple','plum','banana','strawberries','kiwi']
 thisFruits(fruits)
 

 //4
 function stringArray(arr){
    for (let i = 0; i<arr.length; i++){
        console.log(`names; ${arr[i]}`);
    }
 }
 let persons = ["Fathers","Mothers","sisters"]
 stringArray(persons);
 //5
 function newString(str){
    let newString =""
    let v=str.length-1
    while(v>=0){
        newString +=str.substring(v,v+1)
        v--
    }
    console.log(newString)
 }
 newString("Mary","Wanjiru","Blair")



 