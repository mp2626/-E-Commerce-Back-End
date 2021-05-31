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
  }
  catch (err) {
    res.status(400).json(err);
  }
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  try {
    const tagData = await Tag.findOne({
      where: {
        id: req.params.id
      },
      include: [{
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
      }],
    })
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tagData = await Tag.create({
      tag_name: req.body.tag_name
    })
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagData = await awaitTag.update(
      {
        tag_name: req.body.tag_name
      },
      {
        where: {
          id: req.params.id
        }
      })
    if (tagData) {
      res.status(200).json(tagData);
    } else {
      res.status(404).json({ message: 'No tag found' });
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    })
    if (tagData) {
      res.status(200).json(tagData);
    } else {
      res.status(404).json({ message: 'No tag found' });
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
