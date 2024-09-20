document.addEventListener('DOMContentLoaded', function() {
    // Select all the footer heads (About Us, Careers, Social Impact, etc.)
    const footerHeads = document.querySelectorAll('.footer-head');

    footerHeads.forEach(function(footerHead) {
        footerHead.addEventListener('click', function() {
            // Get the associated list (next sibling of the footer head)
            const footList = footerHead.nextElementSibling;
            const arrowIcon = footerHead.querySelector('.arrow i');

            // Toggle the visibility of the list
            if (footList.style.display === 'block') {
                footList.style.display = 'none';
            } else {
                footList.style.display = 'block';
            }

            // Toggle the arrow direction (rotate the icon)
            if (arrowIcon.classList.contains('fa-angle-down')) {
                arrowIcon.classList.remove('fa-angle-down');
                arrowIcon.classList.add('fa-angle-up');
            } else {
                arrowIcon.classList.remove('fa-angle-up');
                arrowIcon.classList.add('fa-angle-down');
            }
        });
    });
});







