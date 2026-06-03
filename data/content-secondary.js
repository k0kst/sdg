// ============================================================
// SDG Career Explorer — SECONDARY (ages 13–16) content
// ============================================================
// Loaded after data/sdg-content.js. Holds only what differs for
// the secondary level: age-appropriate goal descriptions, study
// pathways reframed as polytechnic/ITE courses and A-level
// subjects (with a relabelled section), teen-pitched purpose
// descriptions, the reflection prompts, and a couple of UI tweaks.
// Goal names, icons, industries, career roles and Singapore
// context are inherited from the base file.
// ============================================================

(function () {
  var C = window.SDG_CONTENT;
  if (!C || !C.modes) return;
  C.modes.overrides.secondary = {
    ui: {
      landingSubtitle: "Discover how your interests connect to global goals — and the courses and careers that bring them to life.",
      sectionLabels: { studyPathways: "Relevant Courses/Subjects" }
    },
    sdgs: {
      1:  { description: "Help end poverty so everyone can afford the things they need to live with dignity.",
            studyPathways: ["A-Level Economics", "A-Level Geography", "Poly Diploma in Social Sciences", "Poly Diploma in Community Development", "ITE Higher Nitec in Social Care"] },
      2:  { description: "Make sure everyone has access to enough healthy food, and support better, more sustainable farming.",
            studyPathways: ["A-Level Biology", "A-Level Chemistry", "Poly Diploma in Food Science & Nutrition", "Poly Diploma in Agritech", "ITE Nitec in Agritech"] },
      3:  { description: "Help people of all ages stay healthy, both physically and mentally.",
            studyPathways: ["A-Level Biology", "A-Level Chemistry", "Poly Diploma in Nursing", "Poly Diploma in Biomedical Science", "ITE Higher Nitec in Nursing"] },
      4:  { description: "Make sure everyone can get a good education and keep learning throughout life.",
            studyPathways: ["A-Level English Literature", "A-Level History", "Poly Diploma in Early Childhood Education", "Poly Diploma in Psychology Studies", "ITE Higher Nitec in Early Childhood Education"] },
      5:  { description: "Give women and girls the same rights, opportunities, and respect as everyone else.",
            studyPathways: ["A-Level Sociology", "A-Level General Paper", "Poly Diploma in Law & Management", "Poly Diploma in Human Resource Management", "Poly Diploma in Social Sciences"] },
      6:  { description: "Make sure everyone has clean, safe water and proper sanitation.",
            studyPathways: ["A-Level Chemistry", "A-Level Physics", "Poly Diploma in Environmental & Water Technology", "Poly Diploma in Chemical Engineering", "ITE Higher Nitec in Chemical Process Technology"] },
      7:  { description: "Provide everyone with affordable, reliable, and clean energy.",
            studyPathways: ["A-Level Physics", "A-Level Mathematics", "Poly Diploma in Clean Energy", "Poly Diploma in Electrical Engineering", "ITE Higher Nitec in Electrical Technology"] },
      8:  { description: "Grow the economy in a fair way and create good jobs for everyone.",
            studyPathways: ["A-Level Economics", "A-Level Mathematics", "Poly Diploma in Business", "Poly Diploma in Accountancy", "Poly Diploma in Human Resource Management"] },
      9:  { description: "Build reliable infrastructure and support new industries and innovation.",
            studyPathways: ["A-Level Physics", "A-Level Mathematics", "Poly Diploma in Mechanical Engineering", "Poly Diploma in Architecture", "ITE Higher Nitec in Engineering"] },
      10: { description: "Reduce the gaps between rich and poor and make sure everyone is treated fairly.",
            studyPathways: ["A-Level Sociology", "A-Level Economics", "Poly Diploma in Social Sciences", "Poly Diploma in Community Development", "ITE Higher Nitec in Social Care"] },
      11: { description: "Make cities and communities safe, inclusive, and sustainable to live in.",
            studyPathways: ["A-Level Geography", "A-Level Art", "Poly Diploma in Urban & Infrastructure Management", "Poly Diploma in Architecture", "Poly Diploma in Civil Engineering"] },
      12: { description: "Use resources wisely, reduce waste, and produce and consume responsibly.",
            studyPathways: ["A-Level Chemistry", "A-Level Geography", "Poly Diploma in Environmental Management", "Poly Diploma in Supply Chain Management", "Poly Diploma in Product Design"] },
      13: { description: "Take urgent action to fight climate change and protect the planet.",
            studyPathways: ["A-Level Geography", "A-Level Economics", "Poly Diploma in Environmental Science", "Poly Diploma in Maritime Business", "ITE Higher Nitec in Environmental Technology"] },
      14: { description: "Protect and sustainably use the oceans, seas, and marine life.",
            studyPathways: ["A-Level Biology", "A-Level Geography", "Poly Diploma in Marine Science & Technology", "Poly Diploma in Marine Engineering", "ITE Higher Nitec in Marine & Offshore Technology"] },
      15: { description: "Protect forests, wildlife, and land so nature can thrive.",
            studyPathways: ["A-Level Biology", "A-Level Geography", "Poly Diploma in Landscape Architecture", "Poly Diploma in Biotechnology", "Poly Diploma in Environmental Science"] },
      16: { description: "Build peaceful, fair societies with honest and effective institutions.",
            studyPathways: ["A-Level History", "A-Level General Paper", "Poly Diploma in Law & Management", "Poly Diploma in Accountancy", "Poly Diploma in Cybersecurity & Digital Forensics"] },
      17: { description: "Work in partnership across the world to achieve all these goals.",
            studyPathways: ["A-Level History", "A-Level Economics", "Poly Diploma in International Business", "Poly Diploma in Mass Communication", "Poly Diploma in Business"] }
    },
    purposes: {
      "self-improvement":         { description: "Becoming the best version of yourself — learning new things, picking up hobbies, travelling, or growing through new experiences." },
      "self-sufficiency":         { description: "Being able to support and take care of yourself, and having the freedom to make your own choices." },
      "persevering":              { description: "Pushing through challenges and not giving up when life gets tough." },
      "physical-health":          { description: "Looking after your body and staying healthy and active." },
      "family":                   { description: "Supporting and caring for your family, however you define it." },
      "relationships":            { description: "Building and keeping close friendships and relationships." },
      "service":                  { description: "Serving your community or country and playing your part in a bigger group." },
      "positive-impact":          { description: "Making the world a better place — through helping people, the environment, or society." },
      "recognition":              { description: "Being respected and looked up to, whether at school, at work, or among friends." },
      "occupational-fulfillment": { description: "Finding work you care about and doing it well." },
      "material-wealth":          { description: "Earning money and being able to afford the things you want." },
      "mattering":                { description: "Inspiring others and leaving a positive mark on the world." },
      "religion-spirituality":    { description: "Living in line with your religious or spiritual beliefs." },
      "internal-standards":       { description: "Knowing what you stand for and staying true to your own values." },
      "happiness":                { description: "Enjoying life and feeling good." },
      "inner-peace":              { description: "Feeling grateful, calm, and at peace with yourself and the world." }
    },

    // Reflection prompts (keyed by template id). {top1Name} is replaced with
    // the name of the #1 ranked goal.
    reflections: {
      "all-planet":       "All three of your picks focus on the natural world — ecosystems, climate, and the systems that support life. What does {top1Name} ask of you that the other two don't?",
      "all-people":       "Your three are all about people — their health, learning, and fair treatment. Which one feels closest to people you actually know?",
      "all-prosperity":   "Your three goals are about how economies and cities should work. Where would your version of a fair economy start — with {top1Name}?",
      "partnerships":     "SDG 17 stands out for you — partnerships and working across groups. That can be a sign you see yourself connecting people rather than working alone.",
      "people-planet":    "You're holding people and the planet together — two things that can sometimes pull in different directions. Where do you think the real trade-off is, for you?",
      "service-heavy":    "Across your three, the purposes you keep coming back to are about making an impact. Is there a moment that started that pull for you?",
      "competence-heavy": "Your picks lean toward growth — becoming someone who can make a difference. Which of your three gives you the most room to do that?",
      "fallback":         "Your three picks aren't obvious neighbours — which is interesting. What's the thread you'd use to tie them together?"
    }
  };
})();
