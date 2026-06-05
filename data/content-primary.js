// ============================================================
// SDG Pathways Explorer — PRIMARY (ages 11–12) content
// ============================================================
// Loaded after data/sdg-content.js. Holds only what differs for
// the primary level: simple goal descriptions, simplified
// Singapore context, simple purpose wording, the reflection
// prompts, and a few UI tweaks (including "Goal" instead of
// "SDG"). For primary the study-pathways slot is reused to show
// "Possible DSA Areas" — the primary equivalent of the courses
// and subjects shown to older students — so it is relabelled and
// filled per goal rather than hidden. Goal names are listed per
// id (currently identical to the base UN titles) so they can be
// reworded for this level without touching the base; icons,
// industries and career roles are inherited from the base.
// ============================================================

(function () {
  var C = window.SDG_CONTENT;
  if (!C || !C.modes) return;
  C.modes.overrides.primary = {
    ui: {
      cardNumberPrefix: "Goal ",
      landingSubtitle: "Find out how the things you care about connect to real jobs — and the people who make them happen.",
      landingStep1:    "Look at the 17 Global Goals for a better world",
      landingStep2:    "Sort each one by how much you like it",
      landingStep3:    "Pick your top 3 and find the jobs that help make them happen",
      stage1Heading:   "Which of these do you care about?",
      stage2Intro:     "These are the goals you liked the most. Pick the three that matter most to you.",
      stage2TooFewMsg: "You picked only a few. Go back and choose some more that you like.",
      stage3Heading:   "What Matters to You",
      stage3Subheading: "Here's what your choices say about you, and the jobs they could lead to.",
      summaryKicker:   "The things you care about, in your own words.",
      reflectionEyebrow: "Something to think about",
      stage2bSubheading: "For each of your top 3, why does it matter to you? Pick up to 3.",
      stage2bPrompt:   "Why does this goal matter to you?",
      sectionLabels:   { studyPathways: "Possible DSA Areas" },
      stage3CopyConfirm: "Copied! Paste this into your reflection journal, or share it with your teacher or parent.",
      stage3SaveBanner:  "Your results are only saved in this browser. Download a PDF or copy them to keep them. Share what you have learnt with your teacher or parent!"
    },
    sdgs: {
      1:  { name: "No Poverty",
            description: "Make sure everyone has enough money for food, a home, and the things they need to live well.",
            singaporeContext: "In Singapore, programmes like ComLink+ help families who need extra support, and many people live in HDB flats.",
            studyPathways: ["Leadership and Uniformed Groups", "Language and Humanities", "Entrepreneurship and Innovation"] },
      2:  { name: "Zero Hunger",
            description: "Make sure everyone has enough healthy food to eat, and help farmers grow food in better ways.",
            singaporeContext: "Singapore's '30 by 30' plan wants to grow more of our own food here by the year 2030.",
            studyPathways: ["Science, Technology, Engineering and Mathematics", "Entrepreneurship and Innovation"] },
      3:  { name: "Good Health and Well-Being",
            description: "Help everyone stay healthy and feel good in both body and mind.",
            singaporeContext: "Singapore's Healthier SG plan helps people stay healthy by seeing a family doctor and living well.",
            studyPathways: ["Science, Technology, Engineering and Mathematics", "Sports and Games"] },
      4:  { name: "Quality Education",
            description: "Make sure every child can go to school and learn, no matter who they are.",
            singaporeContext: "In Singapore, schools help everyone keep learning, and people can pick up new skills all through life with SkillsFuture.",
            studyPathways: ["Language and Humanities", "Performing Arts", "Leadership and Uniformed Groups"] },
      5:  { name: "Gender Equality",
            description: "Make sure boys and girls, men and women are treated fairly and get the same chances.",
            singaporeContext: "Singapore works to make sure women and girls are treated fairly and have the same chances as everyone else.",
            studyPathways: ["Language and Humanities", "Leadership and Uniformed Groups"] },
      6:  { name: "Clean Water and Sanitation",
            description: "Make sure everyone has clean water to drink and safe, clean toilets.",
            singaporeContext: "Singapore gets clean water in four ways, including collecting rain and making NEWater, so we always have enough.",
            studyPathways: ["Science, Technology, Engineering and Mathematics"] },
      7:  { name: "Affordable and Clean Energy",
            description: "Give everyone energy for lights and machines, using clean sources like the sun and wind.",
            singaporeContext: "Singapore is putting up more solar panels to make clean energy from the sun.",
            studyPathways: ["Science, Technology, Engineering and Mathematics", "Entrepreneurship and Innovation"] },
      8:  { name: "Decent Work and Economic Growth",
            description: "Help people find good jobs and make sure work is fair for everyone.",
            singaporeContext: "Singapore helps people learn new skills so they can find good jobs.",
            studyPathways: ["Entrepreneurship and Innovation", "Language and Humanities"] },
      9:  { name: "Industry, Innovation and Infrastructure",
            description: "Build strong roads, bridges, and buildings, and invent clever new things.",
            singaporeContext: "Singapore builds green buildings and comes up with clever new ideas to make life better.",
            studyPathways: ["Science, Technology, Engineering and Mathematics", "Entrepreneurship and Innovation", "Visual Arts, Design and Media"] },
      10: { name: "Reduced Inequalities",
            description: "Make sure everyone is treated fairly and gets a fair chance, no matter where they come from.",
            singaporeContext: "Singapore helps people who need extra support so everyone gets a fair chance.",
            studyPathways: ["Language and Humanities", "Leadership and Uniformed Groups", "Performing Arts"] },
      11: { name: "Sustainable Cities and Communities",
            description: "Make our towns and cities safe, clean, and nice places to live for everyone.",
            singaporeContext: "Singapore plans its towns with parks, trains, and green buildings so they are nice to live in.",
            studyPathways: ["Visual Arts, Design and Media", "Science, Technology, Engineering and Mathematics"] },
      12: { name: "Responsible Consumption and Production",
            description: "Use only what we need, waste less, and reuse and recycle more.",
            singaporeContext: "Singapore wants people to waste less and recycle more so we throw away less rubbish.",
            studyPathways: ["Science, Technology, Engineering and Mathematics", "Entrepreneurship and Innovation", "Visual Arts, Design and Media"] },
      13: { name: "Climate Action",
            description: "Take care of the Earth and stop the planet from getting too hot.",
            singaporeContext: "Singapore is working to make less pollution and protect the country from rising seas and hot weather.",
            studyPathways: ["Science, Technology, Engineering and Mathematics", "Leadership and Uniformed Groups"] },
      14: { name: "Life Below Water",
            description: "Keep our oceans, seas, and the animals in them clean and healthy.",
            singaporeContext: "Singapore keeps its sea and harbour clean and protects its coasts.",
            studyPathways: ["Science, Technology, Engineering and Mathematics", "Sports and Games"] },
      15: { name: "Life on Land",
            description: "Protect forests, animals, and plants so that nature stays healthy.",
            singaporeContext: "Singapore's 'City in Nature' plan adds more trees and parks so we can enjoy nature.",
            studyPathways: ["Science, Technology, Engineering and Mathematics", "Sports and Games", "Leadership and Uniformed Groups"] },
      16: { name: "Peace, Justice and Strong Institutions",
            description: "Help people live together peacefully and make sure rules are fair for everyone.",
            singaporeContext: "Singapore has fair rules and honest leaders that people can trust.",
            studyPathways: ["Language and Humanities", "Leadership and Uniformed Groups"] },
      17: { name: "Partnerships for the Goals",
            description: "Work together with people all over the world to make these goals happen.",
            singaporeContext: "Singapore works together with other countries to solve big problems.",
            studyPathways: ["Language and Humanities", "Leadership and Uniformed Groups", "Performing Arts"] }
    },
    purposes: {
      "self-improvement":         { name: "Getting Better",       description: "Learning new things and becoming the best you can be — through school, hobbies, books, or trying new things." },
      "self-sufficiency":         { name: "Doing Things Myself",  description: "Being able to take care of yourself and do things on your own." },
      "persevering":              { name: "Never Giving Up",      description: "Keeping going and staying strong even when things are hard." },
      "physical-health":          { name: "Staying Healthy",      description: "Taking care of your body, eating well, and keeping fit." },
      "family":                   { name: "Family",               description: "Caring for and helping the people in your family." },
      "relationships":            { name: "Friends",              description: "Making good friends and being there for the people you care about." },
      "service":                  { name: "Helping Others",       description: "Helping your community and being part of a group." },
      "positive-impact":          { name: "Making Things Better", description: "Making the world a better place for people, animals, or nature." },
      "recognition":              { name: "Being Looked Up To",   description: "Being respected by your friends, family, and the people around you." },
      "occupational-fulfillment": { name: "Doing a Good Job",     description: "Working hard and being good at what you do." },
      "material-wealth":          { name: "Having Nice Things",   description: "Earning money and being able to get the things you want." },
      "mattering":                { name: "Making a Difference",  description: "Inspiring others and being someone who matters." },
      "religion-spirituality":    { name: "Beliefs",              description: "Living by what you believe in." },
      "internal-standards":       { name: "Being True to Myself", description: "Knowing what is right and doing the right thing." },
      "happiness":                { name: "Being Happy",          description: "Enjoying life and feeling good." },
      "inner-peace":              { name: "Feeling Calm",         description: "Feeling thankful, calm, and peaceful inside." }
    },

    // Reflection prompts (keyed by template id). {top1Name} is replaced with
    // the name of the #1 ranked goal.
    reflections: {
      "all-planet":       "All three of your goals are about nature and the planet — animals, plants, and keeping the Earth healthy. What do you love most about {top1Name}?",
      "all-people":       "All three of your goals are about helping people — staying healthy, learning, and being treated fairly. Which one feels closest to people you know?",
      "all-prosperity":   "All three of your goals are about how towns, jobs, and money should work. Why do you think {top1Name} matters?",
      "partnerships":     "You picked Goal 17 — working together with others. That might mean you like bringing people together to solve problems. When have you done that?",
      "people-planet":    "Your goals are about both people and the planet. Which one would you want to help first, and why?",
      "service-heavy":    "A lot of your choices are about helping others and making things better. Can you think of a time you helped someone and it felt good?",
      "competence-heavy": "Your choices are about learning and getting better at things. Which goal would let you learn the most?",
      "fallback":         "Your three goals are quite different from each other! What do you think they have in common for you?"
    }
  };
})();
