import { useEffect, useMemo, useState } from 'react'
import Markdown from './Markdown'

const lessonMeta={
 es:[
  {short:'Clima y exposición',time:'8 min',summary:'Comprende cómo un peligro climático se convierte —o no— en un riesgo para personas, activos y operaciones.',question:'¿Qué combinación de peligro, exposición y vulnerabilidad puede cambiar realmente una decisión?'},
  {short:'Emisiones',time:'7 min',summary:'Aprende qué describen los Alcances 1, 2 y 3 y por qué un total sin límites ni método puede inducir a error.',question:'¿Podrías explicar qué incluye la cifra, qué excluye y cómo se calculó?'},
  {short:'Recursos naturales',time:'6 min',summary:'Distingue lo que una actividad necesita de la naturaleza de los cambios que provoca en ella.',question:'¿Dónde existe una dependencia y dónde existe un impacto en la misma decisión?'},
  {short:'Energía',time:'5 min',summary:'Compara sistemas energéticos sin convertir «renovable» o «fósil» en respuestas automáticas.',question:'¿Qué opción funciona dentro de las restricciones operativas y qué cargas desplaza?'},
  {short:'Naturaleza',time:'8 min',summary:'Utiliza ubicación, dependencias e impactos para detectar riesgos que una cifra global no muestra.',question:'¿Qué cambia cuando sitúas la actividad en una cuenca, ecosistema o cadena de suministro concreta?'},
  {short:'Contaminación',time:'8 min',summary:'Sigue la cadena desde la fuente y la liberación hasta el receptor, la consecuencia y el control.',question:'¿Puede eliminarse el peligro o debe controlarse la exposición con una solución cualificada?'},
  {short:'Circularidad',time:'9 min',summary:'Compara reparar, reutilizar, remanufacturar, reciclar y sustituir mediante pensamiento de ciclo de vida.',question:'¿La mejora conserva valor o solo desplaza la carga a otra fase del ciclo de vida?'},
  {short:'Riesgo empresarial',time:'5 min',summary:'Conecta condiciones ambientales con coste, disponibilidad, cumplimiento, resiliencia e innovación.',question:'¿Por qué vía concreta llegaría este asunto ambiental a los objetivos de la organización?'}
 ],
 en:[
  {short:'Climate exposure',time:'8 min',summary:'Understand how a climate hazard becomes—or does not become—a risk to people, assets and operations.',question:'Which combination of hazard, exposure and vulnerability can actually change a decision?'},
  {short:'Emissions',time:'7 min',summary:'Learn what Scopes 1, 2 and 3 describe and why a total without boundaries or methods can mislead.',question:'Could you explain what the number includes, excludes and how it was calculated?'},
  {short:'Natural resources',time:'6 min',summary:'Separate what an activity needs from nature from the changes it causes to nature.',question:'Where does the same decision create a dependency and an impact?'},
  {short:'Energy',time:'5 min',summary:'Compare energy systems without turning “renewable” or “fossil” into automatic answers.',question:'Which option works within operational constraints, and which burdens does it shift?'},
  {short:'Nature',time:'8 min',summary:'Use location, dependencies and impacts to reveal risks that a global total cannot show.',question:'What changes when the activity is placed in a specific basin, ecosystem or supply chain?'},
  {short:'Pollution',time:'8 min',summary:'Follow the chain from source and release to receptor, consequence and control.',question:'Can the hazard be removed, or must exposure be controlled with a qualified solution?'},
  {short:'Circularity',time:'9 min',summary:'Compare repair, reuse, remanufacture, recycling and replacement through life-cycle thinking.',question:'Does the improvement preserve value, or merely shift the burden to another life-cycle stage?'},
  {short:'Business risk',time:'5 min',summary:'Connect environmental conditions to cost, availability, compliance, resilience and innovation.',question:'Through which concrete pathway would this environmental issue reach organizational objectives?'}
 ]
}

function splitLessons(source){
 const matches=[...source.matchAll(/^## (?:Lesson|Lección) \d+ — .+$/gm)]
 return matches.map((match,index)=>{
  const end=matches[index+1]?.index??source.length
  const block=source.slice(match.index,end).trim()
  const newline=block.indexOf('\n')
  return {title:match[0].replace(/^## /,''),body:block.slice(newline+1).trim()}
 })
}

export default function GuidedTheory({source,lang}){
 const es=lang==='es'; const lessons=useMemo(()=>splitLessons(source),[source]); const meta=es?lessonMeta.es:lessonMeta.en; const [active,setActive]=useState(0)
 useEffect(()=>setActive(0),[lang,source])
 const current=lessons[active],currentMeta=meta[active]
 if(!current)return <Markdown source={source}/>
 const choose=index=>{setActive(index);window.requestAnimationFrame(()=>document.querySelector('.guided-lesson')?.scrollIntoView({behavior:'smooth',block:'start'}))}
 return <div className="guided-theory">
  <header className="theory-route-intro"><div className="eyebrow">{es?'RUTA GUIADA · 8 IDEAS CLAVE':'GUIDED PATH · 8 KEY IDEAS'}</div><h2>{es?'Aprende por capas, no de golpe':'Learn in layers, not all at once'}</h2><p>{es?'Elige un bloque y concéntrate solo en esa idea. El contenido técnico se conserva, pero puedes recorrerlo en sesiones breves y volver a cualquier concepto cuando lo necesites.':'Choose a block and focus on one idea at a time. The technical content is preserved, but you can work through it in short sessions and return to any concept when needed.'}</p></header>
  <nav className="theory-topic-grid" aria-label={es?'Temas de la teoría ambiental':'Environmental theory topics'}>{lessons.map((lesson,index)=><button type="button" key={lesson.title} className={index===active?'active':''} aria-current={index===active?'step':undefined} onClick={()=>choose(index)}><span>{String(index+1).padStart(2,'0')}</span><strong>{meta[index]?.short??lesson.title}</strong><small>{meta[index]?.time}</small></button>)}</nav>
  <div className="theory-progress" aria-label={es?`Bloque ${active+1} de ${lessons.length}`:`Block ${active+1} of ${lessons.length}`}><span style={{width:`${(active+1)/lessons.length*100}%`}}/><p>{es?'BLOQUE':'BLOCK'} {active+1} / {lessons.length} · {currentMeta?.time}</p></div>
  <article className="guided-lesson" tabIndex="-1">
   <header><div><div className="eyebrow">{es?'CONCEPTO EN FOCO':'CONCEPT IN FOCUS'}</div><h2>{current.title.replace(/^(?:Lección|Lesson) \d+ — /,'')}</h2><p>{currentMeta?.summary}</p></div><div className="lesson-number" aria-hidden="true">{String(active+1).padStart(2,'0')}</div></header>
   <aside className="guiding-question"><span>{es?'PREGUNTA GUÍA':'GUIDING QUESTION'}</span><strong>{currentMeta?.question}</strong></aside>
   <Markdown source={current.body} className="lesson-prose"/>
   <div className="lesson-checkpoint"><div><span>{es?'PAUSA DE ASIMILACIÓN':'LEARNING PAUSE'}</span><strong>{es?'Antes de avanzar, intenta responder la pregunta guía con un ejemplo de tu trabajo.':'Before moving on, answer the guiding question with an example from your work.'}</strong></div><p>{es?'No necesitas escribir una respuesta. Si aún no puedes explicarla con tus propias palabras, repasa los términos destacados de este bloque.':'You do not need to submit an answer. If you cannot yet explain it in your own words, revisit the highlighted terms in this block.'}</p></div>
   <nav className="lesson-pager" aria-label={es?'Navegación entre bloques teóricos':'Theory block navigation'}><button type="button" className="button ghost" disabled={active===0} onClick={()=>choose(active-1)}>← {es?'Bloque anterior':'Previous block'}</button><button type="button" className="button primary" disabled={active===lessons.length-1} onClick={()=>choose(active+1)}>{es?'Siguiente bloque':'Next block'} →</button></nav>
  </article>
 </div>
}
