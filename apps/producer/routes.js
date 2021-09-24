import express from 'express';

const router = express.Router();

const users = [
  {
    id: 1,
    name: 'Renato',
    order_count: 10,
  },
  {
    id: 2,
    name: 'Diogo',
    order_count: 12,
  },
  {
    id: 3,
    name: 'James',
    order_count: 11,
  }
]

router.get('/sendUser', async (req, res) => {
  const pickedUser = users[Math.floor(Math.random() * users.length)];

  await req.producer.send({
    topic: 'receive-messages',
    messages: [
      { value: JSON.stringify(pickedUser) }
    ]
  })

  res.json({ pickedUser });
})

export default router
