document.querySelectorAll('.product-details__tab').forEach((tab) => {
  tab.addEventListener('click', function() {
    document
      .querySelectorAll('.product-details__tab')
      .forEach((t) => t.classList.remove('product-details__tab--active'));

    this.classList.add('product-details__tab--active');

    const tabContent = this.getAttribute('data-tab');

    document.querySelectorAll('.product-details__tab-pane').forEach((pane) => {
      pane.classList.remove('product-details__tab-pane--active');

      if (pane.id === tabContent) {
        pane.classList.add('product-details__tab-pane--active');
      }
    });

    const rightImage = document.getElementById('rightImage');

    if (tabContent === 'ingridients') {
      rightImage.src = 'path/to/right-image-ingridients.jpg';
    } else if (tabContent === 'equipment') {
      rightImage.src = 'path/to/right-image-equipment.jpg';
    } else if (tabContent === 'service') {
      rightImage.src = 'path/to/right-image-service.jpg';
    }
  });
});
