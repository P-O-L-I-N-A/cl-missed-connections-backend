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

const onMissedConnection = event => {
  event.preventDefault()
  //  $('#missed_connections_submit').removeClass('d-none')
  $('#missed_connections_submit').toggle('#missed_connections_submit')
}

const onMissedConnectionApi = event => {
  event.preventDefault()
  api.missedConnectionApi()
    .then(ui.missedConnectionApiSuccess)
    .catch(ui.missedConnectionApiFailure)
  $('.container').toggle('#content')
}

const onMissedConnectionSubmit = event => {
  event.preventDefault()
  console.log('what1')
  // const currUser = store.user.id
  const data = getFormFields(event.target)
  console.log(data)
  api.missedConnectionSubmit(data)
    .then(ui.missedConnectionSubmitSuccess)
    .catch(ui.missedConnectionSubmitFailure)
}

const onMissedConnectionMe = event => {
  console.log('what')
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.missedConnectionMe(data)
    .then(ui.missedConnectionMeSuccess)
    .catch(ui.missedConnectionMeFailure)
}

const onMissedConnectionMissed = event => {
  event.preventDefault()
  $('#missed_connections_meme').toggle('missed_connections_meme')
}

const onGetOneLonely = event => {
  event.preventDefault()
  console.log('click')
  $('#GetOneLonely').toggle('Get1Lonely')
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

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onMissedConnection,
  onMissedConnectionApi,
  onMissedConnectionSubmit,
  onMissedConnectionMe,
  onMissedConnectionMissed,
  onGetOneLonely,
  onGet1Lonely
}
