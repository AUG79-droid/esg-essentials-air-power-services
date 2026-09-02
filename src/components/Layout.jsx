import { useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useProgress } from '../state/ProgressContext'

export default function Layout({children}){
 const {progress}=useProgress(); const location=useLocation()
 const completed=progress.completedModules.length
 useEffect(()=>{try{window.scrollTo(0,0)}catch{/* Embedded QA surfaces may not implement scrolling. */}},[location.pathname])
 return <div className="app-shell">
  <a className="skip-link" href="#main">Skip to course content</a>
  <header className="topbar">
   <NavLink className="brand" to="/"><span className="brand-mark" aria-hidden="true">⌁</span><span><b>ESG ESSENTIALS</b><small>AIR POWER SERVICES</small></span></NavLink>
   <nav aria-label="Primary"><NavLink to="/overview">Overview</NavLink><NavLink to="/modules">Module map</NavLink><NavLink to="/glossary">Glossary</NavLink><NavLink to="/sources">Sources</NavLink><NavLink to="/about">About</NavLink></nav>
   <NavLink to="/progress" className="progress-chip" aria-label={completed+' of 10 modules completed'}><span>{completed}/10</span><small>LEARNING PROGRESS</small></NavLink>
   <details className="mobile-nav"><summary aria-label="Open navigation">Menu</summary><nav aria-label="Mobile primary"><NavLink to="/">Home</NavLink><NavLink to="/overview">Overview</NavLink><NavLink to="/modules">Module map</NavLink><NavLink to="/glossary">Glossary</NavLink><NavLink to="/sources">Sources</NavLink><NavLink to="/about">About</NavLink></nav></details>
  </header>
  <main id="main" tabIndex="-1" key={location.pathname}>{children}</main>
  <footer><span>ESG ESSENTIALS · AIR POWER SERVICES</span><span>Learning experience · Progress stored on this device</span></footer>
 </div>
}
