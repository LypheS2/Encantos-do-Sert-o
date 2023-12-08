var buttonA = document.getElementById('read_button');

buttonA.addEventListener('click', function() {
    var card = document.querySelector('.botaoA');
    card.classList.toggle('active');

    if (card.classList.contains("active")) {
        return buttonA.textContent = "Ler menos"
    }
    buttonA.textContent = "Ler Mais"
})


var buttonB = document.getElementById('read_buttonB');

buttonB.addEventListener('click', function() {
    var card = document.querySelector('.botaoB');
    card.classList.toggle('active');

    if (card.classList.contains("active")) {
        return buttonB.textContent = "Ler menos"
    }
    buttonB.textContent = "Ler Mais"
})

var buttonC = document.getElementById('read_buttonC');

buttonC.addEventListener('click', function() {
    var card = document.querySelector('.botaoC');
    card.classList.toggle('active');

    if (card.classList.contains("active")) {
        return buttonC.textContent = "Ler menos"
    }
    buttonC.textContent = "Ler Mais"
})

var buttonD = document.getElementById('read_buttonD');

buttonD.addEventListener('click', function() {
    var card = document.querySelector('.botaoD');
    card.classList.toggle('active');

    if (card.classList.contains("active")) {
        return buttonD.textContent = "Ler menos"
    }
    buttonD.textContent = "Ler Mais"
})

