const todolist = []
const resolvers = {
  Query: {
    //查询数据
    hello: () => 'Hello world 233!',
    todos: () => todolist,
    todo(obj, args) {
      // console.log(args)
      let result = todolist.filter((item) => {
        return item.id == args.id
      })
      return result
    },
  },

  Mutation: {
    createTodo: (obj, args) => {
      todolist.push({
        id: parseInt(todolist.length + 1),
        content: args.content,
        isCompleted: false,
        createdAt: new Date().toLocaleString(),
      })
      return todolist
    },
    deleteTodo: (obj, args) => {
      todolist.map((item, index) => {
        if (item.id == args.id) {
          todolist.splice(index, 1)
        }
      })
      return null
    },
    completeTodo: (obj, args) => {
      let result = todolist.find((item) => {
        return item.id == args.id
      })
      result.isCompleted = true
      return result
    },
    uncompleteTodo: (obj, args) => {
      let result = todolist.find((item) => {
        return item.id == args.id
      })
      result.isCompleted = false
      return result
    },
  },
}

module.exports = resolvers
