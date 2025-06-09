let Name ="rahul"
console.log(Name.length);
console.log(Name.toUpperCase());
console.log(Name.toLowerCase());
console.log(Name.slice(2, 4)); //last given index doesn't excute
console.log(Name.replace("hul", "j"));
let name2 = "sah"
console.log(Name.concat(name2));// used  to add to string

let name3 = "     Romeo     " // trim spaces
console.log(name3.trim());

//print every character of string using loop

let place = "Benguluru"
let n = place.length;
for( i=0;i<n;i++)
{
    console.log(place[i]);
}
