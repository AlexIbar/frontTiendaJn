<template>
  <div class="position-relative">
    <div
      class="w-100 border cursor-pointer d-flex justify-content-between p-1"
      @click="activo = !activo"
    >
      <div>
        {{ select.text }}
      </div>
      <div v-if="activo == false">
        <b-icon icon="caret-down"></b-icon>
      </div>
      <div v-if="activo == true">
        <b-icon icon="caret-up"></b-icon>
      </div>
    </div>
    <div v-if="activo" class="position-absolute bg-light w-100 border">
      <div
        v-for="(talla, index) in tallas"
        :key="talla.value"
        @click="seleccionarTalla(index)"
        :class="talla.disponibilidad > 5 ? 'text-success cursor-pointer d-flex justify-content-between p-1 l-dos' : talla.disponibilidad >= 1 ? 'text-warning cursor-pointer d-flex justify-content-between p-1 l-dos' : 'text-danger cursor-pointer d-flex justify-content-between p-1 l-dos'"
      >
        <div>
          {{ talla.text }}
        </div>
        <div v-if="index !== 0">
          {{talla.disponibilidad}}
        </div>
        <div v-if="index == 0">
            Disponible
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.cursor-pointer {
  cursor: pointer;
  user-select: none;
}
.l-dos:nth-child(2n){
    background-color:#d8dde2 ;
}
</style>
<script>
import { BIcon } from "bootstrap-vue";
export default {
  components: {
    BIcon,
  },
  props: ["tallas"],
  data() {
    return {
      activo: false,
      select:null
    };
  },
  created() {
    this.select = this.tallas[0];
  },
  methods: {
    seleccionarTalla(index) {
      if (index !== 0) {
        this.select = this.tallas[index];
        this.activo = false;
        this.$emit('sizeSelected', this.select)
      }
    }
  },
};
</script>