# Screen Architecture

## Production rule

A screen/group is one navigable learner-facing unit. Accordions, tabs and diagram states within it do not create routes. Every unit has a visible title, module breadcrumb, Back/Next controls, module progress, a focus target on entry and a resume anchor. Browser Back preserves state. Reading units may be revisited; activities, checks and close confirmations are required.

## Shared behavior

- WCAG 2.2 AA target; semantic landmarks/headings; keyboard-complete operation; visible focus; no color-only meaning; 44 × 44 CSS-pixel touch targets.
- At 767 px and below, columns stack, tables become labelled cards, side navigation becomes a top drawer, and every diagram has a pan-free vertical/text equivalent.
- Motion is optional, respects `prefers-reduced-motion`, and carries no unique meaning.
- Text is selectable. Feedback is announced. External source links identify destination and new-window behavior.

## Modules 00–08 screen map

Each semicolon-delimited item below is a separately navigable screen/group. The listed order is exact.

| Module | IDs | Core reading screens/groups and exact source | Required production screens | Visual mapping | Navigation, progress, optionality, accessibility/mobile |
|---|---|---|---|---|---|
| 00 | S-001–S-013 | `MODULE.md`: opening dilemma/objectives; sustainability vs ESG; incomplete information; stakeholders/affected people; impact–dependency–risk–opportunity; long-term value/governance; Enron case; APS scenario; myths; decision lens/close | S-011 activity from `ACTIVITY.md` (I-001); S-012 check from `KNOWLEDGE_CHECK.md`; S-013 sources/close from `SOURCES.md` + close | V-001–V-003 | Back/Next, 1–13; core visited, activity/check/close required; diagrams stack to text |
| 01 | S-014–S-031 | `MODULE.md`: opening/objectives; climate exposure; physical risk/adaptation; emissions; dependencies/impacts/resources; energy; biodiversity/nature; pollution; waste/circularity; lifecycle thinking; repair scenario; business pathways; cases; APS scenario/myths/lens; close/bridge | S-029 activity (I-002); S-030 check; S-031 sources/close | V-004–V-010 | Back/Next, 1–18; required states saved; lifecycle diagrams become labelled vertical flows |
| 02 | S-032–S-044 | `MODULE.md`: opening/objectives; sustainable finance; ESG information; materiality; investment approaches; internal capital allocation; labelled instruments; APS scenario; practitioner/myths/lens; close/bridge | S-042 activity (I-003); S-043 check; S-044 sources/close | V-011–V-013 | Back/Next, 1–13; matrices become cards; labels never imply financial advice |
| 03 | S-045–S-058 | `MODULE.md`: opening/objectives; reporting purpose; claim/evidence/metric/target/outcome; ratings; rating divergence; data/boundaries; governed evidence/assurance readiness; greenwashing; APS claims; practitioner/myths/lens; close/bridge | S-056 activity (I-004); S-057 check; S-058 sources/close | V-014–V-017 | Back/Next, 1–14; classifier operable by buttons as well as drag; claims retain caveats |
| 04 | S-059–S-073 | `MODULE.md`: opening/objectives; social pillar; human rights/due diligence; workforce/wellbeing; DEIB; systems/people analytics; stakeholders/communities; rights-holder engagement; dialogue/resistance; APS access scenario; cases/myths/lens; close/bridge | S-071 activity (I-005); S-072 check; S-073 sources/close | V-018–V-022 | Back/Next, 1–15; person-first copy; maps expose list alternative and reading order |
| 05 | S-074–S-091 | `MODULE.md`: opening/objectives; human rights in business; two risk lenses; severity/vulnerability; tier opacity; purchasing contribution; emergency scenario; due diligence; audits; worker voice/grievance; remedy/disengagement; communities/resources; effectiveness; APS scenario/myths/lens; close | S-089 activity (I-006); S-090 check; S-091 sources/close | V-023–V-029 | Back/Next, 1–18; investigation never asks learner to expose a worker; networks become ordered lists |
| 06 | S-092–S-108 | `MODULE.md`: opening/objectives; governance purpose; authority; policies/procedures/controls; governance chain; capacity/appetite/tolerance/limits; non-compensable gate; three lines; audit trail; speak-up/escalation; culture/incentives/assurance; corrective closure/Enron; APS dashboard/myths/lens; close | S-106 activity (I-007); S-107 check; S-108 sources/close | V-030–V-034 | Back/Next, 1–17; authority maps use text roles; warning states include icon and text |
| 07 | S-109–S-123 | `MODULE.md`: opening/objectives; board/management; composition/competence/independence; committees/assurance; information asymmetry; challenge; ethics; time horizons/accountability; stakeholders; APS readiness; practitioner/myths/lens; close | S-121 activity (I-008); S-122 check; S-123 sources/close | V-035–V-038 | Back/Next, 1–15; boardroom choices use radio groups; no timed response |
| 08 | S-124–S-139 | `MODULE.md`: opening/objectives; material priority/double materiality; issue definition; objective/action/owner; indicators; process integration; lifecycle gates; capability/culture; monitoring; baselines/counterfactuals/attribution; portfolio coherence; APS scenario/myths/lens; close | S-137 activity (I-009); S-138 check; S-139 sources/close | V-039–V-042 | Back/Next, 1–16; strategy chain becomes vertical; progress and save status announced |

## Module 09 capstone screen map

| ID | Learner-facing screen/group | Exact source | Format / interaction | Visual | Navigation / progress |
|---|---|---|---|---|---|
| S-140 | Capstone opening, scenario and objectives | `MODULE.md`: Capstone opening through Scenario frame | Hero briefing | V-043 | 1/13; visited |
| S-141 | How the lab works and decision lens | `MODULE.md`: How the lab works through Decision lens | Orientation/checklist | V-044 | 2/13; visited |
| S-142 | Stage 1 — Frame the decision | `DECISION_LAB.md`: Stage 1 | Decision form | V-046 | Required; save on submit |
| S-143 | Stage 2 — Boundaries and affected parties | `DECISION_LAB.md`: Stage 2 | Boundary mapper | V-043 | Required; prior state visible |
| S-144 | Stage 3 — Environmental dependencies and impacts | `DECISION_LAB.md`: Stage 3 | Evidence classifier | V-043 | Required; unlocked evidence saved |
| S-145 | Stage 4 — Supplier and social investigation | `DECISION_LAB.md`: Stage 4 | Investigation board | V-044 | Required; protected inquiry controls |
| S-146 | Stage 5 — Claims, data and uncertainty | `DECISION_LAB.md`: Stage 5 | Claim calibrator | V-044 | Required; caveats preserved |
| S-147 | Stage 6 — Governance and escalation | `DECISION_LAB.md`: Stage 6 | Authority/escalation map | V-045 | Required; decision authority explicit |
| S-148 | Stage 7 — Compare options | `DECISION_LAB.md`: Stage 7 | Option matrix | V-046 | Required; no compensating non-compensable breach |
| S-149 | Stage 8 — Document and monitor | `DECISION_LAB.md`: Stage 8 | Decision record | V-043 | Required; record completeness shown |
| S-150 | Substantial debrief | `DECISION_LAB.md`: Substantial debrief through Educational completion | Personalized qualitative debrief | V-043–V-046 | Required; dimensions announced as text |
| S-151 | Reflective final review | `FINAL_REVIEW.md`: Questions 1–4 | Required single-choice sequence Q-052–Q-055 | — | Attempts saved; reveal after second error |
| S-152 | Capstone close and course completion | `MODULE.md`: Capstone close + `DECISION_LAB.md`: Central course idea | Completion reflection/confirmation | — | Required; sets course complete |

All capstone controls have keyboard/touch equivalents, persistent labels, an announced state change and a linear mobile alternative. No stage is timed.

## Totals and immutable traceability

- **152 learner-facing screens/groups**: 139 across Modules 00–08 and 13 in Module 09.
- **10 required major interactions**, **55 required formative questions**, **46 native explanatory visuals**, and **10 sources/close destinations**.
- Screen IDs are immutable. Responsive pagination may change wrapping but must not merge away an activity, check, capstone stage, debrief or close.
- Locked deep links return to the module map with an explanation and preserve the intended destination. Reopening resumes the last visited unlocked screen.
