


for (let index = 0; index < 10; index++) {
    const element = index;
    // console.log(element);
}

for (let i = 0; i <= 10 ; i++) {
    const element = i;

    // console.log(`this is i: ${i}`);

    for (let j = 0; j <= 10 ; j++) {
        const element = j;
        
        // console.log(`this is j: ${j}`);
        

    }
    
}

table = 4

for (let t = 0; t <= 10; t++) {
    const element = table * t;

    // console.log(`${table} * ${t} = ${element}`); // for table..
        
}

bName = ['Nasir', 'Marwan', 'Sudais', 'Roamn']

for (let i = 0;  i < bName.length; i++) {
    const element = bName[i]
    // console.log(element);
}

for (let n = 0; n <= 20; n++) {
    
    console.log(n);
    if (n == 5) {
        // console.log('detected 5');
        // console.log('out from loop');
        break // break will stop the loop 
    }   
}

for (let n = 0; n <= 20; n++) {
    
    console.log(n);
    if (n == 5) {
        console.log('detected 5');
        console.log('5 is specially detected from loop');
        continue // continue will leave  the loop to execute
    }   
}