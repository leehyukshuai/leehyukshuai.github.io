// override the heading
let myHeading = document.querySelector("h1")
myHeading.textContent = "hello, world!"

// add slot to click event
let myImage = document.querySelector('img')
let f1 = 'images/family.png'
let f2 = 'images/family-2.png'
myImage.onclick = function () {
    let other = f1
    if (myImage.getAttribute('src') === f1) {
        other = f2
    }
    myImage.setAttribute('src', other)
    // alert('oh yeah!~')
}

// every click adds an '!'
let items = document.querySelectorAll('li')
items.forEach((i) => { i.addEventListener('click', () => { i.textContent += '!' }) })

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

// modify the palette
let form = document.querySelectorAll("input.color")

if (!localStorage.getItem("bgColor")) {
    localStorage.setItem("bgColor", "#5cadc1")
    localStorage.setItem("fgColor", "#057d7f")
    localStorage.setItem("textColor", "#e19889")
}
form[0].value = localStorage.getItem("bgColor")
form[1].value = localStorage.getItem("fgColor")
form[2].value = localStorage.getItem("textColor")

function resetColor() {
    document.querySelector('html').style.backgroundColor = form[0].value
    document.querySelector('body').style.backgroundColor = form[1].value
    document.querySelector('html').style.color = form[2].value
    localStorage.setItem("bgColor", form[0].value)
    localStorage.setItem("fgColor", form[1].value)
    localStorage.setItem("textColor", form[2].value)
    alert("颜色应用成功！")
}

for (let i = 0; i < 3; ++i) {
    form[i].onchange = resetColor
}

function initColor() {
    document.querySelector('html').style.backgroundColor = form[0].value
    document.querySelector('body').style.backgroundColor = form[1].value
    document.querySelector('html').style.color = form[2].value
}
initColor()