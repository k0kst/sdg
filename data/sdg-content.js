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
    landingModeLabel:   "Choose your level",
    landingCta:         "Let's Begin",

    stage1Heading:      "Which of these feel like yours?",
    stage1NextBtn:      "Next Step",
    stage1BackLink:     "Change Level",
    cardNumberPrefix:   "SDG ",
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
    stage3CopyBtn:      "Copy to clipboard",
    stage3CopyingBtn:   "Copying...",
    stage3CopiedBtn:    "Copied!",
    stage3CopyConfirm:  "Copied! Paste this into your reflection journal or share it with your ECG counsellor.",
    stage3PdfBtn:       "Download as PDF",
    stage3RestartBtn:   "Start Over",
    stage3SaveBanner:   "Your results live only in this browser. Download as PDF or copy to clipboard to keep them — or share with your ECG counsellor.",

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

    rankLabels: ["1st", "2nd", "3rd"],

    sectionLabels: {
      industries:          "Potential Industries",
      studyPathways:       "Relevant Courses",
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
      industries: ["Social Services", "Public Administration", "Real Estate", "Social Services"],
      studyPathways: ["Social Work", "Sociology", "Public Policy", "Community Development", "Urban Studies", "Business for Social Impact"],
      careerRoles: ["Social Worker", "Community Development Executive", "Policy Manager", "Programme Executive", "Estate Manager"],
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
      industries: ["Agrifood", "Manufacturing", "Logistics", "Research and Development"],
      studyPathways: ["Food Science", "Environmental Science", "Biotechnology", "Engineering", "Supply Chain", "Business"],
      careerRoles: ["Food Technologist", "Farm Nursery Worker", "Aquarist", "Quality Assurance Manager", "Logistics Solutions Analyst"],
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
      industries: ["Healthcare", "Research and Development", "Sports and Recreation", "Manufacturing", "Social Services"],
      studyPathways: ["Medicine", "Nursing", "Pharmacy", "Public Health", "Psychology", "Sport Science", "Biomedical Science"],
      careerRoles: ["Doctor", "Nurse", "Pharmacist", "Environmental Health and Safety Specialist", "Psychologist", "Health Data Analyst"],
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
      industries: ["Education", "Information and Communications Technology", "Design", "Social Services", "Human Resources"],
      studyPathways: ["Education", "Psychology", "English and History", "Learning Sciences", "HR", "Communications", "Computer Science for Edtech"],
      careerRoles: ["Teacher", "Curriculum Lead", "Learning Technology Designer", "Education Methods Adviser", "Training Manager"],
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
      industries: ["Human Resource", "Legal Services", "Public Administration", "Consulting", "Social Services", "Marketing"],
      studyPathways: ["Law", "Sociology", "Psychology", "HR", "Communications", "Public Policy", "Business"],
      careerRoles: ["HR Partner", "Employee Experience and Relations Manager", "Policy Officer", "Legal Associate", "Counsellor"],
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
      industries: ["Environmental Services", "Energy and Power", "Research and Development"],
      studyPathways: ["Civil and Environmental Engineering", "Chemistry", "Sustainability", "Data and Automation", "Life Sciences"],
      careerRoles: ["Water Works Manager", "Process Engineer", "Geologist", "Environmental Officer", "Laboratory Technician"],
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
      industries: ["Energy and Power", "Environmental Services", "Land Transport"],
      studyPathways: ["Electrical Engineering", "Mechanical Engineering", "Energy Studies", "Physics", "Data Science", "Economics"],
      careerRoles: ["Energy Engineer", "Solar Engineer", "Network Development Engineer", "Sustainability Officer", "Energy Trading Manager"],
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
      industries: ["Finance", "Manufacturing", "Tourism", "Logistics", "Information and Communications Technology", "Human Resource"],
      studyPathways: ["Business", "Economics", "Accountancy", "Engineering", "Computing", "Hospitality", "HR"],
      careerRoles: ["Economist", "Operations Manager", "Human Resource", "Business Analyst", "Talent Manager"],
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
      industries: ["Manufacturing", "Built Environment", "Electronics", "Built Environment", "Information and Communications Technology", "Research and Development"],
      studyPathways: ["Engineering", "Architecture", "Computer Science", "Data Science", "Materials Science", "Design"],
      careerRoles: ["Engineer", "Product Manager", "Architect", "Town Planner"],
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
      industries: ["Public Administration", "Design", "Social Services", "Healthcare"],
      studyPathways: ["Social Work", "Psychology", "Public Policy", "Occupational Therapy", "Design", "Communications"],
      careerRoles: ["Social Work Associate", "Design Researcher", "Design Facilitator", "Volunteer Manager", "Policy Manager"],
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
      industries: ["Built Environment", "Architecture", "Real Estate", "Land Transport", "Public Administration", "Design"],
      studyPathways: ["Architecture", "Urban Planning", "Geography", "Civil Engineering", "Real Estate", "Environmental Studies"],
      careerRoles: ["Town Planner", "Building Architect", "Network Planning Manager", "Estate Manager", "Sustainability Officer"],
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
      industries: ["Environmental Services", "Retail", "Manufacturing", "Wholesale Trade", "Research and Development"],
      studyPathways: ["Environmental Science", "Industrial Design", "Supply Chain", "Materials", "Business", "Chemistry"],
      careerRoles: ["Sustainability Officer", "Cleaning Operations Manager", "Manufacturing Engineer", "Procurement Engineer", "Environmental Health and Safety Specialist"],
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
      industries: ["Public Administration", "Financial Services", "Consulting", "Environmental Services"],
      studyPathways: ["Environmental Policy", "Economics", "Geography", "Engineering", "Data Science", "Finance"],
      careerRoles: ["Risk Manager", "Energy Trader", "Sustainability Officer", "Policy Manager", "Strategic Planning Manager"],
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
      industries: ["Research and Development", "Sea Transport", "Marine and Offshore Engineering", "Agrifood", "Environmental Services"],
      studyPathways: ["Marine Science", "Environmental Science", "Naval Architecture", "Engineering", "Logistics"],
      careerRoles: ["Marine Biologist", "Port Operations Manager", "Marine Engineer", "Aquarist", "Sustainability Officer"],
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
      industries: ["Environmental Services", "Design", "Research and Development", "Facilities and Maintenance Services", "Education"],
      studyPathways: ["Biological Sciences", "Environmental Studies", "Landscape Architecture", "Geography", "Education"],
      careerRoles: ["Biologist", "Landscape Architect", "Park Manager", "Outdoor Adventure Educator", "Arborist"],
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
      industries: ["Legal", "Public Administration", "Information and Communications Technology", "Accounting"],
      studyPathways: ["Law", "Political Science", "Public Policy", "Accountancy", "Cybersecurity", "Criminology"],
      careerRoles: ["Lawyer", "Compliance Officer", "Auditor", "Policy Manager", "Forensics Specialist", "Operational Risk Analyst"],
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
      industries: ["Public Administration", "Consulting", "Wholesale Trade", "Administrative and Business Support Services", "Social Services"],
      studyPathways: ["International Relations", "Economics", "Public Policy", "Business", "Communications", "Sustainability"],
      careerRoles: ["Foreign Diplomatic Representative", "Business Development Manager", "Consultant", "Programme Manager"],
      purposefulIntention: "Relationships; Service; Positive impact"
    }
  ],

  // -- Age modes --------------------------------------------
  // The base ui/purposes/sdgs above are the "pre-university" content.
  // 'primary' and 'secondary' supply ONLY the fields whose phrasing differs;
  // everything else falls back to the base. Overrides are merged by the app's
  // resolveContent(): UI keys shallow-merge (sectionLabels/categoryLabels merge
  // one level deep), SDG fields merge by id, purposes merge by source id, and
  // any field listed in hiddenSections is removed from the cards.
  // NOTE: primary/secondary wording below is a first draft for review/editing.
  modes: {
    order: ["primary", "secondary", "pre-university"],
    defaultMode: "pre-university",
    labels: {
      "primary":        { title: "Primary",       sub: "Ages 11–12" },
      "secondary":      { title: "Secondary",     sub: "Ages 13–16" },
      "pre-university": { title: "Pre-University", sub: "Ages 17–20" }
    },

    overrides: {

      // ===== PRIMARY (11–12) ==============================
      // Simple language. Study pathways are hidden; industries and career
      // roles are shared from the base. Singapore context is simplified.
      primary: {
        hiddenSections: ["studyPathways"],
        ui: {
          cardNumberPrefix: "Goal ",
          landingSubtitle: "Find out how the things you care about connect to real jobs — and the people who make them happen.",
          landingStep1:    "Look at the 17 Global Goals for a better world",
          landingStep2:    "Sort each one by how much you like it",
          landingStep3:    "Pick your top 3 and discover the jobs that help make them happen",
          stage1Heading:   "Which of these do you care about?",
          stage3Subheading: "Here's what your choices say about you, and the jobs they could lead to.",
          stage2bSubheading: "For each of your top 3, why does it matter to you? Pick up to 3.",
          stage2bPrompt:   "Why does this goal matter to you?"
        },
        sdgs: {
          1:  { description: "Make sure everyone has enough money for food, a home, and the things they need to live well.",
                singaporeContext: "In Singapore, programmes like ComLink+ help families who need extra support, and many people live in HDB flats." },
          2:  { description: "Make sure everyone has enough healthy food to eat, and help farmers grow food in better ways.",
                singaporeContext: "Singapore's '30 by 30' plan wants to grow more of our own food here by the year 2030." },
          3:  { description: "Help everyone stay healthy and feel good in both body and mind.",
                singaporeContext: "Singapore's Healthier SG plan helps people stay healthy by seeing a family doctor and living well." },
          4:  { description: "Make sure every child can go to school and learn, no matter who they are.",
                singaporeContext: "In Singapore, schools help everyone keep learning, and people can pick up new skills all through life with SkillsFuture." },
          5:  { description: "Make sure boys and girls, men and women are treated fairly and get the same chances.",
                singaporeContext: "Singapore works to make sure women and girls are treated fairly and have the same chances as everyone else." },
          6:  { description: "Make sure everyone has clean water to drink and safe, clean toilets.",
                singaporeContext: "Singapore gets clean water in four ways, including collecting rain and making NEWater, so we always have enough." },
          7:  { description: "Give everyone energy for lights and machines, using clean sources like the sun and wind.",
                singaporeContext: "Singapore is putting up more solar panels to make clean energy from the sun." },
          8:  { description: "Help people find good jobs and make sure work is fair for everyone.",
                singaporeContext: "Singapore helps people learn new skills so they can find good jobs." },
          9:  { description: "Build strong roads, bridges, and buildings, and invent clever new things.",
                singaporeContext: "Singapore builds green buildings and comes up with clever new ideas to make life better." },
          10: { description: "Make sure everyone is treated fairly and gets a fair chance, no matter where they come from.",
                singaporeContext: "Singapore helps people who need extra support so everyone gets a fair chance." },
          11: { description: "Make our towns and cities safe, clean, and nice places to live for everyone.",
                singaporeContext: "Singapore plans its towns with parks, trains, and green buildings so they are nice to live in." },
          12: { description: "Use only what we need, waste less, and reuse and recycle more.",
                singaporeContext: "Singapore wants people to waste less and recycle more so we throw away less rubbish." },
          13: { description: "Take care of the Earth and stop the planet from getting too hot.",
                singaporeContext: "Singapore is working to make less pollution and protect the country from rising seas and hot weather." },
          14: { description: "Keep our oceans, seas, and the animals in them clean and healthy.",
                singaporeContext: "Singapore keeps its sea and harbour clean and protects its coasts." },
          15: { description: "Protect forests, animals, and plants so that nature stays healthy.",
                singaporeContext: "Singapore's 'City in Nature' plan adds more trees and parks so we can enjoy nature." },
          16: { description: "Help people live together peacefully and make sure rules are fair for everyone.",
                singaporeContext: "Singapore has fair rules and honest leaders that people can trust." },
          17: { description: "Work together with people all over the world to make these goals happen.",
                singaporeContext: "Singapore works together with other countries to solve big problems." }
        },
        purposes: {
          "self-improvement":         { name: "Getting Better",       description: "Learning new things and becoming the best you can be — through school, hobbies, books, or trying new stuff." },
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
        }
      },

      // ===== SECONDARY (13–16) ============================
      // Study pathways are reframed as polytechnic/ITE courses and A-level
      // subjects (section relabelled). Industries, career roles and Singapore
      // context are shared from the base.
      secondary: {
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
        }
      }

    }
  }

}; // end window.SDG_CONTENT
