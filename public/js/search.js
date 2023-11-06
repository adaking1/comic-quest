const searchComic = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#searchBar').value.trim();
    console.log(title);
    if (title) {
        const response = await fetch('/api/comic', {
            method: 'POST',
            body: JSON.stringify({title}),
            headers: {'Content-Type': 'application/json'}
        });
        if (response.ok) {
            const comicData = await response.json();
            document.location.replace(`/api/comic/${comicData.comic.id}`);
        }
    }
};


document.querySelector('#searchBtn').addEventListener('click', searchComic);