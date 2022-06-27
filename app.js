// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const modalBtn = document.querySelector(".modal-btn");
const modalOverlay = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", function () {
    // open-modal class contains the css of the blue overlay which has its visibility hidden in the css class modal-overlay
    // adds the class to modal-overlay class to make it visible
    modalOverlay.classList.add("open-modal");
})

closeBtn.addEventListener("click", function () {
    modalOverlay.classList.remove("open-modal");
})