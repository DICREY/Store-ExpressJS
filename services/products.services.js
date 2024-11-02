// librarys 
const { faker } = require('@faker-js/faker')
const boom = require('@hapi/boom')

class ProductsService {
  constructor () {
    this.products = []
    this.generate()
  }

  generate() {
    const limit = 10
    for (let i = 0;i < limit; i++) {
      this.products.push({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(),20),
        image: faker.image.url(),
        isBlock: Boolean(faker.datatype.boolean())
      })
    }
  }

  async find() {
    return new Promise((res,rej) => {
      setTimeout(() => {
        res(this.products)
      },5000)
    })
  }

  async findOne(data) {
    const index = this.products.findIndex( i => i.id === data || i.name === data)
    if (index === -1) throw boom.notFound("Product not found, verify your datas")
    if (this.products[index].isBlock === true) throw boom.conflict("Product locked")
    return new Promise((res,rej) => {
      setTimeout(() => {
        res(this.products[index])
      },5000)
    })
  }

  async create(data) {
    return new Promise((res,rej) => {
      const newProduct = {
        id: faker.string.uuid(),
        ...data,
        isBlock: false
      }
      this.products.push(newProduct)
      setTimeout(() => {
        res({
            message: "created",
            data: newProduct
        })
      },5000)
    })
  }

  async update(id,data) {
    return new Promise((res,rej) => {
      const index = this.products.findIndex( i => i.id === id)
      if (index === -1) throw boom.notFound("Product not found")
      let product = this.products[index]
      this.products[index] = {
        ...product,
        ...data
      }

      setTimeout(() => {
        res(this.products[index])
      },5000)
    })
  }

  async deleteOne(id) {
    return new Promise((res,rej) => {
      const index = this.products.findIndex(i => i.id == id)
      if (index === -1) throw boom.notFound("Product not found")
      this.products.splice(index,1)

      setTimeout(() => {
        res({ id })
      },5000)
    })
  }
}


module.exports = ProductsService
