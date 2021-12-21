<template>
  <section>
    <info-centro :titulo="colegio" />
    <div class="container">
      <div>
        <h3 class="text-left mt-5">Uniforme de diario</h3>
        <div class="container d-flex flex-wrap justify-content-center">
          <div v-for="product in productos" :key="product.id" >
            <div v-if="product.categoria == 1">
              <card-product :producto="product" />
            </div>
            
          </div>
        </div>
      </div>
      <div>
        <h3 class="text-left mt-5 mb-2">Uniforme de educación fisica</h3>
        <div class="container d-flex flex-wrap justify-content-center">
          <div v-for="product in productos" :key="product.id" >
            <div v-if="product.categoria == 2">
              <card-product :producto="product" />
            </div>
            
          </div>
        </div>
      </div>
      <div>
        <h3 class="text-left mt-5 mb-2">Complementos</h3>
        <div class="container d-flex flex-wrap justify-content-center">
          <div v-for="product in productos" :key="product.id" >
            <div v-if="product.categoria == 3">
              <card-product :producto="product" />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import InfoCentro from "../components/InfoCentro.vue";
import CardProduct from "../components/CardProduct.vue";
export default {
  components: {
    InfoCentro,
    CardProduct,
  },
  data() {
    return {
      colegio:'Llenar',
      productos: [
        {
          id: 123,
          nombre: "Camiseta polo Londres",
          imagen:
            "https://static6.depositphotos.com/1062042/585/v/600/depositphotos_5854803-stock-illustration-white-mens-polo-shirt.jpg",
          descripcion: "Camiseta tipo polo bordada con logo colegio londres",
          precio: 40000,
          disponible: 5,
          categoria: 1 //Uniforme diario
        },
        {
          id: 124,
          nombre: "Camiseta polo Londres",
          imagen:
            "https://static6.depositphotos.com/1062042/585/v/600/depositphotos_5854803-stock-illustration-white-mens-polo-shirt.jpg",
          descripcion: "Camiseta tipo polo bordada con logo colegio londres",
          precio: 40000,
          disponible: 5,
          categoria: 1 //Uniforme diario
        },
        {
          id: 125,
          nombre: "Camiseta cuello V Londres",
          imagen:
            "https://static6.depositphotos.com/1062042/585/v/600/depositphotos_5854803-stock-illustration-white-mens-polo-shirt.jpg",
          descripcion: "Camiseta tipo polo bordada con logo colegio londres",
          precio: 40000,
          disponible: 5,
          categoria: 2 //Uniforme educación fisica
        },
        {
          id: 126,
          nombre: "Zapatos",
          imagen:
            "https://static6.depositphotos.com/1062042/585/v/600/depositphotos_5854803-stock-illustration-white-mens-polo-shirt.jpg",
          descripcion: "Camiseta tipo polo bordada con logo colegio londres",
          precio: 40000,
          disponible: 5,
          categoria: 3 //Uniforme educación fisica
        },
      ],
    };
  },
};
</script>
<style>
.text-left {
  text-align: left !important;
}
</style>