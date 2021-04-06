const { TodoEntry } = require('./todo.entry')

class TodoApp {
  get newTodoInput () {
    return $('.new-todo')
  }

  get todos () {
    return $$('.todo').map((elem) => new TodoEntry(elem))
  }

  get todoCount () {
    return $('.todo-count').getText().trim()
  }

  get btnClearCompleted () {
    return $('.clear-completed')
  }

  open () {
    return browser.url('/examples/vue/')
  }

  addTodo (todoText) {
    this.newTodoInput.setValue(todoText)
    browser.keys('Enter')
  }

  clear () {
    this.btnClearCompleted.click()
  }

  filter (filter) {
    if (!['all', 'active', 'completed'].includes(filter)) {
      throw new Error(`provided filter "${filter}" doesn't exist`)
    }

    const linkText = filter[0].toUpperCase() + filter.slice(1)
    return $(`=${linkText}`).click()
  }
}

exports.TodoApp = new TodoApp()
