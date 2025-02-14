const myObj = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby'
}

// for in 

for (const key in myObj) {
    // console.log(key, ':-', myObj[key]);
    
}

const languages = ['js', 'java', 'python', 'c++']
for (const key in languages) {
    // console.log(languages[key]);
    
}


// Map cannot be iterated using for in loop

const map = new Map()
map.set('IN', 'India')
map.set('CH', 'China')
map.set('JP', 'Japan')

for (const key in map) {
    console.log(key);
    
}