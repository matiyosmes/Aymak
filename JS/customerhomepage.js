const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');
const categoryBtns = document.querySelectorAll('.category-btn');
const viewProfileBtns = document.querySelectorAll('.view-profile-btn');
const userProfileBtn = document.getElementById('userProfileBtn');

searchBtn.addEventListener('click', () => {
    window.location.href = 'searchresults.html';
});

searchInput.addEventListener('keypress', (e) => {
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

userProfileBtn.addEventListener('click', () => {
    window.location.href = 'accountsettings.html';
});