'use strict'

const authEvents = require('./auth/events.js')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign_up').on('submit', authEvents.onSignUp)
  $('#sign_in').on('submit', authEvents.onSignIn)
  $('#change_password').on('submit', authEvents.onChangePassword)
  $('#sign_out').on('submit', authEvents.onSignOut)
})
