document.getElementById('loginBtn').onclick = function() {
    document.getElementById('loginPopup').style.display = 'block';
};

document.getElementById('signupBtn').onclick = function() {
    document.getElementById('signupPopup').style.display = 'block';
};

document.getElementById('closeLogin').onclick = function() {
    document.getElementById('loginPopup').style.display = 'none';
};

document.getElementById('closeSignup').onclick = function() {
    document.getElementById('signupPopup').style.display = 'none';
};

window.onclick = function(event) {
    if (event.target == document.getElementById('loginPopup')) {
        document.getElementById('loginPopup').style.display = 'none';
    }
    if (event.target == document.getElementById('signupPopup')) {
        document.getElementById('signupPopup').style.display = 'none';
    }
};

document.querySelectorAll('.game-card').forEach(card => {
    card.onclick = function() {
        window.location.href = 'game.html';
    };
});
