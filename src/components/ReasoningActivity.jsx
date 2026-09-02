import { useState } from 'react'
import Markdown from './Markdown'
import { useProgress } from '../state/ProgressContext'

const evidence=['Boundary and affected parties','Data quality and uncertainty','Impact, dependency or rights risk','Authority, controls and escalation']
export default function ReasoningActivity({content}){
 const {progress,completeActivity}=useProgress(); const prior=progress.activities[content.id]; const [ratings,setRatings]=useState(prior?.ratings||{}); const [decision,setDecision]=useState(prior?.decision||''); const [condition,setCondition]=useState(prior?.condition||'')
 const classified=Object.keys(ratings).length, ready=classified===4&&decision&&condition.trim().length>=20
 const submit=e=>{e.preventDefault();if(ready)completeActivity(content.id,{ratings,decision,condition,completed:true})}
 return <div className="activity-production"><div className="activity-brief"><div className="eyebrow">APPLIED REASONING</div><h2>{content.activityTitle}</h2><Markdown source={content.activity}/></div>
  <form className="evidence-workbench" onSubmit={submit}><h3>Build your decision record</h3><p>Classify every evidence line. There is no single-score shortcut: your recommendation must retain a condition.</p>
   {evidence.map((item,i)=><label className="evidence-row" key={item}><span><b>0{i+1}</b>{item}</span><select value={ratings[i]||''} onChange={e=>setRatings({...ratings,[i]:e.target.value})}><option value="">Classify evidence…</option><option>Established</option><option>Partial / uncertain</option><option>Material gap</option><option>Requires escalation</option></select></label>)}
   <label className="field-label">Decision<select value={decision} onChange={e=>setDecision(e.target.value)}><option value="">Choose a governed response…</option><option>Proceed with controls</option><option>Proceed conditionally</option><option>Pause and investigate</option><option>Escalate before approval</option></select></label>
   <label className="field-label">Evidence condition<textarea value={condition} onChange={e=>setCondition(e.target.value)} placeholder="State what must be verified, by whom, and when it must be reviewed."/></label>
   <button className="button primary" disabled={!ready}>{prior?'Update decision record':'Complete activity'}</button>{!ready&&<small>Classify all four lines, choose a decision and write a condition of at least 20 characters.</small>}
   {prior&&<div className="feedback positive"><strong>Decision record saved</strong><p>Your evidence classifications and explicit condition are part of this module’s completion record.</p></div>}
  </form></div>
}
