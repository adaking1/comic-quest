
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
    const commentCard = document.querySelector('.comment');
    const updateBtn = document.querySelector('#updateBtn');
    const id = event.target.getAttribute('data-commentId');
    

    updateText.type = 'text';
    updateText.id = 'updateComment';
    updateButton.type = 'button';
    updateButton.textContent = 'Save';
    updateButton.setAttribute('data-commentId', id);
    updateButton.addEventListener('click', updateCommentBtn);
    commentCard.appendChild(updateText);
    commentCard.appendChild(updateButton)

    // commentCard.removeChild(updateBtn);
    
};

if (document.querySelector('.updateBtn')) {
document.querySelector('.updateBtn').addEventListener('click', update);
};