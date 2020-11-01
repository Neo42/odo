<script>
  import { todos } from '../stores'
  let todos_value
  const unsubscribe_todos = todos.subscribe((value) => (todos_value = value))
  function removeTodo(e, id, index) {
    if (e.keyCode === 8 && e.target.value === '') {
      todos.update((arr) => arr.filter((t) => t.id !== id))
      if (index === todos_value.length + 1) {
        document.querySelectorAll(`.todo input`)[todos_value.length - 1].focus()
      }
      e.preventDefault()
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
  input {
    box-sizing: border-box;
    margin: 0;
    height: 50px;
    font-size: 18px;
    line-height: 18px;
    width: 100%;
    padding: 0 30px;
    color: white;
    background-color: black;
    border: none;
    border-radius: 8px;
    outline: none;
    transition: ease 0.3s;
  }
  input.done {
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
      on:keydown={(e) => {
        if (e.keyCode === 13 && value !== '') {
          done = !done
        }
        removeTodo(e, id, i + 1)
      }} />
  </div>
{/each}
