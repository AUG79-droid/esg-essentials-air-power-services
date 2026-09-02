import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
const Overview=lazy(()=>import('./pages/Overview'))
const ModuleMap=lazy(()=>import('./pages/ModuleMap'))
const Module00=lazy(()=>import('./pages/Module00'))
const ModuleReader=lazy(()=>import('./pages/ModuleReader'))
const DecisionLab=lazy(()=>import('./pages/DecisionLab'))
const About=lazy(()=>import('./pages/InfoPages').then(module=>({default:module.About})))
const Glossary=lazy(()=>import('./pages/InfoPages').then(module=>({default:module.Glossary})))
const Progress=lazy(()=>import('./pages/InfoPages').then(module=>({default:module.Progress})))
const Sources=lazy(()=>import('./pages/InfoPages').then(module=>({default:module.Sources})))

function RouteLoader(){return <div className="route-loader" role="status" aria-live="polite"><span aria-hidden="true"/>Loading learning experience…</div>}

export default function App(){return <Layout><Suspense fallback={<RouteLoader/>}><Routes>
 <Route path="/" element={<Home/>}/><Route path="/overview" element={<Overview/>}/><Route path="/modules" element={<ModuleMap/>}/>
 <Route path="/module/00/:view" element={<Module00/>}/><Route path="/module/:id/:view?" element={<ModuleReader/>}/><Route path="/lab/:stage" element={<DecisionLab/>}/>
 <Route path="/glossary" element={<Glossary/>}/><Route path="/sources" element={<Sources/>}/><Route path="/about" element={<About/>}/><Route path="/progress" element={<Progress/>}/>
 <Route path="*" element={<Navigate to="/"/>}/></Routes></Suspense></Layout>}
