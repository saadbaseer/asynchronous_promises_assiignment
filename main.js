"use strict";
// Question # 1
// Write a simple asynchronous TypeScript function fetchGreeting that returns a
// greeting message after a 2-second delay using setTimeout.
// let fetchGreeting=new Promise((resolve)=>{
//     setTimeout((delaty)=>{resolve("hellow world")
//     },2000)})
// .then((res)=>{
//     console.log(res);
// })
// Question # 2
// Write a function simulateTask that simulates a task by logging "Task started",
// waits for 1 second, and then logs "Task completed". Use setTimeout for the delay.
// let simulateTask=()=>{
//     console.log("task started");
//     setTimeout(()=>{
//         console.log("task completed");
//     },1000)
// }
// simulateTask()
// Question # 3
// Write a function fetchData that returns a Promise which resolves with the string
// "Data fetched successfully!" after a delay of 1 second.
// let fetchData=():Promise <string>=>{
//     return new Promise((resolve)=>{
//        setTimeout(()=>{
//         resolve("Data fetched succcesfully")
//        },1000) 
//     });
// }
// fetchData().then((resolve)=>{
//     console.log(resolve);
// })
// Question # 4
// Write a function fetchWithError that returns a Promise. It should randomly either
// resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a
// delay of 1 second. Handle the rejection using .catch
// let fetchWithError=():Promise<string>=>{
//     return new Promise((ressolve,reject)=>{
//     setTimeout(()=>{
//         let fetchData=(Math.random()) > 0.5;
//         if(fetchData){
//             ressolve("Data fetched succesfully")
//         }else{
//             reject("Data fetched failed ")
//         }
//     },1000)
//     })
// }
// fetchWithError().then((res)=>{
//     console.log(res);
// }).catch((rej)=>{
//     console.log(rej);
// })
// Question # 5
// Write a function executeSequentially that executes two functions fetchData and
// processData sequentially using Promises, and logs the results in the order they are
// called.\
let fetchData1 = () => {
    return new Promise((resolve) => {
        resolve("Data fetched succesfully");
    });
};
let processData = () => {
    return new Promise((resolve) => {
        resolve("processed data succcesfully");
    });
};
let executeSequentially = () => {
    fetchData1().then((res) => {
        console.log(res);
    });
    processData().then((res) => {
        console.log(res);
    });
};
executeSequentially();
