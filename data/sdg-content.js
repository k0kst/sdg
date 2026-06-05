// ============================================================
// SDG Pathways Explorer — Base Content File
// ============================================================
// This is the SHARED base. It holds content that is identical
// across all age levels (goal names, colours, icons, themes,
// industries, career roles, Singapore context, the purpose
// structure, references and universal UI strings).
//
// Level-specific phrasing lives in separate override files,
// loaded AFTER this one:
//   data/content-pre-university.js
//   data/content-secondary.js
//   data/content-primary.js
// Each registers itself onto window.SDG_CONTENT.modes.overrides.
//
// Do not change the variable name (window.SDG_CONTENT) or the
// field names — the application depends on them.
// ============================================================

window.SDG_CONTENT = {

  // -- Resource-level copy ----------------------------------
  // These are the default (pre-university) UI strings. Level files
  // override only the keys whose wording differs.
  ui: {
    landingTitle:       "What Kind of World Do You Want to Build?",
    landingSubtitle:    "Discover how your interests connect to global goals, and the careers that make them happen.",
    landingStep1:       "Read through the 17 UN Sustainable Development Goals",
    landingStep2:       "Sort each one by how much it interests you",
    landingStep3:       "Pick your top 3 and see what careers might be waiting for you",
    landingModeLabel:   "Choose your level",
    landingCta:         "Let's Begin",
    landingBackBtn:     "Change level",
    navBackBtn:         "Back",

    modeSelectTitle:    "Who's exploring today?",
    modeSelectSubtitle: "Pick the level that fits you to get started.",
    modeSelectContinueBtn: "Continue",

    stage1Heading:      "Which of these feel like yours?",
    stage1NextBtn:      "Next Step",
    cardNumberPrefix:   "SDG ",
    stage1TallyLabel:   ["Very interested", "Slightly interested", "Not at all"],

    stage2Heading:      "Pick your top 3",
    stage2Intro:        "These are the goals you leaned into. Choose the three that matter most — they'll shape your career reflection.",
    stage2BackLink:     "Change My Sorting",
    stage2NudgeLink:    "Want to include a different goal? Go back to change your categories.",
    stage2TooFewMsg:    "You've been picky — go back and flag a few more that caught your eye.",
    stage2ResultsBtn:   "See My Results",

    stage3Heading:      "Your Purpose Compass",
    stage3CopyBtn:      "Copy to clipboard",
    stage3CopyingBtn:   "Copying...",
    stage3CopiedBtn:    "Copied!",
    stage3CopyConfirm:  "Copied! Paste this into your reflection journal or share it with your teacher, parent or ECG counsellor.",
    stage3PdfBtn:       "Download as PDF",
    stage3RestartBtn:   "Start Over",
    stage3SaveBanner:   "Your results live only in this browser. Download as PDF or copy to clipboard to keep them. Share what you have learnt with your teacher, parent or ECG counsellor!",

    restartTitle:       "Are you sure you want to start over?",
    restartBody:        "Your choices will not be saved.",
    restartConfirmBtn:  "Yes, start over",
    restartCancelBtn:   "Cancel",

    orientationNudge:   "This activity looks best in landscape mode. Try rotating your device!",
    orientationDismiss: "Got it",

    cardAddBtn:         "Add to My Top 3",
    cardRemoveBtn:      "Remove from My Top 3",
    cardBackSortBtn:    "Back to Sorting",

    stage2bHeading:      "Link your goals to purpose",
    stage2bSubheading:    "For each of your top 3, why do they resonate with you? Pick up to 3 for each.",
    stage2bPrompt:       "Which sources of purpose resonate with this goal for you?",
    stage2bNextBtn:      "Next Goal",
    stage2bFinalBtn:     "See My Results",
    stage2bBackLink:     "Back to My Top 3",
    stage2bGoalProgress: "Goal {n} of 3",
    stage2bError:        "Please pick at least one source of purpose.",
    stage2bContinueBtn:  "Continue",
    stage2bCapMsg:       "You've picked 3 — tap one to deselect first.",
    stage2bCounter:      "{n} of 3 chosen",
    summaryPurposeLabel: "Sources of Purpose",

    // Top-3 tray
    trayHeading:         "Your Top 3",
    trayStatus0:         "0 of 3 chosen",
    trayStatus1:         "1 of 3 chosen",
    trayStatus2:         "2 of 3 chosen",
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

    sectionLabels: {
      industries:          "Potential Industries",
      studyPathways:       "Relevant Courses",
      careerRoles:         "Potential Career Roles",
      singaporeContext:    "📍 In Singapore"
    }
  },

  // -- Sources of Purpose -----------------------------------
  // Grouped into 4 categories. Each source has { id, name, description }.
  // Names/descriptions here are the default (pre-university) wording; level
  // files override the wording by source id. Used in Stage 2b (tagging).
  purposes: [
    {
      category: "Personal Development",
      sources: [
        { id: "self-improvement",         name: "Self-improvement",         description: "Becoming the best you can be; this may include pursuing knowledge for the sake of learning, broadening your horizons through travel, creative pursuits, or improving yourself through hobbies." },
        { id: "self-sufficiency",         name: "Self-sufficiency",         description: "Being able to take care of yourself physically, financially, and having the freedom to do as you wish." },
        { id: "persevering",              name: "Persevering",              description: "Handling what life throws at you—not giving up and dealing with the struggles inherent in life." },
        { id: "physical-health",          name: "Physical Health",          description: "Taking care of your body and being healthy." }
      ]
    },
    {
      category: "Relationships & Contribution",
      sources: [
        { id: "family",                   name: "Family",                   description: "Supporting and providing for your family (however you define it); having children; giving your children the best opportunity possible; caring for your parents." },
        { id: "relationships",            name: "Relationships",            description: "Searching for, finding, or maintaining close relationships (e.g. friendships or romantic relationships)." },
        { id: "service",                  name: "Service",                  description: "Serving your country or community; contributing to and being a part of a larger group and fulfilling your resulting responsibilities." },
        { id: "positive-impact",          name: "Positive Impact",          description: "Making the world a better place. This includes, but is not limited to, charitable, political, environmental or scientific means." }
      ]
    },
    {
      category: "Achievement & Recognition",
      sources: [
        { id: "recognition",              name: "Recognition",              description: "Being respected and having high status. Whether that be at work, in your community, at school, or with your peers." },
        { id: "occupational-fulfillment", name: "Occupational Fulfillment", description: "Finding your calling through work; doing your job well and working hard." },
        { id: "material-wealth",          name: "Material Wealth",          description: "Getting rich, owning nice things, and buying whatever you want." },
        { id: "mattering",                name: "Mattering",                description: "Inspiring others and leaving a legacy; making an impact." }
      ]
    },
    {
      category: "Values & Well-being",
      sources: [
        { id: "religion-spirituality",    name: "Religion/Spirituality",    description: "Living in accordance with and meeting the standards of your religious or spiritual beliefs." },
        { id: "internal-standards",       name: "Internal Standards",       description: "Knowing who you are and what you stand for and living your life according to these principles; following your inner moral compass and living authentically." },
        { id: "happiness",                name: "Happiness",                description: "Being happy, enjoying life, and feeling good." },
        { id: "inner-peace",              name: "Inner Peace",              description: "Being grateful for what you have and accepting what you can't change; trying to control your emotions; being mindful; appreciating and savouring positive experiences." }
      ]
    }
  ],

  // -- References -------------------------------------------
  // APA-format references shown in the collapsible section on the landing page.
  references: {
    heading: "Declaration and References",
    items: [
      "The content of this publication has not been approved by the United Nations and does not reflect the views of the United Nations or its officials or Member States.",
      "United Nations Sustainable Development Goals (Retrieved 28 April 2026 from https://www.un.org/sustainabledevelopment)",
      "Mask, M. B., Folk, D. P., & Heine, S. J. (2025). How sources of purpose predict meaning in life, happiness, and psychological richness, across cultures. <em>The Journal of Positive Psychology, 20</em>(5), 843–853. https://doi.org/10.1080/17439760.2025.2500562"
    ]
  },

  // -- SDG data (shared fields) -----------------------------
  // Each goal's `description` and `studyPathways` differ by level, so they are
  // NOT defined here — they come from the level files. Everything below is
  // shared across all levels (primary overrides `singaporeContext` only).
  sdgs: [
    {
      id: 1,
      name: "No Poverty",
      color: "#E5243B",
      iconFile: "E-WEB-Goal-01.png",
      theme: "people",
      singaporeContext: "ComLink+ supports lower-income families toward stability, self-reliance and social mobility. Public housing and grants remain a major social foundation.",
      industries: ["Social Services", "Public Administration", "Real Estate", "Social Services"],
      careerRoles: ["Social Worker", "Community Development Executive", "Policy Manager", "Programme Executive", "Estate Manager"],
    },
    {
      id: 2,
      name: "Zero Hunger",
      color: "#DDA63A",
      iconFile: "E-WEB-Goal-02.png",
      theme: "people",
      singaporeContext: "30 by 30 aims to produce 30% of Singapore's nutritional needs locally and sustainably by 2030, supported by agri-food innovation and capability building.",
      industries: ["Agrifood", "Manufacturing", "Logistics", "Research and Development"],
      careerRoles: ["Food Technologist", "Farm Nursery Worker", "Aquarist", "Quality Assurance Manager", "Logistics Solutions Analyst"],
    },
    {
      id: 3,
      name: "Good Health and Well-Being",
      color: "#4C9F38",
      iconFile: "E-WEB-Goal-03.png",
      theme: "people",
      singaporeContext: "Healthier SG shifts healthcare towards preventive care through family doctors, healthier lifestyles and stronger primary care.",
      industries: ["Healthcare", "Research and Development", "Sports and Recreation", "Manufacturing", "Social Services"],
      careerRoles: ["Doctor", "Nurse", "Pharmacist", "Environmental Health and Safety Specialist", "Psychologist", "Health Data Analyst"],
    },
    {
      id: 4,
      name: "Quality Education",
      color: "#C5192D",
      iconFile: "E-WEB-Goal-04.png",
      theme: "people",
      singaporeContext: "MOE's Eco Stewardship Programme and lifelong learning through SkillsFuture show the push for relevant, future-ready and sustainability-linked education.",
      industries: ["Education", "Information and Communications Technology", "Design", "Social Services", "Human Resources"],
      careerRoles: ["Teacher", "Curriculum Lead", "Learning Technology Designer", "Education Methods Adviser", "Training Manager"],
    },
    {
      id: 5,
      name: "Gender Equality",
      color: "#FF3A21",
      iconFile: "E-WEB-Goal-05.png",
      theme: "people",
      singaporeContext: "The White Paper on Singapore Women's Development sets actions to empower, protect and uplift women in a fairer and more inclusive society.",
      industries: ["Human Resource", "Legal Services", "Public Administration", "Consulting", "Social Services", "Marketing"],
      careerRoles: ["HR Partner", "Employee Experience and Relations Manager", "Policy Officer", "Legal Associate", "Counsellor"],
    },
    {
      id: 6,
      name: "Clean Water and Sanitation",
      color: "#26BDE2",
      iconFile: "E-WEB-Goal-06.png",
      theme: "planet",
      singaporeContext: "Singapore's Four National Taps (local catchment, imported water, NEWater and desalination) anchor water security and sanitation planning.",
      industries: ["Environmental Services", "Energy and Power", "Research and Development"],
      careerRoles: ["Water Works Manager", "Process Engineer", "Geologist", "Environmental Officer", "Laboratory Technician"],
    },
    {
      id: 7,
      name: "Affordable and Clean Energy",
      color: "#FCC30B",
      iconFile: "E-WEB-Goal-07.png",
      theme: "prosperity",
      singaporeContext: "Under the Green Plan, Singapore targets large-scale solar deployment, greener power systems, storage and cleaner-energy transport.",
      industries: ["Energy and Power", "Environmental Services", "Land Transport"],
      careerRoles: ["Energy Engineer", "Solar Engineer", "Network Development Engineer", "Sustainability Officer", "Energy Trading Manager"],
    },
    {
      id: 8,
      name: "Decent Work and Economic Growth",
      color: "#A21942",
      iconFile: "E-WEB-Goal-08.png",
      theme: "prosperity",
      singaporeContext: "Singapore links inclusive growth to upskilling and better jobs through tripartism, SkillsFuture and the Progressive Wage Model.",
      industries: ["Finance", "Manufacturing", "Tourism", "Logistics", "Information and Communications Technology", "Human Resource"],
      careerRoles: ["Economist", "Operations Manager", "Human Resource", "Business Analyst", "Talent Manager"],
    },
    {
      id: 9,
      name: "Industry, Innovation and Infrastructure",
      color: "#FD6925",
      iconFile: "E-WEB-Goal-09.png",
      theme: "prosperity",
      singaporeContext: "Green buildings, sustainable industry and innovation are major Green Plan themes, including greener infrastructure and industrial transformation.",
      industries: ["Manufacturing", "Built Environment", "Electronics", "Built Environment", "Information and Communications Technology", "Research and Development"],
      careerRoles: ["Engineer", "Product Manager", "Architect", "Town Planner"],
    },
    {
      id: 10,
      name: "Reduced Inequalities",
      color: "#DD1367",
      iconFile: "E-WEB-Goal-10.png",
      theme: "people",
      singaporeContext: "Policies such as ComLink+, social mobility efforts and targeted support aim to reduce disadvantage across income and life outcomes.",
      industries: ["Public Administration", "Design", "Social Services", "Healthcare"],
      careerRoles: ["Social Work Associate", "Design Researcher", "Design Facilitator", "Volunteer Manager", "Policy Manager"],
    },
    {
      id: 11,
      name: "Sustainable Cities and Communities",
      color: "#FD9D24",
      iconFile: "E-WEB-Goal-11.png",
      theme: "prosperity",
      singaporeContext: "HDB's town planning, green buildings, transit targets and park access reflect Singapore's push for liveable, inclusive and low-carbon communities.",
      industries: ["Built Environment", "Architecture", "Real Estate", "Land Transport", "Public Administration", "Design"],
      careerRoles: ["Town Planner", "Building Architect", "Network Planning Manager", "Estate Manager", "Sustainability Officer"],
    },
    {
      id: 12,
      name: "Responsible Consumption and Production",
      color: "#BF8B2E",
      iconFile: "E-WEB-Goal-12.png",
      theme: "prosperity",
      singaporeContext: "The Green Plan targets lower waste to landfill, greener buildings and more circular resource use across households and industry.",
      industries: ["Environmental Services", "Retail", "Manufacturing", "Wholesale Trade", "Research and Development"],
      careerRoles: ["Sustainability Officer", "Cleaning Operations Manager", "Manufacturing Engineer", "Procurement Engineer", "Environmental Health and Safety Specialist"],
    },
    {
      id: 13,
      name: "Climate Action",
      color: "#3F7E44",
      iconFile: "E-WEB-Goal-13.png",
      theme: "planet",
      singaporeContext: "Singapore has a carbon tax, emissions reduction targets and a net-zero-by-2050 goal, alongside coastal and heat resilience work.",
      industries: ["Public Administration", "Financial Services", "Consulting", "Environmental Services"],
      careerRoles: ["Risk Manager", "Energy Trader", "Sustainability Officer", "Policy Manager", "Strategic Planning Manager"],
    },
    {
      id: 14,
      name: "Life Below Water",
      color: "#0A97D9",
      iconFile: "E-WEB-Goal-14.png",
      theme: "planet",
      singaporeContext: "Singapore is greening maritime activity and strengthening coastal resilience, including cleaner harbour craft and maritime decarbonisation.",
      industries: ["Research and Development", "Sea Transport", "Marine and Offshore Engineering", "Agrifood", "Environmental Services"],
      careerRoles: ["Marine Biologist", "Port Operations Manager", "Marine Engineer", "Aquarist", "Sustainability Officer"],
    },
    {
      id: 15,
      name: "Life on Land",
      color: "#56C02B",
      iconFile: "E-WEB-Goal-15.png",
      theme: "planet",
      singaporeContext: "City in Nature includes more trees, nature parks and improved access to green spaces.",
      industries: ["Environmental Services", "Design", "Research and Development", "Facilities and Maintenance Services", "Education"],
      careerRoles: ["Biologist", "Landscape Architect", "Park Manager", "Outdoor Adventure Educator", "Arborist"],
    },
    {
      id: 16,
      name: "Peace, Justice and Strong Institutions",
      color: "#00689D",
      iconFile: "E-WEB-Goal-16.png",
      theme: "peace",
      singaporeContext: "Strong institutions are supported by anti-corruption enforcement, public trust, rule of law and transparent governance systems.",
      industries: ["Legal", "Public Administration", "Information and Communications Technology", "Accounting"],
      careerRoles: ["Lawyer", "Compliance Officer", "Auditor", "Policy Manager", "Forensics Specialist", "Operational Risk Analyst"],
    },
    {
      id: 17,
      name: "Partnerships for the Goals",
      color: "#19486A",
      iconFile: "E-WEB-Goal-17.png",
      theme: "peace",
      singaporeContext: "Singapore advances regional and international cooperation through the Singapore Cooperation Programme and public-private partnerships.",
      industries: ["Public Administration", "Consulting", "Wholesale Trade", "Administrative and Business Support Services", "Social Services"],
      careerRoles: ["Foreign Diplomatic Representative", "Business Development Manager", "Consultant", "Programme Manager"],
    }
  ],

  // -- Age modes --------------------------------------------
  // Mode metadata. The actual per-level content (descriptions, study pathways,
  // purpose wording, reflections, UI tweaks) is registered onto
  // modes.overrides by the three level files loaded after this one.
  modes: {
    order: ["primary", "secondary", "pre-university"],
    defaultMode: "pre-university",
    labels: {
      "primary":        { title: "Primary" },
      "secondary":      { title: "Secondary" },
      "pre-university": { title: "Pre-University" }
    },
    overrides: {}
  }

}; // end window.SDG_CONTENT
