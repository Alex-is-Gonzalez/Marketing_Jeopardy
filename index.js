// NOTE: Answers below are base64-encoded ("a" field) so they don't
// appear as plain readable text if someone views this file or skims
// the raw JS. They are only decoded in memory at the moment
// "Reveal answer" is clicked.
const categories = [
  {
    name: "Lingo & Acronyms",
    clues: [
      {
        q: "This acronym stands for the person in charge of a company's entire marketing operation.",
        a: "Q01PIChDaGllZiBNYXJrZXRpbmcgT2ZmaWNlcik=",
        pts: 200,
      },
      {
        q: "This 3-letter acronym describes the desired next step you want your audience to take — like 'buy now' or 'learn more.'",
        a: "Q1RBIChDYWxsIHRvIEFjdGlvbik=",
        pts: 400,
      },
      {
        q: "This acronym measures whether your campaign spending is paying off.",
        a: "Uk9JIChSZXR1cm4gb24gSW52ZXN0bWVudCk=",
        pts: 600,
      },
      { q: "A KPI is a Key Performance ___.", a: "SW5kaWNhdG9y", pts: 800 },
      {
        q: "This acronym refers to a business that sells products or services to other businesses, not consumers.",
        a: "QjJCIChCdXNpbmVzcyB0byBCdXNpbmVzcyk=",
        pts: 1000,
      },
    ],
  },
  {
    name: "Strategy & Research",
    clues: [
      {
        q: "This analysis framework examines Strengths, Weaknesses, Opportunities, and Threats.",
        a: "U1dPVCBBbmFseXNpcw==",
        pts: 200,
      },
      {
        q: "This research process helps you understand what your rivals are doing in the market.",
        a: "Q29tcGV0aXRvciBBbmFseXNpcw==",
        pts: 400,
      },
      {
        q: "The process of collecting data about your target audience, industry trends, and market size.",
        a: "TWFya2V0IFJlc2VhcmNo",
        pts: 600,
      },
      {
        q: "This document outlines your goals, target audience, tactics, channels, and timelines for a campaign.",
        a: "TWFya2V0aW5nIFBsYW4=",
        pts: 800,
      },
      {
        q: "Using data and metrics — rather than gut feelings — to guide campaign and business decisions.",
        a: "RGF0YS1pbmZvcm1lZCBkZWNpc2lvbiBtYWtpbmc=",
        pts: 1000,
      },
    ],
  },
  {
    name: "Brand & Identity",
    clues: [
      {
        q: "While branding builds identity and perception, this focuses on promoting and selling.",
        a: "TWFya2V0aW5n",
        pts: 200,
      },
      {
        q: "This defines where a brand sits in the minds of consumers relative to its competitors.",
        a: "QnJhbmQgUG9zaXRpb25pbmc=",
        pts: 400,
      },
      {
        q: "The consistent personality, language, and style a brand uses to communicate — think formal vs. playful.",
        a: "QnJhbmQgVG9uZSAmIFZvaWNl",
        pts: 600,
      },
      {
        q: "When a company overhauls its name, logo, messaging, or identity to shift public perception.",
        a: "UmVicmFuZGluZw==",
        pts: 800,
      },
      {
        q: "The way you present yourself professionally — your reputation, expertise, and values as an individual.",
        a: "UGVyc29uYWwgQnJhbmQ=",
        pts: 1000,
      },
    ],
  },
  {
    name: "Audience & Storytelling",
    clues: [
      {
        q: "A fictional representation of your ideal customer, built from research and real data.",
        a: "UGVyc29uYQ==",
        pts: 200,
      },
      {
        q: "The art of using narrative to make a brand or message more engaging and memorable.",
        a: "U3Rvcnl0ZWxsaW5n",
        pts: 400,
      },
      {
        q: "When a brand highlights how a specific product solves a real problem or improves a customer's life.",
        a: "UHJvZHVjdCBTdG9yeXRlbGxpbmc=",
        pts: 600,
      },
      {
        q: "Grouping your audience into segments based on behavior, demographics, or needs so you can tailor messaging.",
        a: "Q3VzdG9tZXIgQW5hbHlzaXMgLyBBdWRpZW5jZSBTZWdtZW50YXRpb24=",
        pts: 800,
      },
      {
        q: "A brand's story arc that connects its origin, mission, and impact into a cohesive narrative consumers can relate to.",
        a: "QnJhbmQgTmFycmF0aXZl",
        pts: 1000,
      },
    ],
  },
  {
    name: "Analytics & Funnels",
    clues: [
      {
        q: "The stage of the marketing funnel where a potential customer becomes aware of your brand for the first time.",
        a: "QXdhcmVuZXNzICh0b3Agb2YgZnVubmVsKQ==",
        pts: 200,
      },
      {
        q: "The practice of collecting and interpreting data to evaluate and improve marketing efforts.",
        a: "TWFya2V0aW5nIEFuYWx5dGljcw==",
        pts: 400,
      },
      {
        q: "This metric tracks the percentage of people who take a desired action — like clicking or buying — out of total visitors.",
        a: "Q29udmVyc2lvbiBSYXRl",
        pts: 600,
      },
      {
        q: "A visual model that maps the journey a customer takes from first hearing about a brand to making a purchase.",
        a: "TWFya2V0aW5nIEZ1bm5lbA==",
        pts: 800,
      },
      {
        q: "A/B testing, heatmaps, and attribution modeling are all tools used in this discipline.",
        a: "TWFya2V0aW5nIEFuYWx5dGljcyAvIERhdGEtaW5mb3JtZWQgbWFya2V0aW5n",
        pts: 1000,
      },
    ],
  },
  {
    name: "Workplace & Content",
    clues: [
      {
        q: "A brief daily team meeting to share updates, blockers, and plans — often done standing up.",
        a: "U3RhbmQtdXA=",
        pts: 200,
      },
      {
        q: "An informal 1-on-1 meeting to network, get advice, or build a relationship.",
        a: "Q29mZmVlIENoYXQ=",
        pts: 400,
      },
      {
        q: "This type of content stays relevant and useful long after it's published — think 'how-to' guides.",
        a: "RXZlcmdyZWVuIENvbnRlbnQ=",
        pts: 600,
      },
      {
        q: "An Employee Resource Group — a voluntary, employee-led group that fosters belonging in the workplace.",
        a: "RVJH",
        pts: 800,
      },
      {
        q: "On Snapchat, content that disappears after being viewed is described as this.",
        a: "RXBoZW1lcmFs",
        pts: 1000,
      },
    ],
  },
];

// Decode a base64-encoded answer only when it's actually needed.
function decodeAnswer(encoded) {
  try {
    return decodeURIComponent(escape(window.atob(encoded)));
  } catch (e) {
    return "(answer unavailable)";
  }
}

let score = 0;
let activeCell = null;

function buildBoard() {
  const headers = document.getElementById("cat-headers");
  const board = document.getElementById("board");
  headers.innerHTML = "";
  board.innerHTML = "";
  categories.forEach((cat) => {
    const h = document.createElement("div");
    h.className = "cat-header";
    h.textContent = cat.name;
    headers.appendChild(h);
  });
  for (let row = 0; row < 5; row++) {
    categories.forEach((cat, ci) => {
      const clue = cat.clues[row];
      const cell = document.createElement("div");
      cell.className = "cell";
      cell.textContent = "$" + clue.pts;
      cell.id = `cell-${ci}-${row}`;
      cell.onclick = () => openModal(ci, row);
      board.appendChild(cell);
    });
  }
}

function openModal(ci, row) {
  const cell = document.getElementById(`cell-${ci}-${row}`);
  if (cell.classList.contains("used")) return;
  activeCell = { ci, row };
  const cat = categories[ci];
  const clue = cat.clues[row];
  document.getElementById("m-cat").textContent = cat.name;
  document.getElementById("m-pts").textContent = "$" + clue.pts;
  document.getElementById("m-clue").textContent = clue.q;
  document.getElementById("m-answer").className = "modal-answer";
  document.getElementById("m-answer").textContent = "";
  document.getElementById("m-btns").innerHTML =
    '<button onclick="revealAnswer()">Reveal answer</button>';
  document.getElementById("modal").classList.add("open");
}

function revealAnswer() {
  const clue = categories[activeCell.ci].clues[activeCell.row];
  document.getElementById("m-answer").textContent = "✓ " + decodeAnswer(clue.a);
  document.getElementById("m-answer").classList.add("visible");
  document.getElementById("m-btns").innerHTML = `
    <button class="btn-correct" onclick="markResult(true)">✓ Got it (+$${clue.pts})</button>
    <button class="btn-wrong" onclick="markResult(false)">✗ Missed it</button>
  `;
}

function markResult(correct) {
  const clue = categories[activeCell.ci].clues[activeCell.row];
  if (correct) {
    score += clue.pts;
    document.getElementById("score").textContent = score.toLocaleString();
  }
  const cell = document.getElementById(
    `cell-${activeCell.ci}-${activeCell.row}`,
  );
  cell.classList.add("used");
  cell.textContent = correct ? "✓" : "✗";
  closeModal();
}

function closeModal() {
  document.getElementById("modal").classList.remove("open");
  document.getElementById("m-answer").textContent = "";
  activeCell = null;
}

function resetGame() {
  score = 0;
  document.getElementById("score").textContent = "0";
  buildBoard();
}

document.getElementById("modal").addEventListener("click", function (e) {
  if (e.target === this) closeModal();
});

// Light deterrents against casual right-click / keyboard shortcuts
// for viewing source or opening DevTools. These do NOT stop anyone
// determined (DevTools can still be opened via the browser menu),
// but they cut down on accidental / casual spoilers.
document.addEventListener("contextmenu", (e) => e.preventDefault());
document.addEventListener("keydown", (e) => {
  const key = e.key.toUpperCase();
  if (
    key === "F12" ||
    (e.ctrlKey && e.shiftKey && (key === "I" || key === "J" || key === "C")) ||
    (e.ctrlKey && key === "U")
  ) {
    e.preventDefault();
  }
});

buildBoard();
