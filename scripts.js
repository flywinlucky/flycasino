let balance = 5000; // Initial balance

document.getElementById('loginBtn').onclick = function() {
    document.getElementById('loginPopup').style.display = 'block';
    TelegramLoginWidget.init({
        bot_id: '7566897555:AAG-7T_y31rmY5Adtwz3d8oxdTo2uNXuj-U',
        request_access: true,
        onAuthCallback: onTelegramAuth
    });
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
        const game = card.getAttribute('data-game');
        window.location.href = `game.html?game=${game}`;
    };
});

function updateBalanceDisplay() {
    document.querySelectorAll('.balance').forEach(balanceElement => {
        balanceElement.textContent = `$${balance.toFixed(2)}`;
    });
}

updateBalanceDisplay();

function onTelegramAuth(user) {
    // Handle successful authentication here
    console.log(user);
    document.getElementById('loginPopup').style.display = 'none';
    balance = 10000; // Example: set balance after login
    updateBalanceDisplay();
}
