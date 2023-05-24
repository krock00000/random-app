<template>
  <TheGameBoard
    v-if="selectedGameIndex !== undefined"
    :result="playResult"
    @play="handlePlay"
    @new-game="resetPlayResult"
  />

  <div class="game-variants">
    <AppButton
      v-for="(game, index) of gameVariants"
      small-size
      :key="game.title"
      :active="selectedGameIndex === index"
      @click="handleSelectGame(index)"
    >
      {{ game.title }}
    </AppButton>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { getRandomValueFromArray } from "./lib/getRandomValueFromArray";

import { cardGame } from "./games-data/cardGame";
import { diceGame } from "./games-data/diceGame";
import { headsOrTails } from "./games-data/headsOrTails";

import { GameData } from "./games-data/types";

import AppButton from "./components/AppButton.vue";
import TheGameBoard from "./components/TheGameBoard.vue";

// Game variants
// To add a new game, create a game object in the games-data folder and add it to the gameVariants variable

const selectedGameIndex = ref<number>();
const gameVariants = ref<GameData[]>([cardGame, diceGame, headsOrTails]);

function handleSelectGame(gameIndex: number) {
  resetPlayResult();
  selectedGameIndex.value = gameIndex;
}

// Game play

const playResult = ref<string>();

function handlePlay() {
  const selectedGameVariants =
    gameVariants.value[selectedGameIndex.value].variants;

  playResult.value = getRandomValueFromArray(selectedGameVariants);
}

function resetPlayResult() {
  playResult.value = "";
}
</script>

<style scoped>
.game-variants {
  display: flex;
  gap: 8px;
  margin-top: 20px;
}
</style>
