<template>
  <section class="container">
    <div class="input-group mb-3 container">
      <input
        type="text"
        class="form-control"
        placeholder="Buscar"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        v-model="search"
        @keyup="filtrar"
      />
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button">
          <b-icon icon="search"></b-icon>
        </button>
      </div>
    </div>
    <article class="d-flex flex-wrap justify-content-center">
      <div v-for="col in colegioFil" :key="col.id">
        <div class="card m-2" style="width: 18rem">
          <img class="card-img-top" :src="col.logo" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">{{ col.colegio }}</h5>
            <p class="card-text">Punto de venta: {{ col.puntoVenta }}</p>
            <router-link
              class="btn btn-primary"
              :to="'/colegio/' + col.id"
              >Explorar</router-link
            >
          </div>
        </div>
      </div>
    </article>
  </section>
</template>
<script>
import { BIcon } from "bootstrap-vue";
export default {
  components: {
    BIcon,
  },
  data() {
    return {
      search: "",
      colegioFil: [],
      colegios: [
        {
          id: 21432,
          colegio: "Colegio Londres",
          url: "link",
          logo: "https://images.pexels.com/photos/2613276/pexels-photo-2613276.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          puntoVenta: "Belén",
        },
        {
          id: 21433,
          colegio: "Colegio la Providencia",
          url: "link",
          logo: "https://providencia.edu.co/wp-content/uploads/2019/02/LOGO-COLEGIO-NSP-website.png",
          puntoVenta: "Belén",
        },
        {
          id: 21434,
          colegio: "Colegio Londres",
          url: "link",
          logo: "https://images.pexels.com/photos/2613276/pexels-photo-2613276.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          puntoVenta: "Belén",
        },
        {
          id: 21435,
          colegio: "Colegio la Providencia",
          url: "link",
          logo: "https://providencia.edu.co/wp-content/uploads/2019/02/LOGO-COLEGIO-NSP-website.png",
          puntoVenta: "Belén",
        },
      ],
    };
  },
  methods: {
    filtrar() {
      this.colegioFil = [];
      this.colegios.forEach((element) => {
        if (
          element.colegio.toLowerCase().search(this.search.toLowerCase()) !== -1
        ) {
          this.colegioFil.push(element);
        }
      });
    },
  },
  mounted() {
    this.colegioFil = this.colegios;
    if(this.$route.name == "Almacen"){
      console.log("Buscar por almacén")
    }else{
      console.log("Traer todo")
    }
  },
};
</script>