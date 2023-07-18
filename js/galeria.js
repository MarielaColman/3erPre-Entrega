const galleryImages = document.querySelectorAll('.gallery-image');
const imageModal = new bootstrap.Modal(document.getElementById('image-modal'));
galleryImages.forEach(image => {
    image.addEventListener('click', () => {
      const imagePath = image.src;
      const modalImage = imageModal._element.querySelector('img');
      modalImage.src = imagePath;
      imageModal.show();
  });
});