import m01En from '../../content/module-01/MODULE.md?raw'
import m01Es from '../../content-es/module-01/MODULE.md?raw'
import m01aEn from '../../content/module-01/ACTIVITY.md?raw'
import m01aEs from '../../content-es/module-01/ACTIVITY.md?raw'
import m01qEn from '../../content/module-01/KNOWLEDGE_CHECK.md?raw'
import m01qEs from '../../content-es/module-01/KNOWLEDGE_CHECK.md?raw'
import m01sEn from '../../content/module-01/SOURCES.md?raw'
import m01sEs from '../../content-es/module-01/SOURCES.md?raw'
import m01vEn from '../../content/module-01/VISUALS.md?raw'
import m01vEs from '../../content-es/module-01/VISUALS.md?raw'
import m02En from '../../content/module-02/MODULE.md?raw'
import m02Es from '../../content-es/module-02/MODULE.md?raw'
import m02aEn from '../../content/module-02/ACTIVITY.md?raw'
import m02aEs from '../../content-es/module-02/ACTIVITY.md?raw'
import m02qEn from '../../content/module-02/KNOWLEDGE_CHECK.md?raw'
import m02qEs from '../../content-es/module-02/KNOWLEDGE_CHECK.md?raw'
import m02sEn from '../../content/module-02/SOURCES.md?raw'
import m02sEs from '../../content-es/module-02/SOURCES.md?raw'
import m02vEn from '../../content/module-02/VISUALS.md?raw'
import m02vEs from '../../content-es/module-02/VISUALS.md?raw'
import m03En from '../../content/module-03/MODULE.md?raw'
import m03Es from '../../content-es/module-03/MODULE.md?raw'
import m03aEn from '../../content/module-03/ACTIVITY.md?raw'
import m03aEs from '../../content-es/module-03/ACTIVITY.md?raw'
import m03qEn from '../../content/module-03/KNOWLEDGE_CHECK.md?raw'
import m03qEs from '../../content-es/module-03/KNOWLEDGE_CHECK.md?raw'
import m03sEn from '../../content/module-03/SOURCES.md?raw'
import m03sEs from '../../content-es/module-03/SOURCES.md?raw'
import m03vEn from '../../content/module-03/VISUALS.md?raw'
import m03vEs from '../../content-es/module-03/VISUALS.md?raw'
import m04En from '../../content/module-04/MODULE.md?raw'
import m04Es from '../../content-es/module-04/MODULE.md?raw'
import m04aEn from '../../content/module-04/ACTIVITY.md?raw'
import m04aEs from '../../content-es/module-04/ACTIVITY.md?raw'
import m04qEn from '../../content/module-04/KNOWLEDGE_CHECK.md?raw'
import m04qEs from '../../content-es/module-04/KNOWLEDGE_CHECK.md?raw'
import m04sEn from '../../content/module-04/SOURCES.md?raw'
import m04sEs from '../../content-es/module-04/SOURCES.md?raw'
import m04vEn from '../../content/module-04/VISUALS.md?raw'
import m04vEs from '../../content-es/module-04/VISUALS.md?raw'
import m05En from '../../content/module-05/MODULE.md?raw'
import m05Es from '../../content-es/module-05/MODULE.md?raw'
import m05aEn from '../../content/module-05/ACTIVITY.md?raw'
import m05aEs from '../../content-es/module-05/ACTIVITY.md?raw'
import m05qEn from '../../content/module-05/KNOWLEDGE_CHECK.md?raw'
import m05qEs from '../../content-es/module-05/KNOWLEDGE_CHECK.md?raw'
import m05sEn from '../../content/module-05/SOURCES.md?raw'
import m05sEs from '../../content-es/module-05/SOURCES.md?raw'
import m05vEn from '../../content/module-05/VISUALS.md?raw'
import m05vEs from '../../content-es/module-05/VISUALS.md?raw'
import m06En from '../../content/module-06/MODULE.md?raw'
import m06Es from '../../content-es/module-06/MODULE.md?raw'
import m06aEn from '../../content/module-06/ACTIVITY.md?raw'
import m06aEs from '../../content-es/module-06/ACTIVITY.md?raw'
import m06qEn from '../../content/module-06/KNOWLEDGE_CHECK.md?raw'
import m06qEs from '../../content-es/module-06/KNOWLEDGE_CHECK.md?raw'
import m06sEn from '../../content/module-06/SOURCES.md?raw'
import m06sEs from '../../content-es/module-06/SOURCES.md?raw'
import m06vEn from '../../content/module-06/VISUALS.md?raw'
import m06vEs from '../../content-es/module-06/VISUALS.md?raw'
import m07En from '../../content/module-07/MODULE.md?raw'
import m07Es from '../../content-es/module-07/MODULE.md?raw'
import m07aEn from '../../content/module-07/ACTIVITY.md?raw'
import m07aEs from '../../content-es/module-07/ACTIVITY.md?raw'
import m07qEn from '../../content/module-07/KNOWLEDGE_CHECK.md?raw'
import m07qEs from '../../content-es/module-07/KNOWLEDGE_CHECK.md?raw'
import m07sEn from '../../content/module-07/SOURCES.md?raw'
import m07sEs from '../../content-es/module-07/SOURCES.md?raw'
import m07vEn from '../../content/module-07/VISUALS.md?raw'
import m07vEs from '../../content-es/module-07/VISUALS.md?raw'
import m08En from '../../content/module-08/MODULE.md?raw'
import m08Es from '../../content-es/module-08/MODULE.md?raw'
import m08aEn from '../../content/module-08/ACTIVITY.md?raw'
import m08aEs from '../../content-es/module-08/ACTIVITY.md?raw'
import m08qEn from '../../content/module-08/KNOWLEDGE_CHECK.md?raw'
import m08qEs from '../../content-es/module-08/KNOWLEDGE_CHECK.md?raw'
import m08sEn from '../../content/module-08/SOURCES.md?raw'
import m08sEs from '../../content-es/module-08/SOURCES.md?raw'
import m08vEn from '../../content/module-08/VISUALS.md?raw'
import m08vEs from '../../content-es/module-08/VISUALS.md?raw'
import { parseQuestions, parseVisuals, splitModule } from './contentParsers'

export { parseQuestions, parseVisuals, splitModule } from './contentParsers'

const rawsEn={
 '01':[m01En,m01aEn,m01qEn,m01sEn,m01vEn],
 '02':[m02En,m02aEn,m02qEn,m02sEn,m02vEn],
 '03':[m03En,m03aEn,m03qEn,m03sEn,m03vEn],
 '04':[m04En,m04aEn,m04qEn,m04sEn,m04vEn],
 '05':[m05En,m05aEn,m05qEn,m05sEn,m05vEn],
 '06':[m06En,m06aEn,m06qEn,m06sEn,m06vEn],
 '07':[m07En,m07aEn,m07qEn,m07sEn,m07vEn],
 '08':[m08En,m08aEn,m08qEn,m08sEn,m08vEn]
}
const rawsEs={
 '01':[m01Es,m01aEs,m01qEs,m01sEs,m01vEs],
 '02':[m02Es,m02aEs,m02qEs,m02sEs,m02vEs],
 '03':[m03Es,m03aEs,m03qEs,m03sEs,m03vEs],
 '04':[m04Es,m04aEs,m04qEs,m04sEs,m04vEs],
 '05':[m05Es,m05aEs,m05qEs,m05sEs,m05vEs],
 '06':[m06Es,m06aEs,m06qEs,m06sEs,m06vEs],
 '07':[m07Es,m07aEs,m07qEs,m07sEs,m07vEs],
 '08':[m08Es,m08aEs,m08qEs,m08sEs,m08vEs]
}
const activityTitlesEn={
 '01':'Environmental Dependency & Impact Map','02':'Investment Decision Lab','03':'Greenwashing Detective','04':'Stakeholder Lens',
 '05':'Supply Chain Investigation','06':'Governance Failure Room','07':'Boardroom Challenge','08':'From ESG to Action'
}
const activityTitlesEs={
 '01':'Mapa de dependencias e impactos ambientales','02':'Laboratorio de decisión de inversión','03':'Detector de lavado verde','04':'Perspectiva de partes interesadas',
 '05':'Investigación de la cadena de suministro','06':'Sala de fallos de gobernanza','07':'Reto en la sala del consejo','08':'De ESG a la acción'
}
export const viewOrder=['opening','theory','visuals','scenario','activity','check','close']
export const questionCounts={'01':6,'02':5,'03':6,'04':6,'05':6,'06':6,'07':5,'08':6}

function build(raws,titles){
 return Object.fromEntries(Object.entries(raws).map(([id,[module,activity,check,sources,visuals]])=>[id,{
  id,...splitModule(module),activity,activityTitle:titles[id],questions:parseQuestions(check,id),sources,visuals:parseVisuals(visuals),hero:`/images/module-${id}-hero.webp`
 }]))
}
export const moduleContent=build(rawsEn,activityTitlesEn)
export const moduleContentEs=build(rawsEs,activityTitlesEs)
export const getModuleContent=lang=>lang==='es'?moduleContentEs:moduleContent
