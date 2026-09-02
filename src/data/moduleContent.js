import m01 from '../../content/module-01/MODULE.md?raw'
import m01a from '../../content/module-01/ACTIVITY.md?raw'
import m01q from '../../content/module-01/KNOWLEDGE_CHECK.md?raw'
import m01s from '../../content/module-01/SOURCES.md?raw'
import m01v from '../../content/module-01/VISUALS.md?raw'
import m02 from '../../content/module-02/MODULE.md?raw'
import m02a from '../../content/module-02/ACTIVITY.md?raw'
import m02q from '../../content/module-02/KNOWLEDGE_CHECK.md?raw'
import m02s from '../../content/module-02/SOURCES.md?raw'
import m02v from '../../content/module-02/VISUALS.md?raw'
import m03 from '../../content/module-03/MODULE.md?raw'
import m03a from '../../content/module-03/ACTIVITY.md?raw'
import m03q from '../../content/module-03/KNOWLEDGE_CHECK.md?raw'
import m03s from '../../content/module-03/SOURCES.md?raw'
import m03v from '../../content/module-03/VISUALS.md?raw'
import m04 from '../../content/module-04/MODULE.md?raw'
import m04a from '../../content/module-04/ACTIVITY.md?raw'
import m04q from '../../content/module-04/KNOWLEDGE_CHECK.md?raw'
import m04s from '../../content/module-04/SOURCES.md?raw'
import m04v from '../../content/module-04/VISUALS.md?raw'
import m05 from '../../content/module-05/MODULE.md?raw'
import m05a from '../../content/module-05/ACTIVITY.md?raw'
import m05q from '../../content/module-05/KNOWLEDGE_CHECK.md?raw'
import m05s from '../../content/module-05/SOURCES.md?raw'
import m05v from '../../content/module-05/VISUALS.md?raw'
import m06 from '../../content/module-06/MODULE.md?raw'
import m06a from '../../content/module-06/ACTIVITY.md?raw'
import m06q from '../../content/module-06/KNOWLEDGE_CHECK.md?raw'
import m06s from '../../content/module-06/SOURCES.md?raw'
import m06v from '../../content/module-06/VISUALS.md?raw'
import m07 from '../../content/module-07/MODULE.md?raw'
import m07a from '../../content/module-07/ACTIVITY.md?raw'
import m07q from '../../content/module-07/KNOWLEDGE_CHECK.md?raw'
import m07s from '../../content/module-07/SOURCES.md?raw'
import m07v from '../../content/module-07/VISUALS.md?raw'
import m08 from '../../content/module-08/MODULE.md?raw'
import m08a from '../../content/module-08/ACTIVITY.md?raw'
import m08q from '../../content/module-08/KNOWLEDGE_CHECK.md?raw'
import m08s from '../../content/module-08/SOURCES.md?raw'
import m08v from '../../content/module-08/VISUALS.md?raw'
import { parseQuestions, parseVisuals, splitModule } from './contentParsers'

export { parseQuestions, parseVisuals, splitModule } from './contentParsers'

const raws={
 '01':[m01,m01a,m01q,m01s,m01v], '02':[m02,m02a,m02q,m02s,m02v],
 '03':[m03,m03a,m03q,m03s,m03v], '04':[m04,m04a,m04q,m04s,m04v],
 '05':[m05,m05a,m05q,m05s,m05v], '06':[m06,m06a,m06q,m06s,m06v],
 '07':[m07,m07a,m07q,m07s,m07v], '08':[m08,m08a,m08q,m08s,m08v]
}
const activityTitles={
 '01':'Environmental Dependency & Impact Map','02':'Investment Decision Lab','03':'Greenwashing Detective','04':'Stakeholder Lens',
 '05':'Supply Chain Investigation','06':'Governance Failure Room','07':'Boardroom Challenge','08':'From ESG to Action'
}
export const viewOrder=['opening','theory','visuals','scenario','activity','check','close']
export const questionCounts={'01':6,'02':5,'03':6,'04':6,'05':6,'06':6,'07':5,'08':6}

export const moduleContent=Object.fromEntries(Object.entries(raws).map(([id,[module,activity,check,sources,visuals]])=>[id,{
 id,...splitModule(module),activity,activityTitle:activityTitles[id],questions:parseQuestions(check,id),sources,visuals:parseVisuals(visuals),hero:`/images/module-${id}-hero.webp`
}]))
