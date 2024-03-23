// Ensure that the DOM is fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Check if the element with 'exploreButton' ID exists
    var exploreBtn = document.getElementById('exploreButton');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', function() {
            // Scroll to the 'investment-options' section smoothly
            document.getElementById('investment-categories').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Attach the 'learnMore' function to buttons within the 'investment-categories' section
    var investmentCards = document.querySelectorAll('#investment-categories .card button');
    investmentCards.forEach(function(button) {
        button.addEventListener('click', function() {
            // Retrieve the category from the button's data attribute
            var category = this.dataset.category;
            learnMore(category);
        });
    });
});

function learnMore(category) {
    // This function could be expanded to navigate to a new page, open a modal, etc.
    alert("Learn more about " + category);
}
