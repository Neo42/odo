<script>
  import { afterUpdate } from 'svelte'
  import { todos } from '../stores'
  let todos_value
  let focusedId
  const unsubscribe_todos = todos.subscribe((value) => (todos_value = value))

  afterUpdate(() => {
    todos.update((arr) => (arr = todos_value))
  })

  function updateTodo(e, id, index) {
    if (e.keyCode === 13 && e.target.value !== '') {
      toggleDone(id)
    }
    if (e.keyCode === 8 && e.target.value === '') {
      removeTodo(id, index)
      e.preventDefault()
    }
  }

  function toggleDone(id) {
    const targetTodo = todos_value.find((t) => t.id === id)
    const newTodo = { ...targetTodo, done: !targetTodo.done }
    todos_value.forEach((todo, i) => {
      if (todo.id === id) {
        todos_value[i] = newTodo
      }
    })
  }

  function removeTodo(id, index) {
    todos.update((arr) => arr.filter((t) => t.id !== id))
    if (todos_value.length !== 0 && index === todos_value.length + 1) {
      document.querySelectorAll(`.todo input`)[todos_value.length - 1].focus()
    }
  }
</script>

<style>
  .todo {
    display: block;
    width: 320px;
    height: 50px;
    padding-bottom: 15px;
    margin: auto;
  }
  .done {
    text-decoration: line-through;
    color: grey;
    transition: ease 0.3s;
  }
</style>

{#each todos_value as { value, done, id }, i}
  <div class="todo">
    <input
      type="text"
      class:done
      bind:value
      on:focus={() => (focusedId = id)}
      on:keydown={(e) => updateTodo(e, id, i + 1)} />
  </div>
{/each}
