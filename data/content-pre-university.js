// ============================================================
// SDG Career Explorer — PRE-UNIVERSITY (ages 17–20) content
// ============================================================
// Loaded after data/sdg-content.js. Holds the content unique to
// the pre-university level: the formal goal descriptions, the
// university-style study pathways, and the reflection prompts.
// Everything else (names, icons, industries, career roles,
// Singapore context, purpose wording, UI strings) is inherited
// from the base file.
// ============================================================

(function () {
  var C = window.SDG_CONTENT;
  if (!C || !C.modes) return;
  C.modes.overrides["pre-university"] = {

    // sectionLabels.studyPathways stays "Relevant Courses" (base default).
    sdgs: {
      1:  { description: "End poverty in all its forms everywhere.",
            studyPathways: ["Social Work", "Sociology", "Public Policy", "Community Development", "Urban Studies", "Business for Social Impact"] },
      2:  { description: "End hunger, achieve food security and improved nutrition, and promote sustainable agriculture.",
            studyPathways: ["Food Science", "Environmental Science", "Biotechnology", "Engineering", "Supply Chain", "Business"] },
      3:  { description: "Ensure healthy lives and promote well-being for all at all ages.",
            studyPathways: ["Medicine", "Nursing", "Pharmacy", "Public Health", "Psychology", "Sport Science", "Biomedical Science"] },
      4:  { description: "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.",
            studyPathways: ["Education", "Psychology", "English and History", "Learning Sciences", "HR", "Communications", "Computer Science for Edtech"] },
      5:  { description: "Achieve gender equality and empower all women and girls.",
            studyPathways: ["Law", "Sociology", "Psychology", "HR", "Communications", "Public Policy", "Business"] },
      6:  { description: "Ensure availability and sustainable management of water and sanitation for all.",
            studyPathways: ["Civil and Environmental Engineering", "Chemistry", "Sustainability", "Data and Automation", "Life Sciences"] },
      7:  { description: "Ensure access to affordable, reliable, sustainable and modern energy for all.",
            studyPathways: ["Electrical Engineering", "Mechanical Engineering", "Energy Studies", "Physics", "Data Science", "Economics"] },
      8:  { description: "Promote sustained, inclusive and sustainable economic growth, full and productive employment, and decent work for all.",
            studyPathways: ["Business", "Economics", "Accountancy", "Engineering", "Computing", "Hospitality", "HR"] },
      9:  { description: "Build resilient infrastructure, promote inclusive and sustainable industrialisation and foster innovation.",
            studyPathways: ["Engineering", "Architecture", "Computer Science", "Data Science", "Materials Science", "Design"] },
      10: { description: "Reduce inequality within and among countries.",
            studyPathways: ["Social Work", "Psychology", "Public Policy", "Occupational Therapy", "Design", "Communications"] },
      11: { description: "Make cities and human settlements inclusive, safe, resilient and sustainable.",
            studyPathways: ["Architecture", "Urban Planning", "Geography", "Civil Engineering", "Real Estate", "Environmental Studies"] },
      12: { description: "Ensure sustainable consumption and production patterns.",
            studyPathways: ["Environmental Science", "Industrial Design", "Supply Chain", "Materials", "Business", "Chemistry"] },
      13: { description: "Take urgent action to combat climate change and its impacts.",
            studyPathways: ["Environmental Policy", "Economics", "Geography", "Engineering", "Data Science", "Finance"] },
      14: { description: "Conserve and sustainably use the oceans, seas and marine resources for sustainable development.",
            studyPathways: ["Marine Science", "Environmental Science", "Naval Architecture", "Engineering", "Logistics"] },
      15: { description: "Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt biodiversity loss.",
            studyPathways: ["Biological Sciences", "Environmental Studies", "Landscape Architecture", "Geography", "Education"] },
      16: { description: "Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels.",
            studyPathways: ["Law", "Political Science", "Public Policy", "Accountancy", "Cybersecurity", "Criminology"] },
      17: { description: "Strengthen the means of implementation and revitalise the Global Partnership for Sustainable Development.",
            studyPathways: ["International Relations", "Economics", "Public Policy", "Business", "Communications", "Sustainability"] }
    },

    // Reflection prompts shown on the summary page. Keyed by template id; the
    // app picks the first one whose condition matches. {top1Name} is replaced
    // with the name of the #1 ranked goal.
    reflections: {
      "all-planet":       "All three of your picks centre on the living world — ecosystems, climate, the systems that hold life. That's rare focus. What does {top1Name} ask of you that the other two don't?",
      "all-people":       "Your three are all about people — their dignity, learning, health, equity. You're drawn to the human scale. Which of the three feels closest to people you actually know?",
      "all-prosperity":   "You've chosen three goals about how economies and cities should work. You think in systems. Where does your picture of a fair economy start — with {top1Name}?",
      "partnerships":     "SDG 17 shows up for you — partnerships, the connective tissue. That's often a sign you see yourself in the joins between groups, not inside any one of them.",
      "people-planet":    "You're holding people and planet together — two priorities that sometimes pull against each other. Where do you think the real trade-off is, for you?",
      "service-heavy":    "Across your three, the purposes you keep returning to are about making an impact. That's a strong signal. Is there a moment — recent or remembered — that started that pull?",
      "competence-heavy": "Your picks tilt toward growth — becoming someone who can make a difference. Which of your three gives you the most room to do that, and why?",
      "fallback":         "Your three picks aren't obvious neighbours — which is interesting. What's the thread you'd use to tie them together, if you had to?"
    }
  };
})();
