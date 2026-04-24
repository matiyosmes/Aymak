const logoBtn = document.getElementById('logoBtn');
const userProfileBtn = document.getElementById('userProfileBtn');
const viewProfileBtns = document.querySelectorAll('.view-profile-btn');
const headerSearchInput = document.getElementById('headerSearchInput');
const backHomeBtn = document.getElementById('backHomeBtn');

logoBtn.addEventListener('click', () => {
    window.location.href = 'customerhomepage.html';
});

userProfileBtn.addEventListener('click', () => {
    window.location.href = 'accountsettings.html';
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

headerSearchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        window.location.href = 'searchresults.html';
    }
});


backHomeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
  
    if (document.referrer.includes('customerhomepage')) {
        window.location.href = 'customerhomepage.html';
    } else {
        window.location.href = 'landingpage.html';
    }
});