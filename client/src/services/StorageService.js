import Api from '@/services/Api'

export default {
  getAll (credentials) {
    return Api().get(`notes?id=${credentials.id}`)
  },
  get (credentials) {
    return Api().get(`notes?id=${credentials.id}`)
  },
  post (credentials) {
    const {title, url, content} = credentials
    return Api().post(`note?id=${credentials.id}`, {title, url, content})
  },
  delete (credentials) {
    return Api().delete('note', credentials)
  }
}
