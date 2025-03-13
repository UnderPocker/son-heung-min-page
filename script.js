document.getElementById('colorChangeButton').addEventListener('click', function() {
    const colors = ['#f4f4f4', '#e0e0e0', '#d0d0d0', '#c0c0c0'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});