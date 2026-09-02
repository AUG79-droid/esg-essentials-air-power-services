import { describe, expect, it } from 'vitest'
import { CORE_VIEWS, LAB_DIMENSIONS, LAB_RECORD_FIELDS, NON_COMPENSABLE_CONSTRAINTS, initialProgress, labCompletionReady, labRecordComplete, labReviewComplete, labStagesComplete, module00Ready, moduleReady, moduleState, qualitativeDebrief, resolveAttempt, resolveLabStage, sanitizeProgress } from './engines'
import { moduleContent, questionCounts } from '../data/moduleContent'
import { parseQuestions } from '../data/contentParsers'
import finalReviewRaw from '../../content/module-09/FINAL_REVIEW.md?raw'

describe('progression',()=>{
 it('starts with Module 00 available and Module 01 locked',()=>{expect(moduleState('00',initialProgress)).toBe('AVAILABLE');expect(moduleState('01',initialProgress)).toBe('LOCKED')})
 it('requires activity, five resolved questions and close',()=>{const p=structuredClone(initialProgress);p.activities['00']=true;p.visited['00:close']=true;for(let i=1;i<=5;i++)p.questions['Q-00'+i]={module:'00',completed:true};expect(module00Ready(p)).toBe(true)})
 it('sanitizes incompatible persisted state',()=>expect(sanitizeProgress({version:9})).toEqual(initialProgress))
 it('recovers Continue course to the next unlocked module',()=>{const p=structuredClone(initialProgress);p.currentModule='09';p.completedModules=['08'];p.lastRoute='/module/08/close';expect(sanitizeProgress(p).lastRoute).toBe('/lab/opening')})
 it('requires every core view for Modules 01–08',()=>{const p=structuredClone(initialProgress),id='01';p.activities[id]={completed:true};for(let i=1;i<=6;i++)p.questions[`M01-Q0${i}`]={module:id,completed:true};CORE_VIEWS.forEach(v=>p.visited[`${id}:${v}`]=true);expect(moduleReady(p,id,6)).toBe(true);delete p.visited['01:visuals'];expect(moduleReady(p,id,6)).toBe(false)})
 it('does not unlock a later module out of sequence',()=>{const p={...structuredClone(initialProgress),currentModule:'04'};expect(moduleState('03',p)).toBe('AVAILABLE');expect(moduleState('04',p)).toBe('AVAILABLE');expect(moduleState('05',p)).toBe('LOCKED')})
})
describe('assessment',()=>{it('allows retry then reveals after second error',()=>{const a=resolveAttempt(null,0,2);expect(a.completed).toBe(false);expect(a.reveal).toBe(false);const b=resolveAttempt(a,1,2);expect(b.completed).toBe(true);expect(b.reveal).toBe(true)});it('completes immediately when correct',()=>expect(resolveAttempt(null,2,2).completed).toBe(true))})
describe('Decision Lab',()=>{it('unlocks authority distinction from strong Stage 1 framing',()=>expect(resolveLabStage(1,['comparison','qualification']).unlocks).toContain('authority-distinction'));it('does not create a numeric score',()=>expect(resolveLabStage(3,['carbon-only'])).not.toHaveProperty('score'))})
describe('Decision Lab Phase 5B2 engine',()=>{
 it('defines exactly nine qualitative dimensions',()=>expect(Object.keys(LAB_DIMENSIONS)).toHaveLength(9))
 it('protects worker inquiry and unlocks social evidence',()=>{const r=resolveLabStage(4,['evidence-categories','protected-inquiry','recruiter-payroll','buyer-contribution','proportionate-escalation']);expect(r.quality).toBe('strong');expect(r.unlocks).toContain('protected-worker-evidence')})
 it('creates a safeguarding consequence for unsafe interviews',()=>expect(resolveLabStage(4,['unsafe-interviews','recruiter-payroll']).unlocks).toContain('safeguarding-warning'))
 it('distinguishes models from outcomes and unlocks provenance',()=>{const r=resolveLabStage(5,['provenance-chain','model-not-outcome','bounded-internal-claim','no-external-responsible-claim']);expect(r.quality).toBe('strong');expect(r.unlocks).toContain('calibrated-claim')})
 it('records an overclaim exposure consequence',()=>expect(resolveLabStage(5,['publish-combined-claim']).unlocks).toContain('overclaim-exposure'))
 it('makes the technical gate non-compensable',()=>{const r=resolveLabStage(6,['technical-gate','correct-dashboard','named-authorities','threshold-escalation']);expect(r.nonCompensableGatePreserved).toBe(true);expect(r.unlocks).toContain('controlled-interim-resources')})
 it('rejects commercial onboarding as technical approval',()=>expect(resolveLabStage(6,['commercial-equals-approved','correct-dashboard']).nonCompensableGatePreserved).toBe(false))
 it('requires constraints and conditions in option comparison',()=>expect(resolveLabStage(7,['preserve-noncompensable','conditional-sequence','monitoring-conditions','residual-uncertainty']).quality).toBe('strong'))
 it('does not compensate a failed gate with an aggregate score',()=>expect(resolveLabStage(7,['aggregate-score','conditional-sequence','monitoring-conditions','residual-uncertainty']).quality).toBe('needsReview'))
 it('enumerates every mandatory non-compensable constraint',()=>expect(NON_COMPENSABLE_CONSTRAINTS).toEqual(['safety','airworthiness','security','legalProhibitions','mandatoryTechnicalAuthority','mandatoryTechnicalQualification','severeRightsProhibitions']))
 it('requires all ten structured record elements',()=>{const lab=structuredClone(initialProgress.lab);LAB_RECORD_FIELDS.forEach(x=>lab.record[x]='documented');expect(labRecordComplete(lab)).toBe(true);delete lab.record.reviewTriggers;expect(labRecordComplete(lab)).toBe(false)})
 it('requires all eight connected stages',()=>{const lab=structuredClone(initialProgress.lab);for(let i=1;i<=8;i++)lab.stageStates[i]={};expect(labStagesComplete(lab)).toBe(true);delete lab.stageStates[4];expect(labStagesComplete(lab)).toBe(false)})
 it('requires all four reflective responses',()=>{const lab=structuredClone(initialProgress.lab);for(let i=1;i<=4;i++)lab.reviewAnswers[i]={completed:true};expect(labReviewComplete(lab)).toBe(true)})
 it('blocks course completion until every condition is met',()=>expect(labCompletionReady(initialProgress.lab)).toBe(false))
 it('personalizes warnings from learner consequences',()=>{const lab=structuredClone(initialProgress.lab);lab.unlockedEvidence=['safeguarding-warning','overclaim-exposure'];expect(qualitativeDebrief(lab).warnings).toHaveLength(3)})
})
describe('production content',()=>{
 it('loads all eight modules',()=>expect(Object.keys(moduleContent)).toEqual(['01','02','03','04','05','06','07','08']))
 it('preserves all 46 authored formative questions',()=>expect(Object.values(moduleContent).reduce((n,m)=>n+m.questions.length,0)).toBe(46))
 it('parses four answers and a valid correct answer for every question',()=>Object.values(moduleContent).flatMap(m=>m.questions).forEach(q=>{expect(q.a,q.id).toHaveLength(4);expect(q.q.length,q.id).toBeGreaterThan(8);expect(q.c,q.id).toBeGreaterThanOrEqual(0);expect(q.c,q.id).toBeLessThan(4);expect(q.r.length,q.id).toBeGreaterThan(4)}))
 it('matches the approved per-module question counts',()=>Object.entries(moduleContent).forEach(([id,m])=>expect(m.questions).toHaveLength(questionCounts[id])))
 it('implements all 39 approved visual explainers',()=>expect(Object.values(moduleContent).reduce((n,m)=>n+m.visuals.length,0)).toBe(39))
 it('keeps every activity and source register in the runtime',()=>Object.values(moduleContent).forEach(m=>{expect(m.activity).toContain('Interactive Activity');expect(m.sources).toContain('Source Traceability')}))
 it('gives every final reflective question a visible heading',()=>parseQuestions(finalReviewRaw,'09R').forEach(q=>expect(q.title).toMatch(/\S/)))
})
