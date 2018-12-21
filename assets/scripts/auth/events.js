'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  // take this data and send it to our server
  // using an HTTP request (POST)
  api.signUp(data)
    .then(ui.signUpSuccess) // if your request was succesful
    .catch(ui.signUpFailure) // if your request failed
}

const onSignIn = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = event => {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onIamMissingSomeone = event => {
  event.preventDefault()
  $('#find_someone_form').toggle()
}

const onFindSomeone = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.findSomeone(data)
    .then(ui.findSomeoneSuccess)
    .catch(ui.findSomeoneFailure)
}

const onAmIbeingMissed = event => {
  event.preventDefault()
  $('#am_i_being_missed_form').toggle('')
}

const onAmIbeingMissedForm = event => {
  event.preventDefault()
  $('#message').text('Coming SoO0oon')
  $('#location2').val('')
  $('#gender2').val('')
  $('#hair2').val('')
  $('#clothes2').val('')
  $('#car2').val('')
  $('#text2').val('')
  // const data = getFormFields(event.target)
  // api.amIbeingMissedForm(data)
  //   .then(ui.amIbeingMissedFormSuccess)
  //   .catch(ui.amIbeingMissedFormFailure)
}

const onLonelies = event => {
  event.preventDefault()
  api.lonelies()
    .then(ui.loneliesSuccess)
    .catch(ui.loneliesFailure)
  $('.container').toggle('')
  $('.container').html('')
}

const onGetAlonely = event => {
  event.preventDefault()
  $('#get_1_lonely_form').toggle('')
  $('#update_1_lonely_form').toggle('')
}

const onGet1Lonely = event => {
  event.preventDefault()
  const id = getFormFields(event.target)
  api.get1Lonely(id)
    .then(ui.get1LonelySuccess)
    .catch(ui.get1LonelyFailure)
  $('#lonely_content').toggle('')
}

const onUpdate1Lonely = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.update1Lonely(data)
    .then(ui.update1LonelySuccess)
    .catch(ui.update1LonelyFailure)
}

const onLoveAlonely = event => {
  event.preventDefault()
  $('#love_one_lonely_form').toggle('')
}

const onLove1Lonely = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.love1Lonely(data)
    .then(ui.love1LonelySuccess)
    .catch(ui.love1LonelyFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onIamMissingSomeone,
  onFindSomeone,
  onAmIbeingMissed,
  onAmIbeingMissedForm,
  onLonelies,
  onGetAlonely,
  onGet1Lonely,
  onUpdate1Lonely,
  onLoveAlonely,
  onLove1Lonely
}
