<template>
  <div>
    <info-centro titulo="Bienvenidos a la tienda JNconfecciones" />
    <section class="container">
      <div class="row mt-4">
        <h2 class="mt-2">Almacenes</h2>
      </div>
      <div class="container">
        <div class="d-flex flex-wrap justify-content-center">
          <div
            v-for="alma in almacen"
            :key="alma.id"
          >
            <div class="card m-2" style="width: 18rem">
              <img
                class="card-img-top"
                :src="alma.imagen"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">{{ alma.nombre }}</h5>
                <p class="card-text">{{ alma.direccion }}</p>
                <router-link class="btn btn-primary" :to="'/almacen/'+alma.id+'/'+alma.nombre">Explorar</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="mb-3">
      <h3 class="mt-2 mb-4">Colegios</h3>
    </div>
    <colegios-list/>
  </div>
</template>
<script>
import InfoCentro from "../components/InfoCentro.vue";
import ColegiosList from '../components/ColegiosList.vue'
export default {
  components: {
    InfoCentro,
    ColegiosList,
  },
  data() {
    return {
      almacen: [
        {
          id: 12,
          nombre: "Almacen Belén",
          imagen:
            "https://images.pexels.com/photos/1036856/pexels-photo-1036856.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          direccion: "Cra 76 # 30A-36 local 106",
        },
        {
          id: 11,
          nombre: "Almacen Guarne",
          imagen:
            "https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          direccion: "Cra 51 No 52 - 10",
        },
      ],
    };
  },
};
</script>