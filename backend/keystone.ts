import 'dotenv/config'
// import {config} from '@keystone-6/core'
// import { KeystoneConfig, DatabaseConfig, AdminUIConfig } from '@keystone-6/core/types'

const databaseURL = process.env.DATABASE_URL || 'postgres://dbuser:dbpass@localhost:5432/keystone'

// export default config({
//   db: {
//     provider: 'postgresql',
//     url: databaseURL,
//   },
//   lists: {

//   },
//   ui: {
//     // TODO: change this for rules
//     isAccessAllowed: () => true
//   }
// })
// export default config({
// server: {
//   cors: {
//     origin: [process.env.FRONTEND_URL || 'localhost'],
//     credentials: true,
//   },
// },
// db: {
//   provider: 'postgresql',
//   url: databaseURL,
//   // TODO: add data seeding here
// },

// })

// const sessionConfig = {
//   maxAge: 60 * 60 * 24 * 360, // how long should they stay signed in?
//   secret: process.env.COOKIE_SECRET
// }
/*
Welcome to Keystone! This file is what keystone uses to start the app.

It looks at the default export, and expects a Keystone config object.

You can find all the config options in our docs here: https://keystonejs.com/docs/apis/config
*/

import { config } from '@keystone-6/core'

// Look in the schema file for how we define our lists, and how users interact with them through graphql or the Admin UI
import { lists } from './schema'

// Keystone auth is configured separately - check out the basic auth setup we are importing from our auth file.
import { withAuth, session } from './auth'

export default withAuth(
  // Using the config function helps typescript guide you to the available options.
  config({
    // the db sets the database provider - we're using sqlite for the fastest startup experience
    db: {
      provider: 'postgresql',
      url: databaseURL,
    },
    // This config allows us to set up features of the Admin UI https://keystonejs.com/docs/apis/config#ui
    ui: {
      // For our starter, we check that someone has session data before letting them see the Admin UI.
      isAccessAllowed: (context) => !!context.session?.data,
    },
    server: {
      cors: {
        origin: [process.env.FRONTEND_URL || 'localhost'],
        credentials: true,
      },
    },
    lists,
    session,
  }),
)
