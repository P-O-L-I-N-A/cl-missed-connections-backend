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
  $('#find_someone_form').on('submit', authEvents.onFindSomeone)
  $('#am_i_being_missed').on('click', authEvents.onAmIbeingMissed)
  $('#am_i_being_missed_form').on('submit', authEvents.onAmIbeingMissedForm)
  $('#lonelies').on('click', authEvents.onLonelies)
  $('#get_a_lonely').on('click', authEvents.onGetAlonely)
  $('#get_1_lonely_form').on('submit', authEvents.onGet1Lonely)
  $('#update_1_lonely_form').on('submit', authEvents.onUpdate1Lonely)
  $('#love_a_lonely').on('click', authEvents.onLoveAlonely)
  $('#love_one_lonely_form').on('submit', authEvents.onLove1Lonely)
})
