const authorSearch = document.getElementById('authorSearch');
authorSearch.addEventListener('keyup', x => {

    let searchValue = x.target.value.toLowerCase();
    // console.log(searchValue);
    let authors = document.querySelectorAll('h1.title');

    authors.forEach(author => {
        if (author.textContent.toLowerCase().includes(searchValue)) {
            author.parentNode.parentNode.style.display = 'block';
        } else {
            author.parentNode.parentNode.style.display = 'none';
        }
    })
});

// Random value for CSS fade in
const authorCards = document.querySelectorAll('.author-card');
authorCards.forEach(card => {
    let randomAniDelay = Math.floor(Math.random() * 500)
    card.style.animation = `fadeIn 1s .${randomAniDelay}s ease forwards`;
});