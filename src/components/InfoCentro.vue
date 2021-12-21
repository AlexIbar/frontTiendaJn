<template>
    <section class="p-5 imagen-fondo">
        <div class="text-center letra-info">
            <h4>{{titulo}}</h4>
            <P>{{parrafo ? parrafo : ''}}</P>
        </div>
    </section>
</template>
<script>
export default {
    props:[
        'titulo',
        'parrafo'
    ]
}
</script>
<style >
    .imagen-fondo{
        background-image: url('https://images.pexels.com/photos/5632388/pexels-photo-5632388.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
        background-size:cover;
        background-position: center;
    }
    .letra-info{
        max-width: 500px;
        background-color: #e21d24;
        color: white;
        padding-top: 5px;
        border-radius: 5px;
        margin: auto;
    }
</style>