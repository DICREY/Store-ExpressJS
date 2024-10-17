const { faker } = require("@faker-js/faker")

class UserService {
  constructor () {
    this.users = []
    this.generate()
  }

  generate () {
    let limit = 10
    for (let i = 0;i < limit; i++) {
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
    const newUser = {
      id: faker.string.uuid(),
      ...data
    }
    this.users.push(newUser)
    return {
      message: "created",
      data: newUser
    }
  }

  update(data,body) {
    const user = this.users.find( i => i.id === data || i.email === data || i.name === data)
    return user
  }

  delete(id) {
    const user = this.users.delete( i => i.id === data || i.email === data || i.name === data)
  }
}

module.exports = UserService
