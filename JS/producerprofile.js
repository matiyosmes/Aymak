const backBtn = document.getElementById('backBtn');
const chatBtn = document.getElementById('chatBtn');
const loginModal = document.getElementById('loginModal');
const closeModal = document.getElementById('closeModal');
const modalOptions = document.getElementById('modalOptions');
const hireForm = document.getElementById('hireForm');
const workForm = document.getElementById('workForm');
const modalTitle = document.getElementById('modalTitle');

backBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'searchresults.html';
});

chatBtn.addEventListener('click', () => {
    
    if (sessionStorage.getItem('isLoggedIn') === 'true') {
       
        window.location.href = 'chatwithproducer.html';
    } else {
       
        loginModal.style.display = 'flex';
        resetModal();
    }
});

closeModal.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
    }
});

function showForm(type) {
    modalOptions.style.display = 'none';
    
    if (type === 'hire') {
        hireForm.style.display = 'flex';
        modalTitle.innerText = 'I want to hire';
    } else {
        workForm.style.display = 'flex';
        modalTitle.innerText = 'I want to work';
    }
}

function resetModal() {
    modalOptions.style.display = 'flex';
    hireForm.style.display = 'none';
    workForm.style.display = 'none';
    modalTitle.innerText = 'Login to Chat';
}

hireForm.addEventListener('submit', (e) => {
    e.preventDefault();
   
    sessionStorage.setItem('isLoggedIn', 'true');
    window.location.href = 'chatwithproducer.html';
});

workForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    sessionStorage.setItem('isLoggedIn', 'true');
    window.location.href = 'producerdashboard.html';
});