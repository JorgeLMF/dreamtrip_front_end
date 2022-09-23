<script setup>
import Navbar from "../components/Navbar.vue";
import PackageCard from "../components/PackageCard.vue";
</script>

<template>
  <!-- VERTICAL NAVBAR -->
  <div class="home">
    <Navbar />

    <div class="filters">
      <h2 class="title1">Filters</h2>
      <div class="prices">
        <h3 class="title2">Price</h3>
      </div>

      <div class="conftime">
        <h3 class="title2">Configuration Time</h3>
      </div>

      <div class="type">
        <h3 class="title2">Type of tour</h3>
        <form class="forms">
          <input type="radio" value="In group" />
          <label for="In group" class="textform">In group</label><br />
          <input type="radio" value="Private" />
          <label for="Private" class="textform">Private</label><br />
        </form>
      </div>

      <div>
        <h3 class="title2">Categories</h3>
        <form class="forms">
          <input type="radio" value="Private" />
          <label for="Private" class="textform">Private</label><br />
          <input type="radio" value="Private" />
          <label for="Private" class="textform">Private</label><br />
          <input type="radio" value="Private" />
          <label for="Private" class="textform">Private</label><br />
          <input type="radio" value="Private" />
          <label for="Private" class="textform">Private</label><br />
          <input type="radio" value="Private" />
          <label for="Private" class="textform">Private</label><br />
          <input type="radio" value="Private" />
          <label for="Private" class="textform">Private</label><br />
          <input type="radio" value="Private" />
          <label for="Private" class="textform">Private</label><br />
          <input type="radio" value="Private" />
          <label for="Private" class="textform">Private</label><br />
        </form>
      </div>
    </div>

    <div class="content">
      <div class="content-filter">
        <p class="content-filter-title">Sort by</p>
        <button class="option-button">Choose an option:</button>
      </div>
      <PackageCard
        nombre="Aventura Natural"
        descripcion=" Por qué no pasar una o dos noches extras en Moscú 
                      y disfrutar plenamente de la capital rusa - visitar el 
                      Museo de la Armería y el Fondo de los Diamantes."
        precio="S/. 900"
        lugar="Place: Cancun"
        duracion="Duration: 4 days"
        img_url="https://www.cancunadventure.net/images/puntacancun-airview.jpg"
      />

      <PackageCard
        nombre="Luna de miel"
        descripcion="Por qué no pasar una o dos noches extras en Moscú y 
                   disfrutar plenamente de la capital rusa 
                   - visitar el Museo de la Armería y el Fondo de los Diamantes."
        precio="S/. 1,100"
        lugar="Place: Machu Picchu"
        duracion="Duration: 5 days"
        img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Before_Machu_Picchu.jpg/640px-Before_Machu_Picchu.jpg"
      />

      <PackageCard
        nombre="Vacaciones express"
        descripcion="Por qué no pasar una o dos noches extras en Moscú y 
                   disfrutar plenamente de la capital rusa 
                   - visitar el Museo de la Armería y el Fondo de los Diamantes."
        precio="S/. 700"
        lugar="Place: Los Cabos"
        duracion="Duration: 4 days"
        img_url="https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/loscabosmx/Arco_I9A0109_V2_0bb6b65a-6293-4918-a9dd-6e82822e1299.jpg"
      />
    </div>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: row;
  gap: 41px;
}
.filters {
  background-color: #161d2f;
  border-radius: 5px;
  width: 315px;
  height: 713px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 20px;
}

.content {
  width: 769px;
  height: 743px;
  display: flex;
  flex-direction: column;
  gap: 33px;
}

.content-filter {
  border-radius: 5px;
  background-color: #161d2f;
  width: 100%;
  height: 74px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: flex-end;
}

.content-filter-title {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
  display: block;
}

.option-button {
  box-sizing: border-box;
  width: 178px;
  height: 34px;
  background: #fc4747;
  border-radius: 9px;
  border: 0px;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 18px;
  display: block;
  margin-right: 10px;
}

.title1 {
  color: #ffffff;
}

.title2 {
  border-bottom: 2px solid #fc4747;
  text-align: left;
  color: #ffffff;
}

.forms {
  text-align: left;
}

.textform {
  color: #ffffff;
}
</style>
