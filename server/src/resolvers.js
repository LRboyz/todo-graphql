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
      return 'Create Todo Success'
    },
    deleteTodo: (obj, args) => {
      const result = todolist.map((item, index) => {
        if (item.id == args.id) {
          todolist.splice(index, 1)
        }
      })
      return 'Delete Success'
    },
    completeTodo: (obj, args) => {
      const result = todolist.map((item) => {
        if (item.id == args.id) {
          item.isCompleted = true
        }
      })
      return 'is completed'
    },
    uncompleteTodo: (obj, args) => {
      const result = todolist.map((item) => {
        if (item.id == args.id) {
          item.isCompleted = false
        }
      })
      return 'is uncompleted'
    },
  },
}

module.exports = resolvers
