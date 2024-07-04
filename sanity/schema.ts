import { Studio, type SchemaTypeDefinition } from 'sanity'
import { Student } from './student'
import { Teacher } from './teacher'
import { subject } from './subject'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Student,Teacher,subject],
}
