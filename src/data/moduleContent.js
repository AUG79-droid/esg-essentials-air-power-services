import { parseQuestions, parseVisuals, splitModule } from './contentParsers'

export { parseQuestions, parseVisuals, splitModule } from './contentParsers'

const englishFiles=import.meta.glob('../../content/module-0[1-8]/*.md',{eager:true,query:'?raw',import:'default'})
const spanishFiles=import.meta.glob('../../content-es/module-0[1-8]/*.md',{eager:true,query:'?raw',import:'default'})
const fileNames=['MODULE.md','ACTIVITY.md','KNOWLEDGE_CHECK.md','SOURCES.md','VISUALS.md']

function rawSet(files,id){
 const folder=`module-${id}`
 return fileNames.map(name=>{
  const entry=Object.entries(files).find(([path])=>path.includes(folder)&&path.endsWith(name))
  if(!entry)throw new Error(`Missing ${folder}/${name}`)
  return entry[1]
 })
}

const activityTitles={
 en:{'01':'Environmental Dependency & Impact Map','02':'Investment Decision Lab','03':'Greenwashing Detective','04':'Stakeholder Lens','05':'Supply Chain Investigation','06':'Governance Failure Room','07':'Boardroom Challenge','08':'From ESG to Action'},
 es:{'01':'Mapa de dependencias e impactos ambientales','02':'Laboratorio de decisiones de inversión','03':'Detective de lavado verde','04':'Perspectiva de las partes interesadas','05':'Investigación de la cadena de suministro','06':'Sala de fallos de gobernanza','07':'Reto en el consejo','08':'De ESG a la acción'}
}

function buildLanguage(files,lang){
 return Object.fromEntries(['01','02','03','04','05','06','07','08'].map(id=>{
  const [module,activity,check,sources,visuals]=rawSet(files,id)
  return [id,{id,...splitModule(module),activity,activityTitle:activityTitles[lang][id],questions:parseQuestions(check,id),sources,visuals:parseVisuals(visuals),hero:`/images/module-${id}-hero.webp`}]
 }))
}

export const moduleContentByLanguage={en:buildLanguage(englishFiles,'en'),es:buildLanguage(spanishFiles,'es')}
export const getModuleContent=(lang)=>moduleContentByLanguage[lang==='es'?'es':'en']
// Backwards-compatible English export for tests or integrations that import the original name.
export const moduleContent=moduleContentByLanguage.en
export const viewOrder=['opening','theory','visuals','scenario','activity','check','close']
export const questionCounts={'01':6,'02':5,'03':6,'04':6,'05':6,'06':6,'07':5,'08':6}
