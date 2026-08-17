window.DASHBOARD_DATA = {
  projectTitle: "Gideon Pennyworth - Mission Progress",
  statusLine: "Foundation phase. On track to 18 December acceptance, governed by each milestone passing rather than the calendar.",
  lastUpdated: "17 August 2026",
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
    { code: "M5", due: "30 Oct", goal: "Works across LEAP, InfoTrack and your connected systems without you operating them.", status: "Upcoming" },
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
    M5: { code: "M5", due: "30 Oct", title: "Works across LEAP, InfoTrack and your connected systems without you operating them.", description: "To be defined at planning.", acceptanceTest: "To be defined at planning.", status: "Upcoming", type: "To be defined at planning", owner: "To be defined at planning", dependencies: "To be defined at planning", risks: "To be defined at planning", conditionsSatisfied: null, conditionsTotal: null, evidenceCurrent: null, evidenceTotal: null },
    M6: { code: "M6", due: "13 Nov", title: "500+ real-world missions passed, scored against a legal benchmark.", description: "To be defined at planning.", acceptanceTest: "To be defined at planning.", status: "Upcoming", type: "To be defined at planning", owner: "To be defined at planning", dependencies: "To be defined at planning", risks: "To be defined at planning", conditionsSatisfied: null, conditionsTotal: null, evidenceCurrent: null, evidenceTotal: null },
    M7: { code: "M7", due: "27 Nov", title: "Security hardened: no critical weakness, proven on the real device at scale.", description: "To be defined at planning.", acceptanceTest: "To be defined at planning.", status: "Upcoming", type: "To be defined at planning", owner: "To be defined at planning", dependencies: "To be defined at planning", risks: "To be defined at planning", conditionsSatisfied: null, conditionsTotal: null, evidenceCurrent: null, evidenceTotal: null },
    M8: { code: "M8", due: "30 Nov", title: "Feature freeze: only acceptance repairs from here.", description: "To be defined at planning.", acceptanceTest: "To be defined at planning.", status: "Upcoming", type: "To be defined at planning", owner: "To be defined at planning", dependencies: "To be defined at planning", risks: "To be defined at planning", conditionsSatisfied: null, conditionsTotal: null, evidenceCurrent: null, evidenceTotal: null },
    M9: { code: "M9", due: "11 Dec", title: "Full system re-run and re-acceptance.", description: "To be defined at planning.", acceptanceTest: "To be defined at planning.", status: "Upcoming", type: "To be defined at planning", owner: "To be defined at planning", dependencies: "To be defined at planning", risks: "To be defined at planning", conditionsSatisfied: null, conditionsTotal: null, evidenceCurrent: null, evidenceTotal: null },
    M10: { code: "M10", due: "14-18 Dec", title: "Chairman acceptance review: live, hands-on, pass or fail.", description: "To be defined at planning.", acceptanceTest: "To be defined at planning.", status: "Upcoming", type: "To be defined at planning", owner: "To be defined at planning", dependencies: "To be defined at planning", risks: "To be defined at planning", conditionsSatisfied: null, conditionsTotal: null, evidenceCurrent: null, evidenceTotal: null },
    FINAL: { code: "FINAL", due: "18 Dec", title: "Mission acceptance.", description: "To be defined at planning.", acceptanceTest: "To be defined at planning.", status: "Upcoming", type: "To be defined at planning", owner: "To be defined at planning", dependencies: "To be defined at planning", risks: "To be defined at planning", conditionsSatisfied: null, conditionsTotal: null, evidenceCurrent: null, evidenceTotal: null }
  },
  thisWeek: [
    "Shipped document-accuracy and reliability improvements to the app.",
    "Locked the model that gives the most dependable results.",
    "Set up the development tooling, awaiting billing activation."
  ],
  nextUp: {
    current: { code: "M0", text: "Lock the mission blueprint and stand up the build accelerator. Waiting on tooling activation to begin." },
    upcoming: [
      { code: "M1", goal: "Core proven stable: the same task run 50+ times with no lost file, missed approval or wrong status." },
      { code: "M2", goal: "Speak to Gideon in plain English and it opens the right matter every time." }
    ]
  },
  decisions: [
    { text: "Define the accepted scope of matters Gideon must handle for acceptance.", impact: "Determines the validation plan", priority: "High", due: "Due soon", owner: "Elie" },
    { text: "Confirm technical access to LEAP and InfoTrack.", impact: "Enables the integration build", priority: "High", due: "Due soon", owner: "Engineering" },
    { text: "Confirm the target mission count for the 30 October checkpoint.", impact: "Affects milestone M5 planning", priority: "Medium", due: "Due 24 Aug", owner: "Elie" }
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
