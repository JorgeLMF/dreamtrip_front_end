<script setup>
defineProps({
  nombre: String,
  descripcion: String,
  lugar: String,
  duracion: String,
  desde: String,
  precio: String,
});
</script>
<template>
  <div class="package-card">
    <div class="descrition-package">
      <div>{{ nombre }}</div>
      <div class="descrition">{{ descripcion }}</div>
      <div>{{ lugar }}</div>
      <div>{{ duracion }}</div>
    </div>

    <div>
      <div>Since: {{ desde }}</div>
      <div>{{ precio }}</div>
    </div>
  </div>
</template>

<style scoped>
.package-card {
  border-radius: 5px;
  background-color: #161d2f;
  width: 100%;
  height: 180px;
  display: flex;
  flex-direction: row;
}

.descrition-package {
  display: flex;
  flex-direction: column;
  position: flex;
}

.descrition {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: left;
}
</style>
