const backBtn = document.getElementById('backBtn');
const sendBtn = document.getElementById('sendBtn');
const messageInput = document.getElementById('messageInput');
const messagesArea = document.getElementById('messagesArea');
const completeBtn = document.getElementById('completeBtn');

// Modal Elements
const ratingModal = document.getElementById('ratingModal');
const closeModal = document.getElementById('closeModal');
const submitReviewBtn = document.getElementById('submitReviewBtn');
const stars = document.querySelectorAll('.star');
const reviewComment = document.getElementById('reviewComment');

backBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'producerprofile.html';
});

sendBtn.addEventListener('click', sendMessage);

messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// 1. Open Modal when clicking "Mark Service Completed"
completeBtn.addEventListener('click', () => {
    ratingModal.style.display = 'flex';
});

// 2. Close Modal
closeModal.addEventListener('click', () => {
    ratingModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === ratingModal) {
        ratingModal.style.display = 'none';
    }
});

// 3. Star Rating Logic
stars.forEach(star => {
    star.addEventListener('click', () => {
        const value = parseInt(star.getAttribute('data-value'));
        updateStars(value);
    });
});

function updateStars(value) {
    stars.forEach(star => {
        const starVal = parseInt(star.getAttribute('data-value'));
        if (starVal <= value) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}

// 4. Submit Review Logic
submitReviewBtn.addEventListener('click', () => {
    const comment = reviewComment.value;
    
    // Here you would normally send data to a server
    // For this prototype, we just alert and update the button
    
    alert('Thank you! Your review has been submitted.');
    
    ratingModal.style.display = 'none';
    
    // Change "Mark Service Completed" button to "Completed"
    completeBtn.innerText = '✔ Completed & Reviewed';
    completeBtn.disabled = true;
    completeBtn.style.backgroundColor = '#155724'; // Dark Green
});

function sendMessage() {
    const text = messageInput.value.trim();
    if (text === '') return;

    const bubble = document.createElement('div');
    bubble.classList.add('message-bubble', 'sent');
    
    const p = document.createElement('p');
    p.innerText = text;
    
    bubble.appendChild(p);
    messagesArea.appendChild(bubble);
    
    messageInput.value = '';
    messagesArea.scrollTop = messagesArea.scrollHeight;
}