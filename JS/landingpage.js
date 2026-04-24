const authModal = document.getElementById('authModal');
const closeModal = document.getElementById('closeModal');
const modalTitle = document.getElementById('modalTitle');
const modalOptions = document.getElementById('modalOptions');
const hireForm = document.getElementById('hireForm');
const workForm = document.getElementById('workForm');

const navLoginBtn = document.getElementById('navLoginBtn');
const heroHireBtn = document.getElementById('heroHireBtn');
const heroWorkBtn = document.getElementById('heroWorkBtn');
const optionHireBtn = document.getElementById('optionHireBtn');
const optionWorkBtn = document.getElementById('optionWorkBtn');
const backBtns = document.querySelectorAll('.back-btn');

const mainSearchBtn = document.getElementById('mainSearchBtn');
const mainSearchInput = document.getElementById('mainSearchInput');
const categoryBtns = document.querySelectorAll('.category-btn');
const viewProfileBtns = document.querySelectorAll('.view-profile-btn');

function openModal() {
    authModal.style.display = 'flex';
    resetModalView();
}

function resetModalView() {
    modalOptions.style.display = 'flex';
    hireForm.style.display = 'none';
    workForm.style.display = 'none';
    modalTitle.innerText = 'Welcome';
}

function showHireForm() {
    modalOptions.style.display = 'none';
    hireForm.style.display = 'flex';
    workForm.style.display = 'none';
    modalTitle.innerText = 'I want to hire';
}

function showWorkForm() {
    modalOptions.style.display = 'none';
    hireForm.style.display = 'none';
    workForm.style.display = 'flex';
    modalTitle.innerText = 'I want to work';
}

navLoginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
});

heroHireBtn.addEventListener('click', () => {
    authModal.style.display = 'flex';
    showHireForm();
});

heroWorkBtn.addEventListener('click', () => {
    authModal.style.display = 'flex';
    showWorkForm();
});

optionHireBtn.addEventListener('click', showHireForm);
optionWorkBtn.addEventListener('click', showWorkForm);

backBtns.forEach(btn => {
    btn.addEventListener('click', resetModalView);
});

closeModal.addEventListener('click', () => {
    authModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === authModal) {
        authModal.style.display = 'none';
    }
});

mainSearchBtn.addEventListener('click', () => {
    window.location.href = 'searchresults.html';
});

mainSearchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        window.location.href = 'searchresults.html';
    }
});

categoryBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (e.target.innerText.includes('Video Editing')) {
            window.location.href = 'searchresults.html';
        } else {
            alert('No list there');
        }
    });
});

viewProfileBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        if (index === 0) {
            window.location.href = 'producerprofile.html';
        } else {
            alert('Not developed');
        }
    });
});

hireForm.addEventListener('submit', (e) => {
    e.preventDefault();
   
    sessionStorage.setItem('isLoggedIn', 'true');
    window.location.href = 'customerhomepage.html';
});

workForm.addEventListener('submit', (e) => {
    e.preventDefault();
   
    sessionStorage.setItem('isLoggedIn', 'true');
    window.location.href = 'producerdashboard.html';
});