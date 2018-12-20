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
  $('#i_am_missing_someone').on('click', authEvents.onIamMissingSomeone)
  $('#find_someone').on('submit', authEvents.onFindSomeone)
  $('#am_i_being_missed').on('click', authEvents.onAmIbeingMissed)
  $('#am_i_being_missed_form').on('submit', authEvents.onAmIbeingMissedForm)
  $('#lonely_ppl').on('click', authEvents.onMissedConnectionApi)
  $('#1lonely_ppl').on('click', authEvents.onGetOneLonely)
  $('#GetOneLonely').on('submit', authEvents.onGet1Lonely)
  $('#love_lonely').on('click', authEvents.onLoveLonely)
  $('#loveOneLonely').on('submit', authEvents.onLoveOneLonely)
  $('#updateOneLonely').on('submit', authEvents.onUpdateOneLonely)
})
