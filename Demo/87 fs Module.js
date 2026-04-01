import fs from 'fs';

fs.writeFile("Manav.txt","This is written in txt file",()=>{
    console.log("Written in file");
})

fs.readFile("Manav.txt",(e,d)=>{
    console.log(d.toString());
})

fs.appendFile("Manav1.txt","ABC ", (e,d)=>{
    console.log(d);
})