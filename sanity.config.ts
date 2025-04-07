import {defineConfig} from 'sanity'
import deskStructure from './deskStructure'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Tsundoku-studio',

  projectId: 'f4z0lzmo',
  dataset: 'production',
  basePath: '/studio',

  plugins: [structureTool({structure: deskStructure}), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
