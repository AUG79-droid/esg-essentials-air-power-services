import { Link } from 'react-router-dom'
import { getModules } from '../data/course'
import { moduleState } from '../state/engines'
import { useProgress } from '../state/ProgressContext'
import { useLanguage } from '../i18n/LanguageContext'
export default function ModuleMap(){
 const {progress}=useProgress(); const {lang}=useLanguage(); const es=lang==='es'; const modules=getModules(lang)
 return <div className="page map-page"><header className="page-header"><div><div className="eyebrow">{es?'ARQUITECTURA DE APRENDIZAJE':'LEARNING ARCHITECTURE'}</div><h1>{es?'Diez módulos. Un sistema de decisión conectado.':'Ten modules. One connected decision system.'}</h1></div><div className="completion-dial"><strong>{progress.completedModules.length}</strong><span>{es?'de 10 completados':'of 10 completed'}</span></div></header>
 <div className="module-rail">{modules.map((m,i)=>{const state=moduleState(m.id,progress),active=state!=='LOCKED'&&m.implemented;const stateLabel=es?({LOCKED:'BLOQUEADO',AVAILABLE:'DISPONIBLE','IN PROGRESS':'EN CURSO',COMPLETED:'COMPLETADO'}[state]||state):state;return <article className={'module-card '+state.toLowerCase().replace(' ','-')} key={m.id}><div className="module-index">{m.id}</div><div className="module-main"><div className="module-meta"><span>{m.pillar}</span><span>{m.minutes} MIN</span></div><h2>{m.title}</h2><div className="state"><i/>{stateLabel}</div>{m.id==='09'&&<small>{es?'LABORATORIO DE DECISIÓN CONECTADO EN OCHO ETAPAS':'EIGHT-STAGE CONNECTED DECISION LAB'}</small>}</div>{active?<Link aria-label={es?'Abrir módulo '+m.id:'Open module '+m.id} to={m.id==='09'?'/lab/opening':'/module/'+m.id+'/opening'}>→</Link>:<span className="locked-mark" aria-label={stateLabel}>⌁</span>}<div className="rail-line" aria-hidden="true">{i<9&&<span/>}</div></article>})}</div></div>
}
