let prom1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("Yes i am done");
        resolve("Manav")
    }, 3000);
})

prom1.then((a)=>{

    console.log(a)
})