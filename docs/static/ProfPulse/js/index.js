document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.card').forEach(card => {
    // Populate the summary
    const summaryEl = card.querySelector('.card-summary');
    summaryEl.textContent = card.dataset.summary;

    // Only toggle on the header click
    const header = card.querySelector('h3');
    header.addEventListener('click', e => {
      e.stopPropagation();

      // Toggle this one
      card.classList.toggle('open');
    });

    // “Explore” button navigation
    const btn = card.querySelector('.view-more');
    btn.addEventListener('click', e => {
      e.stopPropagation();
      window.location.href = card.dataset.url;
    });
  });
});
