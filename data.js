window.DASHBOARD_DATA = {
  projectTitle: "Gideon Pennyworth - Mission Progress",
  statusLine: "Foundation phase. On track to 18 December acceptance, governed by each milestone passing rather than the calendar.",
  lastUpdated: "18 August 2026",
  kpis: [
    { key: "phase", label: "Phase", value: "Foundation", subLabel: "" },
    { key: "current", label: "Current", value: "M0", subLabel: "Due 21 Aug" },
    { key: "health", label: "Health", value: "On track", subLabel: "1 dependency" },
    { key: "blockers", label: "Blockers", value: "1", subLabel: "See details", detail: "Funded development tooling is awaiting billing activation on the client side. This is the one dependency before the build can begin." },
    { key: "decisions", label: "Decisions", value: "3", subLabel: "Waiting on you" },
    { key: "finalAcceptance", label: "Final acceptance", value: "18 Dec 2026", subLabel: "Target date", detail: "18 December 2026 is the target for mission acceptance. In line with the roadmap's own rule, progression is governed by each milestone gate passing on its evidence, not by the calendar alone: the deadline does not turn a failed gate into a pass. The acceptance scope is to be frozen together first, then the gates sequenced. Key dates: M0 21 Aug, M1 4 Sep, M2 18 Sep, M3 2 Oct, M4 16 Oct, M5 30 Oct, M6 13 Nov, M7 27 Nov, M8 30 Nov (feature freeze), M9 11 Dec, final acceptance 14 to 18 Dec." }
  ],
  missionProgress: {
    current: 0,
    target: 500,
    note: "Begins in M5 / M6",
    info: "Mission validation phase not started. The 500-mission benchmark begins after core stability and integrations are proven."
  },
  milestones: [
    { code: "M0", due: "21 Aug", goal: "Mission blueprint locked and the build accelerator switched on.", status: "In progress" },
    { code: "M1", due: "4 Sep", goal: "Core proven stable: the same task run 50+ times with no lost file, missed approval or wrong status.", status: "Upcoming" },
    { code: "M2", due: "18 Sep", goal: "Speak to Gideon in plain English and it opens the right matter every time.", status: "Upcoming" },
    { code: "M3", due: "2 Oct", goal: "Every matter file impeccable, and your decisions turn straight into completed work.", status: "Upcoming" },
    { code: "M4", due: "16 Oct", goal: "Gideon finishes what it starts and returns to you exactly when needed, never silently.", status: "Upcoming" },
    { code: "M5", due: "30 Oct", goal: "Works across Leap, InfoTrack, Lexa, PEXA and your connected systems without you operating them.", status: "Upcoming" },
    { code: "M6", due: "13 Nov", goal: "500+ real-world missions passed, scored against a legal benchmark.", status: "Upcoming" },
    { code: "M7", due: "27 Nov", goal: "Security hardened: no critical weakness, proven on the real device at scale.", status: "Upcoming" },
    { code: "M8", due: "30 Nov", goal: "Feature freeze: only acceptance repairs from here.", status: "Upcoming" },
    { code: "M9", due: "11 Dec", goal: "Full system re-run and re-acceptance.", status: "Upcoming" },
    { code: "M10", due: "14-18 Dec", goal: "Chairman acceptance review: live, hands-on, pass or fail.", status: "Upcoming" },
    { code: "FINAL", due: "18 Dec", goal: "Mission acceptance.", status: "Upcoming" }
  ],
  milestoneDetails: {
    M0: {
    code: "M0",
    due: "21 Aug",
    title: "Mission blueprint locked and the build accelerator switched on.",
    description: "The mission blueprint is final and the engineering environment is ready. Tooling activation is the last dependency before the build begins.",
    acceptanceTest: "Blueprint signed off by the principal and the build accelerator active.",
    conditionsSatisfied: 2,
    conditionsTotal: 3,
    status: "In progress",
    type: "Foundation",
    owner: "Engineering",
    dependencies: "Tooling activation",
    risks: "1 medium",
    evidenceCurrent: 0,
    evidenceTotal: 1
    },
    M1: { code: "M1", due: "4 Sep", title: "Core proven stable: the same task run 50+ times with no lost file, missed approval or wrong status.", description: "To be defined at planning.", acceptanceTest: "To be defined at planning.", status: "Upcoming", type: "To be defined at planning", owner: "To be defined at planning", dependencies: "To be defined at planning", risks: "To be defined at planning", conditionsSatisfied: null, conditionsTotal: null, evidenceCurrent: null, evidenceTotal: null },
    M2: { code: "M2", due: "18 Sep", title: "Speak to Gideon in plain English and it opens the right matter every time.", description: "To be defined at planning.", acceptanceTest: "To be defined at planning.", status: "Upcoming", type: "To be defined at planning", owner: "To be defined at planning", dependencies: "To be defined at planning", risks: "To be defined at planning", conditionsSatisfied: null, conditionsTotal: null, evidenceCurrent: null, evidenceTotal: null },
    M3: { code: "M3", due: "2 Oct", title: "Every matter file impeccable, and your decisions turn straight into completed work.", description: "To be defined at planning.", acceptanceTest: "To be defined at planning.", status: "Upcoming", type: "To be defined at planning", owner: "To be defined at planning", dependencies: "To be defined at planning", risks: "To be defined at planning", conditionsSatisfied: null, conditionsTotal: null, evidenceCurrent: null, evidenceTotal: null },
    M4: { code: "M4", due: "16 Oct", title: "Gideon finishes what it starts and returns to you exactly when needed, never silently.", description: "To be defined at planning.", acceptanceTest: "To be defined at planning.", status: "Upcoming", type: "To be defined at planning", owner: "To be defined at planning", dependencies: "To be defined at planning", risks: "To be defined at planning", conditionsSatisfied: null, conditionsTotal: null, evidenceCurrent: null, evidenceTotal: null },
    M5: { code: "M5", due: "30 Oct", title: "Works across Leap, InfoTrack, Lexa, PEXA and your connected systems without you operating them.", description: "To be defined at planning.", acceptanceTest: "To be defined at planning.", status: "Upcoming", type: "To be defined at planning", owner: "To be defined at planning", dependencies: "To be defined at planning", risks: "To be defined at planning", conditionsSatisfied: null, conditionsTotal: null, evidenceCurrent: null, evidenceTotal: null },
    M6: { code: "M6", due: "13 Nov", title: "500+ real-world missions passed, scored against a legal benchmark.", description: "To be defined at planning.", acceptanceTest: "To be defined at planning.", status: "Upcoming", type: "To be defined at planning", owner: "To be defined at planning", dependencies: "To be defined at planning", risks: "To be defined at planning", conditionsSatisfied: null, conditionsTotal: null, evidenceCurrent: null, evidenceTotal: null },
    M7: { code: "M7", due: "27 Nov", title: "Security hardened: no critical weakness, proven on the real device at scale.", description: "To be defined at planning.", acceptanceTest: "To be defined at planning.", status: "Upcoming", type: "To be defined at planning", owner: "To be defined at planning", dependencies: "To be defined at planning", risks: "To be defined at planning", conditionsSatisfied: null, conditionsTotal: null, evidenceCurrent: null, evidenceTotal: null },
    M8: { code: "M8", due: "30 Nov", title: "Feature freeze: only acceptance repairs from here.", description: "To be defined at planning.", acceptanceTest: "To be defined at planning.", status: "Upcoming", type: "To be defined at planning", owner: "To be defined at planning", dependencies: "To be defined at planning", risks: "To be defined at planning", conditionsSatisfied: null, conditionsTotal: null, evidenceCurrent: null, evidenceTotal: null },
    M9: { code: "M9", due: "11 Dec", title: "Full system re-run and re-acceptance.", description: "To be defined at planning.", acceptanceTest: "To be defined at planning.", status: "Upcoming", type: "To be defined at planning", owner: "To be defined at planning", dependencies: "To be defined at planning", risks: "To be defined at planning", conditionsSatisfied: null, conditionsTotal: null, evidenceCurrent: null, evidenceTotal: null },
    M10: { code: "M10", due: "14-18 Dec", title: "Chairman acceptance review: live, hands-on, pass or fail.", description: "To be defined at planning.", acceptanceTest: "To be defined at planning.", status: "Upcoming", type: "To be defined at planning", owner: "To be defined at planning", dependencies: "To be defined at planning", risks: "To be defined at planning", conditionsSatisfied: null, conditionsTotal: null, evidenceCurrent: null, evidenceTotal: null },
    FINAL: { code: "FINAL", due: "18 Dec", title: "Mission acceptance.", description: "To be defined at planning.", acceptanceTest: "To be defined at planning.", status: "Upcoming", type: "To be defined at planning", owner: "To be defined at planning", dependencies: "To be defined at planning", risks: "To be defined at planning", conditionsSatisfied: null, conditionsTotal: null, evidenceCurrent: null, evidenceTotal: null }
  },
  thisWeek: [
    "Set up the project's own GitHub home and published the latest build there, with automatic updates wired in.",
    "Set up the development tooling, awaiting billing activation.",
    "Locked the model that gives the most dependable results.",
    "Shipped document-accuracy and reliability improvements to the app."
  ],
  remarks: [
    { date: "18 Aug 2026", text: "Legal-stack integration approach set: API-first where a platform offers one, with the approve-before-submit step kept." },
    { date: "18 Aug 2026", text: "Build moved to the company's own GitHub; latest version published there with automatic updates." },
    { date: "17 Aug 2026", text: "Locked a dependable hosted model as the baseline; offline model kept as a fallback, off the critical path." },
    { date: "17 Aug 2026", text: "Forge scoped as a validation-first foundation (about two weeks), sequenced ahead of the build-assistant phase." },
    { date: "16 Aug 2026", text: "Adopted the 18 December acceptance target, with progress governed by each gate passing rather than the calendar." }
  ],
  decisions: [
    { text: "Define the accepted scope of matters Gideon must handle for acceptance.", impact: "Determines the validation plan", priority: "High", due: "Due soon", owner: "Elie",
      detail: {
        what: "The set of legal matter types Gideon must handle competently to pass December acceptance.",
        why: "This is the most upstream decision. It defines what counts as done: the 500-mission benchmark, every acceptance gate, and the integration work are all measured against this scope. Broad scope means more to prove by December; a tight, well-chosen scope means faster, cleaner acceptance, with room to add more later.",
        need: "A list of the matter types or practice areas in scope. For any borderline ones, a quick call on each: core-for-December, or a later enhancement.",
        waits: "Validation planning and the mission benchmark stay frozen until scope is set, so this gates M1 to M6 planning."
      } },
    { text: "Confirm technical access to your legal stack (Leap, InfoTrack, Lexa, PEXA).", impact: "Enables the integration build", priority: "High", due: "Due soon", owner: "Engineering",
      detail: {
        what: "How Gideon connects to Leap, InfoTrack, Lexa and PEXA to create matters, retrieve information and prepare document orders.",
        why: "The M5 integration build cannot begin until the access route is settled per system. This is a hard dependency on the critical path, so starting it late compresses everything after it.",
        need: "You have set the direction already: API-first where a platform offers one, with the approve-before-submit step kept. Thank you. To start, I need the account ownership and credentials or licensing for each platform, and which ones the firm holds active subscriptions to, so I know where an API route exists versus where Gideon drives the browser instead.",
        waits: "M5, the integrations milestone, slips, and it sits directly on the path to December."
      } },
    { text: "Confirm the target mission count for the 30 October checkpoint.", impact: "Affects milestone M5 planning", priority: "Medium", due: "Due 24 Aug", owner: "Elie",
      detail: {
        what: "The number of real-world missions Gideon must pass at the 30 October checkpoint, currently targeted at 500.",
        why: "It sets the bar for the validation phase and drives how much test evidence we gather and how it is scored against a legal standard.",
        need: "Confirm the target: hold at 500, or set an interim number for 30 October with the full count later. Either works; I just need the number to plan against.",
        waits: "M5 and M6 validation planning stays provisional until the target is fixed."
      } }
  ],
  forge: {
    runsTotal: 0,
    passed: 0,
    failed: 0,
    skipped: 0,
    signals: [
      { label: "Document accuracy", value: null },
      { label: "Approval integrity", value: null },
      { label: "Mission pass rate", value: null }
    ]
  },
  progressLog: [
    { date: "18 Aug 2026", text: "Set up the project's GitHub home under the company and published the latest build there, with automatic updates wired in." },
    { date: "17 Aug 2026", text: "Locked the dependable model and set up the development tooling (awaiting billing activation)." },
    { date: "14 Aug 2026", text: "Shipped document-accuracy and reliability improvements to the app." }
  ],
  links: {
    fullBrief: "#progress-log",
    milestones: "#milestone-route",
    decisions: "#decisions-card",
    forge: "#forge-card",
    evidence: "#evidence-card"
  }
};
