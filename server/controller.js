module.exports = {

  getProducts: (req, res) => {
    const db = req.app.get('db')

    db.get_inventory()
      .then(products => { console.log(products); res.status(200).send(products) })
      .catch(err => { console.log(err); res.status(500).send(err) });
  },

  createProduct: (req, res) => {
    const { product, price, image } = req.body
    const db = req.app.get('db')

    db.create_product(product, price, image)
      .then(prod => res.status(200).send(prod))
      .catch(err => res.status(500).send(err));
  },

  deleteProduct: (req, res) => {
    const { product_id } = req.params
    const db = req.app.get('db')

    db.delete_product(product_id)
      .then(() => res.status(200))
      .catch(err => res.status(500).send(err));
  }
}