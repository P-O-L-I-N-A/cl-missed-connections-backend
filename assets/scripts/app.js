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
  $('#missed_connection').on('click', authEvents.onMissedConnection)
  $('#missed_connection_meme').on('click', authEvents.onMissedConnectionMe)
  $('#missed_connections_submit').on('submit', authEvents.onMissedConnectionSubmit)
  $('#lonely_ppl').on('click', authEvents.onMissedConnectionApi)
  $('#missed_connection_missed').on('click', authEvents.onMissedConnectionMissed)
  $('#1lonely_ppl').on('click', authEvents.onGetOneLonely)
  $('#GetOneLonely').on('submit', authEvents.onGet1Lonely)
  $('#love_lonely').on('click', authEvents.onLoveLonely)
  $('#loveOneLonely').on('submit', authEvents.onLoveOneLonely)
})
