const marvel = ["thor", "ironman", "venom"]
const dc = ["superman", "batman", "flash"]

// marvel.push(dc)
// console.log(marvel);
// console.log(marvel[3][1]);

const all = marvel.concat(dc)
// console.log(all);

const spread_method = [...marvel, ...dc]
// console.log(spread_method);

const another_array = [1, 2, 3, [4, 5], 6, [6, 7, [4, 5]]]
const flat_array = another_array.flat(Infinity)

// console.log(flat_array);

console.log(Array.isArray("Raja"));
console.log(Array.from("Raja"));
console.log(Array.from({name: "subrata"}));     // interesting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));