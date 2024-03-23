document.addEventListener('DOMContentLoaded', function() {
  // Event delegation for FAQ toggling
  var faqContainer = document.querySelector('.faq-container');
  if (faqContainer) {
    faqContainer.addEventListener('click', function(event) {
      if (event.target.classList.contains('faq-question')) {
        const answer = event.target.nextElementSibling;
        answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
      }
    });
  }

  // Attach the 'learnMore' function to buttons within the 'investment-categories' section
  var investmentCards = document.querySelectorAll('#investment-categories .card button');
  investmentCards.forEach(function(button) {
    button.addEventListener('click', function() {
      // Retrieve the category from the button's data attribute
      var category = this.getAttribute('data-category');
      learnMore(category);
    });
  });

  // Scroll to the 'investment-categories' section when 'Explore Investment Options' is clicked
  var exploreButton = document.getElementById('exploreButton');
  if (exploreButton) {
    exploreButton.addEventListener('click', function() {
      var investmentCategoriesSection = document.getElementById('investment-categories');
      if (investmentCategoriesSection) {
        investmentCategoriesSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});

function learnMore(category) {
  // This function could be expanded to navigate to a new page, open a modal, etc.
  alert("Learn more about " + category);
}
