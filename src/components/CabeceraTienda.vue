<template>
  <div class="sombra">
    <div class="text-end px-1 bg-azul text-white">+57 444 51 36 Opción 1</div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <img
            src="http://jnconfecciones.com/logo.png"
            class="d-block"
            width="100px"
            alt="..."
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-item" :to="'/'"
                ><b-icon icon="house-door-fill"></b-icon
                ><span> Inicio</span></router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-item" :to="'/colegios'"
                ><b-icon icon="easel-fill"></b-icon
                ><span> Colegios</span></router-link
              >
            </li>
            <!--<li class="nav-item">
              <router-link class="nav-item" :to="'/cart'">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-rulers"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M1 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h5v-1H2v-1h4v-1H4v-1h2v-1H2v-1h4V9H4V8h2V7H2V6h4V2h1v4h1V4h1v2h1V2h1v4h1V4h1v2h1V2h1v4h1V1a1 1 0 0 0-1-1H1z"
                  />
                </svg>
                <span> Mi talla</span></router-link
              >
            </li>-->
            <li class="nav-item">
              <router-link class="nav-item" :to="'/pedidos'"
                ><b-icon icon="box-seam"></b-icon
                ><span> Rastrear pedido</span></router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-item" :to="'/cart'"
                ><b-icon icon="cart-check-fill"></b-icon
                ><span> Mis compras</span></router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
//import { BIcon, BIconArrowUp, BIconArrowDown } from 'bootstrap-vue'
import { BIcon } from "bootstrap-vue";
export default {
  components: {
    BIcon,
    //BIconArrowUp,
    //BIconArrowDown
  },
};
</script>
<style >
.bg-azul {
  background-color: #000080;
}
.sombra {
  box-shadow: 1px 1px 10px black;
}
.nav-item a{
  text-decoration: none;
  color: rgb(82, 81, 81);
  font-size: 1.2rem;
  padding: 6px;
}
.nav-item a:hover{
  background-color: #d8d8d89d;
  border-radius: 3px;
  color: #000080;
  border:1px solid #d8d8d8;
  box-sizing: border-box;
}
</style>