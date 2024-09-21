document.addEventListener('DOMContentLoaded', function() {
    const floatingBtn = document.querySelector('.floating-btn');
    const sidebar = document.querySelector('.sidebar');

    floatingBtn.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });

    // Close sidebar when clicking outside
    document.addEventListener('click', function(event) {
        if (!sidebar.contains(event.target) && !floatingBtn.contains(event.target)) {
            sidebar.classList.remove('active');
        }
    });

    // Close sidebar when clicking a link (for mobile)
    const sidebarLinks = document.querySelectorAll('.sidebar .links li a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('active');
            }
        });
    });
});