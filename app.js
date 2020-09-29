const app= new Vue(
    {
        el: '#app',
        data: {
            title: 'Hello To Do List Welcome',
            newTodo: '',
            todos: []
        },
        methods: {
            addTodo()
            {
                this.todos.push({
                    title: this.newTodo,
                    done: false
                });
                console.log(this.newTodo);
                this.newTodo='';
            },
            removeTodo(todo)
            {
                const todoIndex=this.todos.indexOf(todo);
                this.todos.splice(todoIndex,1);

            },
            allDone()
            {
                this.todos.array.forEach(todo => {
                    todo.done=true;
                });
            }
        }
    }
)