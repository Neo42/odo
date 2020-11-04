<script>
  import AddTodo from './Components/AddTodo.svelte'
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
  .list {
    width: 420px;
    margin: auto;
  }

  :global(input) {
    margin: 0;
    line-height: 18px;
    width: 100%;
    padding: 0 30px;
    color: white;
    background-color: black;
    border: none;
    border-radius: 8px;
    outline: none;
    transition: ease 0.3s;
    box-sizing: border-box;
    height: 50px;
    width: 320px;
    margin: auto;
    padding: 0 30px;
    font-size: 18px;
  }

  :global(*::selection) {
    background-color: cyan;
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
  <h1>odo</h1>
  <div class="list">
    <Todo />
    <AddTodo />
  </div>
</div>
<footer>
  <a href="https://github.com/neo42/odo">Repo</a>
  |
  <a href="https://github.com/neo42">@Neo42</a>
</footer>
