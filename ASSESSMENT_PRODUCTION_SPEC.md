# Assessment Production Specification

## Global formative behavior

All 55 items are formative single-choice questions. Questions render after required learning and activity completion for their module. The learner cannot skip a required check to unlock the next module, but no percentage or pass/fail label is shown.

- Attempt 1: select one option and submit. Correct selections show the full reasoning feedback and mark the item complete. Incorrect selections remain visibly selected, receive option-specific/general explanatory feedback, and enable **Try again**.
- Attempt 2: learner may change the selection. If incorrect again, reveal the correct response and full explanation, mark the item **reviewed**, and offer **Review the related lesson**.
- Correct answer on either attempt or reveal after attempt two satisfies completion.
- Revisit: completed items may be reviewed; **Reset this question** clears only practice state, not module completion.
- Feedback is announced through an `aria-live="polite"` region, moves no keyboard focus unexpectedly, and never relies on color alone.
- Radio groups use `fieldset`/`legend`; arrow keys move options, Space selects, Enter activates Submit/Try again.
- Mobile options are full-width with at least 44×44 px targets. No modal is required.
- Persistence per item: `attempts`, `selectedOption`, `status: unattempted|incorrect|correct|revealed`, and timestamps are not stored.
- Completion language: “Question completed” or “Correct answer reviewed.” Never “passed,” “failed,” “certified” or “qualified.”

## Question catalogue

### Q-001 — Module 00 — Question 1 — Sustainability or ESG?

**Type:** Single-choice, four-option formative item.  
**Source:** `content/module-00/KNOWLEDGE_CHECK.md`  
**Required:** YES. **Attempts before reveal:** 2. **Completion:** correct response or reviewed reveal.

An organization publishes workforce and emissions indicators but has no process for using them in decisions. Which statement is most accurate?

A. Publishing ESG data proves the business model is sustainable.  
B. ESG reporting and sustainability are identical.  
C. The indicators may support ESG accountability, but publication alone does not prove sustainable performance.  
D. Indicators have no value unless every effect is converted to money.

**Correct answer: C.** Data can support transparency and decision-making, but its value depends on boundaries, quality, interpretation and action.

- **A is problematic** because disclosure is not evidence that impacts are managed or the business can endure.
- **B is problematic** because sustainability is the broader condition or goal; ESG is a lens and information structure.
- **D is problematic** because qualitative evidence and non-financial effects can be decision-relevant.

### Q-002 — Module 00 — Question 2 — Connected dimensions

**Type:** Single-choice, four-option formative item.  
**Source:** `content/module-00/KNOWLEDGE_CHECK.md`  
**Required:** YES. **Attempts before reveal:** 2. **Completion:** correct response or reviewed reveal.

A team changes to a lower-cost mineral supplier. The new source has uncertain water impacts, reports of recruitment fees and unclear sub-tier approval. What is the best first response?

A. Classify it only as an environmental issue because minerals come from nature.  
B. Classify it only as a social issue because recruitment fees affect workers.  
C. Treat it as a connected E/S/G decision and investigate material evidence before approval.  
D. Ignore ESG because the supplier meets the component specification.

**Correct answer: C.** Water/material impacts, worker conditions and approval/evidence controls are connected.

- **A is problematic** because it ignores people and governance.
- **B is problematic** because it ignores environmental dependencies and control quality.
- **D is problematic** because technical compliance does not answer every relevant risk or impact question.

### Q-003 — Module 00 — Question 3 — Externality and consequence

**Type:** Single-choice, four-option formative item.  
**Source:** `content/module-00/KNOWLEDGE_CHECK.md`  
**Required:** YES. **Attempts before reveal:** 2. **Completion:** correct response or reviewed reveal.

Which example best demonstrates how an externality can become a business consequence?

A. Pollution affects a community, leading to operational restrictions, remediation cost and loss of trust.  
B. A purchase order records the agreed unit price.  
C. A manager approves a budget within delegated authority.  
D. A component passes its specified inspection.

**Correct answer: A.** A consequence initially outside the transaction returns through restrictions, cost and stakeholder response.

- **B is problematic** because it describes the transaction, not an unpriced effect.
- **C is problematic** because it is a governance act without an externality in the scenario.
- **D is problematic** because it establishes technical conformity only.

### Q-004 — Module 00 — Question 4 — Governance

**Type:** Single-choice, four-option formative item.  
**Source:** `content/module-00/KNOWLEDGE_CHECK.md`  
**Required:** YES. **Attempts before reveal:** 2. **Completion:** correct response or reviewed reveal.

Which evidence most strongly suggests that a public ESG commitment is governed rather than merely stated?

A. The commitment uses ambitious language.  
B. It has a defined boundary, accountable owner, resources, measures, controls and review route.  
C. It appears prominently in external communications.  
D. A rating provider has mentioned it.

**Correct answer: B.** Governance links intent to authority, evidence, action and accountability.

- **A is problematic** because ambition without implementation may increase claim risk.
- **C is problematic** because visibility is not operating evidence.
- **D is problematic** because a provider’s mention depends on its methodology and data; it does not prove execution.

### Q-005 — Module 00 — Question 5 — Decision quality

**Type:** Single-choice, four-option formative item.  
**Source:** `content/module-00/KNOWLEDGE_CHECK.md`  
**Required:** YES. **Attempts before reveal:** 2. **Completion:** correct response or reviewed reveal.

A team cannot quantify a potential community impact precisely. What is the most defensible action?

A. Exclude it because only numerical evidence is valid.  
B. Invent a conservative number so the matrix is complete.  
C. State the uncertainty, gather proportionate qualitative and quantitative evidence, and define escalation.  
D. Allow the most senior person to decide without documenting assumptions.

**Correct answer: C.** Evidence-conscious decisions do not confuse uncertainty with irrelevance or manufacture precision.

- **A is problematic** because material qualitative evidence can be valid.
- **B is problematic** because invented precision weakens integrity.
- **D is problematic** because authority does not remove the need for evidence and traceability.

### Q-006 — Module 01 — Question 1

**Type:** Single-choice, four-option formative item.  
**Source:** `content/module-01/KNOWLEDGE_CHECK.md`  
**Required:** YES. **Attempts before reveal:** 2. **Completion:** correct response or reviewed reveal.

A purchased-electricity reduction is reported as an improvement. What additional information is most important before interpreting it?

A. The color of the chart.  
B. Boundary, baseline, method, activity change and whether burden shifted elsewhere.  
C. Whether the word “green” appears.  
D. Only the latest total cost.

**Correct: B.** These define comparability and causal meaning. A is cosmetic; C is a label, not evidence; D ignores environmental performance and lifecycle effects.

### Q-007 — Module 01 — Question 2

**Type:** Single-choice, four-option formative item.  
**Source:** `content/module-01/KNOWLEDGE_CHECK.md`  
**Required:** YES. **Attempts before reveal:** 2. **Completion:** correct response or reviewed reveal.

Which statement about Scope 3 is most accurate?

A. It is always immaterial.  
B. It is always directly controlled.  
C. It covers other value-chain emissions and often involves estimation and influence rather than direct control.  
D. It includes only employee travel.

**Correct: C.** Scope 3 spans multiple upstream/downstream categories. A ignores business-model relevance; B confuses influence with control; D reduces it to one possible category.

### Q-008 — Module 01 — Question 3

**Type:** Single-choice, four-option formative item.  
**Source:** `content/module-01/KNOWLEDGE_CHECK.md`  
**Required:** YES. **Attempts before reveal:** 2. **Completion:** correct response or reviewed reveal.

A supplier facility is in a water-stressed area. Which evidence is most decision-useful?

A. Global freshwater volume alone.  
B. The supplier’s total water use without location or season.  
C. Local basin stress, seasonal availability, water quality, process dependency, discharge and resilience controls.  
D. A generic sustainability badge.

**Correct: C.** Water risk is location-, timing-, quality- and process-specific. A is too broad; B lacks context; D does not establish scope or performance.

### Q-009 — Module 01 — Question 4

**Type:** Single-choice, four-option formative item.  
**Source:** `content/module-01/KNOWLEDGE_CHECK.md`  
**Required:** YES. **Attempts before reveal:** 2. **Completion:** correct response or reviewed reveal.

Why is “recyclable” insufficient as an environmental outcome claim?

A. Recycling never works.  
B. Technical recyclability does not show collection, sorting, recovery quality, energy use or actual recycling.  
C. Only virgin material is reliable.  
D. Environmental claims do not need evidence.

**Correct: B.** Capability differs from realized outcome. A is absolute and false; C ignores circular options; D rejects basic claim integrity.

### Q-010 — Module 01 — Question 5

**Type:** Single-choice, four-option formative item.  
**Source:** `content/module-01/KNOWLEDGE_CHECK.md`  
**Required:** YES. **Attempts before reveal:** 2. **Completion:** correct response or reviewed reveal.

A low-carbon option introduces a material with uncertain mining and labor conditions. What should the team do?

A. Ignore the new issues because carbon always overrides other impacts.  
B. Reject all low-carbon technology.  
C. Compare relevant lifecycle and social effects, investigate material evidence and govern the trade-off.  
D. Average every issue into one score and approve the highest total.

**Correct: C.** It preserves climate relevance while avoiding burden shifting. A creates tunnel vision; B is an unsupported generalization; D can conceal severe or non-compensable concerns.

### Q-011 — Module 01 — Question 6

**Type:** Single-choice, four-option formative item.  
**Source:** `content/module-01/KNOWLEDGE_CHECK.md`  
**Required:** YES. **Attempts before reveal:** 2. **Completion:** correct response or reviewed reveal.

Two repair options use different quantities but provide different service lives. What must be aligned before claiming one has lower lifecycle impact?

A. Brand color.  
B. Functional unit, system boundary, assumptions, relevant impact categories and data quality.  
C. Workshop electricity only.  
D. The option with more recycled content.

**Correct: B.** A valid comparison relates both alternatives to the same defined service and transparent boundary. C and D can reveal one aspect but may hide burden shifting.

### Q-012 — Module 02 — Question 1

**Type:** Single-choice, four-option formative item.  
**Source:** `content/module-02/KNOWLEDGE_CHECK.md`  
**Required:** YES. **Attempts before reveal:** 2. **Completion:** correct response or reviewed reveal.

Which statement best describes ESG integration? A: automatic exclusion; B: inclusion of relevant ESG information in normal analysis; C: guaranteed impact; D: a current legal duty everywhere.

**Correct: B.** A is one separate strategy; C confuses analysis with outcome; D is an unverified universal legal claim.

### Q-013 — Module 02 — Question 2

**Type:** Single-choice, four-option formative item.  
**Source:** `content/module-02/KNOWLEDGE_CHECK.md`  
**Required:** YES. **Attempts before reveal:** 2. **Completion:** correct response or reviewed reveal.

A project claims savings over ten years but assumes constant usage and price. Best response? A: accept because long horizon means sustainable; B: reject all models; C: test assumptions, alternatives and sensitivity; D: replace numbers with a slogan.

**Correct: C.** It evaluates decision drivers. A equates horizon with quality; B discards useful analysis; D removes evidence.

### Q-014 — Module 02 — Question 3

**Type:** Single-choice, four-option formative item.  
**Source:** `content/module-02/KNOWLEDGE_CHECK.md`  
**Required:** YES. **Attempts before reveal:** 2. **Completion:** correct response or reviewed reveal.

Why can a highly rated company remain exposed to ESG risk? A: ratings eliminate risk; B: a rating reflects a particular method/data/boundary and may be peer-relative; C: high ratings are always false; D: risk exists only in low-rated sectors.

**Correct: B.** A overclaims; C is indiscriminate; D ignores company and systemic risk.

### Q-015 — Module 02 — Question 4

**Type:** Single-choice, four-option formative item.  
**Source:** `content/module-02/KNOWLEDGE_CHECK.md`  
**Required:** YES. **Attempts before reveal:** 2. **Completion:** correct response or reviewed reveal.

An investor wants measurable social outcomes plus financial return. Which approach most directly matches? A: impact investing; B: passive exclusion only; C: accounting audit; D: ordinary purchasing.

**Correct: A.** B removes exposure but does not necessarily create/measure outcome; C provides assurance, not investment purpose; D is not an investment strategy.

### Q-016 — Module 02 — Question 5

**Type:** Single-choice, four-option formative item.  
**Source:** `content/module-02/KNOWLEDGE_CHECK.md`  
**Required:** YES. **Attempts before reveal:** 2. **Completion:** correct response or reviewed reveal.

What evidence most strengthens a labeled-project claim? A: prominent color; B: eligible-use criteria, allocation record, outcome method, boundary and review; C: the word “sustainable”; D: executive confidence.

**Correct: B.** A and C are presentation; D is assertion without substantiation.

### Q-017 — Module 03 — Question 1

**Type:** Single-choice, four-option formative item.  
**Source:** `content/module-03/KNOWLEDGE_CHECK.md`  
**Required:** YES. **Attempts before reveal:** 2. **Completion:** correct response or reviewed reveal.

A company reports 100% completion of supplier audits. What does this prove? A: no labor abuse exists; B: audits occurred within a stated scope, if data are reliable; C: every sub-tier was covered; D: remedy was effective.

**Correct: B.** Completion is an activity metric. A, C and D claim outcomes or scope not established.

### Q-018 — Module 03 — Question 2

**Type:** Single-choice, four-option formative item.  
**Source:** `content/module-03/KNOWLEDGE_CHECK.md`  
**Required:** YES. **Attempts before reveal:** 2. **Completion:** correct response or reviewed reveal.

Two ratings disagree. Best next step? A: average them; B: use the higher; C: compare purpose, scope, indicators, weights, peer group and data; D: discard all ESG evidence.

**Correct: C.** It diagnoses construct difference. A assumes comparability; B selects convenience; D overreacts.

### Q-019 — Module 03 — Question 3

**Type:** Single-choice, four-option formative item.  
**Source:** `content/module-03/KNOWLEDGE_CHECK.md`  
**Required:** YES. **Attempts before reveal:** 2. **Completion:** correct response or reviewed reveal.

Which is an outcome? A: publish target; B: allocate budget; C: measured reduction achieved within defined boundary; D: choose a metric.

**Correct: C.** A and D are commitments/design; B is input/activity.

### Q-020 — Module 03 — Question 4

**Type:** Single-choice, four-option formative item.  
**Source:** `content/module-03/KNOWLEDGE_CHECK.md`  
**Required:** YES. **Attempts before reveal:** 2. **Completion:** correct response or reviewed reveal.

“Repaired with 30% less facility electricity than replacement” excludes transport and parts. Best claim treatment? A: call it zero-carbon; B: retain the narrow facility-electricity comparison and disclose boundary; C: claim whole-lifecycle superiority; D: remove all numbers.

**Correct: B.** It matches evidence. A and C overreach; D discards useful bounded evidence.

### Q-021 — Module 03 — Question 5

**Type:** Single-choice, four-option formative item.  
**Source:** `content/module-03/KNOWLEDGE_CHECK.md`  
**Required:** YES. **Attempts before reveal:** 2. **Completion:** correct response or reviewed reveal.

Which most improves report credibility? A: more decorative graphs; B: stable boundary, documented method, data lineage, controls, uncertainty and correction process; C: longer executive message; D: only favorable indicators.

**Correct: B.** A and C concern presentation; D creates selection bias.

### Q-022 — Module 03 — Question 6

**Type:** Single-choice, four-option formative item.  
**Source:** `content/module-03/KNOWLEDGE_CHECK.md`  
**Required:** YES. **Attempts before reveal:** 2. **Completion:** correct response or reviewed reveal.

A metric has a documented formula and manager approval but no retained source records. Which statement is best?

A. It is externally assured.  
B. It is traceable because approval replaces evidence.  
C. Its lineage and reproducibility are incomplete; retain source evidence and test controls before describing assurance readiness.  
D. Delete the metric permanently.

**Correct: C.** Formula and approval do not establish provenance or reproducibility. A and B overclaim; D is unnecessary if the evidence gap can be governed.

### Q-023 — Module 04 — Question 1

**Type:** Single-choice, four-option formative item.  
**Source:** `content/module-04/KNOWLEDGE_CHECK.md`  
**Required:** YES. **Attempts before reveal:** 2. **Completion:** correct response or reviewed reveal.

Which best describes the Social pillar? A: representation only; B: how organizational decisions affect people, rights, work and relationships; C: philanthropy only; D: anything not environmental.

**Correct: B.** A and C are narrow; D is an undefined remainder rather than a decision lens.

### Q-024 — Module 04 — Question 2

**Type:** Single-choice, four-option formative item.  
**Source:** `content/module-04/KNOWLEDGE_CHECK.md`  
**Required:** YES. **Attempts before reveal:** 2. **Completion:** correct response or reviewed reveal.

Training is open to all, but only one shift can attend. Best interpretation? A: equal announcement proves equity; B: examine scheduling and release-time barriers while preserving competence standards; C: cancel training; D: lower assessment standards.

**Correct: B.** A confuses formal equality with access; C removes opportunity; D misrepresents equity.

### Q-025 — Module 04 — Question 3

**Type:** Single-choice, four-option formative item.  
**Source:** `content/module-04/KNOWLEDGE_CHECK.md`  
**Required:** YES. **Attempts before reveal:** 2. **Completion:** correct response or reviewed reveal.

A grievance channel receives no reports. What can be concluded? A: no harm exists; B: the channel is effective; C: nothing definitive without evidence on awareness, access, trust, retaliation and response; D: workers are satisfied.

**Correct: C.** A, B and D infer outcomes from absence of reports.

### Q-026 — Module 04 — Question 4

**Type:** Single-choice, four-option formative item.  
**Source:** `content/module-04/KNOWLEDGE_CHECK.md`  
**Required:** YES. **Attempts before reveal:** 2. **Completion:** correct response or reviewed reveal.

Which evidence gives the strongest view of inclusion? A: headcount alone; B: training count alone; C: representation plus allocation, experience, progression, retention and voice evidence with privacy controls; D: one leader’s impression.

**Correct: C.** A/B are partial; D is untriangulated opinion.

### Q-027 — Module 04 — Question 5

**Type:** Single-choice, four-option formative item.  
**Source:** `content/module-04/KNOWLEDGE_CHECK.md`  
**Required:** YES. **Attempts before reveal:** 2. **Completion:** correct response or reviewed reveal.

During a difficult DEI discussion, which response is most appropriate? A: require personal disclosure; B: suppress disagreement; C: define purpose/terms, set respectful conduct, examine evidence and protect participants from retaliation; D: treat every opinion as equally factual.

**Correct: C.** A violates privacy/autonomy; B prevents learning; D confuses respectful participation with evidentiary equivalence.

### Q-028 — Module 04 — Question 6

**Type:** Single-choice, four-option formative item.  
**Source:** `content/module-04/KNOWLEDGE_CHECK.md`  
**Required:** YES. **Attempts before reveal:** 2. **Completion:** correct response or reviewed reveal.

When is stakeholder consultation more than one-way communication?

A. When information is sent after the decision.  
B. When affected people receive accessible information early enough to influence the decision, can respond safely, and later hear how input was handled.  
C. When only the loudest representative is invited.  
D. When every preference becomes mandatory.

**Correct: B.** Meaningful engagement includes access, influence, response and closure. A is notification; C can exclude affected groups; D confuses participation with decision authority.

### Q-029 — Module 05 — Question 1 — Two kinds of risk

**Type:** Single-choice, four-option formative item.  
**Source:** `content/module-05/KNOWLEDGE_CHECK.md`  
**Required:** YES. **Attempts before reveal:** 2. **Completion:** correct response or reviewed reveal.

A small subcontractor may be withholding migrant workers’ passports, but interruption would have little financial effect on the buyer. What is the best interpretation?

A. The issue is immaterial because financial exposure is low.  
B. Potential severity to people requires investigation and escalation even if enterprise exposure is small.  
C. Passport retention proves forced labor without further evidence.  
D. The buyer has no reason to ask because the subcontractor is not tier one.

**Correct answer: B.** Rights-holder severity is a distinct prioritization lens.

- **A is problematic** because it collapses risk to people into risk to company.
- **C is problematic** because an indicator requires safe investigation; it should not be converted automatically into a verdict.
- **D is problematic** because contractual distance does not make linked severe harm irrelevant.

### Q-030 — Module 05 — Question 2 — Audit evidence

**Type:** Single-choice, four-option formative item.  
**Source:** `content/module-05/KNOWLEDGE_CHECK.md`  
**Required:** YES. **Attempts before reveal:** 2. **Completion:** correct response or reviewed reveal.

A supplier passed an announced social audit. Which conclusion is justified?

A. No abuse exists anywhere in the supply chain.  
B. The audit found no specified failure within its scope and method, subject to the report’s evidence and limitations.  
C. Worker interviews were necessarily private and safe.  
D. All sub-tiers and recruiters were covered.

**Correct answer: B.** It states the narrow conclusion the evidence can support.

- **A is problematic** because absence of an audit finding is not universal proof.
- **C is problematic** because safeguards must be verified.
- **D is problematic** because scope cannot be assumed.

### Q-031 — Module 05 — Question 3 — Purchasing practices

**Type:** Single-choice, four-option formative item.  
**Source:** `content/module-05/KNOWLEDGE_CHECK.md`  
**Required:** YES. **Attempts before reveal:** 2. **Completion:** correct response or reviewed reveal.

A buyer repeatedly changes quantities at short notice and then tells the supplier to eliminate overtime. What is missing?

A. Another sustainability slogan.  
B. Analysis of whether buyer forecasting and lead times contribute to the condition.  
C. Immediate termination without worker-impact assessment.  
D. Removal of working-time controls.

**Correct answer: B.** Prevention examines causal commercial pressure.

- **A is problematic** because communication does not change the cause.
- **C is problematic** because abrupt exit can worsen harm and is not a root-cause analysis.
- **D is problematic** because it removes protection rather than addressing pressure.

### Q-032 — Module 05 — Question 4 — Evidence gap

**Type:** Single-choice, four-option formative item.  
**Source:** `content/module-05/KNOWLEDGE_CHECK.md`  
**Required:** YES. **Attempts before reveal:** 2. **Completion:** correct response or reviewed reveal.

Mineral origin cannot be verified beyond a region. What should the decision record say?

A. “The mineral is responsibly sourced.”  
B. “Abuse has definitely occurred.”  
C. “Origin and relevant controls remain unverified; this creates an evidence gap requiring proportionate investigation and conditions.”  
D. “Regional information is always sufficient.”

**Correct answer: C.** It accurately states knowledge and action.

- **A is problematic** because evidence does not support the positive claim.
- **B is problematic** because missing traceability is not proof of abuse.
- **D is problematic** because adequacy depends on risk, process and purpose.

### Q-033 — Module 05 — Question 5 — Remedy and exit

**Type:** Single-choice, four-option formative item.  
**Source:** `content/module-05/KNOWLEDGE_CHECK.md`  
**Required:** YES. **Attempts before reveal:** 2. **Completion:** correct response or reviewed reveal.

Verified recruitment fees have placed workers in debt. Which response is most complete?

A. Close the audit finding after updating the policy.  
B. Consider worker protection and repayment/remedy, remove causal recruitment practices, monitor outcomes and assess whether engagement or responsible disengagement best reduces harm.  
C. Announce zero tolerance and end the relationship immediately in every case.  
D. Focus only on reputational messaging.

**Correct answer: B.** It addresses affected people, root cause and future risk.

- **A is problematic** because policy correction alone does not repair worker harm.
- **C is problematic** because automatic exit may worsen worker outcomes and ignores leverage/context.
- **D is problematic** because it centers organizational image rather than harm and remedy.

### Q-034 — Module 05 — Question 6 — Grievance effectiveness

**Type:** Single-choice, four-option formative item.  
**Source:** `content/module-05/KNOWLEDGE_CHECK.md`  
**Required:** YES. **Attempts before reveal:** 2. **Completion:** correct response or reviewed reveal.

A worker hotline exists, but workers do not know its process and fear recruiter retaliation. What is the best response?

A. Treat the hotline’s existence as proof of effectiveness.  
B. Publish case names to demonstrate transparency.  
C. Assess access, legitimacy, predictability, fairness, confidentiality, non-retaliation, response, remedy and feedback with intended users.  
D. Count zero cases as zero harm.

**Correct answer: C.** It tests the mechanism as a trusted, rights-compatible loop. A and D infer outcomes from an input; B could expose users and increase harm.

### Q-035 — Module 06 — Question 1

**Type:** Single-choice, four-option formative item.  
**Source:** `content/module-06/KNOWLEDGE_CHECK.md`  
**Required:** YES. **Attempts before reveal:** 2. **Completion:** correct response or reviewed reveal.

A policy requires supplier due diligence. What most strongly demonstrates an effective control?

A. The policy is published.  
B. A responsible executive signs it.  
C. Relevant suppliers are screened through defined evidence, exceptions are acted on and testing shows the control identifies or prevents material risk.  
D. Employees received one email.

**Correct: C.** It connects design, operation and outcome. A and B establish intent/authority but not operation. D is communication, not proof of control effectiveness.

### Q-036 — Module 06 — Question 2

**Type:** Single-choice, four-option formative item.  
**Source:** `content/module-06/KNOWLEDGE_CHECK.md`  
**Required:** YES. **Attempts before reveal:** 2. **Completion:** correct response or reviewed reveal.

Who normally owns an operational risk?

A. Internal audit because it reviews controls.  
B. The management role accountable for the objective and risk, supported and challenged by relevant functions.  
C. Any employee who notices it.  
D. The external auditor.

**Correct: B.** Management ownership remains. A and D provide assurance within mandates; C may raise the risk but is not automatically owner.

### Q-037 — Module 06 — Question 3

**Type:** Single-choice, four-option formative item.  
**Source:** `content/module-06/KNOWLEDGE_CHECK.md`  
**Required:** YES. **Attempts before reveal:** 2. **Completion:** correct response or reviewed reveal.

A control was performed and signed, but repeated exceptions continue. Best conclusion?

A. Signature proves effectiveness.  
B. Examine design, quality of execution and whether the control addresses the cause.  
C. Remove monitoring so the dashboard improves.  
D. Add more signatures without analysis.

**Correct: B.** Persistent exceptions challenge effectiveness. A confuses execution evidence with result; C hides risk; D adds form without causal value.

### Q-038 — Module 06 — Question 4

**Type:** Single-choice, four-option formative item.  
**Source:** `content/module-06/KNOWLEDGE_CHECK.md`  
**Required:** YES. **Attempts before reveal:** 2. **Completion:** correct response or reviewed reveal.

When is escalation most appropriate?

A. Only after harm occurs.  
B. When the issue exceeds authority, competence, evidence threshold or risk boundary, or remains unresolved.  
C. Whenever a manager wants to avoid responsibility.  
D. Never, because escalation signals failure.

**Correct: B.** Escalation is a defined governance control. A is too late; C is avoidance; D misunderstands the mechanism.

### Q-039 — Module 06 — Question 5

**Type:** Single-choice, four-option formative item.  
**Source:** `content/module-06/KNOWLEDGE_CHECK.md`  
**Required:** YES. **Attempts before reveal:** 2. **Completion:** correct response or reviewed reveal.

Which dashboard design creates the greatest governance concern?

A. It displays trend and exceptions.  
B. It links status to source evidence.  
C. It stays green because unresolved evidence is categorized outside the metric.  
D. It identifies the owner and review date.

**Correct: C.** Classification hides material uncertainty. A, B and D improve decision usefulness.

### Q-040 — Module 06 — Question 6

**Type:** Single-choice, four-option formative item.  
**Source:** `content/module-06/KNOWLEDGE_CHECK.md`  
**Required:** YES. **Attempts before reveal:** 2. **Completion:** correct response or reviewed reveal.

A proposal exceeds a mandatory airworthiness requirement but has strong environmental benefits. What should the team do?

A. Average both into one score.  
B. Treat the requirement as a non-compensable gate; reject or route the issue to the mandated authority without claiming ESG can waive it.  
C. Increase environmental weighting until the proposal passes.  
D. Rename the breach a tolerance.

**Correct: B.** Appetite and tolerance cannot create authority to trade away a mandatory constraint. A, C and D conceal rather than govern the failure.

### Q-041 — Module 07 — Question 1

**Type:** Single-choice, four-option formative item.  
**Source:** `content/module-07/KNOWLEDGE_CHECK.md`  
**Required:** YES. **Attempts before reveal:** 2. **Completion:** correct response or reviewed reveal.

Which item most clearly belongs in a board-level information pack? A: every operational email; B: material option, evidence, uncertainty, control failure, dissent and requested authority; C: only favorable KPI; D: technical detail with no decision context.

**Correct: B.** It supports oversight. A overwhelms; C biases; D lacks material framing.

### Q-042 — Module 07 — Question 2

**Type:** Single-choice, four-option formative item.  
**Source:** `content/module-07/KNOWLEDGE_CHECK.md`  
**Required:** YES. **Attempts before reveal:** 2. **Completion:** correct response or reviewed reveal.

Formal independence is strongest when combined with: A: management-controlled information only; B: competence, evidence access, conflict safeguards and protected challenge; C: long tenure alone; D: unanimous votes.

**Correct: B.** It enables objective judgment. A restricts challenge; C is not proof; D may indicate agreement or conformity.

### Q-043 — Module 07 — Question 3

**Type:** Single-choice, four-option formative item.  
**Source:** `content/module-07/KNOWLEDGE_CHECK.md`  
**Required:** YES. **Attempts before reveal:** 2. **Completion:** correct response or reviewed reveal.

An urgent option lacks technical-authority approval. What may governance do? A: use ESG benefits to override approval; B: preserve the gate while deciding resources, alternatives, escalation and schedule response; C: treat cost approval as technical approval; D: conceal uncertainty.

**Correct: B.** Mandatory authority remains. A/C substitute invalid authority; D undermines oversight.

### Q-044 — Module 07 — Question 4

**Type:** Single-choice, four-option formative item.  
**Source:** `content/module-07/KNOWLEDGE_CHECK.md`  
**Required:** YES. **Attempts before reveal:** 2. **Completion:** correct response or reviewed reveal.

Why record material dissent? A: to punish the dissenter; B: to preserve reasoning, unresolved assumptions and how challenge was addressed; C: to prevent decisions; D: because majority decisions are invalid.

**Correct: B.** It improves traceability. A is retaliatory; C confuses challenge with paralysis; D is false.

### Q-045 — Module 07 — Question 5

**Type:** Single-choice, four-option formative item.  
**Source:** `content/module-07/KNOWLEDGE_CHECK.md`  
**Required:** YES. **Attempts before reveal:** 2. **Completion:** correct response or reviewed reveal.

Which ethical test is most useful under schedule pressure? A: “Can we avoid documenting this?” B: “What constraints, rights, alternatives, consequences and monitoring would we defend transparently?” C: “Which option has the best slogan?” D: “Can every concern be averaged into one score?”

**Correct: B.** It exposes reasoning. A hides it; C is irrelevant; D can erase severe/non-negotiable issues.

### Q-046 — Module 08 — Question 1

**Type:** Single-choice, four-option formative item.  
**Source:** `content/module-08/KNOWLEDGE_CHECK.md`  
**Required:** YES. **Attempts before reveal:** 2. **Completion:** correct response or reviewed reveal.

Which turns “responsible sourcing” into a strategic issue? A: repeat the phrase; B: define scope, affected people/systems, causal risk/opportunity and evidence; C: add a green icon; D: set 100% without baseline.

**Correct: B.** It defines the decision. A/C are communication; D is an unsupported target.

### Q-047 — Module 08 — Question 2

**Type:** Single-choice, four-option formative item.  
**Source:** `content/module-08/KNOWLEDGE_CHECK.md`  
**Required:** YES. **Attempts before reveal:** 2. **Completion:** correct response or reviewed reveal.

Which is an outcome indicator? A: audits scheduled; B: staff trained; C: verified reduction in recruitment-fee cases and effective remedy within scope; D: policy published.

**Correct: C.** A/B/D are activities or outputs; C describes changed condition.

### Q-048 — Module 08 — Question 3

**Type:** Single-choice, four-option formative item.  
**Source:** `content/module-08/KNOWLEDGE_CHECK.md`  
**Required:** YES. **Attempts before reveal:** 2. **Completion:** correct response or reviewed reveal.

Why use leading and lagging indicators? A: to maximize count; B: to monitor precursors/actions and actual outcomes; C: to avoid decisions; D: because every metric is equally material.

**Correct: B.** They serve different timing roles. A creates noise; C is contrary to purpose; D ignores materiality.

### Q-049 — Module 08 — Question 4

**Type:** Single-choice, four-option formative item.  
**Source:** `content/module-08/KNOWLEDGE_CHECK.md`  
**Required:** YES. **Attempts before reveal:** 2. **Completion:** correct response or reviewed reveal.

Best way to avoid parallel ESG bureaucracy? A: ignore ESG; B: integrate relevant questions, evidence, controls and authority into existing processes; C: create duplicate approval for every task; D: centralize every decision in one specialist.

**Correct: B.** It embeds accountability. A loses information; C duplicates; D removes operational ownership.

### Q-050 — Module 08 — Question 5

**Type:** Single-choice, four-option formative item.  
**Source:** `content/module-08/KNOWLEDGE_CHECK.md`  
**Required:** YES. **Attempts before reveal:** 2. **Completion:** correct response or reviewed reveal.

A target is missed. Best response? A: change the definition silently; B: examine assumptions, execution, incentives and cause; take corrective action and disclose limits; C: remove monitoring; D: report activities as achievement.

**Correct: B.** It supports learning and integrity. A/C hide failure; D confuses activity with outcome.

### Q-051 — Module 08 — Question 6

**Type:** Single-choice, four-option formative item.  
**Source:** `content/module-08/KNOWLEDGE_CHECK.md`  
**Required:** YES. **Attempts before reveal:** 2. **Completion:** correct response or reviewed reveal.

An issue creates severe impacts on a small group but has no identified short-term financial effect. Under a double-materiality approach, what follows?

A. Exclude it because both lenses must be met.  
B. Assess it under impact materiality; it may be material through that lens alone, with severity not averaged away.  
C. Convert the impact into reputation points only.  
D. Wait until a financial loss occurs.

**Correct: B.** Impact and financial materiality are distinct but connected lenses; meeting either applicable threshold can make the issue material.

### Q-052 — Module 09 — Question 1

**Type:** Single-choice, four-option formative item.  
**Source:** `content/module-09/FINAL_REVIEW.md`  
**Required:** YES. **Attempts before reveal:** 2. **Completion:** correct response or reviewed reveal.

You discover after conditional approval that mineral origin remains unverified but no harm has been reported. What is the strongest response?

A. State that no harm exists.  
B. State that harm is proven.  
C. Record the evidence gap, reassess severity/context, pursue agreed evidence and apply the monitoring/escalation condition.  
D. Remove the condition to preserve schedule.

**Correct: C.** It preserves uncertainty and governance. A treats absence of reports as proof; B converts uncertainty into allegation; D undermines the decision basis.

### Q-053 — Module 09 — Question 2

**Type:** Single-choice, four-option formative item.  
**Source:** `content/module-09/FINAL_REVIEW.md`  
**Required:** YES. **Attempts before reveal:** 2. **Completion:** correct response or reviewed reveal.

Actual energy use is higher than modeled, though the technical outcome is acceptable. What should happen?

A. Keep reporting the model as outcome.  
B. Compare assumptions with actual data, investigate cause, update the claim and decide corrective action.  
C. Hide the result because technical performance is acceptable.  
D. Declare the entire retrofit a failure without analysis.

**Correct: B.** Monitoring exists to test assumptions. A confuses forecast with outcome; C removes transparency; D ignores multiple objectives and causes.

### Q-054 — Module 09 — Question 3

**Type:** Single-choice, four-option formative item.  
**Source:** `content/module-09/FINAL_REVIEW.md`  
**Required:** YES. **Attempts before reveal:** 2. **Completion:** correct response or reviewed reveal.

Which statement best captures the capstone lesson?

A. ESG produces one score that chooses the option.  
B. ESG overrides safety and technical authority when impact is positive.  
C. ESG broadens evidence, people/impact awareness and governance within mandatory constraints.  
D. ESG belongs only in external reporting after approval.

**Correct: C.** It integrates the course. A creates false aggregation; B violates mandatory constraints; D places ESG too late.

### Q-055 — Module 09 — Question 4

**Type:** Single-choice, four-option formative item.  
**Source:** `content/module-09/FINAL_REVIEW.md`  
**Required:** YES. **Attempts before reveal:** 2. **Completion:** correct response or reviewed reveal.

A decision met every approval gate, but workers report retaliation after raising overtime concerns. What should the review conclude?

A. Gate completion proves the governance system worked.  
B. Treat the report as decision-relevant evidence, protect workers, investigate, escalate and reassess control effectiveness/remedy.  
C. Ignore it because it occurred after approval.  
D. Treat the allegation as verified without safeguards.

**Correct: B.** Post-decision evidence tests controls and conditions. A confuses execution with effectiveness; C breaks monitoring; D skips safe investigation.

## Module completion mapping

| Module | Question IDs | Required check condition |
|---|---|---|
| 00 | Q-001–Q-005 (5) | Every item attempted; each status is correct or revealed. |
| 01 | Q-006–Q-011 (6) | Every item attempted; each status is correct or revealed. |
| 02 | Q-012–Q-016 (5) | Every item attempted; each status is correct or revealed. |
| 03 | Q-017–Q-022 (6) | Every item attempted; each status is correct or revealed. |
| 04 | Q-023–Q-028 (6) | Every item attempted; each status is correct or revealed. |
| 05 | Q-029–Q-034 (6) | Every item attempted; each status is correct or revealed. |
| 06 | Q-035–Q-040 (6) | Every item attempted; each status is correct or revealed. |
| 07 | Q-041–Q-045 (5) | Every item attempted; each status is correct or revealed. |
| 08 | Q-046–Q-051 (6) | Every item attempted; each status is correct or revealed. |
| 09 | Q-052–Q-055 (4) | Every item attempted; each status is correct or revealed. |

Module 09 reflective review follows Decision Lab Stage 8. Completing Q-052–Q-055 is required for the learning-experience completion event. No assessment score is displayed or persisted.

