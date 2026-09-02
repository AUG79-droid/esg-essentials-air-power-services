const Node=({title,detail,tone})=><div className={'diagram-node '+tone}><strong>{title}</strong><span>{detail}</span></div>
export function ConnectedESG(){
 return <figure className="diagram" aria-labelledby="esg-title"><figcaption><span>VISUAL 01</span><h3 id="esg-title">Three dimensions, one decision system</h3></figcaption>
  <div className="orbit-system"><div className="orbit-core">DECISION<small>evidence · authority · consequence</small></div><Node tone="e" title="ENVIRONMENTAL" detail="Dependencies · impacts · resources"/><Node tone="s" title="SOCIAL" detail="People · rights · relationships"/><Node tone="g" title="GOVERNANCE" detail="Authority · controls · accountability"/></div>
  <details><summary>Text alternative</summary><p>Environmental, social and governance information converges on a decision. Governance determines how evidence is evaluated, authority is assigned and consequences are monitored; none of the three dimensions operates in isolation.</p></details></figure>
}
export function GovernanceCascade(){
 const items=[['Weak oversight','Warning signals are filtered'],['Distorted evidence','Decision-makers receive an incomplete picture'],['Poor decision','Constraints and affected people are missed'],['Consequences','Operational, social and financial effects compound']]
 return <figure className="diagram"><figcaption><span>VISUAL 03</span><h3>Governance failure cascade</h3></figcaption><div className="flow">{items.map((x,i)=><Node key={x[0]} tone={'step s'+i} title={(i+1).toString().padStart(2,'0')+' · '+x[0]} detail={x[1]}/>)}</div><details><summary>Text alternative</summary><ol>{items.map(x=><li key={x[0]}><strong>{x[0]}:</strong> {x[1]}</li>)}</ol></details></figure>
}
export function SliceDiagram({type}){
 const data=type==='environment'?['Climate signal','Operational exposure','Vulnerability','Business consequence','Adaptation control']:type==='social'?['Organization','Tier 1 supplier','Recruiter / contractor','Workers and communities','Evidence and grievance routes']:['Objective','Risk','Control','Operating evidence','Review and escalation']
 return <figure className="diagram compact"><figcaption><span>{type.toUpperCase()} SYSTEM</span><h3>{type==='environment'?'Climate risk pathway':type==='social'?'Multi-tier risk network':'Governance chain'}</h3></figcaption><div className="flow">{data.map((x,i)=><Node key={x} tone="step" title={x} detail={i<data.length-1?'Connects to the next decision layer':'Requires accountable follow-through'}/>)}</div><details><summary>Text alternative</summary><p>{data.join(' → ')}.</p></details></figure>
}

