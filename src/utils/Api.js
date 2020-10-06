class Api {
  constructor({baseUrl, headers}) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }
  checkResponce(res) {
    if (res.ok) {
      return res.json()
    } else {
      return Promise.reject(res.status)
    }
  }
  getProfileInfo() {
    return fetch(`${this.baseUrl}/users/me` ,{
      headers: this.headers
    })
    .then(this.checkResponce)
  }
  getInitialCards() {
    return fetch(`${this.baseUrl}/cards` , {
      headers: this.headers
    })
      .then((data) => {
        if(data.ok) {
          return data.json()
        } else {
          return Promise.reject(data.status)
        }
      })
  }
  updateProfileInfo(item) {
    return fetch(`${this.baseUrl}/users/me` , {
      method: 'PATCH',
      headers: {
        authorization: '9dc23caf-3e9f-4f59-bf1d-09412a94602c',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    })
      .then(this.checkResponce)
  }
  addCard(item) {
    return fetch(`${this.baseUrl}/cards` , {
      method: 'POST',
      headers: {
        authorization: '9dc23caf-3e9f-4f59-bf1d-09412a94602c',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    })
      .then(this.checkResponce)
  }
  likeCard(id) {
    return fetch(`${this.baseUrl}/cards/likes/${id}`, {
      method: 'PUT',
      headers: this.headers
      })
      .then(this.checkResponce)
  }
  deleteLike(id) {
    return fetch(`${this.baseUrl}/cards/likes/${id}`, {
      method: 'DELETE',
      headers: this.headers
      })
      .then(this.checkResponce)
  }
  deleteCard(id) {
    return fetch(`${this.baseUrl}/cards/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: '9dc23caf-3e9f-4f59-bf1d-09412a94602c',
        'Content-Type': 'application/json'
      },
    })
    .then(this.checkResponce)
  }
  updateAvatar(avatar) {
    return fetch(`${this.baseUrl}/users/me/avatar` , {
      method: 'PATCH',
      headers: {
        authorization: '9dc23caf-3e9f-4f59-bf1d-09412a94602c',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(avatar)
    })
    .then(this.checkResponce)
  }
  editLikeActive(id, isLiked) {
		const res = isLiked ? this.likeCard(id) : this.deleteLike(id);
		return res;
	}
}

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-14',
  headers: {
    authorization: '9dc23caf-3e9f-4f59-bf1d-09412a94602c'
  }
})

export default api;
