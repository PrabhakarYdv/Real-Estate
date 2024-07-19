const people = document.getElementById("people")
const btnLess = document.getElementById("btn_less")
const btnMore = document.getElementById("btn_more")
const checkinData = document.getElementById("checkin_data")
const checkin = document.getElementById("checkin")
const checkoutData = document.getElementById("checkout_data")
const checkout = document.getElementById("checkout")
const btnCheckinLess = document.getElementById("checkin_less")
const btnCheckinMore = document.getElementById("checkin_more")
const btnCheckoutLess = document.getElementById("checkout_less")
const btnCheckoutMore = document.getElementById("checkout_more")
const moreImage = document.getElementById("more_img")
const btnLeft = document.getElementById("btn_left")
const btnRight = document.getElementById("btn_right")

let peopleValue = 4

btnLess.addEventListener("click", () => {
    peopleValue -= 1
    if (peopleValue <= 0) {
        peopleValue = 1
        people.value = peopleValue + " Peoples"
    }
    else {
        people.value = peopleValue + " Peoples"
    }
})

btnMore.addEventListener("click", () => {
    peopleValue += 1
    if (peopleValue >= 4) {
        peopleValue = 4
        people.value = peopleValue + " Peoples"
    }
    else {
        people.value = peopleValue + " Peoples"
    }
})

checkin.addEventListener("change", () => {
    let checkinValue = checkin.value
    // console.log(checkinValue)

    let bookedDate = new Date(checkinValue)
    let currentDate = new Date()

    const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    let day = week[bookedDate.getDay()]
    let date = checkinValue.slice(8, 10)
    let month = months[bookedDate.getMonth()]

    if (bookedDate < currentDate) {
        alert("Previous date booking not allowed")
    }
    else {
        checkinData.innerText = day + ", " + date + " " + month
    }
})


checkout.addEventListener("change", () => {
    let chechoutValue = checkout.value
    let checkinValue = checkin.value
    let checkoutDate = new Date(chechoutValue)
    let bookedDate = new Date(checkinValue)

    const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    let date = chechoutValue.slice(8, 10)
    let day = week[checkoutDate.getDay()]
    let month = months[checkoutDate.getMonth()]

    if (checkoutDate < bookedDate) {
        alert("Previous date Checkout not allowed")
    }
    else {
        checkoutData.innerText = day + ", " + date + " " + month
    }
})

btnCheckinMore.addEventListener("click", () => {
    const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    let today = new Date()
    let tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)

    let day = week[tomorrow.getDay()]
    let date = tomorrow.getDate()
    let month = months[tomorrow.getMonth()]
    checkinData.innerText = day + ", " + date + " " + month
})

btnCheckinLess.addEventListener("click", () => {
    const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    let today = new Date()
    let day = week[today.getDay()]
    let date = today.getDate()
    let month = months[today.getMonth()]
    checkinData.innerText = day + ", " + date + " " + month
})

btnCheckoutMore.addEventListener("click", () => {
    const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    let today = new Date()
    let tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 2)

    let day = week[tomorrow.getDay()]
    let date = tomorrow.getDate()
    let month = months[tomorrow.getMonth()]
    checkoutData.innerText = day + ", " + date + " " + month
})

btnCheckoutLess.addEventListener("click", () => {
    const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    let today = new Date()
    let tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)

    let day = week[tomorrow.getDay()]
    let date = tomorrow.getDate()
    let month = months[tomorrow.getMonth()]
    checkoutData.innerText = day + ", " + date + " " + month
})


const images = [
    "url(../img/bg.jpg) center",
    "url(../img/img1.jpg) center",
    "url(../img/img2.jpg) center",
    "url(../img/img3.jpg) center"
]

let imageIndex = 0
moreImage.innerText = "+" + images.length

btnLeft.addEventListener("click", () => {
    imageIndex -= 1
    if (imageIndex < 0) {
        imageIndex = (images.length) - 1
    }
    document.getElementsByClassName("content")[0].style.setProperty("--background", images[imageIndex])
})

btnRight.addEventListener("click", () => {
    imageIndex += 1
    if (imageIndex > images.length-1) {
        imageIndex = 0
    }
    document.getElementsByClassName("content")[0].style.setProperty("--background", images[imageIndex])
})
