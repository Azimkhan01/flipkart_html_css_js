const search = ()=>{
    let a= prompt("what you want to search");
    console.log(`The search answer is : ${a}`);
}
const loc = ()=>{
    window.location.href="https://www.flipkart.com/";
}
 
const arr = ["./image/first.png","./image/second.png","./image/third.png","./image/fourth.png","./image/fifth.png","./image/sixth.png","./image/seventh.png","./image/eight.png"];
//let l = (arr.length);

console.log("changed");

 let l = 0;
function dis(){
   
   let a =  setTimeout(()=>{
        
        document.getElementById("randomimg").src=arr[l];
        //document.getElementById("randomimg").src="./image/third.png";
     }
    ,3000);
    console.log("the value of image is"+arr[l]);
    l++;

    if(l>=arr.length){
        l = 0;
        clearTimeout(a);
    }
   // dis();
    }
    