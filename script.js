// document.addEventListener('DOMContentLoaded', () => {
//     const likeBtn = document.getElementById('likeBtn');
//     const likesCount = document.querySelector('#likesCount span');
//     const commentBtn = document.getElementById('commentBtn');
//     const commentInput = document.getElementById('commentInput');
//     const commentsDiv = document.getElementById('comments');
  
//     let liked = false;
//     let likes = 137; // Initial like count
  
//     // Like button functionality
//     likeBtn.addEventListener('click', () => {
//       if (!liked) {
//         likes++;
//         likeBtn.style.color = 'red';
//         liked = true;
//       } else {
//         likes--;
//         likeBtn.style.color = 'black';
//         liked = false;
//       }
//       likesCount.textContent = likes;
//     });
  
//     // Comment button functionality
//     commentBtn.addEventListener('click', () => {
//       const commentText = commentInput.value.trim();
//       if (commentText) {
//         const comment = document.createElement('p');
//         comment.textContent = commentText;
//         commentsDiv.appendChild(comment);
//         commentInput.value = '';
//       }
//     });
//   });
  

document.addEventListener('DOMContentLoaded', () => {
    const likeBtn = document.getElementById('likeBtn');
    const likesCount = document.querySelector('#likesCount span');
    const commentInput = document.getElementById('commentInput');
    const commentsDiv = document.getElementById('comments');
    const submitBtn = document.getElementById('submitComment');
  
    let liked = false;
    let likes = 137; // Initial like count
  
    // Like button functionality
    likeBtn.addEventListener('click', () => {
      if (!liked) {
        likes++;
        likeBtn.style.color = 'red';
        liked = true;
      } else {
        likes--;
        likeBtn.style.color = 'black';
        liked = false;
      }
      likesCount.textContent = likes;
    });
  
    // Submit button functionality
    submitBtn.addEventListener('click', () => {
      const commentText = commentInput.value.trim();
      if (commentText) {
        const comment = document.createElement('p');
        comment.textContent = commentText;
        commentsDiv.appendChild(comment);
        commentInput.value = '';
      }
    });
  });
  