function myFunction() {
    console.log("Starting a task...");
    let sum=0;
    for(let i=0;i<1e9;i++){
        sum+=i;
    } 
    console.log("Task completed");
    return sum;
}
console.log("Before calling myFunction");
const result=myFunction();
console.log("After calling myFunction");
console.log("Result:", result);