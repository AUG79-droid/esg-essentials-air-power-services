import { Link, Navigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import moduleText from '../../content/module-00/MODULE.md?raw'
import sourcesText from '../../content/module-00/SOURCES.md?raw'
import Markdown from '../components/Markdown'
import { ConnectedESG, GovernanceCascade } from '../components/Diagrams'
import ESGCompass from '../components/ESGCompass'
import Assessment from '../components/Assessment'
import { useProgress } from '../state/ProgressContext'
import { module00Ready } from '../state/engines'

const views=['opening','theory','visuals','scenario','activity','check','close']
const meta={opening:['Orientation','Why ESG exists'],theory:['Core theory','Read the connected argument'],visuals:['Visual explainers','See relationships'],scenario:['Learning scenario','Apply the lens'],activity:['ESG Compass','Build a decision map'],check:['Knowledge check','Test reasoning'],close:['Module close','Consolidate and continue']}
export default function Module00(){
 const {view}=useParams(); const {progress,visit,completeModule00}=useProgress(); const index=views.indexOf(view)
 useEffect(()=>{if(index>=0)visit('00:'+view,'/module/00/'+view)},[view])
 if(index<0)return <Navigate to="/module/00/opening"/>
 const [label,title]=meta[view]; const ready=module00Ready(progress)
 return <div className="reader"><aside className="lesson-nav"><Link to="/modules">← Module map</Link><div className="reader-module"><span>MODULE 00</span><strong>ESG: Why It Exists</strong></div><nav aria-label="Module 00 sections">{views.map((v,i)=><Link className={(v===view?'active ':'')+(progress.visited['00:'+v]?'visited':'')} key={v} to={'/module/00/'+v}><b>{String(i+1).padStart(2,'0')}</b>{meta[v][0]}</Link>)}</nav></aside>
 <article className="reader-content"><header className="reader-head"><div><div className="eyebrow">MODULE 00 · {label.toUpperCase()}</div><h1>{title}</h1></div><div className="section-meter"><span style={{width:((index+1)/views.length*100)+'%'}}/><small>{index+1} / {views.length}</small></div></header>
 {view==='opening'&&<><section className="module-hero editorial-hero"><img src="./images/module-00-hero.webp" alt="A multidisciplinary aerospace team comparing engineering evidence and material options around a digital planning table."/><div className="hero-overlay"><span>FOUNDATION · MODULE 00</span><h2>ESG: Why It Exists</h2><p>Learn why environmental, social and governance information belongs inside business decisions—not beside them.</p><div className="hero-code">40 MIN <small>5 QUESTIONS · 1 ACTIVITY</small></div></div></section><Markdown source={moduleText.split('## Lesson 1')[0]}/></>}
 {view==='theory'&&<Markdown source={'## The connected argument\n'+moduleText.split('## Lesson 1')[1].split('## What this means')[0]}/>}
 {view==='visuals'&&<div className="visual-stack"><ConnectedESG/><GovernanceCascade/></div>}
 {view==='scenario'&&<div className="scenario-experience"><section className="scenario-feature"><img src="./images/module-00-hero.webp" alt="A multidisciplinary aerospace team comparing evidence, consequences and feasible options in a programme environment." loading="lazy"/><div><div className="eyebrow">AIR POWER SERVICES LEARNING SCENARIO</div><Markdown source={moduleText.split('## What this means in Air Power Services')[1].split('## Myth vs reality')[0]}/></div></section><section className="myth-reality"><div className="section-flag">MYTH <span>versus</span> REALITY</div><Markdown source={'## Myth vs reality\n'+moduleText.split('## Myth vs reality')[1].split('## Decision lens')[0]}/></section><section className="decision-lens"><div className="lens-icon" aria-hidden="true">◇</div><div><div className="eyebrow">BEFORE YOU DECIDE…</div><Markdown source={'## Decision lens\n'+moduleText.split('## Decision lens')[1].split('## Module close')[0]}/></div></section></div>}
 {view==='activity'&&<ESGCompass/>}
 {view==='check'&&<Assessment/>}
 {view==='close'&&<><Markdown source={'## Module close\n'+moduleText.split('## Module close')[1]}/><details className="source-drawer"><summary>Sources &amp; further reading</summary><Markdown source={sourcesText}/></details><div className={'completion-box '+(ready?'ready':'')}><h2>{ready?'Module requirements complete':'Complete the required learning'}</h2><p>{ready?'Confirm completion to unlock Module 01.':'Visit each section, complete the ESG Compass and resolve all five questions.'}</p><button className="button primary" disabled={!ready||progress.completedModules.includes('00')} onClick={completeModule00}>{progress.completedModules.includes('00')?'Module completed':'Complete Module 00'}</button></div></>}
 <nav className="reader-controls" aria-label="Screen navigation"><span>{index>0&&<Link className="button ghost" to={'/module/00/'+views[index-1]}>← Previous</Link>}</span><Link to="/modules">Back to module overview</Link><span>{index<views.length-1&&<Link className="button primary" to={'/module/00/'+views[index+1]}>Next →</Link>}</span></nav>
 </article></div>
}
