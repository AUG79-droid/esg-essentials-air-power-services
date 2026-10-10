import { useState } from 'react'
import { useProgress } from '../state/ProgressContext'
import { useLanguage } from '../i18n/LanguageContext'

const copy={
 en:{
  eyebrow:'INTERACTIVE ACTIVITY · ESG COMPASS',title:'Build a defensible next step',intro:'Use the facts below to make a provisional recommendation. There is no hidden “sustainable supplier” answer: your job is to connect evidence, uncertainty and conditions.',
  snapshot:'Case snapshot',context:'Both suppliers passed the same technical and quality gates. Stock covers 11 weeks; the award meeting is in 10 days.',a:'SUPPLIER A',aFacts:'+8% unit price · 9-week delivery · 95% material-origin records · 24 months of workforce indicators · energy-intensity data not independently verified',b:'SUPPLIER B',bFacts:'−12% unit price · 5-week delivery · tier-one self-declaration · audit summary has no scope, date or sample · no worker-grievance information',
  stepsTitle:'What to do',steps:['Select at least four signals that must inform the decision.','Choose the most defensible next step—not a final verdict on the supplier.','Evaluate your map to reveal the reasoning standard.'],legend:'Step 1 · Select at least four decision signals',selected:'selected',route:'Step 2 · Choose a provisional route',placeholder:'Select the next step you would recommend',submit:'Evaluate my decision map',
  routes:{a:'Advance Supplier A conditionally; verify energy data and agree monitoring before award',pause:'Use the 10-day window to request comparable evidence from both suppliers before award',b:'Advance Supplier B conditionally only after the audit and sub-tier evidence gaps are closed',escalate:'Escalate before award because a potentially non-negotiable requirement cannot yet be verified'},
  feedback:'Reasoning standard met',feedbackBody:'A defensible recommendation keeps technical, cost and delivery evidence in view, treats unsupported claims as unknowns, names the conditions that must be met and assigns an owner and review date. The next step can differ, but uncertainty must not be silently converted into proof.',fiction:'Fictional learning scenario; not Airbus policy or an actual supplier decision.'
 },
 es:{
  eyebrow:'ACTIVIDAD INTERACTIVA · ESG COMPASS',title:'Construye un siguiente paso defendible',intro:'Utiliza los datos siguientes para formular una recomendación provisional. No hay una respuesta oculta sobre cuál es el «proveedor sostenible»: tu trabajo es conectar evidencia, incertidumbre y condiciones.',
  snapshot:'Resumen del caso',context:'Ambos proveedores han superado los mismos controles técnicos y de calidad. Las existencias cubren 11 semanas; la reunión de adjudicación es dentro de 10 días.',a:'PROVEEDOR A',aFacts:'precio +8% · entrega en 9 semanas · origen registrado para el 95% de los materiales · 24 meses de indicadores de plantilla · datos de intensidad energética sin verificación independiente',b:'PROVEEDOR B',bFacts:'precio −12% · entrega en 5 semanas · autodeclaración de primer nivel · resumen de auditoría sin alcance, fecha ni muestra · sin información sobre canales de reclamación',
  stepsTitle:'Qué tienes que hacer',steps:['Selecciona al menos cuatro señales que deban influir en la decisión.','Elige el siguiente paso más defendible, no un veredicto definitivo sobre el proveedor.','Evalúa el mapa para ver el criterio de razonamiento.'],legend:'Paso 1 · Selecciona al menos cuatro señales de decisión',selected:'seleccionadas',route:'Paso 2 · Elige una vía provisional',placeholder:'Selecciona el siguiente paso que recomendarías',submit:'Evaluar mi mapa de decisión',
  routes:{a:'Avanzar provisionalmente con A; verificar los datos energéticos y acordar el seguimiento antes de adjudicar',pause:'Utilizar los 10 días para pedir evidencia comparable a ambos proveedores antes de adjudicar',b:'Avanzar provisionalmente con B solo cuando se cierren las lagunas de auditoría y niveles inferiores',escalate:'Escalar antes de adjudicar porque aún no puede verificarse un requisito potencialmente no negociable'},
  feedback:'Criterio de razonamiento cumplido',feedbackBody:'Una recomendación defendible mantiene a la vista la evidencia técnica, de coste y de plazo; trata las afirmaciones sin respaldo como incógnitas; define las condiciones que deben cumplirse y asigna una persona responsable y una fecha de revisión. El siguiente paso puede variar, pero la incertidumbre no debe convertirse silenciosamente en prueba.',fiction:'Escenario ficticio de aprendizaje; no representa una política de Airbus ni una decisión real sobre proveedores.'
 }
}

const signals={
 en:[
  {id:'cost',lens:'COMMERCIAL',text:'Supplier B is 12% cheaper'},
  {id:'schedule',lens:'OPERATIONAL',text:'B delivers in 5 weeks; current stock covers 11'},
  {id:'materials',lens:'ENVIRONMENTAL',text:'A traces 95% of material mass'},
  {id:'energy',lens:'ENVIRONMENTAL',text:"A's energy-intensity data is not independently verified"},
  {id:'workforce',lens:'SOCIAL',text:'A provides 24 months of workforce indicators'},
  {id:'grievance',lens:'SOCIAL',text:'B provides no worker-grievance information'},
  {id:'audit',lens:'GOVERNANCE',text:"B's audit summary has no scope, date or sample"},
  {id:'owner',lens:'GOVERNANCE',text:'B names no owner or criteria for sub-tier approval'}
 ],
 es:[
  {id:'cost',lens:'COMERCIAL',text:'El proveedor B es un 12% más barato'},
  {id:'schedule',lens:'OPERATIVA',text:'B entrega en 5 semanas; las existencias cubren 11'},
  {id:'materials',lens:'AMBIENTAL',text:'A traza el 95% de la masa de los materiales'},
  {id:'energy',lens:'AMBIENTAL',text:'Los datos de intensidad energética de A no tienen verificación independiente'},
  {id:'workforce',lens:'SOCIAL',text:'A aporta 24 meses de indicadores de plantilla'},
  {id:'grievance',lens:'SOCIAL',text:'B no aporta información sobre canales de reclamación'},
  {id:'audit',lens:'GOBERNANZA',text:'El resumen de auditoría de B no indica alcance, fecha ni muestra'},
  {id:'owner',lens:'GOBERNANZA',text:'B no identifica responsable ni criterios de aprobación de niveles inferiores'}
 ]
}

export default function ESGCompass(){
 const {progress,completeActivity}=useProgress(); const {lang}=useLanguage(); const es=lang==='es'; const c=es?copy.es:copy.en; const items=es?signals.es:signals.en
 const [selected,setSelected]=useState([]); const [recommendation,setRecommendation]=useState(''); const done=progress.activities['00']
 const toggle=id=>setSelected(current=>current.includes(id)?current.filter(item=>item!==id):[...current,id])
 const submit=event=>{event.preventDefault();if(selected.length>=4&&recommendation)completeActivity('00')}
 return <section className="activity-panel compass-panel">
  <div className="eyebrow">{c.eyebrow}</div><h2>{c.title}</h2><p className="activity-intro">{c.intro}</p>
  <div className="case-snapshot"><h3>{c.snapshot}</h3><p>{c.context}</p><div className="supplier-compare"><article><strong>{c.a}</strong><p>{c.aFacts}</p></article><article><strong>{c.b}</strong><p>{c.bFacts}</p></article></div></div>
  <div className="activity-steps"><h3>{c.stepsTitle}</h3><ol>{c.steps.map(step=><li key={step}>{step}</li>)}</ol></div>
  <form onSubmit={submit}><fieldset><legend>{c.legend}</legend><div className="selection-count" aria-live="polite"><strong>{selected.length}</strong> / 4 {c.selected}</div><div className="signal-grid compass-signals">{items.map(item=><label className="signal" key={item.id}><input type="checkbox" checked={selected.includes(item.id)} onChange={()=>toggle(item.id)}/><span><small>{item.lens}</small>{item.text}</span></label>)}</div></fieldset>
  <label className="select-label">{c.route}<select value={recommendation} onChange={event=>setRecommendation(event.target.value)}><option value="">{c.placeholder}</option>{Object.entries(c.routes).map(([value,label])=><option value={value} key={value}>{label}</option>)}</select></label>
  <button className="button primary" disabled={selected.length<4||!recommendation}>{c.submit}</button></form>
  {done&&<div className="feedback positive" role="status"><strong>{c.feedback}</strong><p>{c.feedbackBody}</p></div>}
  <p className="scenario-disclaimer">{c.fiction}</p>
 </section>
}
