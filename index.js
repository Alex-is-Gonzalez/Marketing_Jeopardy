// =========================
// BOARD 1 (existing board)
// =========================
const board1 = [
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

// =========================
// BOARD 2 (new board)
// plain text answers first
// =========================
const board2 = [
  {
    name: "Know Your Acronyms",
    clues: [
      {
        q: "This acronym describes a company like Snapchat that sells directly to everyday users, not other businesses.",
        a: "QjJDIChCdXNpbmVzcyB0byBDb25zdW1lcik=",
        pts: 200,
      },
      {
        q: "A brand sends this document to multiple agencies when they want them to pitch ideas and pricing for a project.",
        a: "UkZQIChSZXF1ZXN0IGZvciBQcm9wb3NhbCk=",
        pts: 400,
      },
      {
        q: "A specific, measurable target used to track the success of a campaign — like 'reach 1M impressions.'",
        a: "S1BJIChLZXkgUGVyZm9ybWFuY2UgSW5kaWNhdG9yKQ==",
        pts: 600,
      },
      {
        q: "Unlike B2C, this model involves selling software, tools, or services from one company to another.",
        a: "QjJCIChCdXNpbmVzcyB0byBCdXNpbmVzcyk=",
        pts: 800,
      },
      {
        q: "This acronym names a voluntary workplace group where employees with shared identities or interests build community together.",
        a: "RVJHIChFbXBsb3llZSBSZXNvdXJjZSBHcm91cCk=",
        pts: 1000,
      },
    ],
  },
  {
    name: "Brand Basics",
    clues: [
      {
        q: "When customers keep coming back to the same brand — not because they have to, but because they want to — this is what they've built.",
        a: "QnJhbmQgTG95YWx0eQ==",
        pts: 200,
      },
      {
        q: "The strategic answer to 'why us and not them?' — how a brand carves out a distinct space in a consumer's mind.",
        a: "QnJhbmQgUG9zaXRpb25pbmc=",
        pts: 400,
      },
      {
        q: "The total feeling a person gets from every interaction with a brand — ads, packaging, events, customer service, all of it.",
        a: "QnJhbmQgRXhwZXJpZW5jZQ==",
        pts: 600,
      },
      {
        q: "A brand decides to overhaul its name, visual identity, and messaging to appeal to a younger audience. This is called what?",
        a: "UmVicmFuZGluZw==",
        pts: 800,
      },
      {
        q: "This defines whether a brand sounds like a trusted expert, a fun best friend, or a bold challenger — and it should stay consistent everywhere.",
        a: "QnJhbmQgVG9uZSAmIFZvaWNl",
        pts: 1000,
      },
    ],
  },
  {
    name: "Snap Universe",
    clues: [
      {
        q: "Snapchat's three core product pillars — the tools and experiences that define the platform.",
        a: "VGhlIDMgQydzOiBDaGF0LCBDYW1lcmEsIENvbnRlbnQ=",
        pts: 200,
      },
      {
        q: "This type of Snap ad shows up directly in a user's inbox, making it feel more like a message from a friend than a traditional ad.",
        a: "U3BvbnNvcmVkIFNuYXA=",
        pts: 400,
      },
      {
        q: "An AR creative tool on Snapchat that lets users transform their face or surroundings in real time.",
        a: "TGVucw==",
        pts: 600,
      },
      {
        q: "Content that vanishes after it's viewed — a core feature that makes Snapchat feel more authentic and in-the-moment.",
        a: "RXBoZW1lcmFsIGNvbnRlbnQ=",
        pts: 800,
      },
      {
        q: "A static graphic overlay — often branded for an event or location — that users can add to a Snap after taking it.",
        a: "RmlsdGVy",
        pts: 1000,
      },
    ],
  },
  {
    name: "Campaigns & Events",
    clues: [
      {
        q: "A brand sets up an immersive pop-up experience at a music festival to let fans try their product. This type of marketing is called what?",
        a: "RXhwZXJpZW50aWFsIEV2ZW50IC8gQWN0aXZhdGlvbg==",
        pts: 200,
      },
      {
        q: "The Super Bowl, Coachella, and the Oscars are all examples of this — major cultural moments brands build campaigns around.",
        a: "VGVudHBvbGUgRXZlbnQ=",
        pts: 400,
      },
      {
        q: "A brand builds a campaign around Valentine's Day to maximize relevance. What type of moment are they leveraging?",
        a: "VGVudHBvbGUgRXZlbnQgLyBDdWx0dXJhbCBNb21lbnQ=",
        pts: 600,
      },
      {
        q: "This document maps out every phase of a campaign — goals, audience, channels, tactics, and when everything goes live.",
        a: "TWFya2V0aW5nIFBsYW4=",
        pts: 800,
      },
      {
        q: "An activation where consumers don't just see the brand — they touch it, feel it, taste it, or participate in it. The goal is an emotional memory.",
        a: "RXhwZXJpZW50aWFsIE1hcmtldGluZyAvIEJyYW5kIEFjdGl2YXRpb24=",
        pts: 1000,
      },
    ],
  },
  {
    name: "Research & Analysis",
    clues: [
      {
        q: "A structured breakdown of a competitor's campaign — what they did, who they targeted, and whether it worked.",
        a: "TWFya2V0aW5nIFRlYXJkb3du",
        pts: 200,
      },
      {
        q: "Researching a rival brand's messaging, pricing, and audience to find gaps you can take advantage of.",
        a: "Q29tcGV0aXRvciBBbmFseXNpcw==",
        pts: 400,
      },
      {
        q: "A fictional but data-backed profile of your ideal customer — including their habits, goals, and frustrations.",
        a: "UGVyc29uYQ==",
        pts: 600,
      },
      {
        q: "Instead of making decisions based on instinct, marketers use this approach to let numbers and insights guide the strategy.",
        a: "RGF0YS1JbmZvcm1lZCBEZWNpc2lvbiBNYWtpbmc=",
        pts: 800,
      },
      {
        q: "This type of research combines surveys, focus groups, and social listening to understand who your audience really is and what they care about.",
        a: "TWFya2V0IFJlc2VhcmNoIC8gQ3VzdG9tZXIgQW5hbHlzaXM=",
        pts: 1000,
      },
    ],
  },
  {
    name: "Storytelling & Content",
    clues: [
      {
        q: "Rather than just listing features, a brand shows how their running shoe helped someone finish their first marathon. This is called what?",
        a: "UHJvZHVjdCBTdG9yeXRlbGxpbmc=",
        pts: 200,
      },
      {
        q: "Content that will still be just as useful a year from now as it is today — no expiration date.",
        a: "RXZlcmdyZWVuIENvbnRlbnQ=",
        pts: 400,
      },
      {
        q: "The stage at the top of the marketing funnel where a potential customer discovers your brand for the very first time.",
        a: "QXdhcmVuZXNz",
        pts: 600,
      },
      {
        q: "A brand uses its founding story, mission, and customer impact to connect emotionally with its audience. This is the craft of ___.",
        a: "U3Rvcnl0ZWxsaW5n",
        pts: 800,
      },
      {
        q: "This metric tells you what percentage of people who saw your content actually did what you wanted them to do.",
        a: "Q29udmVyc2lvbiBSYXRl",
        pts: 1000,
      },
    ],
  },
];
// =========================
// Utilities
// =========================

// Encode plain answers to base64 so board2 behaves like board1
function encodeAnswer(str) {
  return btoa(unescape(encodeURIComponent(str)));
}

function decodeAnswer(encoded) {
  try {
    return decodeURIComponent(escape(window.atob(encoded)));
  } catch (e) {
    return "(answer unavailable)";
  }
}



// All boards
const boards = [board1, board2];

// 0 = board1, 1 = board2
let currentBoardIndex = 0;
let score = 0;
let activeCell = null;

function getCurrentBoard() {
  return boards[currentBoardIndex];
}

function updateBoardToggleButton() {
  const btn = document.getElementById("board-toggle-btn");
  if (!btn) return;
  btn.textContent =
    currentBoardIndex === 0 ? "Switch to Board 2" : "Switch to Board 1";
}

function buildBoard() {
  const categories = getCurrentBoard();
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

  updateBoardToggleButton();
}

function openModal(ci, row) {
  const categories = getCurrentBoard();
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
  const categories = getCurrentBoard();
  const clue = categories[activeCell.ci].clues[activeCell.row];

  document.getElementById("m-answer").textContent =
    "✓ " + decodeAnswer(clue.a);
  document.getElementById("m-answer").classList.add("visible");

  document.getElementById("m-btns").innerHTML = `
    <button class="btn-correct" onclick="markResult(true)">✓ Got it (+$${clue.pts})</button>
    <button class="btn-wrong" onclick="markResult(false)">✗ Missed it</button>
  `;
}

function markResult(correct) {
  const categories = getCurrentBoard();
  const clue = categories[activeCell.ci].clues[activeCell.row];

  if (correct) {
    score += clue.pts;
    document.getElementById("score").textContent = score.toLocaleString();
  }

  const cell = document.getElementById(
    `cell-${activeCell.ci}-${activeCell.row}`
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
  closeModal();
  buildBoard();
}

function toggleBoard() {
  currentBoardIndex = currentBoardIndex === 0 ? 1 : 0;
  score = 0;
  document.getElementById("score").textContent = "0";
  closeModal();
  buildBoard();
}

document.getElementById("modal").addEventListener("click", function (e) {
  if (e.target === this) closeModal();
});

// Light deterrents against casual right-click / keyboard shortcuts
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
