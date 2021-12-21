<template>
    <div class="bg-black">
        <footer class="container text-white">
            <div class="py-5">
                <div class="row">
                    <div class="col-md-4 col-xs-12 text-center mb-1">
                            <img src="http://jnconfecciones.com/logo.png" class="bg-white py-2 px-2 rounded" width="150px" alt="">
                    </div>
                    <div class="col-md-4 col-xs-12 mb-1">
                        <h3>Encuentranos en:</h3>
                        <div class="row py-1">
                            <div class="col-1">
                                <b-icon icon="geo-alt-fill" variant="white"></b-icon>
                            </div>
                            <div class="col-11">
                                Almacen Belen
                            </div>
                            <div class="col-12">
                                Carrera 76 Nº 30A-36 local 106
                            </div>
                            <div>
                                557 57 00
                            </div>
                        </div>
    
                        <div class="row py-1">
                            <div class="col-1">
                                <b-icon icon="geo-alt-fill" variant="white"></b-icon>
                            </div>
                            <div class="col-11">
                                Almacen Guarne
                            </div>
                            <div class="col-12">
                                Carrera 51 Nº 52-10
                            </div>
                            <div>
                                551 00 61
                            </div>
                        </div>
    
                        <div class="row py-1">
                            <div class="col-1">
                                <b-icon icon="geo-alt-fill" variant="white"></b-icon>
                            </div>
                            <div class="col-11">
                                Fabrica en Itagüí
                            </div>
                            <div class="col-12">
                                Carrera 51 Nº 83 - 113 Piso 3
                            </div>
                            <div>
                                557 57 00
                            </div>
                        </div>
    
                    </div>
                    <div class="col-md-4 col-xs-12 mb-1">
                        <h3>
                            Siguenos
                        </h3>
                        <div class="row">
                            <div class="col-1"></div>
                            <div class="col-11 py-1">
                                <b-icon icon="facebook" variant="white"></b-icon>
                                <span class="pl-3"> @jnconfecciones</span>
                            </div>
    
                            <div class="col-1"></div>
                            <div class="col-11 py-1">
                                <b-icon icon="instagram" variant="white"></b-icon>
                                <span class="pl-3"> @jnconfecciones</span>
                            </div>
    
                            <div class="col-1"></div>
                            <div class="col-11 py-1">
                                <i class="bi bi-whatsapp"></i>
                                <b-icon icon="telephone-fill" variant="white"></b-icon>
                                <span class="pl-3"> 3127363552</span>
                            </div>
                        </div>
    
                        <h5 class="my-3">
                            Suscribete y te estaremos enviando informacion de interes
                        </h5>
                        <p>
                            <input type="text" class="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1">
                        </p>
                        <p>
                            <button type="button" class="btn btn-primary">Enviar</button>
                        </p>
                    </div>
                </div>
            </div>
    
        </footer>
    </div>
</template>
<script>
import {BIcon} from 'bootstrap-vue'
export default {
    components:{
        BIcon,
    }
}
</script>