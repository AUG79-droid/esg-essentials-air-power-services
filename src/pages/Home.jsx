import { Link } from 'react-router-dom'
import { useProgress } from '../state/ProgressContext'
export default function Home(){
 const {progress}=useProgress(); const started=Object.keys(progress.visited).length>0
 return <div className="home page">
  <section className="home-hero">
   <div className="hero-copy"><div className="kicker"><span>PRODUCTION LEARNING SYSTEM</span><i/>AIR POWER SERVICES</div><h1><span>ESG</span> ESSENTIALS</h1><p className="hero-sub">Environmental, Social &amp; Governance for Air Power Services</p><p className="hero-tag">From Principles to Better Business Decisions</p>
   <div className="hero-actions"><Link className="button primary" to={started?progress.lastRoute||'/modules':'/module/00/opening'}>{started?'Continue course':'Start course'} <span aria-hidden="true">→</span></Link><Link className="button ghost" to="/overview">Explore the course</Link></div>
   <p className="local-note">Progress is stored locally on this device. No account or personal data required.</p></div>
   <figure className="home-cinematic"><img src="./images/home-hero.webp" alt="A multidisciplinary aerospace programme team examining interconnected engineering and decision evidence in a bright technical environment." fetchPriority="high"/><figcaption>Evidence becomes useful when people can connect it to authority, consequence and action.</figcaption></figure>
  </section>
  <section className="course-facts" aria-label="Course facts"><div><strong>10 modules</strong><span>A connected learning journey</span></div><div><strong>7 h 39 min</strong><span>Designed for focused professional learning</span></div><div><strong>E + S + G</strong><span>Environmental, social and governance together</span></div><div><strong>Foundation level</strong><span>No previous ESG expertise required</span></div></section>
  <section className="home-intro"><div><div className="eyebrow">WHY THIS COURSE</div><h2>See the whole decision—not only the visible metric.</h2></div><p>Learn to connect environmental dependencies, impacts on people, evidence quality, authority and business consequences. The course builds from first principles to a governed Air Power Services decision simulation.</p></section>
 </div>
}
