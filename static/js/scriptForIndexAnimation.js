// Function to animate the text
function animateText() {
    const textContainer = document.querySelector('.animation-text');
    const texts = [
        'Heart Disease...',
        'Diabetes...',
        'Parkinson\'s Disease...'
    ];
    let textIndex = 0;
    let charIndex = 0;

    function typeText() {
        if (charIndex < texts[textIndex].length) {
            textContainer.innerHTML += texts[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 100);
        } else {
            setTimeout(eraseText, 1000);
        }
    }

    function eraseText() {
        if (charIndex >= 0) {
            const currentText = texts[textIndex].substring(0, charIndex);
            textContainer.innerHTML = currentText;
            charIndex--;
            setTimeout(eraseText, 50);
        } else {
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(typeText, 500);
        }
    }

    typeText();
}

// Delay the start of the animation
setTimeout(animateText, 3000);