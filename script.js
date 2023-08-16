let arr = Object.values(localStorage)


const reloader = ()=>{
    let l = arr.length

    for (let m = 0; m<l ;m++ ){
        let div = document.createElement('div');
        div.className = 'conten';
        document.getElementsByClassName('container')[0].appendChild(div);

        serdiv = document.createElement('div');
        serdiv.className = 'serial';
        serdiv.textContent = `${m+1}.`;
        document.getElementsByClassName('conten')[m].appendChild(serdiv);

        let tdiv = document.createElement('div');
        tdiv.className = 'tdivs';
        tdiv.textContent = `${localStorage.getItem(`${m+1}`)}`
        document.getElementsByClassName('conten')[m].appendChild(tdiv);
    }
}


reloader()





document.getElementsByClassName('btnadd')[0].addEventListener('click', ()=>{

    
    i = localStorage.length

    console.log(i)

    document.getElementsByClassName('btnadd')[0].style.display = 'none'
    document.getElementsByClassName('btnsave')[0].style.display = 'inline-block'
    
    let div = document.createElement('div');
    div.className = 'conten';
    document.getElementsByClassName('container')[0].appendChild(div);
    
    let serdiv = document.createElement('div');
    serdiv.className = `serial`;
    serdiv.textContent = `${i+1}.`;
    document.getElementsByClassName('conten')[i].appendChild(serdiv);
    
    let inputbox = document.createElement('input');
    inputbox.className = `inputbox t${i}`;
    document.getElementsByClassName('conten')[i].appendChild(inputbox);
    inputbox.type = 'textbox';
    
    
    document.getElementById('savebtn').addEventListener('click', (e)=>{

        let a = document.getElementsByClassName(`t${i}`)[0].value
        arr.push(a)
        document.getElementsByClassName(`t${i}`)[0].remove()

        localStorage.setItem(i+1, a)
        
        let tdiv = document.createElement('div');
        tdiv.className = `t`;
        document.getElementsByClassName('conten')[i].appendChild(tdiv);
        tdiv.textContent = `${arr[i]}`;

        document.getElementsByClassName('btnadd')[0].style.display = 'inline-block'
        document.getElementsByClassName('btnsave')[0].style.display = 'none'

        i++
    })

})


document.getElementsByClassName('btndel')[0].addEventListener('click', ()=>{

    let ind = parseInt(prompt("Which index note u want to delete"))
    
    document.getElementsByClassName('conten')[ind-1].remove()
    arr.splice(ind-1,1)
    
    localStorage.clear()
    
    for(let j = 0; j<arr.length; j++){
        localStorage.setItem(j+1, arr[j])
    }
    
    let l = localStorage.length

    for(let j = ind ; j<=l+1 ; j++){
        let a = document.getElementsByClassName(`serial`)[j-1]
        console.log('i am inside')
        a.textContent = j
    }

    
})

// localStorage.clear()