async function deleteFormHandler(event) {
    event.preventDefault();

    // const id = window.location.toString().split('/')[
    //     window.location.toString().split('/').length - 1
    //   ];
    const id = event.target.getAttribute('data-commentId');
      
      const response = await fetch(`/api/comment/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({
          comment_id: id
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
      }
      
}

if (document.querySelector('.delete-comment-btn')) {
  document.querySelector('.delete-comment-btn').addEventListener('click', deleteFormHandler);
};