const renderUpdateName = (event) => {
    event.preventDefault();
    const nameCard = document.querySelector('#nameCard');
    const inputElement = document.createElement('input');
    const updateButton = document.createElement('button');
    const button = document.querySelector('#updateName');
    const userInfo = document.querySelector('#userInfo');
    const emailCard = document.querySelector('#emailCard');
    const emailButton = document.querySelector('#updateEmail');
    updateButton.type = 'button';
    updateButton.id = 'updateNameButton';
    updateButton.textContent = 'Save';
    updateButton.addEventListener('click', updateName);
    inputElement.type = 'text';
    inputElement.id = 'newName';
    nameCard.textContent = 'New Username:'
    nameCard.appendChild(inputElement);
    nameCard.appendChild(updateButton);
    userInfo.removeChild(button);
    userInfo.removeChild(emailCard);
    userInfo.removeChild(emailButton);
};

const updateName = async (event) => {
    event.preventDefault();
    const newName = document.querySelector('#newName').value.trim();
    if (newName) {
        const response = await fetch(`/api/users/name`, {
            method: 'PUT',
            body: JSON.stringify({newName}),
            headers: {'Content-Type': 'application/json'}
        });
        if (response.ok) {
            document.location.replace('/profile');
        }
        else {
            alert('Unable to update!');
        }
    }

};

const renderUpdateEmail = (event) => {
    event.preventDefault();
    const nameCard = document.querySelector('#nameCard');
    const inputElement = document.createElement('input');
    const updateButton = document.createElement('button');
    const button = document.querySelector('#updateEmail');
    const userInfo = document.querySelector('#userInfo');
    const emailCard = document.querySelector('#emailCard');
    const nameButton = document.querySelector('#updateName');
    updateButton.type = 'button';
    updateButton.id = 'updateEmailButton';
    updateButton.textContent = 'Save';
    updateButton.addEventListener('click', updateEmail);
    inputElement.type = 'email';
    inputElement.id = 'newEmail';
    emailCard.textContent = 'New Email:'
    emailCard.appendChild(inputElement);
    emailCard.appendChild(updateButton);
    userInfo.removeChild(button);
    userInfo.removeChild(nameCard);
    userInfo.removeChild(nameButton);
};

const updateEmail = async (event) => {
    event.preventDefault();
    const newEmail = document.querySelector('#newEmail').value.trim();
    if (newEmail) {
        const response = await fetch(`/api/users/email`, {
            method: 'PUT',
            body: JSON.stringify({newEmail}),
            headers: {'Content-Type': 'application/json'}
        });
        if (response.ok) {
            document.location.replace('/profile');
        }
        else {
            alert('Unable to update!');
        }
    }
};

if (document.querySelector('#updateName')) {
    document.querySelector('#updateName').addEventListener('click', renderUpdateName);
};

if (document.querySelector('#updateEmail')) {
    document.querySelector('#updateEmail').addEventListener('click', renderUpdateEmail);
};


if (document.querySelector('#updateEmailButton')) {
    document.querySelector('#updateEmailButton').addEventListener('click', updateEmail);
};