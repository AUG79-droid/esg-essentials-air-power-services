export const STORAGE_KEY='aps-esg-essentials-v1'
export const initialProgress={
 version:1,lastRoute:'/',currentModule:'00',completedModules:[],courseCompleted:false,
 visited:{},activities:{},questions:{},lab:{stage:1,stageStates:{},unlockedEvidence:[],dimensions:{},record:{},debriefReviewed:false,reviewAnswers:{},reviewCompleted:false}
}
export function sanitizeProgress(value){
 if(!value || value.version!==1) return structuredClone(initialProgress)
 const normalized={...structuredClone(initialProgress),...value,visited:value.visited||{},activities:value.activities||{},questions:value.questions||{},lab:{...initialProgress.lab,...(value.lab||{})}}
 const current=Number(normalized.currentModule),previous=String(current-1).padStart(2,'0')
 if(current>0&&normalized.completedModules.includes(previous)&&normalized.lastRoute===`/module/${previous}/close`) normalized.lastRoute=normalized.currentModule==='09'?'/lab/opening':`/module/${normalized.currentModule}/opening`
 return normalized
}
export function moduleState(id,p){
 if(p.completedModules.includes(id)) return 'COMPLETED'
 if(id===p.currentModule) return Object.keys(p.visited).some(k=>k.startsWith(id+':'))?'IN PROGRESS':'AVAILABLE'
 return Number(id)<Number(p.currentModule)?'AVAILABLE':'LOCKED'
}
export function module00Ready(p,totalQuestions=5){
 const resolved=Object.values(p.questions).filter(q=>q.module==='00'&&q.completed).length
 return Boolean(p.activities['00']) && resolved===totalQuestions && Boolean(p.visited['00:close'])
}
export const CORE_VIEWS=['opening','theory','visuals','scenario','activity','check','close']
export function moduleReady(p,id,totalQuestions){
 const resolved=Object.values(p.questions).filter(q=>q.module===id&&q.completed).length
 const activity=Boolean(p.activities[id]?.completed||p.activities[id]===true)
 return activity&&resolved===totalQuestions&&CORE_VIEWS.every(view=>Boolean(p.visited[`${id}:${view}`]))
}
export function resolveAttempt(previous,choice,correctIndex){
 const attempts=(previous?.attempts||0)+1
 const correct=choice===correctIndex
 return {attempts,choice,correct,completed:correct||attempts>=2,reveal:!correct&&attempts>=2}
}
export function resolveLabStage(stage,answers){
 if(stage===1){
  const strong=answers.includes('qualification')&&answers.includes('comparison')
  return {quality:strong?'strong':'needsReview',unlocks:strong?['authority-distinction']:[],dimension:{governanceDiscipline:strong?'developing':'needsReview'}}
 }
 if(stage===2){
  const strong=answers.includes('multi-tier')&&answers.includes('rights-holders')
  return {quality:strong?'strong':'developing',unlocks:strong?['affected-party-evidence']:[],dimension:{systemsThinking:strong?'strong':'developing'}}
 }
 if(stage===3){
  const strong=answers.includes('treatment-waste')&&answers.includes('transport')
  return {quality:strong?'strong':'needsReview',unlocks:strong?['process-disposal-data','logistics-scenario']:[],dimension:{lifecycleThinking:strong?'strong':'needsReview',riskRecognition:strong?'developing':'needsReview'}}
 }
 if(stage===4){
  const safeguards=answers.includes('protected-inquiry')&&answers.includes('recruiter-payroll')
  const calibrated=answers.includes('evidence-categories')&&answers.includes('buyer-contribution')
  const strong=safeguards&&calibrated&&answers.includes('proportionate-escalation')&&!answers.includes('unsafe-interviews')
  return {quality:strong?'strong':safeguards?'developing':'needsReview',unlocks:[...(safeguards?['protected-worker-evidence','recruiter-payroll-records']:[]),...(calibrated?['buyer-schedule-contribution']:[]),...(answers.includes('unsafe-interviews')?['safeguarding-warning']:[])],dimension:{evidenceQuality:strong?'strong':safeguards?'developing':'needsReview',stakeholderRightsHolderAwareness:safeguards?'strong':'needsReview',riskRecognition:calibrated?'strong':'developing',escalationQuality:answers.includes('proportionate-escalation')?'strong':'developing'}}
 }
 if(stage===5){
  const bounded=answers.includes('bounded-internal-claim')&&answers.includes('no-external-responsible-claim')
  const provenance=answers.includes('provenance-chain')&&answers.includes('model-not-outcome')
  const strong=bounded&&provenance&&!answers.includes('publish-combined-claim')
  return {quality:strong?'strong':bounded?'developing':'needsReview',unlocks:[...(provenance?['evidence-provenance-map','model-assumption-register']:[]),...(strong?['calibrated-claim']:[]),...(answers.includes('publish-combined-claim')?['overclaim-exposure']:[])],dimension:{evidenceQuality:provenance?'strong':'developing',uncertaintyManagement:bounded?'strong':'needsReview',decisionTraceability:strong?'developing':'needsReview'}}
 }
 if(stage===6){
  const gate=answers.includes('technical-gate')&&!answers.includes('commercial-equals-approved')
  const governed=answers.includes('correct-dashboard')&&answers.includes('named-authorities')&&answers.includes('threshold-escalation')
  const strong=gate&&governed
  return {quality:strong?'strong':gate?'developing':'needsReview',unlocks:[...(strong?['controlled-interim-resources','verified-authority-map']:[]),...(answers.includes('correct-dashboard')?['corrected-status-dashboard']:[])],nonCompensableGatePreserved:gate,dimension:{governanceDiscipline:gate?'strong':'needsReview',escalationQuality:governed?'strong':'developing',decisionTraceability:answers.includes('named-authorities')?'strong':'developing'}}
 }
 if(stage===7){
  const gate=answers.includes('preserve-noncompensable')&&!answers.includes('aggregate-score')
  const conditional=answers.includes('conditional-sequence')&&answers.includes('residual-uncertainty')&&answers.includes('monitoring-conditions')
  const strong=gate&&conditional
  return {quality:strong?'strong':gate?'developing':'needsReview',unlocks:strong?['conditional-option-sequence','monitoring-conditions']:[],nonCompensableGatePreserved:gate,dimension:{systemsThinking:conditional?'strong':'developing',lifecycleThinking:answers.includes('lifecycle-comparison')?'strong':'developing',uncertaintyManagement:answers.includes('residual-uncertainty')?'strong':'needsReview',governanceDiscipline:gate?'strong':'needsReview'}}
 }
 const recordFields=['objective-authority','options-counterfactual','evidence-sources','affected-parties','mandatory-constraints','assumptions-uncertainty','decision-conditions','owners-thresholds','escalation-corrective','review-triggers']
 const complete=recordFields.every(field=>answers.includes(field))
 const gate=answers.includes('mandatory-constraints')
 return {quality:complete&&gate?'strong':answers.length>=7?'developing':'needsReview',unlocks:complete?['traceable-decision-record']:[],nonCompensableGatePreserved:gate,dimension:{decisionTraceability:complete?'strong':answers.length>=7?'developing':'needsReview',evidenceQuality:answers.includes('evidence-sources')?'strong':'developing',governanceDiscipline:gate?'strong':'needsReview'}}
}

export const LAB_DIMENSIONS={
 evidenceQuality:'Evidence quality',systemsThinking:'Systems thinking',riskRecognition:'Risk recognition',stakeholderRightsHolderAwareness:'Stakeholder / rights-holder awareness',governanceDiscipline:'Governance discipline',uncertaintyManagement:'Uncertainty management',escalationQuality:'Escalation quality',lifecycleThinking:'Lifecycle thinking',decisionTraceability:'Decision traceability'
}
export const NON_COMPENSABLE_CONSTRAINTS=['safety','airworthiness','security','legalProhibitions','mandatoryTechnicalAuthority','mandatoryTechnicalQualification','severeRightsProhibitions']
export const LAB_RECORD_FIELDS=['objectiveAuthority','optionsCounterfactual','evidenceSources','affectedParties','mandatoryConstraints','assumptionsUncertainty','decisionConditions','ownersThresholds','escalationCorrective','reviewTriggers']
export function labStagesComplete(lab){return [1,2,3,4,5,6,7,8].every(stage=>Boolean(lab.stageStates?.[stage]))}
export function labRecordComplete(lab){return LAB_RECORD_FIELDS.every(field=>Boolean(lab.record?.[field]?.trim()))}
export function labReviewComplete(lab){return Object.values(lab.reviewAnswers||{}).filter(x=>x?.completed).length===4}
export function labCompletionReady(lab){return labStagesComplete(lab)&&labRecordComplete(lab)&&lab.debriefReviewed&&labReviewComplete(lab)}
export function qualitativeDebrief(lab){
 const dimensions=Object.fromEntries(Object.keys(LAB_DIMENSIONS).map(key=>[key,lab.dimensions?.[key]||'needsReview']))
 const strong=Object.entries(dimensions).filter(([,value])=>value==='strong').map(([key])=>LAB_DIMENSIONS[key])
 const focus=Object.entries(dimensions).filter(([,value])=>value!=='strong').map(([key])=>LAB_DIMENSIONS[key])
 const warnings=[]
 if(lab.unlockedEvidence?.includes('safeguarding-warning')) warnings.push('An unsafe interview route weakened evidence reliability and requires a protected re-inquiry.')
 if(lab.unlockedEvidence?.includes('overclaim-exposure')) warnings.push('The proposed external claim exceeded the available provenance and must be narrowed or withheld.')
 if(!lab.stageStates?.[6]?.result?.nonCompensableGatePreserved) warnings.push('Commercial onboarding was allowed to blur the mandatory technical authority gate.')
 return {dimensions,strong,focus,warnings,summary:strong.length>=7?'Your record consistently keeps evidence, affected people, lifecycle effects and authority visible.':strong.length>=4?'Your reasoning is broadly integrated, with specific controls still needing sharper evidence or ownership.':'The decision record needs stronger boundaries, protected evidence, mandatory authority and monitoring conditions.'}
}
