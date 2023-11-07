const { response } = require("express");

async function updateFormHandler(event) {
    event.preventDefault();

    const id = window.location.toString().split('/')( window.location.toString().split('/').length - 1);

    const response = await fetch(`/api/comment/${id}`, {
        method: 'POST',
        body: JSON.stringify({
            comment_id: id
        }),
        headers: {
            'Context-Type': 'application/json'
        }
    })
};

if(response.ok) {
    document.location.replace('/');
} else {
    alert(response.statusText);
}

document.querySelector('.updateBtn').addEventListener('click', updateFormHandler);