const tools = [
  {
    name: "Contador de Finanzas",
    description: "Organiza tus finanzas de forma simple y visual.",
    icon: "💸",
    url: "https://zzue1904.github.io/contador-de-finanzas/index.html"
  },
  {
    name: "Contador de Presupuesto Semanal",
    description: "Lleva el control de tu presupuesto cada semana.",
    icon: "🗓️",
    url: "https://zzue1904.github.io/contador-de-presupuesto-semanal/"
  },
  {
    name: "Contador Anime Merch",
    description: "Registra tus compras y deseos de anime merch.",
    icon: "🎀",
    url: "https://zzue1904.github.io/contador-anime-merch/"
  },
  {
    name: "Contador de Premios de Garra",
    description: "Controla tus premios conseguidos en máquinas de garra.",
    icon: "🧸",
    url: "https://zzue1904.github.io/contador-de-premios-de-garra/"
  },
  {
    name: "Contador de Emociones",
    description: "Guarda y mira tus emociones de manera tranquila.",
    icon: "💗",
    url: "https://zzue1904.github.io/contador-de-emociones/"
  },
  {
    name: "Contador de Recuerdos en Japón",
    description: "Reúne tus recuerdos especiales de Japón.",
    icon: "🌸",
    url: "https://zzue1904.github.io/contador-de-recuerdos-en-Jap-n/"
  },
  {
    name: "Contador de Ideas",
    description: "Anota ideas rápidas para no perder inspiración.",
    icon: "✨",
    url: "https://zzue1904.github.io/contador-de-ideas/"
  }
];

const toolsGrid = document.getElementById("toolsGrid");

tools.forEach((tool) => {
  const card = document.createElement("article");
  card.className = "tool-card";

  card.innerHTML = `
    <div>
      <div class="tool-icon">${tool.icon}</div>
      <h2>${tool.name}</h2>
      <p>${tool.description}</p>
    </div>

    <a href="${tool.url}" target="_blank" rel="noopener noreferrer">
      Abrir tool
    </a>
  `;

  toolsGrid.appendChild(card);
});