<template>
    <div>
        <info-centro :titulo="'Colegios'"/>
        <br>
        <br>
        <colegios-list></colegios-list>
        <br>
    </div>
</template>
<script>
import InfoCentro from '../components/InfoCentro.vue'
import ColegiosList from '../components/ColegiosList.vue'
export default {
    components:{
        InfoCentro,
        ColegiosList,
    },
    data() {
        return {
        }
    },
}
</script>