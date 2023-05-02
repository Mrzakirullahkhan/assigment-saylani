const btn1 = document.querySelector('#bttn1');
const btn2 = document.querySelector('#bttn2');
const btn3 = document.querySelector('#bttn3');
const info = document.querySelector('#detail');
const heading = document.querySelector('.contentHeader');
const img = document.querySelector('#myimage');



// for btn 1

const history = () => {
    heading.innerHTML = "History";
   
    info.innerHTML = "Lions are one of the largest and most powerful felines in the world, and have been a symbol of strength and courage for thousands of years. Historically, lions have been associated with royalty and are often depicted in heraldry and other symbols of power."
};

btn1.addEventListener('click', history);


// for btn 2 

const vision = () => {
    heading.innerHTML = "Vision";
    img.src = "vision.jpg"
    info.innerHTML = "Lions have excellent vision during the day and are able to see prey from a distance of about two miles away. Their eyesight is at its best in low light conditions, making them skilled nocturnal hunters. Additionally, lions have a reflective layer behind their retina called the tapetum lucidum which enhances their night vision."
};

btn2.addEventListener('click',vision);



// for btn 3 

const goals = () => {
    heading.innerHTML = "Goals";
    info.innerHTML = "Lions are predatory animals and their primary goal is to hunt and feed on prey to survive. They are apex predators, which means they are at the top of the food chain in their ecosystem. Lions are social animals and live in groups called prides, which helps them in hunting and protecting their territory."
};

btn3.addEventListener('click',goals);