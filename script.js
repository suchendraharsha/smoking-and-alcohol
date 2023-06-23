const readMoreButtons = document.querySelectorAll('.read-more');

  // Get the modal, modal content, and close button
  const modal = document.querySelector('.modal');
  const modalContent = modal.querySelector('.modal-content');
  const closeModalButton = modal.querySelector('.close-modal');

  // Attach click event listeners to each button
  readMoreButtons.forEach(button => {
    button.addEventListener('click', function(event) {
      event.preventDefault();
      const article = this.parentNode;
      const articleContent = article.querySelector('.content-hide').innerText;
      const titleContent = article.querySelector('h3').innerText;
      showModal(articleContent,titleContent);
    });
  });

  // Attach click event listener to the close button
  closeModalButton.addEventListener('click', function() {
    closeModal();
  });

  // Function to show the modal
  function showModal(articleContent,titleContent) {
    const modalArticleContent = modal.querySelector('.modal-article-content');
    const modalTileContent = modal.querySelector('.modal-title');
    modalArticleContent.innerText = articleContent;
    modalTileContent.innerText = titleContent;
    modal.style.display = 'block';
  }

  // Function to close the modal
  function closeModal() {
    modal.style.display = 'none';
  }
  function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }