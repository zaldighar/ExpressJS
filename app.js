const express = require('express')
require('dotenv').config()

const app = express()
app.use(express.json())

const courses = [
  { id: 1, name: 'course1' },
  { id: 2, name: 'course2' },
  { id: 3, name: 'course3' },
]

app.get('/', (req, res) => {
  res.send('Hello, World!')
})

app.get('/api/courses', (req, res) => {
  res.send([1, 2, 3])
})

app.get('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id))
  if (!course) return res.status(404).send('The course with the given ID was not found.')
  res.send(course.name)
})

app.get('/api/posts/:year/:month', (req, res) => {
  res.send({ params: req.params, query: req.query })
})

app.post('/api/courses', (req, res) => {
  const course = {
    id: courses.length + 1,
    name: req.body.name,
  }
  courses.push(course)
  res.send(course)
}) 


const port = process.env.PORT || 3000


app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})