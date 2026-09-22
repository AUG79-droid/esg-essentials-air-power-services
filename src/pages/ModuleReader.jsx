import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Markdown from '../components/Markdown'
import ModuleAssessment from '../components/ModuleAssessment'
import ReasoningActivity from '../components/ReasoningActivity'
import VisualGallery from '../components/VisualGallery'
import { getModules } from '../data/course'
import { getModuleContent, questionCounts, viewOrder } from '../data/moduleContent'
import { moduleReady, moduleState } from '../state/engines'
import { useProgress } from '../state/ProgressContext'
import { useLanguage } from '../i18n/LanguageContext'

const viewLabels={
 en:{opening:'Opening',theory:'Theory',visuals:'Visuals',scenario:'Scenario',activity:'Activity',check:'Knowledge check',close:'Close'},
 es:{opening:'Apertura',theory:'Teoría',visuals:'Visuales',scenario:'Escenario',activity:'Actividad',check:'Comprobación',close:'Cierre'}
}

export default function ModuleReader(){
 const {id,view='opening'}=useParams(); const {lang}=useLanguage(); const es=lang==='es'
 const content=getModuleContent(lang)[id],meta=getModules(lang).find(m=>m.id===id)
 const {progress,visit,completeModule}=useProgress()
 const state=meta?moduleState(id,progress):'LOCKED',index=viewOrder.indexOf(view),safeView=index<0?'opening':view
 useEffect(()=>{if(content&&state!=='LOCKED')visit(`${id}:${safeView}`,`/module/${id}/${safeView}`)},[id,safeView,content,state,visit])
 if(!content||!meta)return <Navigate to="/modules"/>; if(state==='LOCKED')return <Navigate to="/modules"/>
 const parts={opening:content.opening,theory:content.theory,scenario:content.scenario,close:content.close}
 const prev=index>0?viewOrder[index-1]:null,next=index<viewOrder.length-1?viewOrder[index+1]:null,labels=viewLabels[lang]
 return <div className="reader-page"><header className="reader-hero" style={{'--hero':`url(${content.hero})`}}><div><div className="eyebrow">{es?'MÓDULO':'MODULE'} {id} · {meta.pillar}</div><h1>{meta.title}</h1><p>{meta.minutes} {es?'minutos · módulo guiado en siete partes':'minutes · seven-part guided module'}</p></div></header>
  <nav className="reader-steps" aria-label={es?'Secciones del módulo':'Module sections'}>{viewOrder.map((v,i)=><Link key={v} className={v===safeView?'active':''} to={`/module/${id}/${v}`}><span>{i+1}</span>{labels[v]}</Link>)}</nav>
  <section className="reader-content">{parts[safeView]&&<Markdown source={parts[safeView]}/>} {safeView==='visuals'&&<><div className="section-intro"><div className="eyebrow">{es?'SISTEMAS CONCEPTUALES':'CONCEPT SYSTEMS'}</div><h2>{es?'Observa cómo se conecta la evidencia':'See how the evidence connects'}</h2><p>{es?'Cada explicación conserva la secuencia, el límite o la relación definidos en el registro visual aprobado.':'Each explainer preserves the sequence, boundary or relationship specified in the approved visual register.'}</p></div><VisualGallery items={content.visuals}/></>}{safeView==='activity'&&<ReasoningActivity content={content}/>} {safeView==='check'&&<ModuleAssessment moduleId={id} questions={content.questions}/>} {safeView==='close'&&<section className="source-panel"><div className="eyebrow">{es?'TRAZABILIDAD DE FUENTES':'SOURCE TRACEABILITY'}</div><Markdown source={content.sources}/><button className="button primary" disabled={!moduleReady(progress,id,questionCounts[id])} onClick={()=>completeModule(id,questionCounts[id])}>{es?'Completar módulo ':'Complete module '}{id}</button>{!moduleReady(progress,id,questionCounts[id])&&<p className="completion-note">{es?`Visita todas las secciones principales, completa la actividad aplicada y resuelve las ${questionCounts[id]} preguntas para desbloquear la finalización.`:`Visit every core section, complete the applied activity, and resolve all ${questionCounts[id]} questions to unlock completion.`}</p>}</section>}</section>
  <footer className="reader-footer">{prev?<Link to={`/module/${id}/${prev}`}>← {labels[prev]}</Link>:<Link to="/modules">← {es?'Mapa de módulos':'Module map'}</Link>}<span>{index+1} / {viewOrder.length}</span>{next?<Link to={`/module/${id}/${next}`}>{labels[next]} →</Link>:<Link to="/modules">{es?'Mapa de módulos':'Module map'} →</Link>}</footer>
 </div>
}
