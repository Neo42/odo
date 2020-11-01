<script>
  import { id, todos } from '../stores'
  let id_value
  let todos_value
  const unsubscribe_id = id.subscribe((value) => (id_value = value))
  const unsubscribe_todos = todos.subscribe((value) => (todos_value = value))
  $: placeholder = todos_value.length === 0 ? 'Add a todo here...' : ''

  function addTodo(e) {
    if (e.keyCode === 13) {
      id.update((n) => n + 1)
      let { value } = e.target
      let newTodo = {
        done: false,
        id: id_value,
        value,
      }
      todos.update((arr) => [...arr, newTodo])
      e.target.value = ''
    }
  }
</script>

<style>
  input {
    box-sizing: border-box;
    height: 50px;
    width: 320px;
    margin: auto;
    padding: 0 30px;
    font-size: 18px;
    line-height: 18px;
    color: white;
    background-color: black;
    border: none;
    border-radius: 8px;
    outline: none;
    transition: ease 0.3s;
  }

  section {
    display: block;
    width: 320px;
    height: 50px;
    padding-bottom: 10px;
    margin: auto;
  }
</style>

<section>
  <input type="text" on:keydown={addTodo} {placeholder} />
</section>
