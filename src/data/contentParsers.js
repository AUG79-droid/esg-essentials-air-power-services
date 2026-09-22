const sectionIndex=(source,patterns)=>{
 for(const pattern of patterns){const match=source.match(pattern);if(match)return match.index}
 return -1
}

export function splitModule(source){
 const lesson=sectionIndex(source,[/^## Lesson 1\b/m,/^## Lección 1\b/m])
 const applied=sectionIndex(source,[/^## What this means\b/m,/^## Qué significa esto\b/m])
 const close=sectionIndex(source,[/^## Module close\b/m,/^## Cierre del módulo\b/m])
 if(lesson<0||applied<0||close<0||!(lesson<applied&&applied<close))throw new Error('Module content is missing bilingual section headings or has them out of order')
 return {opening:source.slice(0,lesson),theory:source.slice(lesson,applied),scenario:source.slice(applied,close),close:source.slice(close)}
}

export function parseQuestions(source,id){
 return source.split(/^## (?:Question|Pregunta)\s+/m).slice(1).map((block,index)=>{
  const lines=block.trim().split(/\r?\n/),heading=lines.shift().trim()
  const correctMatch=block.match(/\*\*(?:Correct(?: answer)?|Respuesta correcta):\s*([A-D])\.\*\*\s*([\s\S]*)$/m)
  const before=correctMatch?block.slice(0,correctMatch.index):block
  let prompt='',answers=[]
  const separate=[...before.matchAll(/^([A-D])\.\s*(.+?)\s*$/gm)]
  if(separate.length===4){
   const first=separate[0].index; prompt=before.slice(before.indexOf('\n')+1,first).trim(); answers=separate.map(x=>x[2].replace(/\s{2,}$/,'').trim())
  }else{
   const body=before.slice(before.indexOf('\n')+1).trim(),start=body.search(/\sA:\s/)
   if(start>=0){prompt=body.slice(0,start).trim();const optionText=body.slice(start+1);answers=[...optionText.matchAll(/(?:^|\s)([A-D]):\s*([\s\S]*?)(?=\s*[A-D]:\s*|$)/g)].map(x=>x[2].trim().replace(/[.;]$/,''))}
  }
  return {id:`M${id}-Q${String(index+1).padStart(2,'0')}`,title:heading.replace(/^\d+\s*[—-]?\s*/,'')||`${source.includes('## Pregunta')?'Pregunta':'Question'} ${index+1}`,q:prompt,a:answers,c:correctMatch?correctMatch[1].charCodeAt(0)-65:0,r:correctMatch?.[2]?.trim()||''}
 })
}

export function parseVisuals(source){
 return source.split(/^## Visual \d+ — /m).slice(1).map(block=>{
  const [title,...rest]=block.trim().split(/\r?\n/); const labels=rest.join('\n').replace(/\*\*/g,'').split(/(?:→|↔|\n- |\n\d+\. )/).map(x=>x.replace(/^[^:]+:\s*/, '').trim()).filter(x=>x&&x.length<100).slice(0,6)
  const fallback=source.includes('Objetivo:')?['Evidencia','Decisión','Acción','Revisión']:['Evidence','Decision','Action','Review']
  return {title,labels:labels.length>2?labels:fallback}
 })
}
