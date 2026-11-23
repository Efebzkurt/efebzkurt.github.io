// Project data — edit this list to update the Projects section.
const projects = [
  {
    title: "Project One",
    description: "Placeholder description for your first project.",
    tags: ["HTML", "CSS", "JS"],
    link: "https://github.com/Efebzkurt",
  },
  {
    title: "Project Two",
    description: "Placeholder description for your second project.",
    tags: ["React", "Node.js"],
    link: "https://github.com/Efebzkurt",
  },
  {
    title: "Project Three",
    description: "Placeholder description for your third project.",
    tags: ["Flutter"],
    link: "https://github.com/Efebzkurt",
  },
];

// Render projects
const grid = document.getElementById("project-grid");
projects.forEach((p) => {
  const card = document.createElement("a");
  card.className = "card reveal";
  card.href = p.link;
  card.target = "_blank";
  card.rel = "noopener";

  const h3 = document.createElement("h3");
  h3.textContent = p.title;
  const desc = document.createElement("p");
  desc.textContent = p.description;
  const tags = document.createElement("div");
  tags.className = "tags";
  p.tags.forEach((t) => {
    const s = document.createElement("span");
    s.textContent = t;
    tags.appendChild(s);
  });

  card.append(h3, desc, tags);
  grid.appendChild(card);
});

// Theme toggle (remembered per browser)
const root = document.documentElement;
try {
  const saved = localStorage.getItem("theme");
  if (saved) root.dataset.theme = saved;
} catch (_) {}
document.getElementById("theme-toggle").addEventListener("click", () => {
  const next = root.dataset.theme === "light" ? "dark" : "light";
  root.dataset.theme = next;
  try { localStorage.setItem("theme", next); } catch (_) {}
});

// Reveal on scroll
document.querySelectorAll(".section").forEach((s) => s.classList.add("reveal"));
const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
      io.unobserve(e.target);
    }
  }),
  { threshold: 0.1 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
