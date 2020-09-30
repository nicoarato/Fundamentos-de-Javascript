// Intersection Observer.

document.addEventListener('DOMContentLoaded', () => {

    const observer = new IntersectionObserver(entries => {

        console.log(entries[0].isIntersecting);

    });

    observer.observe(document.querySelector('#footer'));
})