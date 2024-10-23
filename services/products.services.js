const { faker, da } = require('@faker-js/faker')

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
        image: faker.image.url()
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
    const name = this.getTotal()
    return new Promise((res,rej) => {
      setTimeout(() => {
        res(this.products.find( i => i.id === data || i.name === data))
      },5000)
    })
  }

  async create(data) {
    return new Promise((res,rej) => {
      const newProduct = {
        id: faker.string.uuid(),
        ...data
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
      if (index === -1) throw new Error("product not found")
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
      if (index === -1) throw new Error("product not found")
      this.products.splice(index,1)

      setTimeout(() => {
        res({ id })
      },5000)
    })
  }
}


module.exports = ProductsService
