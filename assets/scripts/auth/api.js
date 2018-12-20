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

const findSomeone = data =>
  $.ajax({
    url: config.apiUrl + '/connections',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'connection': data
    }
  })

const missedConnectionApi = () => {
  return $.ajax({
    url: config.apiUrl + '/connections',
    method: 'GET'
  })
}

// const amIbeingMissedForm = data =>
//   $.ajax({
//     url: config.apiUrl + '/my_attrs',
//     method: 'POST',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data: {
//       'connection': data
//     }
//   })

const get1Lonely = id => {
  const lonelyId = id.ID
  return $.ajax({
    url: config.apiUrl + '/connections/' + lonelyId,
    method: 'GET'
  })
}

const loveOneLonely = id => {
  const lonelyId2 = id.ID
  return $.ajax({
    url: config.apiUrl + '/connections/' + lonelyId2,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    id
  })
}

const updateOneLonely = id => {
  const lonelyId3 = id.connection.ID
  return $.ajax({
    url: config.apiUrl + '/connections/' + lonelyId3,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: id
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  findSomeone,
  missedConnectionApi,
  // missedConnectionMe,
  get1Lonely,
  loveOneLonely,
  updateOneLonely
}
