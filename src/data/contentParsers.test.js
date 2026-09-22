import {describe,expect,it} from 'vitest'
import {parseQuestions,parseVisuals,splitModule} from './contentParsers'

describe('bilingual content parsers',()=>{
 it.each([
  ['en','# Module\n\n## Lesson 1 — Theory\nBody\n\n## What this means in Air Power Services\nScenario\n\n## Module close\nClose'],
  ['es','# Módulo\n\n## Lección 1 — Teoría\nContenido\n\n## Qué significa esto en Air Power Services\nEscenario\n\n## Cierre del módulo\nCierre']
 ])('splits %s module headings without changing their content',(_,source)=>{
  const result=splitModule(source)
  expect(result.opening).toMatch(/^# /)
  expect(result.theory).toMatch(/^## (Lesson|Lección) 1/)
  expect(result.scenario).toMatch(/^## (What this means|Qué significa esto)/)
  expect(result.close).toMatch(/^## (Module close|Cierre del módulo)/)
 })

 it.each([
  ['en','Question','Correct','What is governed?','Evidence supports the decision.'],
  ['es','Pregunta','Respuesta correcta','¿Qué está gobernado?','La evidencia apoya la decisión.']
 ])('parses %s question, answers and rationale',(_,questionLabel,correctLabel,prompt,rationale)=>{
  const source=`# Check\n\n## ${questionLabel} 1\n\n${prompt}\n\nA. A first answer.  \nB. A governed answer.  \nC. A third answer.  \nD. A fourth answer.\n\n**${correctLabel}: B.** ${rationale}`
  const [question]=parseQuestions(source,'01')
  expect(question).toMatchObject({id:'M01-Q01',q:prompt,c:1,r:rationale})
  expect(question.a).toHaveLength(4)
 })

 it('keeps Spanish visual labels when parsing a visual register',()=>{
  const [visual]=parseVisuals('# Visuales\n\n## Visual 1 — Cadena de decisión\n\n**Elementos:** Evidencia → Decisión → Acción → Revisión')
  expect(visual.title).toBe('Cadena de decisión')
  expect(visual.labels).toEqual(expect.arrayContaining(['Evidencia','Decisión','Acción','Revisión']))
 })
})
