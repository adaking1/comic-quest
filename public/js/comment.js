const addCommentBtn = async (event) => {
    event.preventDefault();
    console.log(event);
    const newComment = document.querySelector('#newComment').value.trim();
    const id = event.target.getAttribute('data-id');

    if (newComment) {
        const response = await fetch(`/api/comic/${id}`, {
            method: 'PUT',
            body: JSON.stringify({text:newComment}),
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

if (document.querySelector('#addComment')) {
document.querySelector('#addComment').addEventListener('click', addCommentBtn);
};