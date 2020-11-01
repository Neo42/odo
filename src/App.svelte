<script>
  import CreateInput from './Components/CreateInput.svelte'
  import Todo from './Components/Todo.svelte'
</script>

<style>
  #app {
    width: 70%;
    margin: auto;
    padding-top: 50px;
    padding-bottom: 75px;
  }
  h1 {
    margin: 22px 0;
    text-align: center;
    color: black;
  }
  .todo-list {
    width: 420px;
    margin: auto;
  }
</style>

<div id="app">
  <h1>Sdo</h1>
  <div class="todo-list">
    <Todo />
    <CreateInput />
  </div>
</div>
