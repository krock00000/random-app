<template>
  <button
    type="button"
    :class="{
      '-active': active,
      '-small-size': smallSize,
    }"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  active?: boolean;
  smallSize?: boolean;
}>();
</script>

<style scoped>
button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  line-height: 100%;
  background-color: #1a1a1a;
  outline: unset;
  cursor: pointer;
  transition: border-color 0.25s;
}

button:hover {
  border-color: #646cff;
}

button.-active {
  background: #646cff;
  pointer-events: none;
  user-select: none;
}

button.-small-size {
  padding: 0.3em 0.5em;
  font-size: 0.9em;
}
</style>
