/*  Create a hacking simulator which has green background and it shows these messages with random delay of 1 to 7 seconds 
    
    Initializing Hacking...
    Reading your Files...
    Password files Detected...
    Sending all passwords and personal files to server...
    Cleaning up...

    The three dots must blink so that it looks like a real terminal
*/
async function getData(){
    let a=document.querySelector(".terminal");
    let b=document.createElement("p");
    let delay1=0;
    let delay2=0;
    let delay3=0;
    let delay4=0;
    let delay5=0;
    
    while(delay1<=0 || delay1>7) delay1=Math.round(Math.random()*10);
    setTimeout (b.innerHTML="Initializing Hacking...",delay1*10000);
    a.appendChild(b);
    
    b=document.createElement("p");
    while(delay2<=0 || delay2>7) delay2=Math.round(Math.random()*10);
    setTimeout (b.innerHTML="Reading your Files...",delay2*1000);
    a.appendChild(b);
    
    b=document.createElement("p");
    while(delay3<=0 || delay3>7) delay3=Math.round(Math.random()*10);
    setTimeout (b.innerHTML="Password files Detected...",delay3*1000);
    a.appendChild(b);
    
    b=document.createElement("p");
    while(delay4<=0 || delay4>7) delay4=Math.round(Math.random()*10);
    setTimeout (b.innerHTML="Sending all passwords and personal files to server...",delay4*1000);
    a.appendChild(b);
    
    b=document.createElement("p");
    while(delay5<=0 || delay5>7) delay5=Math.round(Math.random()*10);
    setTimeout (b.innerHTML="Cleaning up...",delay5*1000);
    a.appendChild(b);
}

getData();