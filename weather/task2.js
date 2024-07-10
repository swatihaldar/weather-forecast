const body = document.body;

const div = document.createElement('div');
body.append(div);

div.classList.add('background');
div.style.backgroundImage = 'url(https://i.pinimg.com/736x/53/3f/cc/533fccb708ee5682691d599789d8251c.jpg)'
div.style.backgroundSize = 'cover';
div.style.height = '135vh'

const h1 =  document.createElement('h1');
h1.innerText = 'Chat'
div.appendChild(h1);
h1.classList.add('heading');

const headingElement = document.querySelector('.heading');
headingElement.style.color = '#ffffff';
headingElement.style.backgroundColor = '#323f4b';
headingElement.style.fontSize = '50px'
headingElement.style.textAlign = 'center';
headingElement.style.fontFamily = 'Roboto';
headingElement.style.fontWeight = 'bold';
headingElement.style.padding = '14px';

const div2 = document.createElement('div');
div.appendChild(div2)
div2.classList.add('whole');

const wholeElement = document.querySelector('.whole');
wholeElement.style.padding = '14px';
wholeElement.style.color = '#ffffff';
wholeElement.style.fontFamily = 'Roboto';
wholeElement.style.fontSize = '25px';

const para = document.createElement('p');
para.classList.add('text-sent');
para.innerText = 'Hello, how are you?'
div2.appendChild(para)

const para2 = document.createElement('p');
para2.classList.add('text-rec');
para2.innerText = 'Hi varakumar, I am good. How are you?';
div2.appendChild(para2);

const para3 = document.createElement('p');
para3.classList.add('text-sent');
para3.innerText = 'I\'m fine. I am learning HTML and CSS'
div2.appendChild(para3);

const para4 = document.createElement('p');
para4.classList.add('text-rec');
para4.innerText = 'HTML and CSS?';
div2.appendChild(para4);

const para5 = document.createElement('p');
para5.classList.add('text-sent');
para5.innerText = 'Yes, by doing projects parallely, I am learning new things.';
div2.appendChild(para5);

const para6 = document.createElement('p');
para6.classList.add('text-rec');
para6.innerText = 'Awesome, can you tell how are learning it';
div2.appendChild(para6);

const para7 = document.createElement('p');
para7.classList.add('text-sent');
para7.innerText = 'can i call you?';
div2.appendChild(para7);


const textRecElement = document.querySelectorAll('.text-rec').forEach(textRecElement =>{;
    textRecElement.style.backgroundColor = '#52606d';
    textRecElement.style.padding = '12px';
    textRecElement.style.borderTopLeftRadius = '12px';
    textRecElement.style.borderTopRightRadius = '12px';
    textRecElement.style.borderBottomLeftRadius = '12px';
    textRecElement.style.textAlign = 'left';
})

const textSentElement = document.querySelectorAll('.text-sent').forEach(textSentElement =>{
    textSentElement.style.backgroundColor = '#47a3f3';
    textSentElement.style.padding = '12px';
    textSentElement.style.borderTopLeftRadius = '12px';
    textSentElement.style.borderTopRightRadius = '12px';
    textSentElement.style.borderBottomRightRadius = '12px';
    textSentElement.style.textAlign = 'right';
});

