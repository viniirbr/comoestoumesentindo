const sliderValue = document.querySelector('.sliderValue')
const slider = document.querySelector('input')

slider.oninput = (()=> {
    let value = slider.value;
    sliderValue.classList.add('show');
    sliderValue.style.left = (value/2)+'%'
    if((value>=0) && (value<=40)) 
    sliderValue.textContent = '😭'

    if((value>40) && (value<=80)) 
    sliderValue.textContent = '😩'

    if((value>80) && (value<=120)) 
    sliderValue.textContent = '😐'
    
    if((value>120) && (value<=160)) 
    sliderValue.textContent = '😀'

    if((value>160) && (value<=200)) 
    sliderValue.textContent = '🤩'
    
})

slider.onblur = (()=> {
    sliderValue.classList.remove('show');
});