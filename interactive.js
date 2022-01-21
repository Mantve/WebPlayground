var jumps = ['jump', 'jumpLeft', 'jumpRight'];

document.addEventListener('keydown', function(event) {
    var guy = document.getElementById('guy');
    if (event.key == " " || event.key == "Spacebar") {
        const randomElement = jumps[Math.floor(Math.random() * jumps.length)];
        guy.classList = []
        void guy.offsetWidth;
        guy.classList.add(randomElement)
    }
});