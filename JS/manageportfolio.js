const navDashboard = document.getElementById('navDashboard');
const navComments = document.getElementById('navComments');
const navEditProfile = document.getElementById('navEditProfile');
const logoutBtn = document.getElementById('logoutBtn');
const uploadArea = document.getElementById('uploadArea');
const deleteBtns = document.querySelectorAll('.delete-btn');

navDashboard.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'producerdashboard.html';
});

navComments.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'producercomments.html';
});

navEditProfile.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'editproducerprofile.html';
});

logoutBtn.addEventListener('click', () => {
   
    sessionStorage.removeItem('isLoggedIn');
    window.location.href = 'landingpage.html';
});

uploadArea.addEventListener('click', () => {
    alert('Upload feature would open file explorer here.');
});

deleteBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const item = e.target.closest('.portfolio-item');
        if (confirm('Are you sure you want to delete this project?')) {
            item.remove();
        }
    });
});