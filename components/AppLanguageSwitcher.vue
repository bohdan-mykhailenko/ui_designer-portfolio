<script setup>
const { locale, setLocale } = useI18n();
</script>

<template>
  <div>
    <div>
      <button @click="setLocale('en')">en</button>
      <button @click="setLocale('fr')">fr</button>

      <p>Current:{{ locale }}</p>
      <p>{{ $t("welcome") }}</p>
    </div>
  </div>
</template>
