const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');
const { findAll } = require('../../models/Product');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  try {
    const tagData = await Tag.findAll({
      include:
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
      }
    })
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  try {
    const tagData = await Product.findOne({
      where: {
        id: req.params.id
      },
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
      },
    })
res.status(200).json(productData);
  } catch (err) {

}
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  // create a new tag
  try {

  } catch (err) {

  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {

  } catch (err) {

  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {

  } catch (err) {

  }
});

module.exports = router;
