import http from "../http-common"

class ScheduleDataService {
  getAll() {
    return http.get("schedules");
  }

  get(id) {
    return http.get(`/tutorials/${id}`)
  }

  create(data) {
    return http.post("/schedules", data)
  }

  update(id, data) {
    return http.put(`/tutorials/${id}`, data)
  }

  delete(id) {
    return http.delete(`tutorials/${id}`)
  }

  deleteAll() {
    return http.delete(`/schedules`)
  }

  findByTitle(title) {
    return http.get(`tutorials?title=${title}`)
  }
}

export default new ScheduleDataService()