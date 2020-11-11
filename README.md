## 这是一个GraphQL创建的Todo应用

This is a Todo application created by GraphQL. 🚀


## 如何使用并运行

To run the application, please execute the following commands in sequence

```bash
cd server
npm install or yarn install
npm start
```

### 创建一个Todo

```bash
mutation {
  createTodo(content:"找Bug"){
    content
  }
}
```

### 列出所有Todo
```bash
{
  todos{
    id
    content
    isCompleted
    createdAt
  }
}
```

### 列出id为4的Todo
```bash
{
  todo(id:4){
    id
    content
    isCompleted
    createdAt
  }
}
```

### completeTodo(id: 1) 把 id 為 1 的待辦事項變成完成狀態
```bash
mutation{
  completeTodo(id:1){
    id
    content
    isCompleted
    createdAt
  }
}
```

### uncompleteTodo(id: 1) 把 id 為 1 的待辦事項變成未完成狀態
```bash
mutation{
  uncompleteTodo(id:1){
    id
    content
    isCompleted
    createdAt
  }
}
```

