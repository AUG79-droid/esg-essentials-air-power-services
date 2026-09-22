import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const LanguageContext=createContext(null)
const STORAGE_KEY='esg-essentials-language'

function initialLanguage(){
 try{
  const requested=new URLSearchParams(window.location.search).get('hubLang')
  if(requested==='es'||requested==='en')return requested
  const stored=localStorage.getItem(STORAGE_KEY)
  return stored==='es'?'es':'en'
 }catch{return 'en'}
}

export function LanguageProvider({children}){
 const [lang,setLang]=useState(initialLanguage)
 useEffect(()=>{
  document.documentElement.lang=lang
  try{localStorage.setItem(STORAGE_KEY,lang)}catch{/* storage can be unavailable */}
 },[lang])
 const api=useMemo(()=>({
  lang,
  setLanguage:(next)=>{
   if(next!=='es'&&next!=='en')return
   try{
    const url=new URL(window.location.href)
    url.searchParams.set('hubLang',next)
    window.history.replaceState({},'',url)
   }catch{/* keep language switching functional even if URL APIs are restricted */}
   setLang(next)
  },
  pick:(en,es)=>lang==='es'?es:en
 }),[lang])
 return <LanguageContext.Provider value={api}>{children}</LanguageContext.Provider>
}

export const useLanguage=()=>useContext(LanguageContext)
