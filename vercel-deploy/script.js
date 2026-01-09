function toggleTodo(element) {
    const checkbox = element.querySelector('.todo-checkbox');
    checkbox.classList.toggle('checked');
    element.classList.toggle('completed');
}

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-menu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Animate progress bar on load
window.addEventListener('load', () => {
    const progressFill = document.querySelector('.progress-fill');
    progressFill.style.width = '0%';
    setTimeout(() => {
        progressFill.style.width = '55%';
    }, 500);
});
