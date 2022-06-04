let text2 = document.getElementById('border')
 let d;
 let div_text = document.getElementById('past')
let storage = window.localStorage


function changeText(){
    d = new Date()
    let year = d.getUTCMinutes();
    text2.textContent = d.toLocaleString()
    console.log(d.toLocaleString())
}


function displayDate(){
    
    changeText()
    storage.setItem('date',d.toLocaleString())
    console.log(storage)
    storage.getItem('date')
    
}



function divtxt(){
    d = new Date()
    let year = d.getUTCMinutes();
    div_text.textContent = storage.getItem('date')
}


document.addEventListener('click',displayDate,true)
// document.addEventListener('reload',displayDate,true)

// console.log(d.toDateString())















//Local Storage

// let y = window.localStorage

// console.log(y)

// y.setItem('name','test')

// y.removeItem('name')
// console.log(localStorage)

// localStorage.setItem('age','30');


// console.log(localStorage)

//Date and time

// let d;


// d = new Date(123);


// d = new Date(2022,7)
// console.log(d.toString())


// console.log(d.getFullYear())
// console.log(d.getDay())
// console.log(d.getHours())
// console.log(d.setDate(5));
// console.log(d.toLocaleString('en-US',{
//     timeZone: 'America/New_York'
// }));
// console.log(JSON.stringify({
//     myDate: d
// }));


 