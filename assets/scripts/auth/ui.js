'use strict'

const store = require('../store.js')

const signUpSuccess = data => {
  $('#message').text('Signed up successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#password').val('')
  $('#password2').val('')
  $('#email').val('')
  // console.log('signUpSuccess ran. Data is :', data)
}

const signUpFailure = () => {
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  // console.error('signUpFailure ran. Error is :', error)
}

const signInSuccess = data => {
  store.user = data.user
  $('#playerName').text(data.user.email)
  $('#message').text('Signed in successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signInSuccess ran. Data is :', data)
  $('#main').removeClass('d-none')
  $('#sign_up').hide()
  $('#sign_in').hide()
  $('#sign_out').removeClass('d-none')
  $('#change_password').removeClass('d-none')
  $('#missed_connection').removeClass('d-none')
  $('#missed_connection_me').removeClass('d-none')
  $('#lonely_ppl').removeClass('d-none')
  $('#missed_connection_missed').removeClass('d-none')
  $('#1lonely_ppl').removeClass('d-none')
  $('#love_lonely').removeClass('d-none')
}

const signInFailure = () => {
  $('#message').text('Error on sign in')
  $('#message').removeClass()
  $('#message').addClass('failure')
  // console.error('signInFailure ran. Error is :', error)
}

const changePasswordSuccess = data => {
  $('#message').text('Password changed successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#oldPassword').val('')
  $('#newPassword').val('')
  console.log('changePasswordSuccess ran. Data is :', data)
}

const changePasswordFailure = () => {
  $('#message').text('Error on password change')
  $('#message').removeClass()
  $('#message').addClass('failure')
// console.error('changePasswordFailure ran. Error is :', error)
}

const signOutSuccess = data => {
  $('#message').text('Signed out successfully')
  store.user = null
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signOutSuccess ran. Data is :', data)
}

const signOutFailure = () => {
  $('#message').text('Error on sign out')
  $('#message').removeClass()
  $('#message').addClass('failure')
// console.error('signOutFailure ran. Error is :', error)
}

const missedConnectionApiSuccess = data => {
  console.log('MissedConnectionSuccess')
  console.log(data)
  $('#content').html('')
  data.connections.forEach(connection => {
    const connectionHTML = (`
      <h4>ID: ${connection.id}</h4>
      <p>LOCATION: ${connection.location}</p>
      <p>GENDER: ${connection.gender}</p>
      <p>HAIR: ${connection.hair}</p>
      <p>CLOTHES: ${connection.clothes}</p>
      <p>CAR: ${connection.car}</p>
      <p>TEXT: ${connection.text}</p>
      <br>
    `)
    $('#content').append(connectionHTML)
  })
}

const missedConnectionApiFailure = () => {
  console.log('MissedConnectionFailure')
}

const missedConnectionSubmitSuccess = data => {
  console.log('MC SUBMIT SUCCESS')
  $('#location').val('')
  $('#gender').val('')
  $('#hair').val('')
  $('#clothes').val('')
  $('#car').val('')
  $('#text').val('')
  console.log(data)
}

const missedConnectionSubmitFailure = data => {
  console.log('MC SUBMIT FAILURE')
}

const missedConnectionMeSuccess = data => {
  console.log('MC ME SUCCESS')
  console.log(data)
}

const missedConnectionMeFailure = data => {
  console.log('MC ME FAILURE')
}

const get1LonelySuccess = data => {
  console.log(data)
  $('#lonely_content').html('')
  const connections = data.connection
  const oneLonelyHTML = (`
    <h4>ID: ${connections.id}</h4>
    <p>LOCATION: ${connections.location}</p>
    <p>GENDER: ${connections.gender}</p>
    <p>HAIR: ${connections.hair}</p>
    <p>CLOTHES: ${connections.clothes}</p>
    <p>CAR: ${connections.car}</p>
    <p>TEXT: ${connections.text}</p>
    <br>
  `)
  console.log(oneLonelyHTML)
  $('#lonely_content').append(oneLonelyHTML)
}

const get1LonelyFailure = data => {
  console.log('error')
}

const loveOneLonelySuccess = data => {
  console.log(data, 'loved a lonely')
}

const loveOneLonelyFailure = data => {
  console.log(data, 'yikes')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  missedConnectionApiSuccess,
  missedConnectionApiFailure,
  missedConnectionSubmitSuccess,
  missedConnectionSubmitFailure,
  missedConnectionMeSuccess,
  missedConnectionMeFailure,
  get1LonelySuccess,
  get1LonelyFailure,
  loveOneLonelySuccess,
  loveOneLonelyFailure
}
