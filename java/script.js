// SMOOTH SCROLL
document.querySelectorAll('header nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// CONTACT FORM
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('status').textContent = "Message sent!";
  e.target.reset();
});

// PROJECT DATA
const projects = {
  pokedex: {
    title: "Pokédex App",
    desc: "Search Pokémon using PokéAPI",
    github: "https://github.com/WilsonChung9427/wilson-chung-wddm127-assignment-two",
    live: "https://wilson-chung-wddm127-assignment-two.vercel.app/"
  },
  matching: {
    title: "Matching Game",
    desc: "Memory card matching game",
    github: "https://github.com/WilsonChung9427/MatchingGame",
    live: "https://matching-game-silk.vercel.app/"
  },
  portal: {
    title: "Student Portal",
    desc: "Full-stack request system",
    github: "https://github.com/WilsonChung9427/wddm-project-2/tree/main",
    live: "https://wddm-project-2.vercel.app/"
  },
  review: {
    title: "Game Review App",
    desc: "Add and manage reviews",
    github: "https://github.com/WilsonChung9427/wilson-chung-game-review",
    live: "https://wilson-chung-game-review.vercel.app/"
  }
};

// OPEN MODAL
function openModal(key) {
  const p = projects[key];

  document.getElementById("modal-title").innerText = p.title;
  document.getElementById("modal-desc").innerText = p.desc;
  document.getElementById("modal-github").href = p.github;
  document.getElementById("modal-live").href = p.live;

  document.getElementById("modal").classList.remove("hidden");
}

// CLOSE MODAL
function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}

// CLICK OUTSIDE CLOSE
window.onclick = function(e) {
  const modal = document.getElementById("modal");
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
};