<template>
    <q-page padding>
        
        <h5 class="text-center">Agregar Nueva Nota</h5>
        {{nota}}-{{seleccion}}-{{terminos}}
        <q-form class="row q-col-gutter-md"
        @submit.prevent = "procesarNota"
        @reset="reset">

                <div class="col-12 col-sm-6">
                 <q-input label="nota" v-model="nota" 
                 lazy-rules
                 :rules="[ val => val && val.length > 0 || 'No Puede estar en blanco']"/>
                </div>

                 <div class="col-12 col-sm-6">
                 <q-select label="Prioridad" v-model="seleccion" :options="opciones"
                 :rules="[(val) => (val && val.length > 0) || 'No Puede estar en blanco']"/>
                </div>

                 <div class="col-12" >
                    <q-toggle label = "Aceptar los Términos" 
                    v-model="terminos"/>
                </div>

            <div class="col-12">
        <q-btn label="Submit" color="secondary" type="submit"/>

         <q-btn label="Reset" color="brown-5" outline class="q-ml-sm" type="reset"/>
         </div>
         </q-form>
        </q-page>
</template>

<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'

export default {
    setup() {
        const nota = ref(null)
        const seleccion = ref(null)
        const terminos = ref(false)
        const opciones = ['Maxima', 'Regular','Minima']

        const procesarNota = () => {
            console.log('clic de nota en consola')
            if(terminos.value === false)
            alert('Falto los términos')
        }
        const reset = () => {
            nota.value = null
            seleccion.value = null
            terminos.value = false 

        }

        return {
            nota,
            seleccion,
            opciones,
            procesarNota,
            terminos,
            reset
        }
    },
}
</script>