'use strict'

const config = require('../config.js')
const store = require('../store.js')

const signUp = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

const changePassword = data => {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const signOut = () => {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const missedConnectionApi = () =>
  $.ajax({
    url: config.apiUrl + '/connections',
    method: 'GET'
  })

const missedConnectionSubmit = (data1) =>
  $.ajax({
    url: config.apiUrl + '/connections',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'connection': data1
    }
  })

const missedConnectionMe = (data2) =>
  $.ajax({
    url: config.apiUrl + '/my_attrs',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'connection': data2
    }
  })

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  missedConnectionApi,
  missedConnectionSubmit,
  missedConnectionMe
}
