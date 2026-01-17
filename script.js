function checkAccess() {
    const input = document.getElementById('accessCode');
    const errorMessage = document.getElementById('error-message');
    const code = input.value.toLowerCase().trim();
    
    if (code === 'test1') {
        window.location.href = 'test1.html';
    } else if (code === 'test2') {
        window.location.href = 'test2.html';
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
});