const { faker } = require("@faker-js/faker")

class UserService {
  constructor () {
    this.users = []
    this.generate()
  }

  generate () {
    for (let i = 0;i < 10; i++) {
      this.users.push({
        id: faker.string.uuid(),
        name: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        password: faker.internet.password(),
        birthday: faker.date.birthdate()
      })
    }
  }

  find() {
    return this.users
  }

  findOne(data) {
    return this.users.find( i => i.id === data || i.email === data || i.name === data)
  }

  create(data) {
    this.users.push(data)
    return {
      message: "created",
      data: data
    }
  }

  update(data,body) {
    const user = this.users.find( i => i.id === data || i.email === data || i.name === data)
    return user
  }

  delete(id) {
    const user = this.users.find( i => i.id === data || i.email === data || i.name === data)
  }
}

module.exports = UserService
