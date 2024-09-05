import '../instrument.sentry.mjs'

/*  Tried to create something similar to Sentry as a "sentry mock" but import-in-the-middle won't be included in the build node_modules */
// import '../instrument.mock.mjs'

export default defineNitroPlugin((nitroApp) => {
    console.log('Loaded Nitro plugin', nitroApp)
})