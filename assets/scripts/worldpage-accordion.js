let worldpageAccordionButton = document.getElementsByClassName('worldpage-accordion-button');

for (i = 0; i < worldpageAccordionButton.length; i++) {
    worldpageAccordionButton[i].addEventListener('click', function () {
        this.classList.toggle('active');
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}