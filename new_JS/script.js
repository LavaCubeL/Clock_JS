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















 
