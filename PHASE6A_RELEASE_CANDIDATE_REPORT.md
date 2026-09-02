# Phase 6A — Final Release Candidate Report

**Project:** ESG Essentials — Sustainable Business Strategies for a Changing World  
**Production directory:** `C:\Users\isagi\Documents\GitHub\esg-essentials-air-power-services`  
**Release-candidate QA date:** 2 September 2026  
**Decision:** **READY FOR FINAL HUMAN APPROVAL — NOT PUBLISHED**

This report records the optimisation, regression testing, rendered visual review, accessibility review, and production-build verification performed against the approved Phase 5B2 course. The approved Phase 5A-R visual system, Modules 00–08, frozen educational content, complete Phase 5B2 Decision Lab, and corrected Module 09 Airbus A400M hero were preserved.

## 1. Final module count

**10 modules:** Module 00 through Module 09. Module 09 contains the integrated Decision Lab and final course-completion sequence.

## 2. Final learner screen/view count

**83 principal learner views** were counted:

- Home, Overview, and Module Map: 3;
- Modules 00–08: 63 views (seven principal views per module);
- Module 09 / Decision Lab: 13 views (opening, Stages 1–8, qualitative debrief, final reflective review, and completion);
- Progress, Glossary, Sources, and About: 4.

Transient feedback, retry, locked, evidence-tray, and conditional state variants are not counted as separate principal views.

## 3. Estimated learning duration

**Approximately 7 hours 39 minutes (459 minutes)** for the full guided learning experience, including theory, native visuals, scenarios, activities, formative checks, Decision Lab, debrief, and final reflective review. Actual time varies with reflection depth and Decision Lab exploration.

## 4. Final question count

**55 formative questions:**

- Module 00: 5;
- Modules 01–08: 46;
- final reflective review: 4.

No grade, percentage, pass mark, certificate, or aggregate numeric ESG score is produced.

## 5. Major activity count

**10 major learning activities:** one activity in each of Modules 00–08 plus the connected, multi-stage Decision Lab capstone in Module 09. The Decision Lab is counted once even though it contains eight interdependent stages.

## 6. Native visual count

**45 native explanatory visuals:** two in Module 00, 39 across Modules 01–08, and four in Module 09. Diagram text alternatives remain available to learners.

## 7. Cinematic image count

**11 cinematic production images:** Home plus Modules 00–09.

## 8. Image runtime audit

The complete cinematic set was inspected as runtime assets and in a visual contact sheet.

- 11 full-resolution source masters are retained in `source-images/`.
- 11 runtime images are optimized WebP files in `public/images/`.
- All runtime images are 1672 × 941 and retain a consistent approximately 16:9 presentation.
- Runtime sizes range from approximately 88 KB to 213 KB; no learner-facing cinematic PNG reference remains.
- SHA-based comparison found no duplicate runtime assets.
- Every runtime image has a corresponding master.
- Home uses high fetch priority; below-the-fold/scenario imagery uses lazy loading where applicable.
- CSS preserves responsive cropping through controlled aspect ratios and `object-fit` behavior.
- Meaningful alt text is provided; imagery is not used as the sole carrier of essential instructional meaning.
- Visual inspection found no embedded instructional text, watermarks, unintended logos, commercial-aircraft imagery, aircraft-and-nature compositions, leaves, green globes, greenwashing symbolism, or duplicated/impossible machinery.
- Where aircraft are visible, the approved aerospace subjects are preserved.

## 9. Module 09 approved hero verification

The approved asset pair remains unchanged and correctly wired:

- master: `source-images/module-09-hero-a400m-master.png`;
- runtime: `public/images/module-09-hero.webp`;
- application URL: `/images/module-09-hero.webp`.

The runtime asset remains **1672 × 941**, approximately **192 KB**, WebP, and visually recognizable as an Airbus A400M with four turboprop/propeller positions. It contains no embedded text, logo, vegetation, or greenwashing motif. Responsive opening-screen delivery, alt text, crop, and load behavior were verified. The image was **not regenerated or replaced** in Phase 6A.

## 10. JavaScript optimisation

Route-level code splitting was introduced with `React.lazy`, dynamic imports, and `Suspense` for Overview, Module Map, Modules, global information pages, and Decision Lab. Home remains eager. Content parsing was separated from the complete module-content registry so Decision Lab can use question parsing without eagerly importing all module content.

The resulting production chunks are:

| Chunk | Raw | Gzip |
|---|---:|---:|
| Initial `index-DWKjTMrB.js` | 237.66 kB | 76.51 kB |
| `contentParsers` | 1.41 kB | 0.82 kB |
| `ModuleMap` | 1.54 kB | 0.72 kB |
| `Overview` | 1.65 kB | 0.78 kB |
| `SOURCES` | 1.66 kB | 0.94 kB |
| `course` | 3.38 kB | 1.53 kB |
| `InfoPages` | 4.07 kB | 1.83 kB |
| `ModuleReader` | 7.89 kB | 3.04 kB |
| `DecisionLab` | 21.61 kB | 7.62 kB |
| `Module00` | 28.06 kB | 10.43 kB |
| `Markdown` | 38.99 kB | 12.07 kB |
| `moduleContent` | 200.13 kB | 64.64 kB |

Static hash routing and GitHub Pages compatibility remain intact. No heavy optimisation dependency was added.

## 11. Before/after bundle sizes

| Measurement | Phase 5B2 | Phase 6A | Result |
|---|---:|---:|---|
| Initial JavaScript | 541.79 kB | 237.66 kB | 304.13 kB / 56.1% reduction |
| Initial JavaScript gzip | 174.35 kB | 76.51 kB | 97.84 kB / 56.1% reduction |
| Total emitted JavaScript | 541.79 kB | 548.05 kB | small splitting overhead; loaded on demand |
| Total emitted JavaScript gzip | 174.35 kB | 180.93 kB | small splitting overhead; loaded on demand |

Vite no longer emits the `>500 kB` chunk advisory. The learner no longer downloads Decision Lab and all module-specific implementation before Home can render.

## 12. Progression QA

A complete clean-state learner journey was executed from Module 00 through Module 09, debrief, final review, and completion.

Verified behavior includes:

- sequential unlocking and no premature module access;
- exact activity, view, and formative-check completion requirements;
- completed-module revisiting;
- refresh/reload persistence in local storage;
- persisted activity responses and saved decision records;
- safe sanitisation of corrupt or incompatible stored progress;
- `Continue course` advancing from a completed module to the next required opening;
- Module 08 completion advancing to `/lab/opening`;
- final completion advancing to `/lab/complete`;
- final progress of 10/10 only after the Decision Lab record, debrief, and reflective review are complete;
- final learner status: **LEARNING EXPERIENCE COMPLETED · MODULES 00–09**.

The reset action retains a native confirmation step. Clean-state return was verified with an isolated application origin; see the testing limitation in Section 25 concerning automated acceptance of the native confirmation dialog.

## 13. Assessment QA

The full assessment architecture and representative rendered paths were tested.

- First incorrect attempt: explanatory feedback plus retry.
- Second incorrect attempt: correct answer and reasoning revealed, then formative completion.
- Correct response: reasoning displayed and formative completion recorded.
- All 55 questions remain formative.
- No grade, percentage, pass mark, certificate, or overall numeric ESG score is shown.
- Fieldset/legend semantics, keyboard operation, touch operation, persistence, and non-dead-end completion behavior were reviewed.

## 14. Decision Lab QA

Rendered QA covered the A400M opening, Stages 1–8, evidence tray, evidence unlocks, authority states, controlled-interim behavior, Stage 8 decision record, personalized debrief, reflective review, and final completion.

Earlier selections were verified to influence later evidence availability, warnings, option availability, uncertainty handling, governance/escalation prompts, conditional routes, and debrief language. Stage 8 requires all ten record elements before completion. The debrief remains qualitative and state-dependent.

All nine dimensions are implemented and surfaced using only **STRONG**, **DEVELOPING**, or **NEEDS REVIEW**:

1. Evidence quality;
2. Systems thinking;
3. Risk recognition;
4. Stakeholder / rights-holder awareness;
5. Governance discipline;
6. Uncertainty management;
7. Escalation quality;
8. Lifecycle thinking;
9. Decision traceability.

No overall numeric score or hidden learner ranking is present.

## 15. Non-compensable constraint QA

The following mandatory gates are explicitly represented and covered by regression tests:

- safety;
- airworthiness;
- security;
- legal prohibitions;
- mandatory technical authority;
- mandatory technical qualification;
- severe rights-related prohibitions where applicable.

Stage 7 explicitly lists the constraints. Source and state-engine review confirmed that mandatory gates cannot be offset by favorable scores elsewhere and that no hidden numeric weighting can override them.

## 16. Terminology audit

Production UI and Decision Lab language were checked against `TERMINOLOGY_STANDARD.md`. The approved distinctions remain intact, including sustainability/ESG, impact/risk, stakeholder/rights-holder, claim/evidence/metric/target/outcome, verification/assurance, internal review/audit, lifecycle thinking/formal LCA, decision authority/technical authority, risk appetite/tolerance/limit/capacity, due diligence/mitigation/remedy, and adaptation/resilience.

Frozen theory was not stylistically rewritten.

## 17. Content-integrity audit

The learner-facing runtime and content directories were searched for internal workflow language. There are zero learner-facing occurrences of the prohibited development markers:

`CURRENT VERIFICATION REQUIRED`, `AUTHORITATIVE EXPANSION REQUIRED`, `CV-`, `AE-`, `TODO`, `TBD`, `FIXME`, `production placeholder`, and `internal research note`.

The exact phrase **AIR POWER SERVICES LEARNING SCENARIO** appears consistently where required (31 occurrences in the approved learning content). Learner-status wording was also checked: words such as “passed” occur only in legitimate theory/audit examples, not as learner status. Sources now represent Modules 00–09; Module 09 sources were added to the global learner-facing Sources page without changing frozen theory.

## 18. Accessibility QA

Verified implementation includes:

- one semantic `main` landmark per audited route;
- skip link and logical document order;
- populated H1 headings, including the final-review fallback heading;
- keyboard-operable navigation, activities, assessments, Decision Lab controls, and Stage 8 record fields;
- visible focus styling;
- programmatic labels and fieldset/legend grouping;
- meaningful image alt text and diagram text alternatives;
- state conveyed through text as well as color;
- global reduced-motion support;
- forced-colors support rules;
- no timed requirements or hover-only critical information;
- 44 × 44 CSS-pixel minimum targets for progress chips and Decision Lab rail links;
- 16 px mobile text entry fields;
- no unlabeled inputs in the focused runtime audit;
- no nested main landmarks after the Phase 6A corrections.

This is an implementation QA result, **not a claim of formal WCAG certification**. Environmental limitations are documented in Section 25.

## 19. Responsive QA

The production build was reviewed at **1440 × 1000**, **1280 × 720**, **1024 × 768**, **768 × 1024**, and **390 × 844**, including the short-height 1280 × 720 laptop condition.

Major ordinary-course and Decision Lab routes were checked at each relevant breakpoint. The focused final mobile route audit reported:

- zero page-level horizontal overflow;
- zero broken images;
- zero unlabeled controls;
- no clipped or hidden critical controls;
- correct mobile stacking;
- usable Stage 8 text fields;
- undistorted cinematic-image treatment;
- a single main landmark and populated H1 on every audited route.

## 20. Browser-console result

**0 application runtime errors** were recorded while navigating broadly through the final production build. No unresolved meaningful application warning remains. The previous Vite large-chunk advisory is also absent from the final build.

## 21. Routes checked

The rendered route review covered:

- Home, Overview, Module Map;
- Module 00 opening, theory, native visuals, scenario, activity, check, and close;
- the equivalent principal views for Modules 01–08;
- Module 09 opening;
- Decision Lab Stages 1–8;
- qualitative debrief;
- final reflective review;
- final completion;
- Progress, Glossary, Sources, and About;
- locked-route behavior, Previous/Next navigation, back-to-module behavior, and Continue Course.

No dead route, broken internal navigation, or learner trap was found in the final pass.

## 22. Automated tests

**PASS — 32/32 tests in 1 test file.**

The original 29 Phase 5B2 tests were retained. Three targeted regressions were added for:

- the complete explicit non-compensable-constraint list;
- Continue Course recovery from a completed Module 08 close to Decision Lab opening;
- non-empty visible final-review question headings.

Coverage includes progression, persistence/sanitisation, assessment attempt behavior, activity completion, locked routes, Decision Lab state and evidence consequences, mandatory gates, nine qualitative dimensions, debrief, final review, completion, and reset-state logic.

## 23. Lint

**PASS — ESLint completed with zero warnings and zero errors** using `src --max-warnings=0`.

## 24. Production build

**PASS — Vite 7.1.3 production build completed successfully.**

- 107 modules transformed;
- final CSS: 41.88 kB raw / 9.94 kB gzip;
- initial JavaScript: 237.66 kB raw / 76.51 kB gzip;
- route/data chunks emitted successfully;
- source maps emitted;
- no `>500 kB` chunk advisory;
- `dist/` regenerated from the final source.

## 25. Known limitations

- No formal WCAG conformance certification was conducted or claimed.
- A physical screen-reader session and OS-level forced-colors visual inspection were not available in the automated environment; semantic DOM, labels, focus behavior, forced-colors CSS, and keyboard paths were inspected instead.
- The browser automation interface could detect the native reset confirmation but could not reliably accept/dismiss that blocking dialog. The confirmation implementation was source-reviewed, sanitisation/reset logic is covered by automated tests, and the actual clean-state learner journey was run on an isolated origin.
- No external source URLs are currently supplied in the learner-facing registers, so external-link availability testing is not applicable; source names and internal rendering were checked.
- Visual approval remains a human decision. The required 18-image evidence set is stored in `final-review-screenshots/`.

## 26. Remaining release blockers

**None identified in automated, functional, content-integrity, rendered, responsive, or production-build QA.**

Publication is intentionally blocked only by the requested final human visual approval. No Git repository was initialized, and no commit, push, deployment, GitHub Pages publication, or Sustainability Navigator modification was performed.

## 27. Final production-readiness decision

**READY FOR FINAL HUMAN APPROVAL.**

The Phase 6A release candidate is optimized, visually consistent with the approved Phase 5A-R system, accessible within the documented test scope, fully regression-tested, and production-build clean. The full screenshot approval set is packaged in `final-review-screenshots/`. The candidate remains local and unpublished pending the user's approval.
