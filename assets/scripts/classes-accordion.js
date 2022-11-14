let classAccordionButton = document.getElementsByClassName('classes-accordion-button');

for (i = 0; i < classAccordionButton.length; i++) {
    classAccordionButton[i].addEventListener('click', function () {
        this.classList.toggle('active');
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}