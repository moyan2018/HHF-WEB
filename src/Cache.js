export default {
  onLine: {
    set(key, value) {
      window.sessionStorage.setItem(key, value)
    },
    get(key) {
      return window.sessionStorage.getItem(key)
    },
    remove(key) {
      window.sessionStorage.removeItem(key)
    },
    clear() {
      window.sessionStorage.clear()
    }
  },
  onSave: {
    set(key, value) {
      window.localStorage.setItem(key, value)
    },
    get(key) {
      return window.localStorage.getItem(key)
    },
    remove(key) {
      window.localStorage.removeItem(key)
    },
    clear() {
      window.localStorage.clear()
    }
  }
}
