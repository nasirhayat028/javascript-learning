
function hello(callback){
    console.log("hello");
    callback();
}

function bye(){
    console.log("bye from the site");
}

hello(bye);



function sum(callback, x, y) {
    let result = x + y;
    callback(result);
}

function display(result) {
    console.log(result);
}

sum(display, 3, 5); // Output: 8

let datas = [ 
    {name: 'Nasir', Profession: 'DevOps Engineer'}, 
    {name: 'Sudais', Profession: 'DevOps Engineer'},
    {name: 'Marwan', Profession: 'DevOps Engineer'}
]


// This function displays the data after 2 seconds
function displayData() {
    let output = "";

    setTimeout(() => {
        datas.forEach((data) => {
            console.log(data.name); 
            output += `<li>${data.name}</li>`; 
        });

        // show names on webpage
        // document.body.innerHTML = output;

    }, 2000);
}

// This function returns a Promise that adds new data after 4 seconds
function pushData(newData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            datas.push(newData); // Add new object to array

            let error = false; // Change to true to test error handling

            if (!error) {
                resolve(" Data pushed successfully!");
            } else {
                reject(" Error: Failed to push data.");
            }
        }, 4000);
    });
}

// This async function uses await to call pushData and then displayData
async function start() {
    try {
        // Wait until pushData finishes before moving to next line
        const message = await pushData({ name: "Hayat" });

        console.log(message); // Show success message

        //  Now call the display function
        displayData();

    } catch (error) {
        console.error(error); // Catch and print any errors
    }
}

// Call the async function to start the process
start();
