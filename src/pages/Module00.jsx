import { Link, Navigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import moduleTextEn from '../../content/module-00/MODULE.md?raw'
import moduleTextEs from '../../content-es/module-00/MODULE.md?raw'
import sourcesTextEn from '../../content/module-00/SOURCES.md?raw'
import sourcesTextEs from '../../content-es/module-00/SOURCES.md?raw'
import Markdown from '../components/Markdown'
import { ConnectedESG, GovernanceCascade } from '../components/Diagrams'
import ESGCompass from '../components/ESGCompass'
import Assessment from '../components/Assessment'
import { useProgress } from '../state/ProgressContext'
import { module00Ready } from '../state/engines'
import { useLanguage } from '../i18n/LanguageContext'

const views=['opening','theory','visuals','scenario','activity','check','close']
const metaEn={opening:['Orientation','Why ESG exists'],theory:['Core theory','Read the connected argument'],visuals:['Visual explainers','See relationships'],scenario:['Learning scenario','Apply the lens'],activity:['ESG Compass','Build a decision map'],check:['Knowledge check','Test reasoning'],close:['Module close','Consolidate and continue']}
const metaEs={opening:['Orientación','Por qué existe ESG'],theory:['Teoría básica','Comprende el argumento conectado'],visuals:['Explicaciones visuales','Observa las relaciones'],scenario:['Escenario de aprendizaje','Aplica la perspectiva'],activity:['ESG Compass','Construye un mapa de decisión'],check:['Comprobación de conocimientos','Pon a prueba el razonamiento'],close:['Cierre del módulo','Consolida y continúa']}

function between(source,start,end){const a=source.indexOf(start);if(a<0)return '';const from=a+start.length;const b=end?source.indexOf(end,from):-1;return source.slice(from,b<0?source.length:b)}
export default function Module00(){
 const {view}=useParams(); const {progress,visit,completeModule00}=useProgress(); const {lang}=useLanguage(); const es=lang==='es'; const index=views.indexOf(view)
 useEffect(()=>{if(index>=0&&!progress.visited['00:'+view])visit('00:'+view,'/module/00/'+view)},[view,index,visit,progress.visited])
 if(index<0)return <Navigate to="/module/00/opening"/>
 const meta=es?metaEs:metaEn; const [label,title]=meta[view]; const ready=module00Ready(progress)
 const moduleText=es?moduleTextEs:moduleTextEn, sourcesText=es?sourcesTextEs:sourcesTextEn
 const lessonMarker=es?'## Lección 1':'## Lesson 1'
 const scenarioMarker=es?'## Qué significa esto en Air Power Services':'## What this means in Air Power Services'
 const mythMarker=es?'## Mito frente a realidad':'## Myth vs reality'
 const lensMarker=es?'## Perspectiva de decisión':'## Decision lens'
 const closeMarker=es?'## Cierre del módulo':'## Module close'
 const opening=moduleText.slice(0,moduleText.indexOf(lessonMarker))
 const theory='## '+(es?'El argumento conectado':'The connected argument')+'\n'+between(moduleText,lessonMarker,scenarioMarker)
 const scenarioLead=between(moduleText,scenarioMarker,mythMarker)
 const myth='## '+(es?'Mito frente a realidad':'Myth vs reality')+'\n'+between(moduleText,mythMarker,lensMarker)
 const lens='## '+(es?'Perspectiva de decisión':'Decision lens')+'\n'+between(moduleText,lensMarker,closeMarker)
 const close='## '+(es?'Cierre del módulo':'Module close')+'\n'+between(moduleText,closeMarker)
 return <div className="reader"><aside className="lesson-nav"><Link to="/modules">← {es?'Mapa de módulos':'Module map'}</Link><div className="reader-module"><span>{es?'MÓDULO 00':'MODULE 00'}</span><strong>{es?'ESG: por qué existe':'ESG: Why It Exists'}</strong></div><nav aria-label={es?'Secciones del Módulo 00':'Module 00 sections'}>{views.map((v,i)=><Link className={(v===view?'active ':'')+(progress.visited['00:'+v]?'visited':'')} key={v} to={'/module/00/'+v}><b>{String(i+1).padStart(2,'0')}</b>{meta[v][0]}</Link>)}</nav></aside>
 <article className="reader-content"><header className="reader-head"><div><div className="eyebrow">{es?'MÓDULO 00':'MODULE 00'} · {label.toUpperCase()}</div><h1>{title}</h1></div><div className="section-meter"><span style={{width:((index+1)/views.length*100)+'%'}}/><small>{index+1} / {views.length}</small></div></header>
 {view==='opening'&&<><section className="module-hero editorial-hero"><img src="./images/module-00-hero.webp" alt={es?'Un equipo multidisciplinar del sector aeroespacial compara evidencias de ingeniería y opciones de materiales alrededor de una mesa digital de planificación.':'A multidisciplinary aerospace team comparing engineering evidence and material options around a digital planning table.'}/><div className="hero-overlay"><span>{es?'FUNDAMENTOS · MÓDULO 00':'FOUNDATION · MODULE 00'}</span><h2>{es?'ESG: por qué existe':'ESG: Why It Exists'}</h2><p>{es?'Comprende por qué la información ambiental, social y de gobernanza debe formar parte de las decisiones empresariales, no situarse al margen de ellas.':'Learn why environmental, social and governance information belongs inside business decisions—not beside them.'}</p><div className="hero-code">40 MIN <small>{es?'5 PREGUNTAS · 1 ACTIVIDAD':'5 QUESTIONS · 1 ACTIVITY'}</small></div></div></section><Markdown source={opening}/></>}
 {view==='theory'&&<Markdown source={theory}/>}
 {view==='visuals'&&<div className="visual-stack"><ConnectedESG/><GovernanceCascade/></div>}
 {view==='scenario'&&<div className="scenario-experience"><section className="scenario-feature"><img src="./images/module-00-hero.webp" alt={es?'Un equipo multidisciplinar del sector aeroespacial compara evidencias, consecuencias y opciones viables en un entorno de programa.':'A multidisciplinary aerospace team comparing evidence, consequences and feasible options in a programme environment.'} loading="lazy"/><div><div className="eyebrow">{es?'ESCENARIO DE APRENDIZAJE DE AIR POWER SERVICES':'AIR POWER SERVICES LEARNING SCENARIO'}</div><Markdown source={scenarioLead}/></div></section><section className="myth-reality"><div className="section-flag">{es?'MITO':'MYTH'} <span>{es?'frente a':'versus'}</span> {es?'REALIDAD':'REALITY'}</div><Markdown source={myth}/></section><section className="decision-lens"><div className="lens-icon" aria-hidden="true">◇</div><div><div className="eyebrow">{es?'ANTES DE DECIDIR…':'BEFORE YOU DECIDE…'}</div><Markdown source={lens}/></div></section></div>}
 {view==='activity'&&<ESGCompass/>}
 {view==='check'&&<Assessment/>}
 {view==='close'&&<><Markdown source={close}/><details className="source-drawer"><summary>{es?'Fuentes y lecturas adicionales':'Sources & further reading'}</summary><Markdown source={sourcesText}/></details><div className={'completion-box '+(ready?'ready':'')}><h2>{ready?(es?'Requisitos del módulo completados':'Module requirements complete'):(es?'Completa el aprendizaje requerido':'Complete the required learning')}</h2><p>{ready?(es?'Confirma la finalización para desbloquear el Módulo 01.':'Confirm completion to unlock Module 01.'):(es?'Visita cada sección, completa ESG Compass y resuelve las cinco preguntas.':'Visit each section, complete the ESG Compass and resolve all five questions.')}</p><button className="button primary" disabled={!ready||progress.completedModules.includes('00')} onClick={completeModule00}>{progress.completedModules.includes('00')?(es?'Módulo completado':'Module completed'):(es?'Completar Módulo 00':'Complete Module 00')}</button></div></>}
 <nav className="reader-controls" aria-label={es?'Navegación de pantalla':'Screen navigation'}><span>{index>0&&<Link className="button ghost" to={'/module/00/'+views[index-1]}>← {es?'Anterior':'Previous'}</Link>}</span><Link to="/modules">{es?'Volver al mapa de módulos':'Back to module overview'}</Link><span>{index<views.length-1&&<Link className="button primary" to={'/module/00/'+views[index+1]}>{es?'Siguiente':'Next'} →</Link>}</span></nav>
 </article></div>
}
