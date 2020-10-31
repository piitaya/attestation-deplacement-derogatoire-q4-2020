import { $ } from './dom-utils'

const PROFILE_KEY = 'profile'
const SAVED_FIELDS = [
  'firstname',
  'lastname',
  'address',
  'city',
  'zipcode',
  'placeofbirth',
  'birthday',
]

export function saveProfile (profile) {
  const savedProfile = SAVED_FIELDS.reduce(
    (acc, field) => ({
      ...acc,
      [field]: profile[field],
    }),
    {},
  )
  localStorage.setItem(PROFILE_KEY, JSON.stringify(savedProfile))
}

export function loadProfile () {
  const profileString = localStorage.getItem(PROFILE_KEY)
  console.log(profileString)
  return profileString ? JSON.parse(profileString) : undefined
}

export function clearProfile () {
  localStorage.removeItem(PROFILE_KEY)
}

export function prefill () {
  const profile = loadProfile()
  if (profile) {
    SAVED_FIELDS.forEach((field) => {
      const value = profile[field]
      if (value) {
        $(`#field-${field}`).value = value
      }
      $('#checkbox-save').checked = true
    })
  }
}
