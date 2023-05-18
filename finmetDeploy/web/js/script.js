const modal = document.getElementById("modal");
const modalButton = document.getElementById("modal-link");
const modalcloseBtn = document.getElementById("modal-close-btn");
const formBtn = document.getElementById("form-btn");
const accrodianBtn = document.getElementById("accordian-btn");
const accrodianContent = document.getElementById("accordian-content");
const accPlus = document.getElementById("acc-plus");
const accMinus = document.getElementById("acc-minus");



modalButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (modal.classList.contains("hidden")) {
        modal.classList.add("block");
        modal.classList.remove("hidden");
    } else {
        modal.classList.add("hidden");
    }
});

modalcloseBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (modal.classList.contains("hidden")) {
        modal.classList.add("block");
        modal.classList.remove("hidden");
    } else {
        modal.classList.add("hidden");
    }
});

formBtn.addEventListener("click", () => {
    alert("Thank you,Your request has recieved, Our ITR expert will contact you shortly")
})

accrodianBtn.addEventListener("click", () => {
    if (accrodianContent.classList.contains("hidden")) {
        accrodianContent.classList.remove("hidden");
        accrodianBtn.classList.remove("shadow-lg")
        accPlus.classList.remove("hidden")
        accMinus.classList.add("hidden")
    } else {
        accrodianContent.classList.add("hidden");
        accrodianBtn.classList.add("shadow-lg")
        accPlus.classList.add("hidden")
        accMinus.classList.minu("hidden")
    }
})