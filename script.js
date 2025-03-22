let arrayOfNumber = [
  25, 5, 652, 5, 50000000000
];



// maximum and minimum vlaue code
let smallestValue;
let smallestValue2;
let biggestValue;

// minimum value function
function minimumValue(input) {
  input.map((item, index, array) => {
    smallestValue = array[0];
    for (let i = 0; i < input.length; i++) {
      if (smallestValue > array[i]) {
        smallestValue = array[i];
      }
    }
  });

  return smallestValue;
}

// maximum value function

function maximumValue(input) {
    input.map((item, index, array) => {
        biggestValue = array[0];
      for (let i = 0; i < input.length; i++) {
        if (biggestValue < array[i]) {
            biggestValue = array[i];
        }
      }
    });
  
    return biggestValue;
  }

  
  
  // ascending order function 
  let sampleArray1=[0,-5,85,5,2,7,2,4,5,4,5,2257,8,-88]
let ascendedArray=[]

function ascending(output2){
  for(let i=0;i<=output2.length;i++){
    if(output2[i]==minimumValue(output2)){
     ascendedArray.push(output2[i])
     output2.splice(i,1)
    }
    }

    for(let i=0 ;i<output2.length;i++){
      ascending(output2)
      output2.map((item,index,array)=>{
        if(item==ascending(output2)[0]){
          output2.splice(index,1)
        }
      })
    }
    return ascendedArray
}


//  decending order function
let sampleArray2=[0,-5,85,5,2,7,2,4,5,4,5,2257,8,-88]
let decendedArray=[]
function decending(output){
  for(let i=0;i<=output.length;i++){
    if(output[i]==maximumValue(output)){
     decendedArray.push(output[i])
     output.splice(i,1)
     
    }
    }

    for(let i=0 ;i<output.length;i++){
      decending(output)
      output.map((item,index,array)=>{
        if(item==decending(output)[0]){
          output.splice(index,1)
        }
      })
    }
    return decendedArray
}



console.log(ascending(sampleArray2))
console.log(decending(sampleArray1))

    


// console.log(ascendingValue(sampleArray1))

// let arrayOfNumber3=["a","b"]

// function trial(input) {
//   let myInput=input
//   myInput.push("c")
//   return myInput
// }

// console.log(arrayOfNumber3)
// console.log(trial(arrayOfNumber3))
// console.log(arrayOfNumber3)


let navlinkContainer=document.querySelector('.navlinkContainer')
let hamburger=document.getElementById('hamburger')
let home=document.getElementById('home')
let pdf=document.getElementById('pdf')
let audio=document.getElementById('audio')
let about=document.getElementById('about')
hamburger.addEventListener('click',()=>{
  navlinkContainer.classList.toggle('active')
  
})


if(parseInt(window.innerWidth)<=900){
 home.addEventListener('click',()=>{
  navlinkContainer.classList.toggle('active')
 })

 pdf.addEventListener('click',()=>{
  navlinkContainer.classList.toggle('active')
 })

 audio.addEventListener('click',()=>{
  navlinkContainer.classList.toggle('active')
 })

 about.addEventListener('click',()=>{
  navlinkContainer.classList.toggle('active')
 })
 
}

