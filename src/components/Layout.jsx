import { useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useProgress } from '../state/ProgressContext'
import { useLanguage } from '../i18n/LanguageContext'

export default function Layout({children}){
 const {progress}=useProgress(); const location=useLocation(); const {lang,setLanguage}=useLanguage()
 const es=lang==='es',completed=progress.completedModules.length
 useEffect(()=>{try{window.scrollTo(0,0)}catch{/* Embedded QA surfaces may not implement scrolling. */}},[location.pathname])
 return <div className="app-shell">
  <a className="skip-link" href="#main">{es?'Saltar al contenido del curso':'Skip to course content'}</a>
  <header className="topbar">
   <NavLink className="brand" to="/"><span className="brand-mark" aria-hidden="true">⌁</span><span><b>ESG ESSENTIALS</b><small>AIR POWER SERVICES</small></span></NavLink>
   <nav aria-label={es?'Principal':'Primary'}><NavLink to="/overview">{es?'Descripción':'Overview'}</NavLink><NavLink to="/modules">{es?'Mapa de módulos':'Module map'}</NavLink><NavLink to="/glossary">{es?'Glosario':'Glossary'}</NavLink><NavLink to="/sources">{es?'Fuentes':'Sources'}</NavLink><NavLink to="/about">{es?'Acerca del curso':'About'}</NavLink></nav>
   <div className="language-switch" role="group" aria-label={es?'Idioma':'Language'}><button className={es?'active':''} onClick={()=>setLanguage('es')} aria-pressed={es}>ES</button><span>|</span><button className={!es?'active':''} onClick={()=>setLanguage('en')} aria-pressed={!es}>EN</button></div>
   <NavLink to="/progress" className="progress-chip" aria-label={es?completed+' de 10 módulos completados':completed+' of 10 modules completed'}><span>{completed}/10</span><small>{es?'PROGRESO':'LEARNING PROGRESS'}</small></NavLink>
   <details className="mobile-nav"><summary aria-label={es?'Abrir navegación':'Open navigation'}>{es?'Menú':'Menu'}</summary><nav aria-label={es?'Principal móvil':'Mobile primary'}><NavLink to="/">{es?'Inicio':'Home'}</NavLink><NavLink to="/overview">{es?'Descripción':'Overview'}</NavLink><NavLink to="/modules">{es?'Mapa de módulos':'Module map'}</NavLink><NavLink to="/glossary">{es?'Glosario':'Glossary'}</NavLink><NavLink to="/sources">{es?'Fuentes':'Sources'}</NavLink><NavLink to="/about">{es?'Acerca del curso':'About'}</NavLink></nav></details>
  </header>
  <main id="main" tabIndex="-1" key={location.pathname}>{children}</main>
  <footer><span>ESG ESSENTIALS · AIR POWER SERVICES</span><span>{es?'Experiencia de aprendizaje · Progreso guardado en este dispositivo':'Learning experience · Progress stored on this device'}</span></footer>
 </div>
}
