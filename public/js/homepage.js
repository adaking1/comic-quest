const searchComic = async (event) => {
    event.preventDefault();
    const comicName = document.querySelector('#searchBar').value.trim();
    if (comicName) {
        const response = await fetch('/api/comic/:id', {
            method: 'GET',
        });
        if (!response.ok) {
            alert('Comic not found!');
        }
    }
};




document.querySelector('#searchBtn').addEventListener('click', searchComic);