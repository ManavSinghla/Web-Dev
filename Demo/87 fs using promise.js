import fs from "fs/promises"

let a = await fs.writeFile("Manav.txt","ABC");
let b = await fs.readFile("Manav.txt");

console.log(b.toString());