import { useState } from 'react'
import { useProgress } from '../state/ProgressContext'
const signals=['Limited sub-tier evidence','Lowest price','Short lead time','Material traceability','Workforce information','Control ownership']
export default function ESGCompass(){
 const {progress,completeActivity}=useProgress(); const [selected,setSelected]=useState([]); const [recommendation,setRecommendation]=useState(''); const done=progress.activities['00']
 const toggle=x=>setSelected(s=>s.includes(x)?s.filter(y=>y!==x):[...s,x])
 const submit=e=>{e.preventDefault();if(selected.length>=4&&recommendation)completeActivity('00')}
 return <section className="activity-panel"><div className="eyebrow">INTERACTIVE ACTIVITY · ESG COMPASS</div><h2>Build the decision map</h2><p>Compare evidence across environmental, social, governance and operational lenses before choosing a path. This fictional learning scenario is not an actual supplier decision.</p>
 <form onSubmit={submit}><fieldset><legend>Select at least four signals that require connection</legend><div className="signal-grid">{signals.map(x=><label className="signal" key={x}><input type="checkbox" checked={selected.includes(x)} onChange={()=>toggle(x)}/><span>{x}</span></label>)}</div></fieldset>
 <label className="select-label">Initial recommendation<select value={recommendation} onChange={e=>setRecommendation(e.target.value)}><option value="">Select a conditional path</option><option>Choose North with evidence conditions</option><option>Choose East with monitoring conditions</option><option>Retain current supplier with corrective plan</option><option>Defer and escalate material uncertainty</option></select></label>
 <button className="button primary" disabled={selected.length<4||!recommendation}>Evaluate decision map</button></form>
 {done&&<div className="feedback positive"><strong>Connected reasoning established</strong><p>A defensible recommendation states the objective, evidence, uncertainty, conditions and accountable owner. Different paths may be reasonable when non-negotiable requirements are respected.</p></div>}</section>
}

