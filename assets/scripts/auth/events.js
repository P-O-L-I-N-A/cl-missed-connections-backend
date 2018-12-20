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
  $('#find_someone').toggle()
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

const onMissedConnectionApi = event => {
  event.preventDefault()
  api.missedConnectionApi()
    .then(ui.missedConnectionApiSuccess)
    .catch(ui.missedConnectionApiFailure)
  $('.container').toggle('#content')
  $('.container').html('')
}

const onGetOneLonely = event => {
  event.preventDefault()
  console.log('click')
  $('#GetOneLonely').toggle('Get1Lonely')
  $('#updateOneLonely').toggle('updateOneLonely')
}

const onGet1Lonely = event => {
  event.preventDefault()
  const id = getFormFields(event.target)
  console.log(id)
  api.get1Lonely(id)
    .then(ui.get1LonelySuccess)
    .catch(ui.get1LonelyFailure)
  $('#lonely_content').toggle('lonely_content')
}

const onLoveLonely = event => {
  event.preventDefault()
  $('#loveOneLonely').toggle('loveOneLonely')
}

const onLoveOneLonely = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.loveOneLonely(data)
    .then(ui.loveOneLonelySuccess)
    .catch(ui.loveOneLonelyFailure)
}

const onUpdateOneLonely = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.updateOneLonely(data)
    .then(ui.updateOneLonelySuccess)
    .catch(ui.updateOneLonelyFailure)
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
  onMissedConnectionApi,
  onGetOneLonely,
  onGet1Lonely,
  onLoveLonely,
  onLoveOneLonely,
  onUpdateOneLonely
}
