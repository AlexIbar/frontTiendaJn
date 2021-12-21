<template>
    <div class="card m-2" style="width: 18rem">
      <img class="card-img-top" :src="producto.imagen" alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title text-left">
            <strong>{{ producto.nombre }}</strong>
        </h5>
        <p class="card-text text-left">{{producto.descripcion}}</p>
        <p class="card-text text-left">
            <strong>
                {{ producto.precio }}
            </strong>
        </p>
        <router-link
          class="btn btn-outline-primary"
          :to="'/producto/' +this.$route.params.id+'/'+ producto.id + '/' +producto.nombre"
          >Agregar al carro</router-link
        >
      </div>
    </div>
</template>
<script>
export default {
    props:['producto']
}
</script>