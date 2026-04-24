const navDashboard = document.getElementById('navDashboard');
const navComments = document.getElementById('navComments');
const navPortfolio = document.getElementById('navPortfolio');
const logoutBtn = document.getElementById('logoutBtn');
const saveBtn = document.getElementById('saveBtn');

navDashboard.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'producerdashboard.html';
});

navComments.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'producercomments.html';
});

navPortfolio.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'manageportfolio.html';
});

logoutBtn.addEventListener('click', () => {

    sessionStorage.removeItem('isLoggedIn');
    window.location.href = 'landingpage.html';
});

saveBtn.addEventListener('click', () => {
    alert('Profile changes saved successfully!');
});