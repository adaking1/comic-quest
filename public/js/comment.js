const addCommentBtn = async (event) => {
    event.preventDefault();
    const newComment = document.querySelector('#newComment').value.trim();
    const id = event.target.getAttributes('data-id');

    if (newComment) {
        const response = fetch(`/api/comic/${id}`, {
            method: 'PUT',
            body: JSON.stringify({newComment}),
            headers: ({'Content-Type': 'application/json'})
        });
        if (response.ok) {
            document.location.replace(`/api/comic/${id}`);
        }
        else {
            alert(response.statusText);
        }
    }
};


document.querySelector('#addComment').addEventListener('click', addCommentBtn);