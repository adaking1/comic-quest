
const updateCommentBtn = async (event) => {
    event.preventDefault();
    const updatedCom = document.querySelector('#updateComment').value.trim();
    const id = event.target.getAttribute('data-commentId');
    console.log(id);
    
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

const update = (event) => {
    event.preventDefault();
    const updateText = document.createElement('input');
    const updateButton = document.createElement('button');
    const id = event.target.getAttribute('data-commentId');
    let selected;
    document.querySelectorAll('.comment').forEach((comment) => {
        if (comment.getAttribute('data-commentId') === id) {
            selected = comment;
        }
    });

    updateText.type = 'text';
    updateText.id = 'updateComment';
    updateButton.type = 'button';
    updateButton.textContent = 'Save';
    updateButton.setAttribute('data-commentId', id);
    updateButton.addEventListener('click', updateCommentBtn);
    
    selected.appendChild(updateText);
    selected.appendChild(updateButton);
    
};

if (document.querySelector('.updateBtn')) {
document.querySelectorAll('.updateBtn').forEach((comment) => {
    comment.addEventListener('click', update);
});
};