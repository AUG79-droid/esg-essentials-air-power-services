import { useState } from 'react'
import { resolveAttempt } from '../state/engines'
import { useProgress } from '../state/ProgressContext'

export default function ModuleAssessment({moduleId,questions}){
 const {progress,saveQuestion}=useProgress(); const [index,setIndex]=useState(0); const [choice,setChoice]=useState(null)
 const q=questions[index],saved=progress.questions[q.id]; const [local,setLocal]=useState(saved||null); const result=progress.questions[q.id]||local
 const submit=e=>{e.preventDefault();if(choice===null)return;const next={...resolveAttempt(result,choice,q.c),module:moduleId};setLocal(next);saveQuestion(q.id,next)}
 const change=i=>{setIndex(i);setChoice(null);setLocal(progress.questions[questions[i].id]||null)}
 return <section className="assessment" aria-labelledby="check-title"><div className="eyebrow">KNOWLEDGE CHECK · {index+1} / {questions.length}</div><h2 id="check-title">{q.title||`Question ${index+1}`}</h2><p className="question">{q.q}</p>
  <form onSubmit={submit}><fieldset disabled={result?.completed}><legend className="sr-only">Choose one answer</legend>{q.a.map((answer,i)=><label className={'answer '+(result?.reveal&&i===q.c?'correct':'')} key={answer}><input type="radio" name={q.id} checked={choice===i} onChange={()=>setChoice(i)}/><span><b>{String.fromCharCode(65+i)}</b>{answer}</span></label>)}</fieldset>{!result?.completed&&<button className="button primary" disabled={choice===null}>Submit response</button>}</form>
  {result&&<div role="status" className={'feedback '+(result.correct?'positive':'caution')}><strong>{result.correct?'Evidence aligned':'Review the reasoning'}</strong><p>{result.correct?q.r:result.reveal?`The correct response is ${String.fromCharCode(65+q.c)}. ${q.r}`:'This response misses part of the decision context. Review the evidence and try once more.'}</p>{!result.completed&&<button className="text-button" onClick={()=>setChoice(null)}>Retry question</button>}</div>}
  <div className="question-nav" aria-label="Question navigation">{questions.map((x,i)=><button type="button" key={x.id} className={(i===index?'current ':'')+(progress.questions[x.id]?.completed?'done':'')} onClick={()=>change(i)} aria-label={`Question ${i+1}`}>{i+1}</button>)}</div>
 </section>
}
