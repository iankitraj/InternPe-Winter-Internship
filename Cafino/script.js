// LOGIN POPUP

const startBtn = document.getElementById("startBtn")
const loginModal = document.getElementById("loginModal")
const close = document.querySelector(".close")

startBtn.onclick = function () {
    loginModal.style.display = "flex"
}

close.onclick = function () {
    loginModal.style.display = "none"
}


// ORDER POPUP

const addBtns = document.querySelectorAll(".addBtn")
const orderModal = document.getElementById("orderModal")
const closeOrder = document.querySelector(".closeOrder")
const confirmOrder = document.getElementById("confirmOrder")
const successMsg = document.getElementById("successMsg")

addBtns.forEach(btn => {
    btn.onclick = function () {
        orderModal.style.display = "flex"
    }
})

closeOrder.onclick = function () {
    orderModal.style.display = "none"
}


// ORDER VALIDATION

confirmOrder.onclick = function () {

    let name = document.getElementById("customerName").value
    let address = document.getElementById("address").value

    if (name == "" || address == "") {

        successMsg.style.color = "red"
        successMsg.innerText = "Please fill your details"

        return
    }

    successMsg.style.color = "green"
    successMsg.innerText = "Your order successfully placed ☕"

}


// CONTACT FORM

document.getElementById("contactForm").addEventListener("submit", function (e) {

    e.preventDefault()

    alert("Thanks! We'll contact you soon.")

})


// YEAR

document.getElementById("year").textContent = new Date().getFullYear()


// BACK TO TOP

const topBtn = document.getElementById("topBtn")

window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {
        topBtn.style.display = "block"
    } else {
        topBtn.style.display = "none"
    }

})

topBtn.onclick = function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })

}