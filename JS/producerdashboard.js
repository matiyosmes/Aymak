const navComments = document.getElementById('navComments');
const navEditProfile = document.getElementById('navEditProfile');
const navPortfolio = document.getElementById('navPortfolio');
const logoutBtn = document.getElementById('logoutBtn');

navComments.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'producercomments.html';
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