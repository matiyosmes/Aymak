const navDashboard = document.getElementById('navDashboard');
const navEditProfile = document.getElementById('navEditProfile');
const navPortfolio = document.getElementById('navPortfolio');
const logoutBtn = document.getElementById('logoutBtn');
const sendBtn = document.getElementById('sendBtn');
const messageInput = document.getElementById('messageInput');
const messagesContainer = document.getElementById('messagesContainer');

navDashboard.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'producerdashboard.html';
});

navEditProfile.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'editproducerprofile.html';
});

navPortfolio.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'manageportfolio.html';
});

logoutBtn.addEventListener('click', () => {
   
    sessionStorage.removeItem('isLoggedIn');
    window.location.href = 'landingpage.html';
});

sendBtn.addEventListener('click', sendMessage);

messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const text = messageInput.value.trim();
    if (text === '') return;

    const bubble = document.createElement('div');
    bubble.classList.add('message-bubble', 'sent');
    
    const p = document.createElement('p');
    p.innerText = text;
    
    bubble.appendChild(p);
    messagesContainer.appendChild(bubble);
    
    messageInput.value = '';
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}