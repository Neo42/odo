import { writable } from 'svelte-local-storage-store'

export const id = writable('id', 0);
export const todos = writable('todos', []);