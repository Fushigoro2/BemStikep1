// JavaScript for interactive features

// Example hover effect
const examples = document.querySelectorAll('.example');

examples.forEach(example => {
    example.addEventListener('mouseenter', () => {
        example.style.transform = 'translateY(-10px)';
    });

    example.addEventListener('mouseleave', () => {
        example.style.transform = 'translateY(0)';
    });
});