const sliderValue = document.querySelector('.sliderValue')
const slider = document.querySelector('input')
const registerButton = document.querySelector('.register')
const note = document.querySelector('.note-input')


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
    var value = slider.value;
    noteText = note.value
    console.log(noteText)
    var dataForSave = {
        noteText,
        value
    }

    localStorage.setItem('data', JSON.stringify(dataForSave))

})
