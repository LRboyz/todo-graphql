const { gql } = require('apollo-server')

const typeDefs = gql`
  type Todo {
    id: Int
    content: String
    isCompleted: Boolean
    createdAt: String
  }

  type Query {
    todos: [Todo]
    hello: String
    todo(id: Int): [Todo]
  }

  type Mutation {
    createTodo(content: String): Todo
    deleteTodo(id: Int): Todo
    completeTodo(id: Int): Todo
    uncompleteTodo(id: Int): Todo
  }
`

module.exports = typeDefs
