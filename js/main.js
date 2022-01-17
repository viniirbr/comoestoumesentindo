const sliderValue = document.querySelector('.sliderValue')
const slider = document.querySelector('input')
const registerButton = document.querySelector('.register')
const note = document.querySelector('.note-input')
const historic = document.querySelector('.historic')
const previousNotes = document.querySelector('.previous-notes')
const closeButton = document.querySelector('.close-button')


slider.oninput = (()=> {
    var value = slider.value;
    sliderValue.classList.add('show');
    sliderValue.style.left = (value/2)+'%'

    if((value>=20) && (value<=53)) 
    sliderValue.textContent = '😭'

    if((value>53) && (value<=83)) 
    sliderValue.textContent = '😩'

    if((value>83) && (value<=113)) 
    sliderValue.textContent = '😐'
    
    if((value>113) && (value<=143)) 
    sliderValue.textContent = '😀'

    if((value>143) && (value<=180)) 
    sliderValue.textContent = '🤩'
    
})

slider.onblur = (()=> {
    sliderValue.classList.remove('show');
});

registerButton.addEventListener('click', ()=> {
    const savedData = JSON.parse(localStorage.getItem('data')) || []
    const date = moment().format('DD/MM/YYYY')
    const time = moment().format('hh:mm')
    var value = slider.value;
    noteText = note.value
    if(note.value == "") {
        noteText = "Prefiro nem comentar..."
    }
    var dataForSave = {
        date,
        time,
        noteText,
        value
    }
    const updateData = [...savedData, dataForSave]
    localStorage.setItem('data', JSON.stringify(updateData))
    note.value = ''
    loadNotes()
})

historic.addEventListener('click', () => {
    previousNotes.classList.add('visible')
    loadNotes()
})

closeButton.addEventListener('click', () => {
    previousNotes.classList.remove('visible')
})


const Note = ({ date, time, noteText, value }) => {
    const noteLi = document.createElement('li')
    noteLi.classList.add('note-item')
    var emoji
    if((value>=20) && (value<=53)) 
    emoji = '😭'

    if((value>53) && (value<=83)) 
    emoji = '😩'

    if((value>83) && (value<=113)) 
    emoji = '😐'
    
    if((value>113) && (value<=143)) 
    emoji = '😀'

    if((value>143) && (value<=180)) 
    emoji = '🤩'
    const content = 
    `<div class="note-item__header">
        <div class="note-item__datetime">
            <p class="note-item__date">${date}</p>
            <p class="note-item__time">${time}</p>
        </div>
        <div class="note-item__upperright">
            <p class="note-item__emoji" style="font-size: 1.5rem;">${emoji}</p>
            <span class="note-item__close"><i class="fas fa-times"></i></span>
        </div>
    </div>
    <p class="note-item__value" readonly>${noteText}</p>`
    noteLi.innerHTML = content
    return noteLi
}

const loadNotes = () => {
    const list = document.querySelector('.notes-list')
    const previousNotes = JSON.parse(localStorage.getItem('data')) || []
    list.innerHTML=""
    previousNotes.forEach((note)=>{
        list.appendChild(Note(note))
    })
}





