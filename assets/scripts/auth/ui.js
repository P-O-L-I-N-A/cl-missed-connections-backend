'use strict'

const store = require('../store.js')

const signUpSuccess = data => {
  $('#message').text('Signed up successfully')
  $('#message').removeClass()
  $('#message').show()
  $('#message').addClass('success')
  $('#email').val('')
  $('#password').val('')
  $('#confirm_password').val('')
  setTimeout(function () {
    $('#message').hide()
    $('#message').text('')
  }, 5000)
}

const signUpFailure = data => {
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').show()
  $('#message').addClass('failure')
  $('#email').val('')
  $('#password').val('')
  $('#confirm_password').val('')
  setTimeout(function () {
    $('#message').hide()
    $('#message').text('')
  }, 5000)
}

const signInSuccess = data => {
  store.user = data.user
  $('#message').text('Signed in successfully')
  $('#message').removeClass()
  $('#message').show()
  $('#message').addClass('success')
  $('#email2').val('')
  $('#password2').val('')
  $('#sign_up').hide()
  $('#sign_in').hide()
  $('#sign_out').removeClass('d-none')
  $('#change_password').removeClass('d-none')
  $('.dissapear').removeClass('d-none')
  $('.button_container button').removeClass('d-none')
  setTimeout(function () {
    $('#message').hide()
    $('#message').text('')
  }, 5000)
}

const signInFailure = data => {
  $('#message').text('Error on sign in')
  $('#message').removeClass()
  $('#message').show()
  $('#message').addClass('failure')
  $('#email2').val('')
  $('#password2').val('')
  setTimeout(function () {
    $('#message').hide()
    $('#message').text('')
  }, 5000)
}

const changePasswordSuccess = data => {
  $('#message').text('Password changed successfully')
  $('#message').removeClass()
  $('#message').show()
  $('#message').addClass('success')
  $('#old_password').val('')
  $('#new_password').val('')
  setTimeout(function () {
    $('#message').hide()
    $('#message').text('')
  }, 5000)
}

const changePasswordFailure = data => {
  $('#message').text('Error on password change')
  $('#message').removeClass()
  $('#message').show()
  $('#message').addClass('failure')
  $('#old_password').val('')
  $('#new_password').val('')
  setTimeout(function () {
    $('#message').hide()
    $('#message').text('')
  }, 5000)
}

const signOutSuccess = data => {
  $('#message').text('Signed out successfully')
  store.user = null
  $('#message').removeClass()
  $('#message').show()
  $('#message').addClass('success')
  $('.button_container button').addClass('d-none')
  $('.dissapear').addClass('d-none')
  setTimeout(function () {
    $('#message').hide()
    $('#message').text('')
  }, 5000)
  $('#sign_in').show()
  $('#sign_up').show()
}

const signOutFailure = () => {
  $('#message').text('Error on sign out')
  $('#message').removeClass()
  $('#message').show()
  $('#message').addClass('failure')
  setTimeout(function () {
    $('#message').hide()
    $('#message').text('')
  }, 5000)
}

const findSomeoneSuccess = data => {
  $('#message').show()
  $('#message').text('YOUR LONELY WILL CONTACT U SOo0on')
  $('#location').val('')
  $('#gender').val('')
  $('#hair').val('')
  $('#clothes').val('')
  $('#car').val('')
  $('#text').val('')
  setTimeout(function () {
    $('#message').hide()
    $('#message').text('')
  }, 5000)
}

const findSomeoneFailure = data => {
  $('#message').text('OOo0ops')
  $('#message').show()
  $('#location').val('')
  $('#gender').val('')
  $('#hair').val('')
  $('#clothes').val('')
  $('#car').val('')
  $('#text').val('')
  setTimeout(function () {
    $('#message').hide()
    $('#message').text('')
  }, 5000)
}

// const amIbeingMissedFormSuccess = data => {
//   $('#message').text('Coming SooOo0n')
// }
//
// const amIbeingMissedFormFailure = data => {
//   $('#message').text('Coming SooOo0n')
// }

const loneliesSuccess = data => {
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

const loneliesFailure = () => {
  $('#message').text('OOo0ops')
}

const get1LonelySuccess = data => {
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
  $('#lonely_content').append(oneLonelyHTML)
  $('#id').val('')
}

const get1LonelyFailure = data => {
  $('#message').text('OOo0ops')
  $('#message').show('')
  $('#id').val('')
  setTimeout(function () {
    $('#message').hide()
    $('#message').text('')
  }, 5000)
}

const update1LonelySuccess = data => {
  $('#message').text('Your coNneCtIoN Has BeEn UpDatEd')
  $('#message').show('')
  $('#lonely_content').append('')
  $('#id3').val('')
  $('#location3').val('')
  $('#gender3').val('')
  $('#hair3').val('')
  $('#clothes3').val('')
  $('#car3').val('')
  $('#text3').val('')
  setTimeout(function () {
    $('#message').hide()
    $('#message').text('')
  }, 5000)
}

const update1LonelyFailure = data => {
  $('#message').text('OOo0ops')
  $('#message').show('')
  setTimeout(function () {
    $('#message').hide()
    $('#message').text('')
  }, 5000)
}

const love1LonelySuccess = data => {
  $('#message').text('YOU LOVED A LONELY')
  $('#message').show('')
  $('#id4').val('')
  setTimeout(function () {
    $('#message').hide()
    $('#message').text('')
  }, 5000)
}

const love1LonelyFailure = data => {
  $('#message').text('OOo0ops')
  $('#message').show('')
  $('#id4').val('')
  setTimeout(function () {
    $('#message').hide()
    $('#message').text('')
  }, 5000)
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
  loneliesSuccess,
  loneliesFailure,
  get1LonelySuccess,
  get1LonelyFailure,
  update1LonelySuccess,
  update1LonelyFailure,
  love1LonelySuccess,
  love1LonelyFailure
}
