<template>
    <q-page padding>
        
        <h5 class="text-center">Agregar Nueva Nota</h5>

        {{nota}}-{{seleccion}}

        <q-form class="row q-col-gutter-md ">

                <div class="col-12 col-sm-6">
                 <q-input label="nota" v-model="nota"/>
                </div>

                 <div class="col-12 col-sm-6">
                 <q-select label="Prioridad" v-model="seleccion"/>
                </div>


            <div class="col-12">
        <q-btn label="Submit" color="secondary"/>

         <q-btn label="Reset" color="brown-5" outline class="q-ml-sm"/>
         </div>
         </q-form>
        </q-page>
</template>



<script>
import {ref} from 'vue'

export default {
    setup() {
        const nota = ref(null)
        const seleccion = ref(null)

        return {
            nota,
            seleccion
        }
    },
}
</script>