export const modules = [
  { id:'00', title:'ESG: Why It Exists', pillar:'FOUNDATION', minutes:40, implemented:'complete' },
  { id:'01', title:'Environmental Essentials', pillar:'ENVIRONMENTAL', minutes:55, implemented:'complete' },
  { id:'02', title:'Sustainable Finance & ESG Investment', pillar:'FINANCE', minutes:40, implemented:'complete' },
  { id:'03', title:'Ratings, Reporting & Greenwashing', pillar:'EVIDENCE', minutes:45, implemented:'complete' },
  { id:'04', title:'Social Essentials: People & Equity', pillar:'SOCIAL', minutes:45, implemented:'complete' },
  { id:'05', title:'Social Risk in Global Supply Chains', pillar:'SOCIAL', minutes:55, implemented:'complete' },
  { id:'06', title:'Governance Essentials', pillar:'GOVERNANCE', minutes:50, implemented:'complete' },
  { id:'07', title:'Boards, Oversight & Ethical Decisions', pillar:'GOVERNANCE', minutes:40, implemented:'complete' },
  { id:'08', title:'ESG into Business Strategy', pillar:'STRATEGY', minutes:45, implemented:'complete' },
  { id:'09', title:'Air Power Services ESG Decision Lab', pillar:'INTEGRATION', minutes:44, implemented:'prototype' }
]
export const modulesEs = [
  { id:'00', title:'ESG: por qué existe', pillar:'FUNDAMENTOS', minutes:40, implemented:'complete' },
  { id:'01', title:'Fundamentos ambientales', pillar:'AMBIENTAL', minutes:55, implemented:'complete' },
  { id:'02', title:'Finanzas sostenibles e inversión ESG', pillar:'FINANZAS', minutes:40, implemented:'complete' },
  { id:'03', title:'Calificaciones, información y greenwashing', pillar:'EVIDENCIA', minutes:45, implemented:'complete' },
  { id:'04', title:'Fundamentos sociales: personas y equidad', pillar:'SOCIAL', minutes:45, implemented:'complete' },
  { id:'05', title:'Riesgo social en cadenas de suministro globales', pillar:'SOCIAL', minutes:55, implemented:'complete' },
  { id:'06', title:'Fundamentos de gobernanza', pillar:'GOBERNANZA', minutes:50, implemented:'complete' },
  { id:'07', title:'Consejos, supervisión y decisiones éticas', pillar:'GOBERNANZA', minutes:40, implemented:'complete' },
  { id:'08', title:'Integrar ESG en la estrategia empresarial', pillar:'ESTRATEGIA', minutes:45, implemented:'complete' },
  { id:'09', title:'Laboratorio de decisión ESG de Air Power Services', pillar:'INTEGRACIÓN', minutes:44, implemented:'prototype' }
]
export const glossary = [
 ['Assurance','An independent or defined review process that increases confidence in information; it is not a guarantee.'],
 ['Dependency','A resource, relationship or system an activity relies on.'],
 ['ESG','Environmental, social and governance information used to understand impacts, dependencies, risks, opportunities and decision quality.'],
 ['Impact','A positive or negative effect on people, the environment or society.'],
 ['Materiality','A decision-specific judgment about which information matters and why.'],
 ['Rights-holder','A person or group whose internationally recognized rights may be affected.'],
 ['Stakeholder','A person or group that can affect, be affected by or perceive itself affected by a decision.'],
 ['Verification','Checking whether specified information or requirements are accurate or met; narrower than assurance.'],
 ['Accessibility','The extent to which environments, information and opportunities can be used by people with different needs.'],
 ['Baseline','The defined starting point against which change is assessed.'],
 ['Circularity','Keeping products, components and materials at useful value while reducing waste and virgin-resource demand.'],
 ['Control','A designed action that manages risk or helps a process achieve its intended result.'],
 ['Data lineage','The traceable path from source evidence through transformations to a reported figure or claim.'],
 ['Double materiality','Considering both effects on enterprise value and impacts on people or the environment.'],
 ['Due diligence','An ongoing process to identify, prevent, mitigate, track and communicate how impacts are addressed.'],
 ['Equity','Fair access and treatment that recognizes different barriers or circumstances without removing valid standards.'],
 ['Greenwashing','A sustainability-related claim or impression that is materially misleading, unsubstantiated or broader than its evidence.'],
 ['Life-cycle thinking','Considering relevant upstream, operational and downstream effects without claiming a formal life-cycle assessment.'],
 ['Risk appetite','The amount and type of risk an organization is prepared to pursue or retain within defined constraints.'],
 ['Scope 3','Other indirect greenhouse-gas emissions in an organization’s value chain, subject to defined categories and methods.']
]
export const glossaryEs = [
 ['Aseguramiento','Proceso independiente o definido de revisión que aumenta la confianza en la información; no constituye una garantía.'],
 ['Dependencia','Recurso, relación o sistema del que depende una actividad.'],
 ['ESG','Información ambiental, social y de gobernanza utilizada para comprender impactos, dependencias, riesgos, oportunidades y calidad de las decisiones.'],
 ['Impacto','Efecto positivo o negativo sobre las personas, el medio ambiente o la sociedad.'],
 ['Materialidad','Juicio específico de una decisión sobre qué información importa y por qué.'],
 ['Titular de derechos','Persona o grupo cuyos derechos reconocidos internacionalmente pueden verse afectados.'],
 ['Parte interesada','Persona o grupo que puede afectar, verse afectado o percibirse afectado por una decisión.'],
 ['Verificación','Comprobación de si determinada información o requisitos son exactos o se cumplen; es más limitada que el aseguramiento.'],
 ['Accesibilidad','Grado en que entornos, información y oportunidades pueden ser utilizados por personas con diferentes necesidades.'],
 ['Línea de base','Punto de partida definido respecto al que se evalúa un cambio.'],
 ['Circularidad','Mantener productos, componentes y materiales en un nivel útil de valor reduciendo al mismo tiempo los residuos y la demanda de recursos vírgenes.'],
 ['Control','Acción diseñada para gestionar un riesgo o ayudar a que un proceso alcance el resultado previsto.'],
 ['Linaje de datos','Ruta trazable desde la evidencia de origen, pasando por sus transformaciones, hasta una cifra o afirmación comunicada.'],
 ['Doble materialidad','Consideración tanto de los efectos sobre el valor de la empresa como de los impactos sobre las personas o el medio ambiente.'],
 ['Diligencia debida','Proceso continuo para identificar, prevenir, mitigar, seguir y comunicar cómo se abordan los impactos.'],
 ['Equidad','Acceso y trato justos que reconocen diferentes barreras o circunstancias sin eliminar estándares válidos.'],
 ['Greenwashing','Afirmación o impresión relacionada con sostenibilidad que es materialmente engañosa, no está respaldada o es más amplia que la evidencia disponible.'],
 ['Pensamiento de ciclo de vida','Consideración de efectos relevantes aguas arriba, durante la operación y aguas abajo sin afirmar que se ha realizado un análisis formal de ciclo de vida.'],
 ['Apetito de riesgo','Cantidad y tipo de riesgo que una organización está dispuesta a asumir o mantener dentro de límites definidos.'],
 ['Alcance 3','Otras emisiones indirectas de gases de efecto invernadero en la cadena de valor de una organización, sujetas a categorías y métodos definidos.']
]
export const getModules=lang=>lang==='es'?modulesEs:modules
export const getGlossary=lang=>lang==='es'?glossaryEs:glossary
