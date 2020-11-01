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
    font-family: 'Arvo', serif;
  }
  .todo-list {
    width: 420px;
    margin: auto;
  }
  footer {
    position: fixed;
    bottom: 20px;
    right: 30px;
    font-size: small;
    line-height: 19px;
  }
  footer img {
    width: 11px;
    height: 11px;
  }
</style>

<div id="app">
  <h1>TB;DD</h1>
  <div class="todo-list">
    <Todo />
    <CreateInput />
  </div>
</div>
<footer>
  🔧 w/
  <img src="Assets/svelte.png" alt="sdf" />
  & ⚡️ by
  <a href="https://github.com/neo42">@Neo42</a>
  |
  <a href="https://github.com/neo42/tbdd">Repo</a>

</footer>
