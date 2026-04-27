// ============================================================
// SDG Career Explorer — Editable Content File
// ============================================================
// Edit this file to update any SDG content.
// Do not change the variable name (window.SDG_CONTENT) or
// the field names — the application depends on them.
// ============================================================

window.SDG_CONTENT = {

  // -- Resource-level copy ----------------------------------
  ui: {
    landingTitle:       "What Kind of World Do You Want to Build?",
    landingSubtitle:    "Discover how your interests connect to global goals, and the careers that make them happen.",
    landingStep1:       "Read through the 17 UN Sustainable Development Goals",
    landingStep2:       "Sort each one by how much it interests you",
    landingStep3:       "Pick your top 3 and see what careers might be waiting for you",
    landingCta:         "Let's Begin",

    stage1Heading:      "Which of these feel like yours?",
    stage1NextBtn:      "Next Step",
    stage1NotDoneMsg:   "You've sorted {x} of 17. Keep going — there are a few left.",
    stage1TallyLabel:   ["Very interested", "Slightly interested", "Not at all"],

    stage2Heading:      "Pick your top 3",
    stage2Intro:        "These are the goals you leaned into. Choose the three that matter most — they'll shape your career reflection.",
    stage2BackLink:     "Change My Sorting",
    stage2NudgeLink:    "Want to include a different goal? Go back to change your categories.",
    stage2FullMsg:      "You've already picked 3. Tap one to swap it out.",
    stage2TooFewMsg:    "You've been picky — go back and flag a few more that caught your eye.",
    stage2ResultsBtn:   "See My Results",

    stage3Heading:      "Your Purpose Compass",
    stage3Subheading:   "Here's what your choices say about you, and where they might take you.",
    stage3BackLink:     "Change My Top 3",
    stage3Reflection:   "Look at your top 3. What do they have in common? Is it the people you want to help, the problems you want to solve, or the kind of work you want to do? There is no right answer, this is just the beginning of your career story.",
    stage3CopyBtn:      "Copy to clipboard",
    stage3CopyingBtn:   "Copying...",
    stage3CopiedBtn:    "Copied!",
    stage3CopyConfirm:  "Copied! Paste this into your reflection journal or share it with your ECG counsellor.",
    stage3PdfBtn:       "Download as PDF",
    stage3RestartBtn:   "Start Over",

    restartTitle:       "Are you sure you want to start over?",
    restartBody:        "Your choices will not be saved.",
    restartConfirmBtn:  "Yes, start over",
    restartCancelBtn:   "Cancel",

    orientationNudge:   "This activity looks best in landscape mode. Try rotating your device!",
    orientationDismiss: "Got it",

    cardReadMore:       "Read more",
    cardReadLess:       "Read less",
    cardAddBtn:         "Add to My Top 3",
    cardRemoveBtn:      "Remove from My Top 3",
    cardBackSortBtn:    "Back to Sorting",

    stage2bHeading:      "Link your goals to purpose",
    stage2bSubheading:    "For each of your top 3, which sources of purpose resonate? Pick up to 3 for each.",
    stage2bPrompt:       "Which sources of purpose resonate with this goal?",
    stage2bNextBtn:      "Next Goal",
    stage2bFinalBtn:     "See My Results",
    stage2bBackLink:     "Back to My Top 3",
    stage2bGoalProgress: "Goal {n} of 3",
    stage2bError:        "Please pick at least one source of purpose.",
    stage2bContinueBtn:  "Continue",
    stage2bCapMsg:       "3 is the cap — tap one of your current picks to swap.",
    stage2bCounter:      "{n} of 3 chosen",
    summaryPurposeLabel: "Sources of Purpose",

    // Top-3 tray
    trayHeading:         "Your Top 3",
    trayStatus0:         "0 of 3 chosen",
    trayStatus1:         "1 of 3 chosen",
    trayStatus2:         "2 of 3 chosen — almost there",
    trayStatus3:         "3 chosen",
    traySwapMsg:         "3 is the cap — tap one to swap.",
    trayRerank:          "Re-rank",

    // Tap-to-rank mini-step
    rankPrompt:          "Which matters most? Tap your #1 first, then #2, then #3.",
    rankSkip:            "Skip for now — keep current order",
    rankReset:           "Start over",
    rankDone:            "Ranking saved",
    rankHint:            "You can re-rank anytime from the tray.",

    // Summary hero + reflection
    heroHeading:         "These are your three.",
    summaryKicker:       "What pulls you — in your own words.",
    reflectionEyebrow:   "A thought to sit with",

    categoryLabels: {
      not:      "Not at all",
      slightly: "Slightly interested",
      very:     "Very interested"
    },

    rankLabels: ["1st", "2nd", "3rd"],

    sectionLabels: {
      industries:          "Potential Industries",
      studyPathways:       "Potential Study Pathways",
      careerRoles:         "Potential Career Roles",
      purposefulIntention: "What Drives This",
      singaporeContext:    "📍 In Singapore"
    }
  },

  // -- Sources of Purpose -----------------------------------
  // Grouped into 4 categories. Each source has { id, name, description }.
  // Used in Stage 2b (tagging) and referenced by id in appState.purposeTags.
  purposes: [
    {
      category: "Personal Development",
      sources: [
        { id: "self-improvement",   name: "Self-improvement",   description: "Focusing on personal development and becoming one's best self" },
        { id: "education-learning", name: "Education/Learning", description: "Engaging in the acquisition of knowledge and personal growth." },
        { id: "self=sufficiency",   name: "Self-sufficiency",   description: "Achieving physical and financial independence and freedom" },
        { id: "health-fitness",     name: "Health/Fitness",     description: "Maintaining physical health and well-being" },
        { id: "creativity-art",     name: "Creativity/Art",     description: "Expressing oneself through artistic and creative pursuits" }
      ]
    },
    {
      category: "Relationships & Connection",
      sources: [
        { id: "family",                   name: "Family",                   description: "Prioritizing the support, care, and provision for family members" },
        { id: "relationships",            name: "Relationships",            description: "Seeking, establishing, and maintaining close personal connections" },
        { id: "helping-others-altruism",  name: "Helping Others/Altruism",  description: "Contributing to the welfare of others" },
        { id: "nature-environment",       name: "Nature/Environment",     description: "Connecting with the natural world" }
      ]
    },
    {
      category: "Achievement & Impact",
      sources: [
        { id: "recognition",             name: "Recognition",             description: "Being respected and having high status" },
        { id: "occupational-fulfillment",name: "Occupational fulfillment",description: "Finding your calling through work; doing your job well and working hard" },
        { id: "positive-impact",         name: "Positive impact",         description: "Making the world a better place" },
        { id: "self-sufficiency",        name: "Self-sufficiency",        description: "Being able to take care of yourself physically and financially, and having the freedom to do as you wish" }
      ]
    },
    {
      category: "Values & Well-being",
      sources: [
        { id: "religion-spirituality", name: "Religion/spirituality", description: "Living in accordance with and meeting the standards of your religious or spiritual beliefs" },
        { id: "happiness",             name: "Happiness",             description: "Being happy, enjoying life, and feeling good" },
        { id: "material-wealth",       name: "Material wealth",       description: "Getting rich, owning nice things, and buying whatever you want" }
      ]
    }
  ],

  // -- SDG data ---------------------------------------------
  sdgs: [
    {
      id: 1,
      name: "No Poverty",
      color: "#E5243B",
      iconFile: "E-WEB-Goal-01.png",
      theme: "people",
      description: "End poverty in all its forms everywhere.",
      singaporeContext: "ComLink+ supports lower-income families toward stability, self-reliance and social mobility. Public housing and grants remain a major social foundation.",
      industries: ["Social Services", "Public Policy", "Housing", "Community Development", "CSR and Philanthropy"],
      studyPathways: ["Social Work", "Sociology", "Public Policy", "Community Development", "Urban Studies", "Business for Social Impact"],
      careerRoles: ["Social Worker", "Community Development Officer", "Policy Analyst", "Programme Executive", "Housing Officer"],
      purposefulIntention: "Service; Positive impact"
    },
    {
      id: 2,
      name: "Zero Hunger",
      color: "#DDA63A",
      iconFile: "E-WEB-Goal-02.png",
      theme: "people",
      description: "End hunger, achieve food security and improved nutrition, and promote sustainable agriculture.",
      singaporeContext: "30 by 30 aims to produce 30% of Singapore's nutritional needs locally and sustainably by 2030, supported by agri-food innovation and capability building.",
      industries: ["Agri-Food Tech", "Urban Farming", "Aquaculture", "Food Manufacturing", "Supply Chain", "Food Science"],
      studyPathways: ["Food Science", "Environmental Science", "Biotechnology", "Engineering", "Supply Chain", "Business"],
      careerRoles: ["Food Technologist", "Urban Farm Executive", "Aquaculture Specialist", "Quality Assurance Officer", "Supply Chain Analyst"],
      purposefulIntention: "Positive impact; Physical health"
    },
    {
      id: 3,
      name: "Good Health and Well-Being",
      color: "#4C9F38",
      iconFile: "E-WEB-Goal-03.png",
      theme: "people",
      description: "Ensure healthy lives and promote well-being for all at all ages.",
      singaporeContext: "Healthier SG shifts healthcare towards preventive care through family doctors, healthier lifestyles and stronger primary care.",
      industries: ["Healthcare", "Public Health", "Biomedical Science", "Fitness and Wellness", "Medtech", "Aged Care"],
      studyPathways: ["Medicine", "Nursing", "Pharmacy", "Public Health", "Psychology", "Sport Science", "Biomedical Science"],
      careerRoles: ["Doctor", "Nurse", "Pharmacist", "Public Health Officer", "Psychologist", "Health Data Analyst"],
      purposefulIntention: "Physical health; Service"
    },
    {
      id: 4,
      name: "Quality Education",
      color: "#C5192D",
      iconFile: "E-WEB-Goal-04.png",
      theme: "people",
      description: "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.",
      singaporeContext: "MOE's Eco Stewardship Programme and lifelong learning through SkillsFuture show the push for relevant, future-ready and sustainability-linked education.",
      industries: ["Education", "Training", "Edtech", "Learning Design", "Youth Development", "HR and L&D"],
      studyPathways: ["Education", "Psychology", "English and History", "Learning Sciences", "HR", "Communications", "Computer Science for Edtech"],
      careerRoles: ["Teacher", "Curriculum Specialist", "Learning Designer", "Education Policy Officer", "Training Executive"],
      purposefulIntention: "Self-improvement; Positive impact"
    },
    {
      id: 5,
      name: "Gender Equality",
      color: "#FF3A21",
      iconFile: "E-WEB-Goal-05.png",
      theme: "people",
      description: "Achieve gender equality and empower all women and girls.",
      singaporeContext: "The White Paper on Singapore Women's Development sets actions to empower, protect and uplift women in a fairer and more inclusive society.",
      industries: ["HR", "Legal Services", "Social Policy", "Workplace Consulting", "Advocacy", "Communications"],
      studyPathways: ["Law", "Sociology", "Psychology", "HR", "Communications", "Public Policy", "Business"],
      careerRoles: ["HR Partner", "Diversity and Inclusion Executive", "Policy Officer", "Legal Associate", "Counsellor"],
      purposefulIntention: "Internal standards; Positive impact"
    },
    {
      id: 6,
      name: "Clean Water and Sanitation",
      color: "#26BDE2",
      iconFile: "E-WEB-Goal-06.png",
      theme: "planet",
      description: "Ensure availability and sustainable management of water and sanitation for all.",
      singaporeContext: "Singapore's Four National Taps (local catchment, imported water, NEWater and desalination) anchor water security and sanitation planning.",
      industries: ["Water Engineering", "Utilities", "Environmental Services", "Wastewater Treatment", "Cleantech", "R&D"],
      studyPathways: ["Civil and Environmental Engineering", "Chemistry", "Sustainability", "Data and Automation", "Life Sciences"],
      careerRoles: ["Water Engineer", "Process Engineer", "Hydrologist", "Environmental Consultant", "Laboratory Analyst"],
      purposefulIntention: "Positive impact; Service"
    },
    {
      id: 7,
      name: "Affordable and Clean Energy",
      color: "#FCC30B",
      iconFile: "E-WEB-Goal-07.png",
      theme: "prosperity",
      description: "Ensure access to affordable, reliable, sustainable and modern energy for all.",
      singaporeContext: "Under the Green Plan, Singapore targets large-scale solar deployment, greener power systems, storage and cleaner-energy transport.",
      industries: ["Renewable Energy", "Grid Systems", "Energy Storage", "Power Engineering", "Carbon Services", "Clean Transport"],
      studyPathways: ["Electrical Engineering", "Mechanical Engineering", "Energy Studies", "Physics", "Data Science", "Economics"],
      careerRoles: ["Energy Analyst", "Solar Engineer", "Grid Systems Engineer", "ESG Analyst", "Carbon Project Associate"],
      purposefulIntention: "Positive impact; Occupational fulfillment"
    },
    {
      id: 8,
      name: "Decent Work and Economic Growth",
      color: "#A21942",
      iconFile: "E-WEB-Goal-08.png",
      theme: "prosperity",
      description: "Promote sustained, inclusive and sustainable economic growth, full and productive employment, and decent work for all.",
      singaporeContext: "Singapore links inclusive growth to upskilling and better jobs through tripartism, SkillsFuture and the Progressive Wage Model.",
      industries: ["Finance", "Advanced Manufacturing", "Tourism", "Logistics", "Digital Economy", "Workforce Development"],
      studyPathways: ["Business", "Economics", "Accountancy", "Engineering", "Computing", "Hospitality", "HR"],
      careerRoles: ["Economist", "Operations Manager", "HR Executive", "Business Analyst", "Workforce Planner"],
      purposefulIntention: "Occupational fulfillment; Self-sufficiency"
    },
    {
      id: 9,
      name: "Industry, Innovation and Infrastructure",
      color: "#FD6925",
      iconFile: "E-WEB-Goal-09.png",
      theme: "prosperity",
      description: "Build resilient infrastructure, promote inclusive and sustainable industrialisation and foster innovation.",
      singaporeContext: "Green buildings, sustainable industry and innovation are major Green Plan themes, including greener infrastructure and industrial transformation.",
      industries: ["Advanced Manufacturing", "Construction", "Semiconductors", "Infrastructure", "Smart Cities", "R&D"],
      studyPathways: ["Engineering", "Architecture", "Computer Science", "Data Science", "Materials Science", "Design"],
      careerRoles: ["Engineer", "Product Manager", "Architect", "Urban Systems Analyst", "R&D Scientist"],
      purposefulIntention: "Occupational fulfillment; Positive impact"
    },
    {
      id: 10,
      name: "Reduced Inequalities",
      color: "#DD1367",
      iconFile: "E-WEB-Goal-10.png",
      theme: "people",
      description: "Reduce inequality within and among countries.",
      singaporeContext: "Policies such as ComLink+, social mobility efforts and targeted support aim to reduce disadvantage across income and life outcomes.",
      industries: ["Social Policy", "Inclusive Design", "Accessibility", "NGOs", "Healthcare Outreach", "Public Service"],
      studyPathways: ["Social Work", "Psychology", "Public Policy", "Occupational Therapy", "Design", "Communications"],
      careerRoles: ["Case Worker", "Inclusive Design Specialist", "Accessibility Consultant", "Outreach Coordinator", "Policy Analyst"],
      purposefulIntention: "Service; Positive impact"
    },
    {
      id: 11,
      name: "Sustainable Cities and Communities",
      color: "#FD9D24",
      iconFile: "E-WEB-Goal-11.png",
      theme: "prosperity",
      description: "Make cities and human settlements inclusive, safe, resilient and sustainable.",
      singaporeContext: "HDB's town planning, green buildings, transit targets and park access reflect Singapore's push for liveable, inclusive and low-carbon communities.",
      industries: ["Urban Planning", "Architecture", "Real Estate", "Transport", "Municipal Services", "Placemaking"],
      studyPathways: ["Architecture", "Urban Planning", "Geography", "Civil Engineering", "Real Estate", "Environmental Studies"],
      careerRoles: ["Urban Planner", "Architect", "Transport Planner", "Estate Manager", "Sustainability Consultant"],
      purposefulIntention: "Positive impact; Service"
    },
    {
      id: 12,
      name: "Responsible Consumption and Production",
      color: "#BF8B2E",
      iconFile: "E-WEB-Goal-12.png",
      theme: "prosperity",
      description: "Ensure sustainable consumption and production patterns.",
      singaporeContext: "The Green Plan targets lower waste to landfill, greener buildings and more circular resource use across households and industry.",
      industries: ["Circular Economy", "Waste Management", "Sustainable Retail", "Packaging", "Procurement", "Life-Cycle Assessment"],
      studyPathways: ["Environmental Science", "Industrial Design", "Supply Chain", "Materials", "Business", "Chemistry"],
      careerRoles: ["Sustainability Executive", "Waste Systems Planner", "Packaging Engineer", "Procurement Analyst", "LCA Specialist"],
      purposefulIntention: "Internal standards; Positive impact"
    },
    {
      id: 13,
      name: "Climate Action",
      color: "#3F7E44",
      iconFile: "E-WEB-Goal-13.png",
      theme: "planet",
      description: "Take urgent action to combat climate change and its impacts.",
      singaporeContext: "Singapore has a carbon tax, emissions reduction targets and a net-zero-by-2050 goal, alongside coastal and heat resilience work.",
      industries: ["Climate Policy", "Carbon Markets", "Risk Advisory", "Adaptation Planning", "Sustainability Consulting", "Insurance"],
      studyPathways: ["Environmental Policy", "Economics", "Geography", "Engineering", "Data Science", "Finance"],
      careerRoles: ["Climate Risk Analyst", "Carbon Trader", "Sustainability Consultant", "Policy Officer", "Resilience Planner"],
      purposefulIntention: "Positive impact; Persevering"
    },
    {
      id: 14,
      name: "Life Below Water",
      color: "#0A97D9",
      iconFile: "E-WEB-Goal-14.png",
      theme: "planet",
      description: "Conserve and sustainably use the oceans, seas and marine resources for sustainable development.",
      singaporeContext: "Singapore is greening maritime activity and strengthening coastal resilience, including cleaner harbour craft and maritime decarbonisation.",
      industries: ["Marine Science", "Port Operations", "Maritime Decarbonisation", "Aquaculture", "Conservation", "Shipping"],
      studyPathways: ["Marine Science", "Environmental Science", "Naval Architecture", "Engineering", "Logistics"],
      careerRoles: ["Marine Biologist", "Port Sustainability Officer", "Maritime Engineer", "Fisheries Specialist", "ESG Manager"],
      purposefulIntention: "Positive impact; Service"
    },
    {
      id: 15,
      name: "Life on Land",
      color: "#56C02B",
      iconFile: "E-WEB-Goal-15.png",
      theme: "planet",
      description: "Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt biodiversity loss.",
      singaporeContext: "City in Nature includes more trees, nature parks and improved access to green spaces.",
      industries: ["Biodiversity Conservation", "Landscape Design", "Ecology", "Parks Management", "Environmental Education"],
      studyPathways: ["Biological Sciences", "Environmental Studies", "Landscape Architecture", "Geography", "Education"],
      careerRoles: ["Ecologist", "Landscape Architect", "Park Manager", "Conservation Educator", "Arborist"],
      purposefulIntention: "Positive impact; Inner peace"
    },
    {
      id: 16,
      name: "Peace, Justice and Strong Institutions",
      color: "#00689D",
      iconFile: "E-WEB-Goal-16.png",
      theme: "peace",
      description: "Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels.",
      singaporeContext: "Strong institutions are supported by anti-corruption enforcement, public trust, rule of law and transparent governance systems.",
      industries: ["Law", "Governance", "Compliance", "Cybersecurity", "Audit", "Public Administration"],
      studyPathways: ["Law", "Political Science", "Public Policy", "Accountancy", "Cybersecurity", "Criminology"],
      careerRoles: ["Lawyer", "Compliance Officer", "Auditor", "Policy Officer", "Investigator", "Governance Analyst"],
      purposefulIntention: "Internal standards; Service"
    },
    {
      id: 17,
      name: "Partnerships for the Goals",
      color: "#19486A",
      iconFile: "E-WEB-Goal-17.png",
      theme: "peace",
      description: "Strengthen the means of implementation and revitalise the Global Partnership for Sustainable Development.",
      singaporeContext: "Singapore advances regional and international cooperation through the Singapore Cooperation Programme and public-private partnerships.",
      industries: ["International Development", "Diplomacy", "Sustainability Consulting", "Trade", "Partnerships", "NGOs"],
      studyPathways: ["International Relations", "Economics", "Public Policy", "Business", "Communications", "Sustainability"],
      careerRoles: ["Foreign Service Officer", "Partnership Manager", "Development Specialist", "Consultant", "Programme Manager"],
      purposefulIntention: "Relationships; Service; Positive impact"
    }
  ]

}; // end window.SDG_CONTENT
