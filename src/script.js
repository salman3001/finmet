const modal = document.getElementById("modal");
const modalButton = document.getElementById("modal-link");
const modalcloseBtn = document.getElementById("modal-close-btn");
const formBtn = document.getElementById("form-btn");




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

