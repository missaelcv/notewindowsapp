<template>
    <q-page padding>
        
        <h5 class="text-center">Agregar Nueva Nota</h5>

        {{nota}}-{{seleccion}}

        <q-form class="row q-col-gutter-md"
        @submit.prevent = "procesarNota">

                <div class="col-12 col-sm-6">
                 <q-input label="nota" v-model="nota" 
                 lazy-rules
                 :rules="[ val => val && val.length > 0 || 'Please type something']"/>
                </div>

                 <div class="col-12 col-sm-6">
                 <q-select label="Prioridad" v-model="seleccion" :options="opciones"
                 :rules="[(val) => (val && val.length > 0) || 'Campo vacío']"/>
                </div>


            <div class="col-12">
        <q-btn label="Submit" color="secondary" type="submit"/>

         <q-btn label="Reset" color="brown-5" outline class="q-ml-sm" type="reset"/>
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
        const opciones = ['Maxima', 'Regular','Minima']

        const procesarNota = () => {
            console.log('clic de nota en consola')
        }

        return {
            nota,
            seleccion,
            opciones,
            procesarNota
        }
    },
}
</script>