console.log('connected')


const h = document.querySelector('h1');

h.setAttribute('class','heading');



const newHeading = document.createElement('h1');

newHeading.innerText = "This is a new Heading";
console.log(newHeading);


const wto = document.querySelector('h1');
wto.before(newHeading)
wto.after(newHeading)
wto.append(newHeading)
wto.prepend(newHeading)
wto.before(newHeading)


const image = document.createElement('img');
// image.height = "40vw"
image.src =  "/js/cocWallpaper.webp" ;

const wto2= document.querySelector('img');
wto2.before(image);



const l = document.createElement('li');

l.innerText = "Perman";

const s = document.querySelector('ul');
s.append(l)



