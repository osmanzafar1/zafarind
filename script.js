// Contact form functionality
function sendMessage() {
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;
    
    if (!name || !email || !message) {
        alert('Please fill out all fields before sending.');
        return;
    }
    
    const mailtoLink = `mailto:osmanzafar7@gmail.com?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(`From: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    window.location.href = mailtoLink;
}

// Testing page access code functionality
function checkAccess() {
    const input = document.getElementById('accessCode');
    const errorMessage = document.getElementById('error-message');
    const code = input.value.toLowerCase().trim();
    
    if (code === 'test1') {
        window.location.href = 'test1.html';
    } else if (code === 'test2') {
        window.location.href = 'test2.html';
    } else if (code === 'test3') {
        window.location.href = 'test3.html';
    } else if (code === 'dan') {
        window.location.href = 'test4.html';
    } 
    else if (code === 'dan2') {
        window.location.href = 'test5.html';
    } else {
        errorMessage.textContent = 'Invalid access code. Please try again.';
        input.classList.add('error');
    }
}

// Allow Enter key to submit
document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('accessCode');
    if (input) {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkAccess();
            }
        });
        
        input.addEventListener('input', function() {
            const errorMessage = document.getElementById('error-message');
            errorMessage.textContent = '';
            input.classList.remove('error');
        });
    }
    
    // Contact form Enter key support
    const contactInputs = document.querySelectorAll('#contact-name, #contact-email');
    contactInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    });
});