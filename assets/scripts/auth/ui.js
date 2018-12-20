'use strict'

const store = require('../store.js')

const signUpSuccess = data => {
  $('#message').text('Signed up successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#email').val('')
  $('#password').val('')
  $('#confirm_password').val('')
  // console.log('signUpSuccess ran. Data is :', data)
}

const signUpFailure = () => {
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('#email').val('')
  $('#password').val('')
  $('#confirm_password').val('')
}

const signInSuccess = data => {
  store.user = data.user
  $('#message').text('Signed in successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign_up').hide()
  $('#sign_in').hide()
  $('#sign_out').removeClass('d-none')
  $('#change_password').removeClass('d-none')
  $('.button_container button').removeClass('d-none')
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
}

const findSomeoneSuccess = data => {
  $('#message').text('YOUR LONELY WILL CONTACT U SOo0on')
  $('#location').val('')
  $('#gender').val('')
  $('#hair').val('')
  $('#clothes').val('')
  $('#car').val('')
  $('#text').val('')
}

const findSomeoneFailure = data => {
  $('#message').text('OOo0ops')
  $('#location').val('')
  $('#gender').val('')
  $('#hair').val('')
  $('#clothes').val('')
  $('#car').val('')
  $('#text').val('')
}

// const amIbeingMissedFormSuccess = data => {
//   $('#message').text('Coming SooOo0n')
// }
//
// const amIbeingMissedFormFailure = data => {
//   $('#message').text('Coming SooOo0n')
// }

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
  $('#message').text('YOU LOVED A LONELY')
}

const loveOneLonelyFailure = data => {
  $('#message').text('OOPS')
}

const updateOneLonelySuccess = data => {
  console.log('update success')
  $('#update_content').append(updateOneLonelySuccess)
}

const updateOneLonelyFailure = data => {
  console.log('update failed oooooops')
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
  findSomeoneSuccess,
  findSomeoneFailure,
  // amIbeingMissedFormSuccess,
  // amIbeingMissedFormFailure,
  missedConnectionApiSuccess,
  missedConnectionApiFailure,
  get1LonelySuccess,
  get1LonelyFailure,
  loveOneLonelySuccess,
  loveOneLonelyFailure,
  updateOneLonelyFailure
}
