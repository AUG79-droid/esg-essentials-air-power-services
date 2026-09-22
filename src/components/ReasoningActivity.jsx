import { useState } from 'react'
import Markdown from './Markdown'
import { useProgress } from '../state/ProgressContext'
import { useLanguage } from '../i18n/LanguageContext'

const evidence=['Boundary and affected parties','Data quality and uncertainty','Impact, dependency or rights risk','Authority, controls and escalation']
const evidenceEs=['Alcance y partes afectadas','Calidad de los datos e incertidumbre','Impacto, dependencia o riesgo para los derechos','Autoridad, controles y escalado']
const classifications=[['Established','Establecida'],['Partial / uncertain','Parcial / incierta'],['Material gap','Laguna material'],['Requires escalation','Requiere escalado']]
const decisions=[['Proceed with controls','Continuar con controles'],['Proceed conditionally','Continuar de forma condicionada'],['Pause and investigate','Pausar e investigar'],['Escalate before approval','Escalar antes de aprobar']]
export default function ReasoningActivity({content}){
 const {progress,completeActivity}=useProgress(); const {lang}=useLanguage(); const es=lang==='es',evidenceLabels=es?evidenceEs:evidence; const prior=progress.activities[content.id]; const [ratings,setRatings]=useState(prior?.ratings||{}); const [decision,setDecision]=useState(prior?.decision||''); const [condition,setCondition]=useState(prior?.condition||'')
 const classified=Object.keys(ratings).length, ready=classified===4&&decision&&condition.trim().length>=20
 const submit=e=>{e.preventDefault();if(ready)completeActivity(content.id,{ratings,decision,condition,completed:true})}
 return <div className="activity-production"><div className="activity-brief"><div className="eyebrow">{es?'RAZONAMIENTO APLICADO':'APPLIED REASONING'}</div><h2>{content.activityTitle}</h2><Markdown source={content.activity}/></div>
  <form className="evidence-workbench" onSubmit={submit}><h3>{es?'Construye tu registro de decisión':'Build your decision record'}</h3><p>{es?'Clasifica cada línea de evidencia. No existe el atajo de una puntuación única: tu recomendación debe mantener una condición.':'Classify every evidence line. There is no single-score shortcut: your recommendation must retain a condition.'}</p>
   {evidence.map((item,i)=><label className="evidence-row" key={item}><span><b>0{i+1}</b>{evidenceLabels[i]}</span><select aria-label={evidenceLabels[i]} value={ratings[i]||''} onChange={e=>setRatings({...ratings,[i]:e.target.value})}><option value="">{es?'Clasificar evidencia…':'Classify evidence…'}</option>{classifications.map(([value,label])=><option value={value} key={value}>{es?label:value}</option>)}</select></label>)}
   <label className="field-label">{es?'Decisión':'Decision'}<select value={decision} onChange={e=>setDecision(e.target.value)}><option value="">{es?'Elige una respuesta gobernada…':'Choose a governed response…'}</option>{decisions.map(([value,label])=><option value={value} key={value}>{es?label:value}</option>)}</select></label>
   <label className="field-label">{es?'Condición de evidencia':'Evidence condition'}<textarea value={condition} onChange={e=>setCondition(e.target.value)} placeholder={es?'Indica qué debe verificarse, quién debe hacerlo y cuándo debe revisarse.':'State what must be verified, by whom, and when it must be reviewed.'}/></label>
   <button className="button primary" disabled={!ready}>{prior?(es?'Actualizar registro de decisión':'Update decision record'):(es?'Completar actividad':'Complete activity')}</button>{!ready&&<small>{es?'Clasifica las cuatro líneas, elige una decisión y escribe una condición de al menos 20 caracteres.':'Classify all four lines, choose a decision and write a condition of at least 20 characters.'}</small>}
   {prior&&<div className="feedback positive" role="status"><strong>{es?'Registro de decisión guardado':'Decision record saved'}</strong><p>{es?'Tus clasificaciones de evidencia y tu condición explícita forman parte del registro de finalización de este módulo.':'Your evidence classifications and explicit condition are part of this module’s completion record.'}</p></div>}
  </form></div>
}
