<template>
  <div>
    <!--<info-centro :titulo="this.$route.params.nombre"/>-->
    <section class="d-flex justify-content-center">
      <div class="contenedor-general">
        <div class="">
          <div class="">
            <img
              :src="producto.imagen"
              :alt="producto.nombre"
              class="rounded border"
            />
          </div>
          <article
            class="
              bg-black
              contenedor-info
              rounded
              d-flex
              justify-content-around
              flex-wrap
            "
          >
            <h4 class="">
              {{ producto.nombre }}
            </h4>
            <p>
              {{ producto.descripcion }}
            </p>
            <div class="w-100">
              <selected-talla
                :tallas="producto.tallas"
                @sizeSelected="selectTalla"
              />
            </div>
            <div class="w-100">
              <input
                type="number"
                name=""
                placeholder="Cantidad"
                class="form-control ds-input"
                v-model="eleccion.cantidad"
              />
            </div>
            <div>
              <button
                type="button"
                class="btn btn-outline-primary"
                @click="agregarCarro"
              >
                Agregar al carrito <b-icon icon="cart-check"></b-icon>
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
    <section class="container">
      <h4 class="text-left pt-3">Cuadro de tallas</h4>
      <img :src="producto.cuadroTallas" alt="" style="max-width: 100%" />
    </section>
    <section class="container">
      <h4 class="text-left">Complementos</h4>
      <div class="container d-flex flex-wrap justify-content-center">
        <div v-for="product in complementos" :key="product.id">
          <card-product :producto="product" />
        </div>
      </div>
    </section>

    <div>
      <b-modal id="modal-1" hide-footer>
        <template #modal-title> Producto gregado </template>
        <div class="d-block text-center">
          <h3>¿Desea seguir comprando?</h3>
        </div>
        <div class="d-flex justify-content-end">
          <router-link :to="'/colegio/'+this.$route.params.idColegio" class="btn btn-primary m-3 text-center">Si, seguir comprando</router-link>
        </div>
      </b-modal>
    </div>
  </div>
</template>
<style>
.contenedor-info {
  max-width: 500px;
  margin: auto;
  color: white;
  margin-bottom: 15px;
  margin-top: 15px;
}
.contenedor-general {
  margin-top: 10px;
}
@media (max-width: 899px) {
  .contenedor-info {
    padding: 15px;
    box-sizing: border-box;
    height: 300px;
  }
}
@media (min-width: 900px) {
  .contenedor-general img {
    position: absolute;
    margin-left: -480px;
    margin-top: 45px;
  }
  .contenedor-general {
    position: relative;
    width: 730px;
    display: flex;
    justify-content: end;
  }
  .contenedor-info {
    height: 450px;
    padding: 30px 25px 20px 105px;
  }
}
</style>
<script>
//import InfoCentro from '../components/InfoCentro.vue'
import SelectedTalla from "../components/SelectedTalla.vue";
import CardProduct from "../components/CardProduct.vue";
import { BIcon } from "bootstrap-vue";
export default {
  components: {
    //InfoCentro
    SelectedTalla,
    BIcon,
    CardProduct,
  },
  data() {
    return {
      producto: {
        nombre: "Camiseta Polo Londres",
        descripcion:
          "Camiseta en tela Polux de Lafayette, con cuellos y puños tejidos",
        imagen: "https://jnconfecciones.com/imagenes/Camiseta_Polo.png",
        tallas: [
          {
            value: null,
            text: "Talla",
            disabled: true,
            disponibilidad: 0,
          },
          {
            value: "S",
            text: "S",
            disponibilidad: 1,
          },
          {
            value: "M",
            text: "M",
            disponibilidad: 1,
          },
          {
            value: "L",
            text: "L",
            disponibilidad: 10,
          },
          {
            value: "XL",
            text: "XL",
            disponibilidad: 1,
          },
        ],
        precio: 42000,
        cuadroTallas:
          "https://lococamisetas.com/img/cms/guia-de-tallas-lococamisetas-ficha-hombre.jpg",
      },
      eleccion: {
        talla: "",
        cantidad: 1,
      },
      select: null,
      complementos: [
        {
          id: 123,
          nombre: "Camiseta polo Londres",
          imagen:
            "https://static6.depositphotos.com/1062042/585/v/600/depositphotos_5854803-stock-illustration-white-mens-polo-shirt.jpg",
          descripcion: "Camiseta tipo polo bordada con logo colegio londres",
          precio: 40000,
          disponible: 5,
          categoria: 1, //Uniforme diario
        },
        {
          id: 124,
          nombre: "Camiseta polo Londres",
          imagen:
            "https://static6.depositphotos.com/1062042/585/v/600/depositphotos_5854803-stock-illustration-white-mens-polo-shirt.jpg",
          descripcion: "Camiseta tipo polo bordada con logo colegio londres",
          precio: 40000,
          disponible: 5,
          categoria: 1, //Uniforme diario
        },
        {
          id: 125,
          nombre: "Camiseta cuello V Londres",
          imagen:
            "https://static6.depositphotos.com/1062042/585/v/600/depositphotos_5854803-stock-illustration-white-mens-polo-shirt.jpg",
          descripcion: "Camiseta tipo polo bordada con logo colegio londres",
          precio: 40000,
          disponible: 5,
          categoria: 2, //Uniforme educación fisica
        },
        {
          id: 126,
          nombre: "Zapatos",
          imagen:
            "https://static6.depositphotos.com/1062042/585/v/600/depositphotos_5854803-stock-illustration-white-mens-polo-shirt.jpg",
          descripcion: "Camiseta tipo polo bordada con logo colegio londres",
          precio: 40000,
          disponible: 5,
          categoria: 3, //Uniforme educación fisica
        },
      ],
    };
  },
  methods: {
    selectTalla(selected) {
      this.eleccion.talla = "" + selected.text;
    },
    agregarCarro() {
      var datos;
      this.eleccion.producto = this.$route.params.id;
      if (localStorage.getItem("car") == null) {
        datos = {
          car: [this.eleccion],
        };
        localStorage.setItem("car", JSON.stringify(datos));
      } else {
        datos = JSON.parse(localStorage.getItem("car"));
        datos.push(this.eleccion);
        localStorage.setItem("car", JSON.stringify(datos));
      }
      (this.eleccion.talla = ""), (this.eleccion.cantidad = "");
      this.$bvModal.show("modal-1");
    },
  },
};
</script>