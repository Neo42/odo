<script>
  import { id, todos, inputValue } from '../stores'
  let id_value, todos_value, inputValue_value
  const unsubscribe_id = id.subscribe((value) => (id_value = value))
  const unsubscribe_todos = todos.subscribe((value) => (todos_value = value))
  const unsubscribe_inputValue = inputValue.subscribe(
    (value) => (inputValue_value = value),
  )
  $: placeholder = todos_value.length === 0 ? 'Add a todo here...' : ''

  function triggerInput(e) {
    inputValue.update((val) => e.target.value)
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
  section {
    display: block;
    width: 320px;
    height: 50px;
    padding-bottom: 10px;
    margin: auto;
  }
</style>

<section>
  <input
    type="text"
    bind:value={inputValue_value}
    on:keydown={triggerInput}
    {placeholder} />
</section>
