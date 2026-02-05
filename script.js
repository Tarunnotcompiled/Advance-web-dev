// const para=document.querySelector("p")
// para.innerText="Hello tarun"
// para.style.backgroundColor="Black"
// para.style.color="White"

// Selecting elements by class name

// const paras=document.getElementsByClassName("para")
// paras[0].innerText="Hello!"
// paras[0].innerHTML="<h1 style='color:red; background-color:Thistle;'>WOOWWWW</h1>"
// paras[1].style.color='Blue'
// Returns an array of elements if there are multiple.

// Selecting elements by id

// const para=document.getElementById("heading")
// para.innerText="MAIN SHUBHAM HUN"
// para.innerHTML="<p id='heading' style='color:Blue;background-color:Thistle;'>MAIN SHUBHAM HUN</p> " 


// Returns a new array
// let arr=[1, 2, 3, 4, 5, 6 ,7]
// const newarr=arr.map((arr)=>2*arr)
// console.log(newarr)    OUTPUT=> Array(7) [ 2, 4, 6, 8, 10, 12, 14 ]


// Doesn't return a new array
// let arr=[1,2,3,4,5,6,7]
// arr.forEach((ele)=>console.log(arr+=2))

// Difference in .textContent and .innerText

// .textContent applies changes to the hidden elements also (display:none or visibility:hidden).
// .innerText doesn't apply changes to hidden elements.

// const container=document.querySelector(".container")
// const button=document.querySelector("button")
// container.addEventListener("click",()=>{
//     console.log("Container clicked")
// })

// button.addEventListener("click",()=>{
//     console.log("Button clicked")
// })

// console.log(a) ERROR: ReferenceError: Cannot access 'a' before initialization
// console.log(b) Undefined

// let a = 239
// var b = 2595

// function hello(){
//     console.log("Hello World")
// }

// hello()



// function first() {
    // second()
// }
// function second() {
    // third()
// }
// function third() {
    // console.trace()
// }
// first()

// let val=40

// function calc(){
//     console.log(val)
//     let val=100
// }

// calc()
// console.log("first line")
// console.log("second linee")// this is syncronous code which is executed line by line wait for the first code to execute

// console.log("first line")
// setTimeout(() => {console.log("after 2 sec");}, 2000);
// console.log("second linee")// this is aynchronous as code is waited for another task to complete `

// setTimeout(()=>{
//     console.log("line after 5 sec")
// },5000)// to set a timeout of some time we use timeout 

// const timerID = setInterval(()=>{"set interval"},1000)

// const timeoutID = setTimeout(()=>{clearInterval(timerID)},1000)
// // clear time interval



// let count = 1; 
// const intervalId = setInterval(function() {
//     console.log(count);
//     count++;            
//     if (count > 10) {
//         clearInterval(intervalId); 
//     }
// }, 1000);

// let num=1;

// const id= setInterval(()=>{
//     if(num==10)clearInterval(id)
//         console.log(num)
//     num+=1
// })

// const name = document.querySelector("#name")
// const btn = document.querySelector(".btn")
// const list = document.querySelector(".list")
// btn.addEventListener('click',()=>{
//     if(name.value==""){
//         alert("enter the name")
//         return;
//     }
//     const li=document.createElement('li')
//     const dlt = document.createElement('button')
//     dlt.innerText="delete"
//     li.innerText=name.value;
//     dlt.addEventListener('click',()=>{
//         list.removeChild(li)
//     })
//     li.appendChild(dlt)
//     list.appendChild(li)
    
    
//     name.value=""
// })


// function print(num){
//     setTimeout(()=>{//high order function
//         console.log("inside print")
//          num()
//     },2000)
// }

// function callback(){//callback fucntion is used to call another function
//     console.log("inside callback")
// }
// print(callback)

// console.log("Starting homework...");
//     setTimeout(() => {
//         console.log ("Homework done!");
//         console.log("Starting dinner...");
//         setTimeout(() => {
//             console.log("Dinnerdone!");
//             console.log("Getting ready to go out...");
//             setTimeout(() => {
//                 console.log("goin to mog some stupid ass people");
//             }, 1000); // after dinner
//         }, 1500); // dinner time
//     }, 2000); // homework time


const p = new Promise((resolve,reject)=>{
    let done = true;
    setTimeout(() => {
        if(done){
            resolve("work has been completed")
        }else{
            reject("work has not been completed")
        }
    }, 5000);
})
p.then((data)=>{
    console.log(data)
}).catch((er)=>{
    console.log(err)
}).finally(()=>{
    console.log("finally back")
})   

function doHomework(){
    const p = new Promise((res,rej)=>{
        let done = true;  
        setTimeout(() => {
            if(done){
                console.log("homework comeplted")
                res("homework is done")
            }else(
                rej("homework is not completed")
            )
        }, 2000);
    })
    return p 
}
function eatdinner(){
    const p = new Promise((res,rej)=>{
        let done = true;  
        setTimeout(() => {
            if(done){
                console.log("dinner comeplted")
                res("dinner is done")
            }else(
                rej("dinner is not completed")
            )
        }, 2000);
    })
    return p 
}
function gotothePlayground(){
    const p = new Promise((res,rej)=>{
        let done = true;  
        setTimeout(() => {
            if(done){
                console.log("went to the playground")
                res("playground time!")
            }else(
                rej("not allowed to go !!")
            )
        }, 2000);
    })
    return p 
}
doHomework().then((data) => {
    console.log(data)
    return eatdinner()
}).then((data) => {
    console.log(data)
    return gotothePlayground()
    
}).then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log("error")
}).finally((data)=>{
    console.log("went to sleep")
})