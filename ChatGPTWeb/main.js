   //Hide Navigation Bar
 
	 var navbar = document.querySelector('.navbar');
 
	  function toggleNavbar() {
      if (window.innerWidth <= 900) {
        navbar.style.display = 'none';
      } else {
        navbar.style.display = 'block';
      }
    }

    // call the function on page load
    toggleNavbar();

    // call the function when the screen size changes
    window.addEventListener('resize', toggleNavbar);


 // --------------------------------------------------------- 
 
   // Get all the links in the navigation bar
	const navLinks = document.querySelectorAll('header a');

	// Add a click event listener to each link
	navLinks.forEach(link => {
	link.addEventListener('click', event => {
    event.preventDefault();

    // Get the ID of the section to scroll to
    const sectionId = event.target.getAttribute('href');

    // Get the section element
    const section = document.querySelector(sectionId);

    // Calculate the distance from the top of the page to the section
	const distance = section.getBoundingClientRect().top;

    // Scroll to the section with a smooth animation
    window.scrollBy({
      top: distance,
      behavior: 'smooth'
    });
  });
});

