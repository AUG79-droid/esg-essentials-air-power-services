# Production Backlog

## Prioritization rule

P0 is required for a correct, accessible learning release. P1 completes the premium experience and production polish. P2 is an enhancement that must not delay correctness. Dependencies use task IDs; acceptance evidence is required before closure.

## P0 — release-critical (24 tasks)

| ID | Work item | Depends on | Acceptance evidence |
|---|---|---|---|
| P0-01 | Create static React/Vite application shell and GitHub Pages-safe routing | — | Direct and refreshed routes render without server dependency |
| P0-02 | Implement global header, skip link, footer and identity hierarchy | P0-01 | Keyboard and screen-reader shell review |
| P0-03 | Build Home and course overview | P0-02 | Identity, duration, scope and disclaimer match IA |
| P0-04 | Build module map with locked/available/in-progress/completed states | P0-01 | State and text/icon are consistent |
| P0-05 | Build module reader for S-001–S-152 | P0-02 | Screen-ID/source traceability test passes |
| P0-06 | Implement Back/Next, deep-link guard and resume | P0-04,P0-05 | Browser/reload state test passes |
| P0-07 | Implement localStorage schema, validation, migration and reset | P0-04 | Corrupt/old-state tests fail safely |
| P0-08 | Implement exact sequential unlock/completion rules | P0-06,P0-07 | Ten-module progression test passes |
| P0-09 | Build reusable accessible diagram frame and text alternative | P0-05 | Keyboard, reflow and text-equivalence review |
| P0-10 | Produce V-001–V-013 | P0-09 | Register-by-register visual QA |
| P0-11 | Produce V-014–V-029 | P0-09 | Register-by-register visual QA |
| P0-12 | Produce V-030–V-046 | P0-09 | Register-by-register visual QA |
| P0-13 | Build accessible major-interaction framework | P0-05,P0-07 | Button alternative, focus and live-region tests |
| P0-14 | Implement I-001–I-005 | P0-13 | State/feedback/completion tests pass |
| P0-15 | Implement I-006–I-009 | P0-13 | State/feedback/completion tests pass |
| P0-16 | Build assessment engine and encode Q-001–Q-055 | P0-07 | Question, answer and rationale diff is exact |
| P0-17 | Implement retry/reveal and question persistence | P0-16 | First/second-error behavior tests pass |
| P0-18 | Implement Decision Lab stages 1–4 | P0-13 | Evidence and consequence state tests pass |
| P0-19 | Implement Decision Lab stages 5–8 | P0-18 | Gate, option and record tests pass |
| P0-20 | Implement qualitative debrief and final completion | P0-19,P0-17 | Nine dimensions; no score/certificate |
| P0-21 | Implement glossary, learner sources and about/disclaimer | P0-05 | Terminology/source traceability review |
| P0-22 | Complete responsive implementation at defined breakpoints | P0-05–P0-21 | 320 px–large desktop review; no horizontal page scroll |
| P0-23 | Complete WCAG 2.2 AA accessibility remediation | P0-22 | Automated plus manual keyboard/screen-reader/zoom evidence |
| P0-24 | Build, link-check, deploy-preview and release verification | P0-23 | Clean build, route refresh, smoke test and rollback note |

## P1 — premium production quality (18 tasks)

| ID | Work item | Depends on | Acceptance evidence |
|---|---|---|---|
| P1-01 | Establish visual tokens and component documentation | P0-02 | Token inventory and component states |
| P1-02 | Produce H-001–H-004 hero images | P1-01 | Image register and aircraft-integrity review |
| P1-03 | Produce H-005–H-008 hero/case images | P1-01 | Image register and content-owner review |
| P1-04 | Produce H-009–H-012 hero/case images | P1-01 | Image register and content-owner review |
| P1-05 | Optimize responsive image formats and fallbacks | P1-02–P1-04 | Size, quality and fallback report |
| P1-06 | Add restrained optional diagram transitions | P0-10–P0-12 | Reduced-motion equivalence verified |
| P1-07 | Add meaningful micro-interactions I-011–I-019 | P0-13 | Register acceptance tests |
| P1-08 | Add meaningful micro-interactions I-020–I-028 | P0-13 | Register acceptance tests |
| P1-09 | Improve source drawer/filter experience | P0-21 | Keyboard/mobile usability review |
| P1-10 | Add module recap and next-module preview cards | P0-08 | Content remains source-exact |
| P1-11 | Refine loading, empty, corrupt-state and offline-safe messages | P0-07 | State matrix tested |
| P1-12 | Optimize font loading and critical rendering | P0-22 | Performance trace |
| P1-13 | Optimize diagram and activity bundle loading | P0-10–P0-20 | Performance trace and no lost state |
| P1-14 | Complete copyfit/orphan/widow editorial UI pass | P0-22 | All 152 screens reviewed |
| P1-15 | Complete high-contrast and forced-colors pass | P0-23 | Manual evidence |
| P1-16 | Complete VoiceOver/NVDA cross-check | P0-23 | Task-based report |
| P1-17 | Complete content-owner acceptance walkthrough | P1-02–P1-16 | Signed screen/register checklist |
| P1-18 | Prepare release notes, support and recovery instructions | P0-24 | Owner-approved release pack |

## P2 — non-blocking enhancements (12 tasks)

| ID | Work item | Depends on | Acceptance evidence |
|---|---|---|---|
| P2-01 | Add printable personal decision checklist | P0-21 | Accessible print output; no stored PII |
| P2-02 | Add optional glossary term bookmarking | P0-07 | Local-only, resettable state |
| P2-03 | Add “review later” screen markers | P0-07 | Does not affect completion |
| P2-04 | Add module-map topic filtering | P0-04 | Keyboard/mobile operation |
| P2-05 | Add optional diagram zoom where genuinely useful | P0-09 | No pan required for comprehension |
| P2-06 | Add downloadable blank decision record | P0-20 | Clearly educational and accessible |
| P2-07 | Add print stylesheet for sources | P0-21 | Link destinations visible in print |
| P2-08 | Add offline install metadata if hosting permits | P0-24 | No stale-content trap |
| P2-09 | Add privacy-preserving local progress export/import | P0-07 | Explicit user action and validation |
| P2-10 | Add internal visual regression suite | P0-22 | Baseline across key widths |
| P2-11 | Add automated content-ID/source diff check | P0-05 | CI fails on unapproved drift |
| P2-12 | Add automated terminology lint | P0-21 | Approved exceptions configurable |

## Backlog totals and release gate

**54 production tasks: 24 P0, 18 P1, 12 P2.** Release requires all P0 tasks closed, no critical/high accessibility defects, exact content/assessment traceability, successful static-host route tests and content-owner acceptance. P1 may be deferred only by an explicit release decision; P2 is never a release prerequisite.
