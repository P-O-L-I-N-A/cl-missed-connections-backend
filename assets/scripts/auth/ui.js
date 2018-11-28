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

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
