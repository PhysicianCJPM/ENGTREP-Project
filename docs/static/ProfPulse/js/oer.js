document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('oer-features')

  const features = [
    {
      title: 'Search & Discover',
      desc: 'Browse thousands of peer‑reviewed textbooks, media, and interactive modules across all subjects—filter by standard, grade level, or keyword.',
      img: './../static/ProfPulse/img/oer-search.png',
      link: '/oer/search/'
    },
    {
      title: 'Author & Remix',
      desc: 'Use our built‑in editor to modify open texts, embed quizzes and videos, then publish custom content directly to your courses.',
      img: './../static/ProfPulse/img/oer-author.png',
      link: '/oer/author/'
    },
    {
      title: 'Collaborative Review',
      desc: 'Invite colleagues and students to comment, rate, and version your materials—streamlining quality control and peer feedback.',
      img: './../static/ProfPulse/img/oer-collab.png',
      link: '/oer/collaborate/'
    },
    {
      title: 'Impact Analytics',
      desc: 'Track usage metrics and learning outcomes for every resource—see which materials boost engagement and comprehension.',
      img: './../static/ProfPulse/img/oer-analytics.png',
      link: '/oer/analytics/'
    }
  ];

  features.forEach(item => {
    const card = document.createElement('div');
    card.className = 'oer-card';
    card.innerHTML = `
      <img src="${item.img}" alt="${item.title} Preview">
      <div class="oer-card-content">
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
        <a href="${item.link}">Learn More →</a>
      </div>
    `;
    container.appendChild(card);
  });
});
