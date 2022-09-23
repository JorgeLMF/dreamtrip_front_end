<script setup>
defineProps({
  nombre: String,
  descripcion: String,
  precio: String,
  lugar: String,
  duracion: String,
});
</script>
<template>
  <div class="package-card">
    <div>{{ nombre }}</div>
    <div>{{ descripcion }}</div>
    <div>{{ precio }}</div>
    <div>{{ lugar }}</div>
    <div>{{ duracion }}</div>
  </div>
</template>

<style scoped>
.package-card {
  border-radius: 5px;
  background-color: #161d2f;
  width: 100%;
  height: 180px;
}
</style>
