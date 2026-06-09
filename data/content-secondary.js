// ============================================================
// SDG Pathways Explorer — SECONDARY (ages 13–16) content
// ============================================================
// Loaded after data/sdg-content.js. Holds only what differs for
// the secondary level: age-appropriate goal descriptions, a
// plain-language Singapore context for each goal (the base
// wording is pitched higher, so it is reworded here), study
// pathways reframed as polytechnic/ITE courses and A-level
// subjects (with a relabelled section), teen-pitched purpose
// descriptions, the reflection prompts, and a few UI tweaks.
// Goal names, icons, industries and career roles are inherited
// from the base file.
// ============================================================

(function () {
  var C = window.SDG_CONTENT;
  if (!C || !C.modes) return;
  C.modes.overrides.secondary = {
    ui: {
      landingSubtitle: "Discover how your interests connect to global goals — and the courses and careers that bring them to life.",
      stage2Intro:     "These are the goals you were drawn to. Choose the three that matter most — they'll shape your reflection.",
      stage2TooFewMsg: "You've chosen only a few. Go back and add a few more that caught your eye.",
      sectionLabels: { studyPathways: "Relevant Courses/Subjects" }
    },
    sdgs: {
      1:  { description: "Help end poverty so everyone can afford the things they need to live with dignity.",
            singaporeContext: "In Singapore, ComLink+ supports lower-income families to become more stable and independent, while public housing and grants give people a strong foundation.",
            studyPathways: ["A-Level Economics", "A-Level Geography", "Poly Diploma in Social Sciences", "Poly Diploma in Social Work", "ITE Higher Nitec in Community Care & Social Services"] },
      2:  { description: "Make sure everyone has access to enough healthy food, and support better, more sustainable farming.",
            singaporeContext: "Singapore's '30 by 30' goal is to grow 30% of the food we need here at home by 2030, using new farming technology.",
            studyPathways: ["A-Level Biology", "A-Level Chemistry", "Poly Diploma in Food Science & Nutrition", "Poly Diploma in Environmental & Marine Science", "Poly Diploma in Biotechnology"] },
      3:  { description: "Help people of all ages stay healthy, both physically and mentally.",
            singaporeContext: "Singapore's Healthier SG plan focuses on staying well — seeing a regular family doctor and building healthy habits before problems start.",
            studyPathways: ["A-Level Biology", "A-Level Chemistry", "Poly Diploma in Nursing", "Poly Diploma in Biomedical Science", "ITE Higher Nitec in Opticianry"] },
      4:  { description: "Make sure everyone can get a good education and keep learning throughout life.",
            singaporeContext: "Singapore encourages learning for life — from MOE's Eco Stewardship Programme in schools to picking up new skills through SkillsFuture.",
            studyPathways: ["A-Level Literature in English", "A-Level History", "Poly Diploma in Early Childhood Development & Education", "Poly Diploma in Psychology Studies", "ITE Higher Nitec in Early Childhood Education"] },
      5:  { description: "Give women and girls the same rights, opportunities, and respect as everyone else.",
            singaporeContext: "Singapore's White Paper on Women's Development sets out steps to support and protect women and build a fairer society.",
            studyPathways: ["A-Level History", "A-Level General Paper", "Poly Diploma in Law & Management", "Poly Diploma in Human Resource Management", "Poly Diploma in Social Sciences"] },
      6:  { description: "Make sure everyone has clean, safe water and proper sanitation.",
            singaporeContext: "Singapore's 'Four National Taps' — rainwater, imported water, NEWater and desalinated sea water — keep our water supply safe and steady.",
            studyPathways: ["A-Level Chemistry", "A-Level Physics", "Poly Diploma in Environmental & Water Technology", "Poly Diploma in Chemical Engineering", "ITE Higher Nitec in Chemical Process Technology"] },
      7:  { description: "Provide everyone with affordable, reliable, and clean energy.",
            singaporeContext: "Under the Singapore Green Plan, the country is adding much more solar power, cleaner electricity and greener transport.",
            studyPathways: ["A-Level Physics", "A-Level Mathematics", "Poly Diploma in Electrical & Electronic Engineering", "Poly Diploma in Mechanical Engineering", "ITE Higher Nitec in Electrical Engineering"] },
      8:  { description: "Grow the economy in a fair way and create good jobs for everyone.",
            singaporeContext: "Singapore helps people get better jobs and fairer pay through SkillsFuture training and the Progressive Wage Model.",
            studyPathways: ["A-Level Economics", "A-Level Mathematics", "Poly Diploma in Business", "Poly Diploma in Accountancy", "Poly Diploma in Human Resource Management"] },
      9:  { description: "Build reliable infrastructure and support new industries and innovation.",
            singaporeContext: "Green buildings, cleaner industries and new ideas are key parts of the Singapore Green Plan.",
            studyPathways: ["A-Level Physics", "A-Level Mathematics", "Poly Diploma in Mechanical Engineering", "Poly Diploma in Architecture", "ITE Higher Nitec in Integrated Mechanical & Electrical Design"] },
      10: { description: "Reduce the gaps between rich and poor and make sure everyone is treated fairly.",
            singaporeContext: "Programmes like ComLink+ and other targeted support help close the gap so people from all backgrounds get a fair chance.",
            studyPathways: ["A-Level Geography", "A-Level Economics", "Poly Diploma in Social Sciences", "Poly Diploma in Social Work", "ITE Higher Nitec in Community Care & Social Services"] },
      11: { description: "Make cities and communities safe, inclusive, and sustainable to live in.",
            singaporeContext: "Singapore designs its HDB towns with greenery, public transport and parks to make them pleasant, inclusive and low in carbon.",
            studyPathways: ["A-Level Geography", "A-Level Art", "Poly Diploma in Landscape Architecture", "Poly Diploma in Architecture", "Poly Diploma in Civil Engineering"] },
      12: { description: "Use resources wisely, reduce waste, and produce and consume responsibly.",
            singaporeContext: "The Singapore Green Plan aims to send less waste to the landfill and reuse more resources across homes and businesses.",
            studyPathways: ["A-Level Chemistry", "A-Level Geography", "Poly Diploma in Environmental Management", "Poly Diploma in Supply Chain Management", "Poly Diploma in Product Design"] },
      13: { description: "Take urgent action to fight climate change and protect the planet.",
            singaporeContext: "Singapore has a carbon tax and aims to reach net-zero emissions by 2050, while protecting against rising seas and rising heat.",
            studyPathways: ["A-Level Geography", "A-Level Economics", "Poly Diploma in Environmental & Marine Science", "Poly Diploma in Maritime Business", "Poly Diploma in Civil Engineering"] },
      14: { description: "Protect and sustainably use the oceans, seas, and marine life.",
            singaporeContext: "Singapore is making its ships and ports cleaner and strengthening its coasts against the rising sea.",
            studyPathways: ["A-Level Biology", "A-Level Geography", "Poly Diploma in Environmental & Marine Science", "Poly Diploma in Marine Engineering", "ITE Higher Nitec in Marine & Offshore Engineering"] },
      15: { description: "Protect forests, wildlife, and land so nature can thrive.",
            singaporeContext: "Singapore's 'City in Nature' plan adds more trees, nature parks and easy access to green spaces.",
            studyPathways: ["A-Level Biology", "A-Level Geography", "Poly Diploma in Landscape Architecture", "Poly Diploma in Biotechnology", "Poly Diploma in Environmental Science"] },
      16: { description: "Build peaceful, fair societies with honest and effective institutions.",
            singaporeContext: "Singapore builds trust through fair laws, honest government and strong action against corruption.",
            studyPathways: ["A-Level History", "A-Level General Paper", "Poly Diploma in Law & Management", "Poly Diploma in Accountancy", "Poly Diploma in Cybersecurity & Digital Forensics"] },
      17: { description: "Work in partnership across the world to achieve all these goals.",
            singaporeContext: "Singapore works with other countries and with businesses — for example through the Singapore Cooperation Programme — to solve shared problems.",
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
      "all-planet":       "All three of your picks are about the natural world — animals, plants, climate, and the things that keep life going. What does {top1Name} mean to you that the other two don't?",
      "all-people":       "Your three are all about people — their health, learning, and fair treatment. Which one feels closest to people you actually know?",
      "all-prosperity":   "Your three goals are about how economies and cities should work. Where would your version of a fair economy start — with {top1Name}?",
      "partnerships":     "SDG 17 stands out for you — partnerships and working across groups. That can be a sign you like bringing people together rather than working alone.",
      "people-planet":    "You're holding people and the planet together — two things that can sometimes pull in different directions. Where do you think the real trade-off is, for you?",
      "service-heavy":    "Across your three, the purposes you keep coming back to are about making an impact. Is there a moment that started that for you?",
      "competence-heavy": "Your picks lean toward growth — becoming someone who can make a difference. Which of your three gives you the most room to do that?",
      "fallback":         "Your three picks aren't an obvious match — which is interesting. What's the thread you'd use to tie them together?"
    }
  };
})();
