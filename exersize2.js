const { use } = require('react');

//---Snake water Gun---
const prompt = require('prompt-sync')();

let user = prompt("enter S W or G :- ")
let cpuI = Math.floor(Math.random() * 3);
let cpu = ["S", "W", "G"][cpuI]

const Match = (cpu, user) => {
    if(cpu === user)
    {
        return "Nobody";
    }
    else if( cpu === "S" && user === "W"){
        return "cpu"
    }
    else if( cpu === "S" && user === "G"){
        return "user"
    }
    else if( cpu === "G" && user === "W"){
        return "user"
    }
    else if( cpu === "G" && user === "S"){
        return "cpu"
    }
    else if( cpu === "W" && user === "S"){
        return "user"
    }
    else if( cpu === "W" && user === "G"){
        return "cpu"
    }
    else{
        return "Invalid input by user"
    }
    
}
 let result = Match(cpu, user)

console.log(`CPU:${cpu} and User:${user} \nThe winner is: ${result}`);
