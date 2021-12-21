<template>
  <div>
    <info-centro titulo="Verificar el estado de mis pedidos"></info-centro>
    <section class="container mt-3">
      <div class="input-group m-3 container">
        <input
          type="text"
          class="form-control"
          placeholder="Ingresa número de pedido"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          v-model="numeroPedido"
        />
        <div class="input-group-append">
          <button class="btn btn-primary mx-1" type="button">
            <b-icon icon="search"></b-icon>
          </button>
        </div>
      </div>
      <hr>
      <div>
          <h5>
              <!--Recibido, en camino, entregado-->
              Pedido en camino
          </h5>
      </div>
      <hr>
    </section>
  </div>
</template>
<script>
import infoCentro from "../components/InfoCentro.vue";
export default {
  components: {
    infoCentro,
  },
  data() {
      return {
          numeroPedido:''
      }
  },
};
</script>