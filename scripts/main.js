// override the heading
let myHeading = document.querySelector("h1")
myHeading.textContent = "hello, world!"

// add slot to click event
let myImage = document.querySelector('img')
let f1 = 'images/family.png'
let f2 = 'images/family-2.png'
myImage.onclick = function(){
    let other = f1
    if (myImage.getAttribute('src') === f1) {
        other = f2
    }
    myImage.setAttribute('src', other)
    // alert('oh yeah!~')
}

// every click adds an '!'
let items = document.querySelectorAll('li')
items.forEach((i)=>{i.addEventListener('click', ()=>{i.textContent += '!'})})

// add tailored welcome message
let welcome = document.getElementById('welcome')
function generateWelcome(userName) {
    return '您正以' + userName + '的身份登入'
}

function setUserName() {
    let userName = prompt('君の名字？', '游客')
    localStorage.setItem('user-name', userName)
    welcome.textContent = generateWelcome(userName)
}

// initialize the userName
let userName = localStorage.getItem('user-name')
if (!userName) {
    setUserName()
} else {
    welcome.textContent = generateWelcome(userName)
}

document.querySelector('button').onclick = setUserName