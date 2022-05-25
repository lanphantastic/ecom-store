// Like the `config` function we use in keystone.ts, we use functions
// for putting in our config so we get useful errors. With typescript,
// we get these even before code runs.
import { list } from '@keystone-6/core'
import { relationship, text } from '@keystone-6/core/fields'
// We're using some common fields in the starter. Check out https://keystonejs.com/docs/apis/fields#fields-api
// for the full list of fields.

/*
Some quick definitions to help out:
A list: A definition of a collection of fields with a name. For the starter
  we have `User`, `Post`, and `Tag` lists.
A field: The individual bits of data on your list, each with its own type.
  you can see some of the lists in what we use below.
*/

export const Tag = list({
  ui: {
    isHidden: true,
  },
  fields: {
    name: text(),
    posts: relationship({ ref: 'Post.tags', many: true }),
  },
})
