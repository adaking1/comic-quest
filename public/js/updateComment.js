
const updateCommentBtn = async (event) => {
    event.preventDefault();
    console.log(event);
    const updatedCom = document.querySelector('#updateComment').value.trim();
    const id = event.target.getAttribute('data-commentId');

    if (updatedCom) {
        const response = await fetch(`/api/comment/${id}`, {
            method: 'PUT',
            body: JSON.stringify({text:updatedCom}),
            headers: ({'Content-Type': 'application/json'})
        });
        if (response.ok) {
            document.location.reload();
        }
        else {
            alert(response.statusText);
        }
    }
};

if (document.querySelector('.updateBtn')) {
document.querySelector('.updateBtn').addEventListener('click', updateCommentBtn);
};