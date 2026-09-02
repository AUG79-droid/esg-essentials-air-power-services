# Progression and Completion Specification

## Principles

Progression should guide rather than police reading. Paragraphs, accordions and optional material are never individually locked. Required milestones are meaningful: core screen groups visited, the major activity completed and the formative check attempted/reviewed. Progress is local to the browser; no login, backend, analytics, cloud sync or personal data exists.

## Module unlock model

- On first launch, Home, Overview, Glossary, Sources and Module 00 are available. Modules 01–09 are locked.
- Completing Module 00 unlocks Module 01; each subsequent module unlocks only after the preceding module is complete.
- Any unlocked module can be revisited in any order. Completion is never revoked by reviewing/resetting practice content.
- Module 09 unlocks after Module 08 completion.
- Locked cards explain the prerequisite in text: “Complete Module 04 to unlock.” They are not focus traps and do not masquerade as disabled links.

## Exact within-module rule

A module is complete when all of the following are true:

1. every screen marked **required core** has generated a `visited` event after its main heading became visible or was focused;
2. its major activity I-001–I-009 is completed, or I-010 for Module 09;
3. every required knowledge-check item for that module has been submitted at least once and has status `correct` or `revealed` after two unsuccessful attempts;
4. the module-close screen has been visited and the learner activates **Complete module**.

Optional screens, source links, `Explore Further` panels and optional micro-interactions do not block completion. A required diagram screen counts as visited when its text alternative or diagram is viewed; manipulating every control is unnecessary unless the linked micro-interaction is marked required.

## Module state model

`locked → available → inProgress → readyToComplete → completed`

- `available`: prerequisite complete; no module screen visited.
- `inProgress`: at least one required screen visited.
- `readyToComplete`: core screens, activity and checks satisfy requirements; close screen not confirmed.
- `completed`: learner confirmed on the close screen.

Display progress as completed required milestones / total required milestones, plus a plain-language status. Do not use grades. Percentage is permitted only as navigation progress and must be labelled “course progress,” not performance.

## Local persistence

Use one versioned localStorage document, proposed key `esgEssentials.progress.v1`:

```json
{
  "schemaVersion": 1,
  "courseVersion": "content-freeze-2026-08-29",
  "lastRoute": "/module/03/screen/03.06",
  "modules": {
    "03": {
      "status": "inProgress",
      "visitedRequiredScreens": ["03.00", "03.01"],
      "activity": { "id": "I-004", "completed": false, "state": {} },
      "questions": { "Q-019": { "attempts": 1, "status": "incorrect", "selectedOption": "A" } },
      "completed": false
    }
  },
  "decisionLab": null,
  "courseCompleted": false
}
```

Do not store names, email, free-text reflections, timestamps, device identifiers or telemetry. Learner-written scenario rationales remain in memory unless strictly necessary for the current interaction; if persisted, store only locally and provide a clear delete/reset control.

## Save, resume and reset

- Save after each meaningful state transition, debounced to avoid excessive writes.
- Home primary CTA is **Start course** when no state exists, **Continue Module NN** when state exists, and **Review course** after completion.
- If stored `courseVersion` differs, run an explicit migration. Never silently discard progress. If migration is impossible, explain and offer export-free reset.
- Progress screen provides **Reset course progress** behind a confirmation dialog naming the local-only effect. Reset removes the single course key; it does not affect browser or other-site data.
- If storage is unavailable, course remains usable for the session and shows: “Progress cannot be saved in this browser.”

## Completion model

The final completion event occurs only when:

- Modules 00–08 are `completed`;
- Decision Lab I-010 Stage 1–8 is completed and its debrief has been visited;
- reflective review Q-052–Q-055 is `correct` or `revealed`;
- Module 09 close is confirmed.

### Completion UI

Route: `/completion`.

- Heading: **Learning experience completed**
- Supporting text: “You completed all required ESG Essentials learning, the Air Power Services Decision Lab and the reflective review.”
- Disclaimer in the main reading order: “Completion is not certification, qualification, accreditation, proof of ESG or legal competence, or corporate authorization. Real decisions require applicable procedures, competent specialists and delegated authorities.”
- Summary cards: 10 modules completed; 10 major activities completed; Decision Lab completed; 55 questions reviewed.
- Actions: **Review module map**, **Review Decision Lab debrief**, **Sources & Further Reading**, **Reset progress**.
- No badge, certificate, credential, score, confetti or social-sharing claim. A restrained visual acknowledgement is permitted and must respect reduced motion.

## Privacy and security

No data leaves the device. No analytics, cookies, fingerprinting, tracking pixels, service-worker telemetry or external progress service. External sources open with `target="_blank"` and `rel="noopener noreferrer"`. Generated images and application assets are bundled locally; course operation must not require paid or authenticated APIs.

