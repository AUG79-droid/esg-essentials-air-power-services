# Decision Lab Production Specification

## Purpose and guardrails

I-010 is the required eight-stage capstone. It is a learning simulation, not an operational approval tool. It produces no certificate, score, ranking or advice. The experience preserves the authored ambiguity: more evidence can improve a decision, but it does not remove uncertainty or transfer technical/decision authority to the learner.

## State model

Persistent qualitative variables: `frameQuality`, `boundaryQuality`, `environmentalEvidence`, `socialEvidence`, `claimCalibration`, `governanceDiscipline`, `optionQuality`, `recordCompleteness`; each is `notStarted`, `needsReview`, `developing` or `strong`. Supporting arrays retain selected evidence requests, mapped affected groups, identified unknowns, constraints, escalation recipients, option conditions and monitoring commitments. Only learner selections and derived qualitative states are stored locally; no free-text personal data or timestamps.

Stage state is `briefing`, `working`, `feedback`, or `complete`. The next stage opens after feedback is viewed. Learners may return and revise; revisions recompute downstream feedback without erasing later answers. Newly unlocked evidence is visibly labelled “New evidence,” announced to assistive technology and summarized in text.

## Stage production map

| Stage | Briefing / evidence states | Required decision(s) | Consequence and unlock logic | Feedback and transition |
|---|---|---|---|---|
| 1. Frame the decision | Initial: repair yield declining; proposed supplier claims equivalent performance and faster availability; qualification incomplete; request presented as “ESG approval.” Hidden until response: distinction between commercial onboarding and technical qualification. | Rewrite the decision as a governed comparison; select decision objective, feasible paths, qualification gate, known facts and unknowns. | Including technical feasibility and qualification sets `frameQuality=strong` and organizes later evidence by option. Treating ESG as a separate approval sets `needsReview` and adds a framing prompt. | Explain that ESG informs the decision but does not replace accountable authority. Continue to boundary mapping. |
| 2. Boundaries and affected parties | Show components/mineral inputs, treatment, packaging, air freight, overtime, contractors and nearby community. Hidden groups appear only when related pathway is mapped. | Choose lifecycle boundary; map activities to workers, contractors, communities, customers and other affected people; state exclusions. | Multi-tier/lifecycle coverage sets `boundaryQuality=strong`; mapped groups unlock relevant environmental and social evidence later. A tier-1-only boundary triggers an omission warning. | Contrast stakeholder interest with rights-holder exposure. Transition with retained boundary map. |
| 3. Environmental dependencies and impacts | Claims: lighter unit, lower production electricity; unknown chemical change, waste and worker exposure; possible air freight; repair has material and repeat-transport effects. Evidence panels begin partial. | Classify each item as dependency, impact, claim, evidence or unknown; request decision-relevant data; identify burden shifting. | Treatment/waste requests unlock process and disposal evidence. Transport request unlocks logistics scenario. Carbon-only selection sets `environmentalEvidence=needsReview`; lifecycle comparison can set `strong`. | Show which conclusions are supportable, conditional or unknown. Transition with requested evidence and caveats. |
| 4. Supplier and social investigation | Tier-1 audit passed; labor recruiter used; fee deductions unclear; overtime and payroll conflict; regional mineral origin; no verified harm. Hidden: response quality depends on protected inquiry. | Classify known/unknown/indicator/allegation/verified harm; select proportionate requests and escalation; assess buyer contribution. | Protected worker inquiry and record triangulation unlock fee/payroll explanations and set `socialEvidence` toward `strong`. Unsafe interview raises non-retaliation warning. Abrupt exit preserves uncertainty and may worsen remedy prospects. | Feedback distinguishes absence of evidence from evidence of absence. Transition with unresolved indicators. |
| 5. Claims, data and uncertainty | Proposed copy: “lower-carbon and responsibly sourced retrofit”; supplier certificate; modeled energy; incomplete mineral data; no operating outcome. | Sort claim/evidence/metric/target/outcome/unknown; approve, revise or withhold internal/external statements; attach caveats. | Unsupported external approval sets `claimCalibration=needsReview` and creates reputation/control consequence. Calibrated wording or withholding pending evidence can set `strong`. | Provide exact reasoning without inventing proof. Transition retains approved wording and uncertainty. |
| 6. Governance and escalation | Schedule red; technical authority has not approved equivalence; procurement owns relationship; quality verifies records; compliance reviews social evidence; environmental model unchecked; dashboard says “supplier approved” because commercial onboarding completed. | Map accountable/consulted roles; correct dashboard status; select escalation path and any controlled interim authority. | Separating commercial, technical and ESG controls and escalating to named authority sets `governanceDiscipline=strong`; unlocks controlled interim resources. Delay in escalation reduces flexibility. A weighted score cannot open a non-compensable technical gate. | Explain authority, control evidence and escalation quality. Transition with actual approval state. |
| 7. Compare options | Four paths: repair; incumbent redesign; new supplier; controlled interim. Each has environmental, social, technical, schedule and evidence attributes plus residual uncertainty. | Identify non-compensable constraints; compare options consistently; choose a conditional sequence and fallback; document trade-offs. | Breaching a technical/legal/rights constraint cannot be offset by high scores elsewhere. Conditions selected here populate Stage 8 monitoring. Coherent sequencing sets `optionQuality=strong`; single-metric optimization prompts systems review. | Feedback acknowledges more than one reasonable path when assumptions differ. Transition with chosen path, conditions and fallback. |
| 8. Document and monitor | Prefill retained facts, choices, unknowns, authority map and option conditions; never fabricate missing values. | Complete decision record: objective, boundary, evidence, affected people, alternatives, constraints, authority, rationale, uncertainty, conditions, owner, indicators, review triggers, escalation and fallback. | Completeness and internal consistency set `recordCompleteness`. Missing owner/trigger/authority blocks stage completion with specific prompt; it does not assign a score. | Generate qualitative nine-dimension debrief, then unlock final review. |

## Evidence drawer states

Each evidence item displays source type, date status as “scenario information” rather than a real date, scope/boundary, owner, limitation and whether it is observed, reported, modeled or inferred. States: unavailable, available-unreviewed, reviewed-relevant, reviewed-not-decision-relevant, conflicting and superseded. Conflicting evidence remains visible; the interface never silently chooses a preferred source.

## Decision record fields

Required fields are implemented as structured controls, not unrestricted essays: decision statement; alternatives; included/excluded boundary; affected parties and rights-holders; evidence used; evidence not obtained; assumptions; non-compensable constraints; authority and consulted functions; selected option/sequence; rationale; residual uncertainties; approval conditions; evidence/metric owner; monitoring frequency; review trigger; escalation recipient; fallback or pause condition. A short optional reflection is local-only and excluded from completion logic.

## Feedback dimensions

The debrief reports `strong`, `developing` or `needs review` for exactly nine dimensions: evidence quality; systems thinking; risk recognition; rights-holder awareness; governance discipline; uncertainty management; escalation quality; lifecycle thinking; decision traceability. It explains evidence from learner actions for every label. No total, percentage, pass mark, red/amber/green grade or comparative norm appears.

## Substantial debrief sequence

1. Decision summary and selected conditional path.
2. What the learner did strongly, tied to recorded actions.
3. Evidence commonly overlooked, including transport, treatment/waste, recruiter practices, worker voice, purchasing contribution, data boundaries and technical approval status.
4. Environmental/social/governance interactions and burden shifting.
5. Trade-offs, unintended consequences and remaining uncertainty.
6. Monitoring commitments, triggers, owners, escalation and fallback.
7. Why reasonable teams may disagree when assumptions or risk tolerances differ.
8. Transfer prompts for everyday Air Power Services decisions.

## Accessibility, responsive behavior and persistence

All drag-like actions have select-and-place buttons; matrices expose a row-by-row form; relationships have an ordered text view; focus moves to the feedback heading after submit; updates use a polite live region; errors are linked to controls. At ≤767 px, the evidence drawer becomes a full-width labelled panel and comparisons become cards. There is no timer or hover-only disclosure. Stage and response state persist under the course localStorage record specified in `PROGRESSION_SPEC.md`. Resetting the lab requires a labelled confirmation and does not reset Modules 00–08.

## Completion

I-010 completes only when all eight stages have reached feedback, Stage 8 required record fields are complete, and the substantial debrief has been opened through its final transfer section. Q-052–Q-055 and the Module 09 close remain separate completion requirements.
