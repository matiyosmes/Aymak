const backBtn = document.getElementById('backBtn');
const saveBtn = document.getElementById('saveBtn');
const logoutBtn = document.getElementById('logoutBtn');

backBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'customerhomepage.html';
});

saveBtn.addEventListener('click', () => {
    alert('Changes saved successfully!');
});

logoutBtn.addEventListener('click', () => {
   
    sessionStorage.removeItem('isLoggedIn');
    window.location.href = 'landingpage.html';
});