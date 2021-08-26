<template>
    <q-page padding>
        
        <h5 class="text-center">Agregar Nueva Nota</h5>
        {{Nota}}-{{seleccion}}-{{terminos}}
        <q-form class="row q-col-gutter-md"
        @submit.prevent = "procesarNota"
        @reset="reset"
        ref="myForm">
      
                <div class="col-12 col-sm-6">

                 <q-input label="Nota" v-model="Nota" 
                 lazy-rules
                 :rules="[ val => val && val.length > 0 || 'No Puede estar en blanco']"/>
                </div>

                 <div class="col-12 col-sm-6">

                 <q-select label="Prioridad" v-model="seleccion" 
                 :options="opciones"
                 lazy-rules
                 :rules="[ val => val && val.length > 0 || 'No Puede estar en blanco']"/>
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
        const myForm = ref(null);
        const $q = useQuasar()
        const Nota = ref(null)
        const seleccion = ref(null)
        const terminos = ref(false)
        const opciones = ['Maxima', 'Regular','Minima']

        const procesarNota = () => {
            console.log('clic de nota en consola')
            if(terminos.value === false){
                $q.notify({
                    color: 'red-5',
                    textColor: 'white',
                    icon: 'warning',
                    message: 'Debe Aceptar los terminos primero'
              })
            }else {
                $q.notify({
                    color: 'green-4',
                    textColor: 'white',
                    icon: 'cloud_done',
                    message: 'Nota Guardad'
            })
             myForm.value.resetValidation();
            reset()
            }
        }

        const reset = () => {
            Nota.value = null
            seleccion.value = null 
            terminos.value = false 
        }
        return {
            Nota,
            seleccion,
            opciones,
            procesarNota,
            terminos,
            reset,
            myForm
            
        }
    }
}
</script>