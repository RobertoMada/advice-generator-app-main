const url = 'https://api.adviceslip.com/advice';

const adviceBtn = document.querySelector('.btn');
adviceBtn.addEventListener('click', getAdvice);

async function getAdvice(){
    const response = await fetch(url);
    const advice = await response.json();
    displayAdvice(advice);
}

function displayAdvice(advice){
    const adviceId = document.querySelector('.advice-number');
    adviceId.textContent = `#${advice.slip.id}`;
    const adviceText = document.querySelector('[data-role="advice"]');
    adviceText.textContent = `${advice.slip.advice}`;
}

getAdvice();