import { list } from '@keystone-6/core'
import { integer, select, text } from '@keystone-6/core/fields'

export const Product = list({
  // TODO
  // access
  fields: {
    name: text({ validation: { isRequired: true } }),
    description: text({ ui: { displayMode: 'textarea' } }),
    status: select({
      options: [
        { label: 'Draft', value: 'DRAFT' },
        { label: 'Available', value: 'AVAILABLE' },
        { label: 'Unavailable', value: 'UNAVAILABLE' },
      ],
      defaultValue: 'DRAFT',
      ui: {
        displayMode: 'segmented-control',
        // createView: { fieldMode: 'hidden' },
      },
    }),
    price: integer(),
    // TODO: photo
  },
})
