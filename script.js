const btn = document.getElementById('btn');

btn.addEventListener('mouseenter', () => {
    btn.style.left = `${random(0, 90)}%`;
    btn.style.top = `${random(0, 90)}%`;
});

const random = (min, max) => {
    const rand = min + Math.random() * (max - min + 1);
    return Math.floor(rand); 
}

btn.addEventListener('click', () => {
    alert('You Win');
})