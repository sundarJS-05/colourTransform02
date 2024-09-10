
let randomColour = ()=>{
    let hexValue = "0123456789ABCDEF"
    let colour = '#'
    for (let i=0; i<6; i++) {
        colour = colour + hexValue[Math.floor(Math.random()*16)]     
    }

    return colour
}

// console.log(randomColour());

let iterator

const changeColour= ()=>{

    let colourChangeFn = ()=>{ 
        document.body.style.backgroundColor = randomColour() 
        console.log('colour change happening!');
        
    }

    iterator = setInterval(colourChangeFn, 2700);

    
}



const stopChange= ()=>{

    clearInterval(iterator)
    console.log('colour change stopped..');
    

}

document.getElementById('start').addEventListener('click', changeColour )

document.querySelector('#stop').addEventListener('click', stopChange )

