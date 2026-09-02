window.DASHBOARD_DATA = {
  projectTitle: "Gideon Pennyworth - Mission Progress",
  statusLine: "Foundation stage. On track to 18 December acceptance, governed by each milestone passing rather than the calendar.",
  lastUpdated: "2 September 2026",
  kpis: [
    { key: "phase", label: "Programme stage", value: "Foundation", subLabel: "P1 · P2 · P6 active" },
    { key: "current", label: "Current", value: "M1", subLabel: "Due 4 Sep" },
    { key: "health", label: "Health", value: "On track", subLabel: "No open dependencies" },
    { key: "blockers", label: "Blockers", value: "0", subLabel: "None", detail: "Funded development tooling is active and billing sits on the client side. There are no open blockers, and the build is underway." },
    { key: "decisions", label: "Decisions", value: "0", subLabel: "None open" },
    { key: "finalAcceptance", label: "Final acceptance", value: "18 Dec 2026", subLabel: "Target date", detail: "18 December 2026 is the target for mission acceptance. In line with the roadmap's own rule, progression is governed by each milestone gate passing on its evidence, not by the calendar alone: the deadline does not turn a failed gate into a pass. The acceptance scope is to be frozen together first, then the gates sequenced. Key dates: M0 28 Aug (agreed 17 Aug window; passed 25 Aug), M1 4 Sep, M2 18 Sep, M3 2 Oct, M4 16 Oct, M5 30 Oct, M6 13 Nov, agent search 20 Nov, M7 27 Nov, world monitor 28 Nov, M8 30 Nov (feature freeze), M9 11 Dec, final acceptance 14 to 18 Dec." }
  ],
  missionProgress: {
    current: 0,
    target: 500,
    targetLabel: "500+",
    note: "100 of 500+ missions built",
    info: "100 of the 500+ benchmark missions are now built, ahead of the ramp target; the count above tracks only missions independently validated end to end against the ratified pass standard, which is a separate measure and stands at zero so far. Benchmark missions are validated by the mission laboratory, which runs in parallel with the build for the whole programme: synthetic, adversarial and legal-benchmark scenarios. Evidence from live pilot use on real matters is tracked separately."
  },
  milestones: [
    { code: "M0", due: "28 Aug", goal: "Mission blueprint locked and the build accelerator switched on.", status: "Passed" },
    { code: "M1", due: "4 Sep", goal: "Core proven stable: the same task run 50+ times with no lost file, missed approval or wrong status.", status: "In progress" },
    { code: "M2", due: "18 Sep", goal: "Speak to Gideon in plain English and it opens the right matter every time.", status: "Upcoming" },
    { code: "M3", due: "2 Oct", goal: "Every matter file impeccable: documents sanitised into the knowledge base, decisions turn straight into completed work.", status: "Upcoming" },
    { code: "M4", due: "16 Oct", goal: "Gideon finishes what it starts and returns to you exactly when needed, never silently.", status: "Upcoming" },
    { code: "M5", due: "30 Oct", goal: "Works across Leap, InfoTrack, Lexa, PEXA and your connected systems without you operating them.", status: "Upcoming" },
    { code: "M6", due: "13 Nov", goal: "500+ benchmark missions validated against a legal standard, plus live-pilot evidence.", status: "Upcoming" },
    { code: "C1", due: "20 Nov", goal: "In-house agent-search reader live: pulls from public sources, kept current with its upstream project.", status: "Upcoming" },
    { code: "M7", due: "27 Nov", goal: "Security hardened: no critical weakness, proven on the real device at scale.", status: "Upcoming" },
    { code: "C2", due: "28 Nov", goal: "In-house world-monitoring view live, built without third-party licensed code.", status: "Upcoming" },
    { code: "M8", due: "30 Nov", goal: "Feature freeze: only acceptance repairs from here.", status: "Upcoming" },
    { code: "M9", due: "11 Dec", goal: "Full system re-run and re-acceptance.", status: "Upcoming" },
    { code: "M10", due: "14-18 Dec", goal: "Chairman acceptance review: live, hands-on, pass or fail.", status: "Upcoming" },
    { code: "FINAL", due: "18 Dec", goal: "Mission acceptance.", status: "Upcoming" }
  ],
  milestoneDetails: {
    M0: {
    code: "M0",
    due: "28 Aug",
    title: "Mission blueprint locked and the build accelerator switched on.",
    description: "Passed 25 August, inside the ten-working-day window agreed 17 August. The mission blueprint is final and signed off by the principal in writing: a mission is one full matter run measured against hidden facts, a pass requires every fact independently verified against evidence read back from the system, unreadable or untrusted evidence blocks rather than passes, and everything a run creates is cleaned up and verified gone or declared beforehand. The engineering environment is funded and active, and the validation foundation (Forge v0) runs on the build.",
    acceptanceTest: "Blueprint signed off by the principal and the build accelerator active.",
    conditionsSatisfied: 3,
    conditionsTotal: 3,
    status: "Passed",
    type: "Foundation",
    owner: "Engineering",
    dependencies: "None outstanding",
    risks: "None open",
    evidenceCurrent: 1,
    evidenceTotal: 1,
    evidenceNote: "Principal's written sign-off of the pass standard, 25 August. Mission contract and the 50-mission seed corpus validated against it; the validation foundation proven on the shipped build."
    },
    M1: { code: "M1", due: "4 Sep", title: "Core proven stable: the same task run 50+ times with no lost file, missed approval or wrong status.", description: "Core stability includes memory and state reliability: Gideon holds context across a working session, and every consequential action leaves a truthful, recoverable record — nothing reported as done that wasn't, and nothing lost after it was. A prioritised acceptance requirement.", acceptanceTest: "The same task run 50+ times with zero lost files, missed approvals, wrong statuses, or actions the record cannot account for.", status: "In progress", type: "Core stability", owner: "Engineering", dependencies: "None outstanding", risks: "Core-stability conditions are met ahead of schedule. A live-matter demonstration surfaced a post-restart boundary the reliability record had not covered: the matter persists in the record but is not yet reliably rebuilt into the conversation. Root cause identified, fix in testing, on-device verification to follow.", conditions: [
      { text: "Reliability cycles run against the packaged app, each verified against the stored record", done: true },
      { text: "All five core failure classes exercised live: lost work, false status, invisible approvals, corrupted records, unrecoverable restarts", done: true },
      { text: "Forced restart recovers with the matter record intact", done: true },
      { text: "50 or more repeated cycles recorded with zero failures", done: true },
      { text: "Defects found during the gate fixed and verified on the device", done: true }
    ], conditionsSatisfied: null, conditionsTotal: null, evidenceCurrent: 3, evidenceTotal: 3 },
    M2: { code: "M2", due: "18 Sep", title: "Speak to Gideon in plain English and it opens the right matter every time.", description: "To be defined at planning.", acceptanceTest: "To be defined at planning.", status: "Upcoming", type: "To be defined at planning", owner: "To be defined at planning", dependencies: "To be defined at planning", risks: "To be defined at planning", conditionsSatisfied: null, conditionsTotal: null, evidenceCurrent: null, evidenceTotal: null },
    M3: { code: "M3", due: "2 Oct", title: "Every matter file impeccable, and your decisions turn straight into completed work.", description: "Matter-file integrity includes knowledge handling: documents are sanitised and added to the knowledge base reliably, and retrieval returns the right passages for the right matter, with no cross-matter bleed. A prioritised acceptance requirement.", acceptanceTest: "Seeded documents are retrievable by their own content, returned only within their own matter, with no stale or cross-matter results.", status: "Upcoming", type: "Knowledge & matter files", owner: "Engineering", dependencies: "Scope freeze", risks: "To be defined at planning", conditionsSatisfied: null, conditionsTotal: null, evidenceCurrent: null, evidenceTotal: null },
    M4: { code: "M4", due: "16 Oct", title: "Gideon finishes what it starts and returns to you exactly when needed, never silently.", description: "To be defined at planning.", acceptanceTest: "To be defined at planning.", status: "Upcoming", type: "To be defined at planning", owner: "To be defined at planning", dependencies: "To be defined at planning", risks: "To be defined at planning", conditionsSatisfied: null, conditionsTotal: null, evidenceCurrent: null, evidenceTotal: null },
    M5: { code: "M5", due: "30 Oct", title: "Works across Leap, InfoTrack, Lexa, PEXA and your connected systems without you operating them.", description: "To be defined at planning.", acceptanceTest: "To be defined at planning.", status: "Upcoming", type: "To be defined at planning", owner: "To be defined at planning", dependencies: "To be defined at planning", risks: "To be defined at planning", conditionsSatisfied: null, conditionsTotal: null, evidenceCurrent: null, evidenceTotal: null },
    M6: { code: "M6", due: "13 Nov", title: "500+ benchmark missions validated against a legal standard, plus live-pilot evidence.", description: "To be defined at planning.", acceptanceTest: "To be defined at planning.", status: "Upcoming", type: "To be defined at planning", owner: "To be defined at planning", dependencies: "To be defined at planning", risks: "To be defined at planning", conditionsSatisfied: null, conditionsTotal: null, evidenceCurrent: null, evidenceTotal: null },
    M7: { code: "M7", due: "27 Nov", title: "Security hardened: no critical weakness, proven on the real device at scale.", description: "To be defined at planning.", acceptanceTest: "To be defined at planning.", status: "Upcoming", type: "To be defined at planning", owner: "To be defined at planning", dependencies: "To be defined at planning", risks: "To be defined at planning", conditionsSatisfied: null, conditionsTotal: null, evidenceCurrent: null, evidenceTotal: null },
    M8: { code: "M8", due: "30 Nov", title: "Feature freeze: only acceptance repairs from here.", description: "To be defined at planning.", acceptanceTest: "To be defined at planning.", status: "Upcoming", type: "To be defined at planning", owner: "To be defined at planning", dependencies: "To be defined at planning", risks: "To be defined at planning", conditionsSatisfied: null, conditionsTotal: null, evidenceCurrent: null, evidenceTotal: null },
    M9: { code: "M9", due: "11 Dec", title: "Full system re-run and re-acceptance.", description: "To be defined at planning.", acceptanceTest: "To be defined at planning.", status: "Upcoming", type: "To be defined at planning", owner: "To be defined at planning", dependencies: "To be defined at planning", risks: "To be defined at planning", conditionsSatisfied: null, conditionsTotal: null, evidenceCurrent: null, evidenceTotal: null },
    M10: { code: "M10", due: "14-18 Dec", title: "Chairman acceptance review: live, hands-on, pass or fail.", description: "To be defined at planning.", acceptanceTest: "To be defined at planning.", status: "Upcoming", type: "To be defined at planning", owner: "To be defined at planning", dependencies: "To be defined at planning", risks: "To be defined at planning", conditionsSatisfied: null, conditionsTotal: null, evidenceCurrent: null, evidenceTotal: null },
    C1: { code: "C1", due: "20 Nov", title: "In-house agent-search reader.", description: "A reader that pulls information from public sources, built in-house as our own implementation and kept current with its upstream open-source project — nothing added that ties the product to a third party's code or licence. In December scope, sequenced after core stability.", acceptanceTest: "Returns results from the target public sources on demand, running on our own maintained copy, with upkeep owned by the engineer.", status: "Upcoming", type: "Capability (in December scope)", owner: "Engineering", dependencies: "Core stability", risks: "Depends on public sources; upkeep owned", conditionsSatisfied: null, conditionsTotal: null, evidenceCurrent: null, evidenceTotal: null },
    C2: { code: "C2", due: "28 Nov", title: "In-house world-monitoring view.", description: "A situational-awareness view built as our own clean implementation of the monitoring concept, without incorporating third-party licensed code, so the product carries no source-disclosure obligation. In December scope, sequenced after core stability.", acceptanceTest: "A working monitoring view built from our own code, with no third-party licensed source incorporated.", status: "Upcoming", type: "Capability (in December scope)", owner: "Engineering", dependencies: "Core stability", risks: "Sequenced after core", conditionsSatisfied: null, conditionsTotal: null, evidenceCurrent: null, evidenceTotal: null },
    FINAL: { code: "FINAL", due: "18 Dec", title: "Mission acceptance.", description: "To be defined at planning.", acceptanceTest: "To be defined at planning.", status: "Upcoming", type: "To be defined at planning", owner: "To be defined at planning", dependencies: "To be defined at planning", risks: "To be defined at planning", conditionsSatisfied: null, conditionsTotal: null, evidenceCurrent: null, evidenceTotal: null }
  },
  phasesWindow: { start: "2026-08-17", end: "2026-12-18" },
  phases: [
    { code: "P0", name: "Mission contract + Forge v0", start: "2026-08-17", end: "2026-08-28" },
    { code: "P1", name: "Stabilise the existing core", start: "2026-08-17", end: "2026-09-04" },
    { code: "P2", name: "Conversational command layer", start: "2026-08-31", end: "2026-09-18" },
    { code: "P3", name: "Workspace, filing + decisions", start: "2026-09-07", end: "2026-10-02" },
    { code: "P4", name: "Continuity + delegated authority", start: "2026-09-21", end: "2026-10-16" },
    { code: "P5", name: "Practice integration + orchestration", start: "2026-09-28", end: "2026-10-30" },
    { code: "P6", name: "Mission lab + legal competence", start: "2026-08-17", end: "2026-11-13" },
    { code: "P7", name: "Security, red-team + release", start: "2026-10-05", end: "2026-11-27" },
    { code: "P8", name: "Shadow pilot to controlled live use", start: "2026-09-07", end: "2026-12-11" }
  ],
  thisWeek: [
    { week: "This week", items: [
      "Delivered a recorded demonstration of Gideon working a live matter end to end, a written explanation of two behaviours surfaced in the run, and a monthly progress report covering the engagement to date.",
      "Corrected a document-import defect that live-matter pilot use surfaced, and delivered the fixed build (v0.1.31) the same day; documents again import into a matter, confirmed on the installed build."
    ] },
    { week: "25 to 28 Aug", items: [
      "Passed the mission blueprint gate (M0) with the pass standard ratified by the firm in writing; every validation result is now scored against that agreed standard.",
      "Shipped v0.1.25, closing the grounding behaviour where general reference material could be presented as confirmed matter facts; verified on the test machine after release.",
      "Ran 60-plus live reliability cycles against the packaged app, each one creating matter work, independently verifying what was saved, and verifying cleanup; 62 of 64 cycles fully clean.",
      "Found, root-caused and shipped the fix for an intermittent task-creation failure in a single day (v0.1.26); Gideon reported the failure honestly in both occurrences.",
      "Proved restart resilience on the test machine: the app force-closed mid-work came back with the matter record intact, with recovery in seconds and every step evidence-checked.",
      "Identified a continuity gap for the December memory work: after a restart Gideon reopens the default matter rather than the one in use, confirmed in the source.",
      "Deployed a selected-workspace signal to the test machine so the validation foundation reads the application's actual selected workspace instead of inferring it.",
      "Corrected the automated workspace switch and verified against the running application that the workspace now changes as intended.",
      "Confirmed the pass or fail check holds closed under live conditions: it caught and refused a false positive rather than record a pass that was not proven.",
      "Banked the formal core-stability reliability record against the fixed build on the test machine: every cycle clean, zero failures, and all five core failure classes at zero, meeting the 4 September core-stability conditions ahead of schedule.",
      "Confirmed on the test machine that the wrong-matter behaviour is resolved and the intermittent task-creation issue is fixed, both proven during the record.",
      "Shipped v0.1.29, folding in the matter-binding reliability fix, and v0.1.30, so the app is ready to use immediately after an update with no manual setup step; confirmed the automatic update path delivers the release cleanly to the installed device.",
      "Reached 100 benchmark missions built, ahead of the ramp target; end-to-end validation against the ratified pass standard is tracked separately."
    ] }
  ],
  remarks: [
    { date: "2 Sep 2026", text: "The early-use pilot is doing what it is meant to. Real-world matter use surfaced a genuine defect in document import, which was corrected and delivered the same day. Day-to-day use on live matters keeps feeding issues straight back into the build before they settle in." },
    { date: "31 Aug 2026", text: "The firm began using Gideon on live matters ahead of the December acceptance date, moving into real-world testing. Day-to-day use of this kind surfaces issues that only appear in practice and feeds them straight back into the build; the document-import correction now in validation came directly from this early use." },
    { date: "27 Aug 2026", text: "What first read as a single restart and workspace symptom resolved into a multi-layer correction in the validation path rather than a product fault. Each layer was found and fixed in turn, leaving the validation foundation materially stronger and the core-stability evidence more trustworthy." },
    { date: "24 Aug 2026", text: "December matter-type scope set: residential and commercial conveyancing, commercial leasing, general property, wills estates and probate, commercial contract review and advice, and small commercial disputes. Contract review is in scope; drafting contracts from scratch is out. Matter types beyond this list are built toward for after December, and Gideon stays built so none is locked out." },
    { date: "24 Aug 2026", text: "Legal-stack integration route mapped: InfoTrack, PEXA and LEAP confirmed as the active systems, with court access via JusticeLink added at the firm's request. Court filing is expected to route through InfoTrack, which the firm already uses and which connects to LEAP, rather than operating the court portal directly. Account access is left until each integration is ready to build." },
    { date: "24 Aug 2026", text: "30 October benchmark set at 400 missions on the way to the full 500-plus by 13 November. If reaching 400 would risk the October timeline or mission quality, it will be raised before proceeding." },
    { date: "21 Aug 2026", text: "Company GitHub account handed over: full ownership and two-factor access now with the client. Development continues from the AI Product Engineer's own account as a collaborator; releases publish to the company repository as before." },
    { date: "20 Aug 2026", text: "December acceptance scope set: four capabilities confirmed in-scope and sequenced against the core — memory and state reliability first, then knowledge-base ingestion and recall, then an in-house agent-search reader and a licence-clean world-monitoring view. Memory and knowledge handling are prioritised; completion stays governed by each gate passing on its evidence, not the date." },
    { date: "17 Aug 2026", text: "Forge v0 build window set: rescoped validation-first with a ten-working-day window in place of the roadmap's three-to-five-day target, prioritising a verification foundation that can be trusted over speed. Ceiling Friday 28 August, finishing as fast as evidence allows; M0 and Phase 0 dates on this board reflect that agreement." },
    { date: "17 Aug 2026", text: "Model direction changed after testing: a dependable hosted model is now the baseline for stability, in place of the earlier Moonshot/Kimi lean — those and an offline model are kept as fallbacks, off the critical path." },
    { date: "17 Aug 2026", text: "Forge sequenced validation-first: the validation foundation is being built before the build-assistant phase, so any change to Gideon can be independently verified before it ships." },
    { date: "16 Aug 2026", text: "Acceptance timeline condition: the 18 December target stands, but completion is governed by each gate passing on its evidence rather than by the calendar date." }
  ],
  decisions: [],
  forge: {
    runsTotal: 54,
    passed: 54,
    failed: 0,
    skipped: 0,
    signals: [
      { label: "Document accuracy", value: null },
      { label: "Approval integrity", value: null },
      { label: "Reliability cycle pass rate", value: "54/54" }
    ]
  },
  progressLog: [
    { date: "2 Sep 2026", text: "Shipped v0.1.31, correcting a document-import defect that live-matter pilot use surfaced: documents had stopped importing into a matter in the installed build. Reproduced it on the test machine, corrected it, and confirmed the fix on the published build, where a document imported and its text read back correctly with a clean result. Delivered the fixed build to the firm the same day, so the correction reached the live pilot immediately." },
    { date: "31 Aug 2026", text: "Delivered the recorded demonstration of Gideon working a live matter end to end, together with a written explanation and a monthly progress report covering the engagement to date. The run was left honest by design, with two real behaviours kept in rather than edited out. After a full restart Gideon did not fully rebuild the matter back into the conversation, though the underlying record had persisted every task, note, approval and document, so this is a reconstruction gap rather than data loss; it has been traced to its root cause and a fix is in testing, with verification on the test machine to follow. On the email step the connector showed connected while an independent send-verification came back inconsistent, and the exact cause is still being pinned down. In both cases Gideon declined to claim a result it could not verify, which is the intended behaviour on real legal work. None of this walks back the core-stability milestone: its conditions are met and the matter record persists where tested, and what the run surfaced is a retrieval boundary the reliability record had not yet covered, now being closed before the 4 September gate." },
    { date: "28 Aug 2026", text: "Banked the formal core-stability reliability record against the fixed build on the test machine: every cycle clean, zero failures, and all five core failure classes at zero. That meets the 4 September core-stability conditions ahead of schedule. The wrong-matter behaviour flagged earlier in the week is resolved and proven on the device, and the intermittent task-creation issue from last week is confirmed fixed, having occurred once naturally during the record and been handled cleanly with the task saved. Shipped v0.1.29, folding in the matter-binding reliability fix, and v0.1.30, so the app is ready to use immediately after an update with no manual setup step; the automatic update path was confirmed to deliver the release cleanly to the installed device. The benchmark mission set reached 100 built, ahead of the ramp target. Reliability coverage is being extended to approvals and documents before 4 September so the record is comprehensive rather than only strong." },
    { date: "27 Aug 2026", text: "Hardened the validation path ahead of the formal core-stability record. Traced the wrong-workspace behaviour seen in testing to a chain of several issues, added a selected-workspace signal to the application and deployed it to the test machine, corrected the automated workspace switch and verified it against the running application, and confirmed the pass or fail check refuses a false positive rather than record an unproven pass. The formal 50-plus cycle record was deliberately held until the path is proven clean; the final correction is in deployment and the record runs next, with the 4 September milestone on track." },
    { date: "26 Aug 2026", text: "Shipped v0.1.26, fixing an intermittent task-creation failure the reliability cycles caught the same morning: roughly 3 percent of task requests failed on a mislabelled field and Gideon reported the failure honestly each time. The fix accepts the mislabelling while still rejecting genuinely invalid input, and the full test suite ran green before release. The same day, restart resilience was proven on the test machine: the app force-closed mid-work recovered with the matter record intact in seconds." },
    { date: "25 Aug 2026", text: "Shipped v0.1.25, closing the grounding behaviour flagged that morning; M0 passed with the pass standard ratified by the firm in writing." },
    { date: "24 Aug 2026", text: "Shipped v0.1.24, fixing a memory-honesty defect from the 14 August session: when a conversation grows past what Gideon holds in view, it now states plainly that earlier history exists out of view instead of describing messages that were never sent. Root-caused against the stored conversation record, fixed, and verified with new regression tests before release." },
    { date: "21 Aug 2026", text: "Shipped v0.1.22 and v0.1.23 in one day, both fixing defects the Forge validation foundation caught: Gideon's sight of approvals awaiting the user, and saved workspace notes now findable through knowledge search. Both fixes were verified against a running backend before release, with evidence retained." },
    { date: "21 Aug 2026", text: "Completed the GitHub account handover: full ownership and two-factor access now sit with the company account." },
    { date: "20 Aug 2026", text: "Confirmed the December acceptance scope and reworked the timeline: four capabilities are now in-scope gates, sequenced against the core, with memory and knowledge handling prioritised." },
    { date: "19 Aug 2026", text: "Development tooling activated (funded on the client side); the build is unblocked." },
    { date: "19 Aug 2026", text: "Forge validation foundation underway: built and proved the verification core that independently checks Gideon's work and withholds a pass on incomplete evidence." },
    { date: "18 Aug 2026", text: "Set up the project's GitHub home under the company and published the latest build there, with automatic updates wired in." },
    { date: "17 Aug 2026", text: "Locked the dependable model and set up the development tooling (awaiting billing activation)." },
    { date: "14 Aug 2026", text: "Shipped document-accuracy and reliability improvements to the app." }
  ],
  dailyLog: [
    { date: "2 September 2026", items: [
      "Released v0.1.31, correcting the document-import defect that pilot use surfaced on 1 September. Documents now import into a matter on the installed build, restoring a function that had stopped working in the packaged app.",
      "Confirmed the fix on the published build on the test machine, where a document imported and its text read back correctly, then delivered the build to the firm the same day so the fix reached the live pilot without waiting.",
      "Began building the capability to read scanned documents (OCR), which pilot use flagged as needed. The approach keeps the original document as the source of truth and holds any text that cannot be read cleanly for review rather than guessing it, so nothing uncertain becomes a matter fact on its own. The groundwork is built and checks out internally; it has not yet been proven reading a real scanned document on the installed build, which is the next step before it is ready to use."
    ] },
    { date: "1 September 2026", items: [
      "During pilot use a document would not import. Traced it the same day and found that document import was not working in the current packaged build, so it is being corrected before it can affect any live matter.",
      "Reproduced the failure on the test machine and built the fix. Once the first cause was corrected a second, separate issue surfaced in the same path and was addressed as well. Both are in final validation on a rebuilt package, with release to follow once the test machine confirms them."
    ] },
    { date: "31 August 2026", items: [
      "Delivered a recorded demonstration of Gideon working a live matter end to end: creating the matter, recording the facts, building tasks and a note, preparing a client email held for approval, and surviving a full application restart.",
      "Left two real behaviours from the run in the recording rather than editing them out. After the restart Gideon did not fully rebuild the matter back into the conversation; the underlying record had persisted every task, the note, the approval and the document, so this is a reconstruction gap in the conversation, not data loss. Traced it to its root cause, with a fix now in testing and verification on the test machine to follow.",
      "On the email step the connector showed connected but an independent send-verification came back inconsistent; the exact cause is still being pinned down before it is called. In both cases Gideon refused to claim a result it could not verify, which is the behaviour intended for real legal work.",
      "Delivered a monthly progress report covering the work since the engagement began: what has been built, found, fixed and shipped, the releases to date, the M0 and M1 milestones, and a week-by-week timeline."
    ] },
    { date: "28 August 2026", items: [
      "Banked the formal core-stability reliability record on the test machine: every cycle clean, zero failures, with all five core failure classes at zero. This meets the fifty-plus-cycle and gate-defect conditions for the 4 September milestone, ahead of schedule.",
      "Confirmed the wrong-matter behaviour is resolved and proven on the device: the app reliably locks onto the correct matter before it acts, verified during the record.",
      "Confirmed the intermittent task-creation issue from last week is fixed on this build: it occurred once naturally during the record and the app handled it cleanly and created the task, with the task verified saved.",
      "Shipped v0.1.29, folding in the matter-binding reliability fix, verified on the test machine.",
      "Shipped v0.1.30, so the app is ready to use immediately after an update with no manual setup step on relaunch; the automatic update path was confirmed to deliver the release cleanly to the installed device.",
      "The benchmark mission set reached 100 missions built, ahead of the ramp target; end-to-end validation against the ratified pass standard is a separate measure and is tracked on its own."
    ] },
    { date: "27 August 2026", items: [
      "Held the planned formal reliability record rather than run it on a path that was not yet proven. The wrong-workspace behaviour seen in testing turned out to be a chain of several issues in the validation path, and running cycles before that path is clean would produce evidence that cannot be trusted.",
      "Traced the wrong-workspace behaviour to its root: the validation foundation was treating a workspace that was merely running as the one selected, so it could send a mission to one workspace while checking another, which showed up as a timeout.",
      "Added a selected-workspace signal inside the application and deployed it to the test machine, so the validation foundation reads the application's actual selected workspace instead of inferring it.",
      "Corrected the automated workspace switch and verified against the running application that the workspace now changes as intended.",
      "Confirmed the pass or fail check holds closed: today it caught and refused a false positive rather than record a pass that was not proven.",
      "Confirmed the application, its backend and the model service all operating on the actual test machine. One final correction, a stale workspace identifier that did not refresh on switch, is in deployment; its on-device check and the formal record run are next, keeping the 4 September milestone on track."
    ] },
    { date: "26 August 2026", items: [
      "Ran the first extended reliability campaign against the packaged app on the test machine: 60-plus full cycles, each creating matter work through chat, independently verifying what was actually saved, then verifying cleanup. 62 of 64 cycles were fully clean, and the honesty behaviour shipped in v0.1.25 held in every single cycle.",
      "The two exceptions exposed an intermittent task-creation failure, roughly 3 percent of requests: the request failed on one mislabelled field, no task was saved, and Gideon told the user the truth both times. Root-caused the same day, down to the exact stored request, and released the fix as v0.1.26: the app now accepts field names that differ only by case while still rejecting genuinely invalid input, with the raw request preserved unchanged in the audit record. Full test suite green before release.",
      "Proved restart resilience end to end: the app was force-closed mid-work on the test machine, verified fully down, relaunched, and came back healthy in seconds with the matter record intact, every step evidence-checked.",
      "Found a continuity gap for the December memory work and confirmed it in the source: after any restart Gideon reopens the default matter rather than the matter that was in use. Logged with the fix shape identified.",
      "The validation harness now grades an honest failure report separately from a false claim, so a cycle where Gideon truthfully reports a failed action is recorded as exactly that, and this progress board now reads properly on phones."
    ] },
    { date: "25 August 2026", items: [
      "M0 passed. The pass standard for validation missions was signed off in writing this morning: a mission is one full matter run measured against hidden facts, every pass independently verified against evidence read back from the system, unreadable evidence blocks rather than passes, and everything a run creates is verified cleaned up. Every validation result from here is scored against that agreed standard.",
      "Released v0.1.25, closing the behaviour flagged in this morning's update where Gideon could state matter details and cite document references that are not in the matter file. Firm-wide reference material is now explicitly labelled as such in Gideon's working context on both answer paths, a matter with no documents on file now says so plainly, and answers that rely on general reference material can no longer present it as this matter's documents. Verified on the test machine after release, on the model where the behaviour appeared: with a matter that has no documents, Gideon now attributes general material to firm-wide reference and declines to confirm matter-specific facts it cannot find rather than stating them.",
      "Core stability (the 4 September milestone) is now the active work: the same task run 50+ times with no lost file, missed approval or wrong status. The validation missions and harness built for the blueprint carry straight into it."
    ] },
    { date: "24 August 2026", items: [
      "Set the December matter-type scope with the firm: the property and conveyancing core, general property, wills estates and probate, commercial contract review and advice, and small commercial disputes. Contract review is in scope; drafting contracts from scratch stays out. Gideon is built so nothing is permanently locked out, with anything beyond the list built toward for after December.",
      "Confirmed the legal-stack integration route: InfoTrack, PEXA and LEAP are the active systems, with court access via JusticeLink added at the firm's request and expected to route through InfoTrack, which the firm already uses, rather than the court portal directly.",
      "Set the 30 October benchmark at 400 missions, with a check-in before proceeding if that pace would risk the October timeline or mission quality.",
      "Put an automatic backup of the build repository to the firm's second GitHub in place, so every release now copies across on its own.",
      "Verified the latest release on the test machine and locked the mission contract that defines how each matter is measured and what counts as a pass, so every matter in the validation suite is judged the same way.",
      "Shipped v0.1.24 the same day: revisited the 14 August session where Gideon described conversation history that never existed, traced it against the full stored conversation record, and fixed it so Gideon now says plainly when earlier history is out of view rather than inventing it. New regression tests cover it in both directions."
    ] },
    { date: "21 August 2026", items: [
      "Shipped two Gideon releases in one day, both fixing defects the validation work caught: v0.1.22 restores Gideon's sight of its own approvals awaiting the user (the source of the 'it says it didn't do that' behaviour), and v0.1.23 makes saved workspace notes findable by knowledge search, cited like any other source.",
      "Verified the approval fix against the live test machine after release: the exact records that proved the defect are now visible to the app, with before-and-after evidence preserved.",
      "Extended the validation harness so a candidate fix is checked against a real running backend on every affected read path before it ships, and proved it refuses to pass on tampered or incomplete evidence.",
      "Completed the GitHub account handover: full ownership and two-factor access now sit with the company account, and development continues from the engineer's own account as a collaborator.",
      "Added a README to this dashboard's repository describing the board."
    ] },
    { date: "20 August 2026", items: [
      "Ran in-depth validation of Gideon's memory and knowledge handling and set concrete reliability targets for December from what it surfaced, with evidence kept as the record.",
      "Confirmed the December acceptance scope: four capabilities are now in-scope and sequenced against the core — memory and state reliability, knowledge-base ingestion and recall, an in-house agent-search reader, and a licence-clean world-monitoring view.",
      "Reworked the timeline so each of the four shows as an in-scope gate, with memory and knowledge handling prioritised and completion still governed by each gate passing on its evidence.",
      "Published the latest build's home handover to the company account and kept the picture on this dashboard current.",
      "Corrected M0 and Phase 0 on the timeline to the Forge build window agreed on 17 August (ten working days, ceiling 28 August, finishing as fast as evidence allows), so the gate dates match the written agreement."
    ] },
    { date: "19 August 2026", items: [
      "Development tooling went live and the build is running — the validation work is now unblocked.",
      "Built the core of the validation engine and proved it: it can tell a real action apart from routine background activity, and it refuses to pass anything on incomplete evidence. It withholds judgement rather than guessing.",
      "Ran the first live validation passes against the app — both plain conversation and reversible actions (create something, verify it, then fully reverse it and confirm the live workspace is back to its prior state, across repeated cycles).",
      "Hit and fixed a real reliability gap: the engine was reading activity data from file-timestamp information, which isn't dependable and could produce a false reading. Reworked it to read the exact underlying content instead, and closed every other place with the same weakness.",
      "The engine did its job on a reversible-action test — it withheld a pass rather than assume success. On investigation the app was behaving correctly; the check simply needed calibrating to the app's real response format. Tightened it so it accepts the app's genuine response while still failing on any incorrect value, then every cycle passed cleanly.",
      "Made the validation resilient to a mid-run connection drop to the test machine — it now reconnects, cleans up, and safely retries without ever repeating an action.",
      "Confirmed the latest build installs and auto-updates cleanly from the new company repo, and refreshed this dashboard so the picture stays current."
    ] },
    { date: "18 August 2026", items: [
      "Published the latest build to the project's own company GitHub, with automatic updates wired in.",
      "Set the legal-stack integration approach: API-first where a platform offers one, keeping the approve-before-submit step.",
      "Improved the dashboard's clarity and its detail views."
    ] },
    { date: "17 August 2026", items: [
      "Locked a dependable model as the baseline; kept an offline option as a fallback, off the critical path.",
      "Scoped the validation foundation as a two-week piece, sequenced ahead of the build-assistant phase.",
      "Adopted the 18 December acceptance target, governed by each gate passing rather than the calendar."
    ] },
    { date: "14 August 2026", items: [
      "Enabled web research in the app and verified it live, with real results coming back.",
      "Fixed the step limit that was cutting long, multi-step jobs short, so larger tasks now run to completion.",
      "Assessed two open-source tools the principal suggested and set the direction: build our own clean versions rather than take on their licensing or reliability risk." ] },
    { date: "13 August 2026", items: [
      "Shipped a reliability update so the assistant only states what it can actually verify, and clearly says when something is unknown.",
      "Delivered a findings summary and a phased roadmap toward the December target." ] },
    { date: "12 August 2026", items: [
      "Prepared a full walkthrough of the current build for review.",
      "Confirmed the assistant can carry out tasks online: it fills a web form in a visible, governed browser and stops for approval rather than submitting on its own.",
      "Found an end-to-end issue in the draft-and-approve flow during the walkthrough and scoped the fix.",
      "Proposed a daily real-use feedback loop so issues surface in normal use, and agreed an API-first approach for the legal-software integrations." ] },
    { date: "11 August 2026", items: [
      "Released a new version: clearer first-time setup with knowledge-base loading progress, safer update handling, and more accurate self-reporting." ] },
    { date: "7 August 2026", items: [
      "Verified the latest releases live; the principal installed and tested the build.",
      "Traced the root cause of a knowledge-base import slowdown on older hardware and scoped the fix." ] },
    { date: "4 August 2026", items: [
      "Delivered the product-direction map to the principal.",
      "Proved Microsoft email and calendar working end-to-end in the app (sending, reading, and creating events), and fixed two related error-handling issues." ] },
    { date: "31 July 2026", items: [
      "Released updates delivering the first working Microsoft sign-in in a packaged build.",
      "Made email access a separate, explicit permission, requesting read-only access rather than bundling in send rights." ] },
    { date: "30 July 2026", items: [
      "Built and hardware-tested a smoother, silent update flow, ready to publish.",
      "Got Microsoft sign-in working in development." ] },
    { date: "29 July 2026", items: [
      "Shipped an update and proved automatic updates work end-to-end on a real Windows machine.",
      "Confirmed the release passes its full test and acceptance suite, verified against the actual build." ] },
    { date: "28 July 2026", items: [
      "Delivered a capability report and a scenario-test of the product to the principal, surfacing concrete issues to fix.",
      "Completed the Microsoft app registration for the firm's environment." ] },
    { date: "27 July 2026", items: [
      "Updated the build to the version carrying the knowledge-base import pipeline.",
      "Unblocked the principal's access so he can sign in under his own account, and set up the knowledge-base ingestion work." ] },
    { date: "24 July 2026", items: [
      "Captured the full handover of the existing build from the outgoing engineer, on his last day.",
      "Delivered a status walkthrough video and a documented handover report to the principal.",
      "Received the sanitised knowledge-base files for ingestion." ] },
    { date: "23 July 2026", items: [
      "Secured access to the existing build and got the Windows-first app running on the engineer's machine.",
      "Ran the full acceptance suite end-to-end: the app renders and the governed approve-before-acting flow passes across every screen.",
      "Mapped the product's architecture to build from." ] }
  ],
  validationFindings: [
    { found: "1 Sep", fixed: "v0.1.31 (2 Sep)", title: "Documents would not import into a matter in the installed build.", proof: "Confirmed on the published build: a document imports into a matter and its text reads back correctly." },
    { found: "25 Aug", fixed: "v0.1.25 (25 Aug)", title: "With no documents loaded to a matter, general reference material could be presented as confirmed facts about that matter.", proof: "Verified on the working device: general knowledge is now labelled as firm-wide reference, is not stated as matter fact, and missing matter documents are declared plainly." },
    { found: "14 Aug", fixed: "v0.1.24 (24 Aug)", title: "Conversation history outside Gideon's view could be described as if remembered.", proof: "Verified: out-of-view history is now declared plainly instead of invented." },
    { found: "21 Aug", fixed: "v0.1.23 (21 Aug)", title: "Saved workspace notes were not findable through knowledge search.", proof: "Verified on the working device: a seeded note is found through search." },
    { found: "20 Aug", fixed: "v0.1.22 (21 Aug)", title: "Approvals awaiting the user could sit invisible to Gideon's own view.", proof: "Verified on the working device: previously hidden approvals now appear." }
  ],
  links: {
    fullBrief: "#progress-log",
    milestones: "#milestone-route",
    decisions: "#decisions-card",
    forge: "#forge-card",
    evidence: "#evidence-card"
  }
};
