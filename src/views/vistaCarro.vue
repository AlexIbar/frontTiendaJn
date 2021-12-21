<template>
  <div>
    <info-centro :titulo="'Productos en carro de compra'"></info-centro>
    <div class="container cart">
      <section class="row">
        <article class="col-md-8 m-2 text-sm-start">
          <div
            v-for="(car, index, key) in datos"
            :key="key"
            class="d-flex my-3 p-2 rounded item"
          >
            <img :src="car.imagen" alt="" class="rounded-circle border mx-2" />
            <div>
              <h4>
                {{ car.nombre }}
              </h4>
              <div class="d-flex flex-wrap">
                <div class="m-1">
                  <b>Cantidad: </b><span>{{ car.cantidad }}</span>
                </div>
                <div class="m-1">
                  <b>Valor unitario: </b><span>{{ car.cantidad }}</span>
                </div>
                <div class="m-1">
                  <b>Valor total: </b
                  ><span>{{ car.cantidad * car.precio }}</span>
                </div>
              </div>
              <div class="text-danger">
                <h5
                  class="btn btn-outline-danger text-start"
                  @click="eliminarProductCart(index)"
                >
                  Eliminar <b-icon icon="x-circle"></b-icon>
                </h5>
              </div>
            </div>
          </div>
        </article>
        <article class="col-md-3 m-2 my-4 py-3 border">
          <h4>Resumen de tu pedido</h4>
          <hr />
          <div v-for="(car, key) in datos.car" :key="key">
            <div class="d-flex flex-wrap">
              <p class="m-1">{{ car.nombre }}</p>
              <p class="m-1">{{ car.cantidad }}</p>
              <p class="m-1">{{ car.cantidad * car.precio }}</p>
            </div>
          </div>
          <hr />
          <p class="fs-4">
            <b>Total:</b> <span>{{ total }}</span>
          </p>
          <div class="btn btn-primary fs-4">Procesar Compra</div>
        </article>
      </section>
    </div>
  </div>
</template>
<style>
.cart img {
  width: 150px;
  height: 150px;
  object-fit: cover;
}
.item {
  background-color: #d8d8d89d;
}
</style>
<script>
import InfoCentro from "../components/InfoCentro.vue";
import { BIcon } from "bootstrap-vue";
export default {
  components: {
    InfoCentro,
    BIcon,
  },
  data() {
    return {
      datos: null,
      total: 0,
    };
  },
  created() {
    this.datos = JSON.parse(localStorage.getItem("car"));
    this.buscarDatosPrenda();
  },
  methods: {
    buscarDatosPrenda() {
      this.datos.forEach((element, index) => {
        this.datos[index].imagen =
          "https://jnconfecciones.com/imagenes/Camiseta_Polo.png";
        this.datos[index].precio = 15000;
        this.datos[index].nombre = "Camiseta Polo";
        let subtotal = element.precio * element.cantidad;
        this.total = this.total + subtotal;
      });
    },
    eliminarProductCart(index) {
      let confirmar = confirm("¿Esta seguro que desea retirar el producto?");
      if (confirmar) {
        this.datos.splice(index, 1);
        localStorage.setItem("car", JSON.stringify(this.datos));
        this.total = 0;
        this.buscarDatosPrenda();
      }
    },
  },
};
</script>