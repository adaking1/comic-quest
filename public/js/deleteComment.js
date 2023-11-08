async function deleteFormHandler(event) {
    event.preventDefault();

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
  document.querySelectorAll('.delete-comment-btn').forEach((comment) => {
    comment.addEventListener('click', deleteFormHandler);
  });
};
