import { Link, Navigate, useParams } from 'react-router-dom'
import m01 from '../../content/module-01/MODULE.md?raw'
import m05 from '../../content/module-05/MODULE.md?raw'
import m06 from '../../content/module-06/MODULE.md?raw'
import Markdown from '../components/Markdown'
import { SliceDiagram } from '../components/Diagrams'

const data={
 '01':{name:'Environmental Essentials',type:'environment',label:'ENVIRONMENTAL SYSTEMS',text:m01,scenario:'Repair, remanufacture or replace'},
 '05':{name:'Social Risk in Global Supply Chains',type:'social',label:'PEOPLE + VALUE CHAINS',text:m05,scenario:'Constrained electronics supply'},
 '06':{name:'Governance Essentials',type:'governance',label:'AUTHORITY + CONTROL',text:m06,scenario:'The green dashboard'}
}

export default function SliceModule(){
 const {id}=useParams()
 const d=data[id]
 if(!d)return <Navigate to="/modules"/>
 const intro=d.text.split('## Lesson 3')[0]
 const scenario=d.text.includes('## What this means')?d.text.split('## What this means')[1].split('## Myth vs reality')[0]:''
 const alt=id==='01'
  ?'Engineers assessing an aerospace structural component, repair evidence and material samples in a maintenance environment.'
  :id==='05'
   ?'A cross-functional team investigating multi-tier aerospace component evidence in a logistics assurance workspace.'
   :'A governance team reviewing control evidence and constructively challenging an aerospace programme decision.'
 const lead=id==='01'
  ?'Follow environmental dependencies and impacts across the full lifecycle.'
  :id==='05'
   ?'Investigate risk to people through evidence, relationships and purchasing decisions.'
   :'Turn objectives and risk into operating controls, evidence and accountable escalation.'

 return <div className="reader slice-reader">
  <aside className="lesson-nav">
   <Link to="/modules">← Module map</Link>
   <div className="reader-module"><span>MODULE {id}</span><strong>{d.name}</strong></div>
   <div className="slice-status">PHASE 5A-R<br/><b>REPRESENTATIVE SLICE</b></div>
  </aside>
  <article className="reader-content">
   <section className="slice-hero">
    <img src={'./images/module-'+id+'-hero.webp'} alt={alt}/>
    <div><div className="eyebrow">MODULE {id} · {d.label}</div><h1>{d.name}</h1><p>{lead}</p></div>
   </section>
   <div className="phase-note">This vertical slice proves the final content pattern. Remaining approved screens are deliberately deferred to Phase 5B.</div>
   <Markdown source={intro}/>
   <SliceDiagram type={d.type}/>
   <section className="scenario-block"><div className="eyebrow">AIR POWER SERVICES LEARNING SCENARIO</div><h2>{d.scenario}</h2><Markdown source={scenario}/></section>
   {id==='05'&&<div className="evidence-demo"><h2>Investigation workspace</h2><p>Evidence remains classified as known, unknown, indicator, allegation or verified harm. A passed audit is evidence with a boundary—not proof that harm is absent.</p><button className="button ghost">Open evidence tray</button></div>}
   {id==='06'&&<div className="authority-demo"><span>OBJECTIVE</span><i>→</i><span>RISK</span><i>→</i><span>CONTROL</span><i>→</i><span>EVIDENCE</span><i>→</i><span>ESCALATE / CLOSE</span></div>}
   <nav className="reader-controls"><span/><Link to="/modules">Back to module overview</Link><span/></nav>
  </article>
 </div>
}

