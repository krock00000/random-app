<template>
  <h1 class="title">Let's play</h1>

  <p class="result" :class="{ '-has-result': result }">
    {{ result || "Here will be result" }}
  </p>

  <div class="controls">
    <AppButton v-if="result" type="button" @click="$emit('new-game')">
      New game
    </AppButton>
    <AppButton v-else type="button" @click="$emit('play')">Play</AppButton>
  </div>
</template>

<script setup lang="ts">
import AppButton from "./AppButton.vue";

defineEmits<{
  (e: "play"): void;
  (e: "new-game"): void;
}>();

defineProps<{
  result?: string | number;
}>();
</script>

<style scoped>
.title {
  margin: 0;
}

.result {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 80px;
  margin: 0;

  color: gray;
  text-align: center;
}

.result.-has-result {
  font-size: 24px;
  color: #fff;
}

.controls {
  display: flex;
  justify-content: center;
  gap: 12px;
}
</style>
