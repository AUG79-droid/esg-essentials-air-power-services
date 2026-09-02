import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { initialProgress, labCompletionReady, module00Ready, moduleReady, sanitizeProgress, STORAGE_KEY } from './engines'

const Context=createContext(null)
export function ProgressProvider({children}){
 const [progress,setProgress]=useState(()=>{
  try{return sanitizeProgress(JSON.parse(localStorage.getItem(STORAGE_KEY)))}catch{return structuredClone(initialProgress)}
 })
 useEffect(()=>localStorage.setItem(STORAGE_KEY,JSON.stringify(progress)),[progress])
 const api=useMemo(()=>({
  progress,
  visit:(key,route)=>setProgress(p=>({...p,visited:{...p.visited,[key]:true},lastRoute:route})),
  completeActivity:(id,data=true)=>setProgress(p=>({...p,activities:{...p.activities,[id]:data}})),
  saveQuestion:(id,data)=>setProgress(p=>({...p,questions:{...p.questions,[id]:data}})),
  saveLab:(stage,result,answers)=>setProgress(p=>({...p,lab:{...p.lab,stage:Math.min(8,Math.max(p.lab.stage,stage+1)),stageStates:{...p.lab.stageStates,[stage]:{result,answers}},unlockedEvidence:[...new Set([...p.lab.unlockedEvidence,...result.unlocks])],dimensions:{...p.lab.dimensions,...result.dimension}}})),
  saveLabRecord:(record)=>setProgress(p=>({...p,lab:{...p.lab,record:{...p.lab.record,...record}}})),
  reviewLabDebrief:()=>setProgress(p=>({...p,lab:{...p.lab,debriefReviewed:true}})),
  saveLabReview:(id,data)=>setProgress(p=>{const reviewAnswers={...p.lab.reviewAnswers,[id]:data};return {...p,lab:{...p.lab,reviewAnswers,reviewCompleted:Object.values(reviewAnswers).filter(x=>x?.completed).length===4}}}),
  completeCourse:()=>setProgress(p=>labCompletionReady(p.lab)?({...p,courseCompleted:true,completedModules:[...new Set([...p.completedModules,'09'])],currentModule:'09',lastRoute:'/lab/complete'}):p),
  completeModule00:()=>setProgress(p=>module00Ready(p)?({...p,completedModules:[...new Set([...p.completedModules,'00'])],currentModule:'01',lastRoute:'/module/01/opening'}):p),
  completeModule:(id,total)=>setProgress(p=>{if(!moduleReady(p,id,total))return p;const next=String(Number(id)+1).padStart(2,'0');return {...p,completedModules:[...new Set([...p.completedModules,id])],currentModule:next,lastRoute:id==='08'?'/lab/opening':`/module/${next}/opening`}}),
  reset:()=>setProgress(structuredClone(initialProgress))
 }),[progress])
 return <Context.Provider value={api}>{children}</Context.Provider>
}
export const useProgress=()=>useContext(Context)
