const { faker } = require("@faker-js/faker")

class UserService {
  constructor () {
    this.users = []
    this.generate()
  }

  generate () {
    const limit = 10
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

  async find() {
    return new Promise((res,rej) => {
      setTimeout(() => {
        res(this.users)
      },5000)
    })
  }

  async findOne(data) {
    return new Promise((res,rej) => {
      setTimeout(() => {
        res(this.users.find( i => i.id === data || i.email === data || i.name === data))
      },5000)
    })
  }

  async create(data) {
    return new Promise((res,rej) => {
      const newUser = {
        id: faker.string.uuid(),
        ...data
      }
      this.users.push(newUser)
      
      setTimeout(() => {
        res({
          message: "created",
          data: newUser
        })
      },5000)
    })
  }

  async update(data,body) {
    return new Promise((res,rej) => {
      const index = this.users.findIndex( i => i.id === data || i.email === data || i.name === data)
      if (index === -1) throw new Error("User not found")
      let user = this.users[index]
      this.users[index] = {
        ...user,
        ...body
      }

      setTimeout(() => {
        res(this.users[index])
      },5000)
    })

  }

  async deleteOne(id) {
    return new Promise((res,rej) => {
      const index = this.users.findIndex( i => i.id === data || i.email === data || i.name === data)
      if (index === -1) throw new Error("User not found")
      this.users.splice(index,1)

      setTimeout(() => {
        res({ id })
      },5000)
    })  
  }
}

module.exports = UserService
