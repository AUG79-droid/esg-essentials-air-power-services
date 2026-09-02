export function splitModule(source){
 const lesson=source.search(/^## Lesson 1/m), applied=source.search(/^## What this means/m), close=source.search(/^## Module close/m)
 return {opening:source.slice(0,lesson),theory:source.slice(lesson,applied),scenario:source.slice(applied,close),close:source.slice(close)}
}

export function parseQuestions(source,id){
 return source.split(/^## Question /m).slice(1).map((block,index)=>{
  const lines=block.trim().split(/\r?\n/), heading=lines.shift().trim()
  const correctMatch=block.match(/\*\*Correct(?: answer)?:\s*([A-D])\.\*\*\s*([\s\S]*)$/m)
  const before=correctMatch?block.slice(0,correctMatch.index):block
  let prompt='',answers=[]
  const separate=[...before.matchAll(/^([A-D])\.\s*(.+?)\s*$/gm)]
  if(separate.length===4){
   const first=separate[0].index; prompt=before.slice(before.indexOf('\n')+1,first).trim(); answers=separate.map(x=>x[2].replace(/\s{2,}$/,'').trim())
  }else{
   const body=before.slice(before.indexOf('\n')+1).trim(),start=body.search(/\sA:\s/)
   if(start>=0){prompt=body.slice(0,start).trim();const optionText=body.slice(start+1);answers=[...optionText.matchAll(/(?:^|\s)([A-D]):\s*([\s\S]*?)(?=\s*[A-D]:\s*|$)/g)].map(x=>x[2].trim().replace(/[.;]$/,''))}
  }
  return {id:`M${id}-Q${String(index+1).padStart(2,'0')}`,title:heading.replace(/^\d+\s*[—-]?\s*/,'')||`Question ${index+1}`,q:prompt,a:answers,c:correctMatch?correctMatch[1].charCodeAt(0)-65:0,r:correctMatch?.[2]?.trim()||''}
 })
}

export function parseVisuals(source){
 return source.split(/^## Visual \d+ — /m).slice(1).map(block=>{
  const [title,...rest]=block.trim().split(/\r?\n/); const labels=rest.join('\n').replace(/\*\*/g,'').split(/(?:→|↔|\n- |\n\d+\. )/).map(x=>x.replace(/^[^:]+:\s*/, '').trim()).filter(x=>x&&x.length<100).slice(0,6)
  return {title,labels:labels.length>2?labels:['Evidence','Decision','Action','Review']}
 })
}
