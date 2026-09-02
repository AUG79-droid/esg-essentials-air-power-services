import { Link } from 'react-router-dom'
import { modules } from '../data/course'
import { moduleState } from '../state/engines'
import { useProgress } from '../state/ProgressContext'
export default function ModuleMap(){
 const {progress}=useProgress()
 return <div className="page map-page"><header className="page-header"><div><div className="eyebrow">LEARNING ARCHITECTURE</div><h1>Ten modules. One connected decision system.</h1></div><div className="completion-dial"><strong>{progress.completedModules.length}</strong><span>of 10 completed</span></div></header>
 <div className="module-rail">{modules.map((m,i)=>{const state=moduleState(m.id,progress),active=state!=='LOCKED'&&m.implemented;return <article className={'module-card '+state.toLowerCase().replace(' ','-')} key={m.id}><div className="module-index">{m.id}</div><div className="module-main"><div className="module-meta"><span>{m.pillar}</span><span>{m.minutes} MIN</span></div><h2>{m.title}</h2><div className="state"><i/>{state}</div>{m.id==='09'&&<small>EIGHT-STAGE CONNECTED DECISION LAB</small>}</div>{active?<Link aria-label={'Open module '+m.id} to={m.id==='09'?'/lab/opening':'/module/'+m.id+(m.id==='00'?'/opening':'/opening')}>→</Link>:<span className="locked-mark" aria-label={state}>⌁</span>}<div className="rail-line" aria-hidden="true">{i<9&&<span/>}</div></article>})}</div></div>
}
