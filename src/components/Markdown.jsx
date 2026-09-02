import { marked } from 'marked'
marked.setOptions({gfm:true,breaks:false})
export default function Markdown({source,className=''}){return <div className={'prose '+className} dangerouslySetInnerHTML={{__html:marked.parse(source)}} />}

