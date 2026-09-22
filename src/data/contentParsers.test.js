import { describe, expect, it } from 'vitest'
import { parseQuestions, parseVisuals, splitModule } from './contentParsers'

describe('bilingual content parsers',()=>{
 it('splits Spanish module headings',()=>{
  const source='# Módulo\n\n## Apertura\nInicio\n\n## Lección 1 — Uno\nTeoría\n\n## Qué significa esto en Air Power Services\nEscenario\n\n## Cierre del módulo\nCierre'
  const result=splitModule(source)
  expect(result.theory).toContain('## Lección 1')
  expect(result.scenario).toContain('## Qué significa esto')
  expect(result.close).toContain('## Cierre del módulo')
 })
 it('parses Spanish questions and correct answers',()=>{
  const source='# Test\n\n## Pregunta 1\n\n¿Qué opción es correcta?\n\nA. Primera\nB. Segunda\nC. Tercera\nD. Cuarta\n\n**Respuesta correcta: B.** Explicación.'
  const [q]=parseQuestions(source,'ES')
  expect(q.q).toBe('¿Qué opción es correcta?')
  expect(q.a).toEqual(['Primera','Segunda','Tercera','Cuarta'])
  expect(q.c).toBe(1)
  expect(q.r).toContain('Explicación')
 })
 it('keeps Spanish visual content available',()=>{
  const source='# Visuales\n\n## Visual 1 — Cadena de evidencia\n\n**Objetivo:** Mostrar conexiones.\n**Elementos:** Fuente → Evidencia → Decisión → Acción.'
  const [v]=parseVisuals(source)
  expect(v.title).toBe('Cadena de evidencia')
  expect(v.labels.length).toBeGreaterThan(2)
 })
})
