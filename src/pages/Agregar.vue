<template>
    <q-page padding>
        
        <h5 class="text-center">Agregar Nueva Nota</h5>
      
        <q-form class="row q-col-gutter-md"
        @submit.prevent = "procesarNota"
        @reset="reset"
        ref="myForm">
      
                <div class="col-12 col-sm-6">
                 <q-input label="Nombre de la nota" v-model="Nota" 
                 lazy-rules
                 :rules="[ val => val && val.length > 0 || 'No Puede estar en blanco']"/>
                </div>

                 <div class="col-12 col-sm-6">
                 <q-select label="Prioridad de su nota" v-model="seleccion" 
                 :options="opciones"
                 lazy-rules
                 :rules="[ val => val && val.length > 0 || 'No Puede estar en blanco']"/>
                </div>
        
            <div class="col-12 col-sm-12">
            <q-editor v-model="editor"  :dense="$q.screen.lt.md"
                :definitions="{
                    save: {
                    tip: 'Guardar task',
                    icon: 'save',
                    label: 'Guardar',
                    handler: saveWork
                    },
                    upload: {
                    tip: 'Actualizar Nube',
                    icon: 'cloud_upload',
                    label: 'Actualizar',
                    handler: uploadIt
                    }
                }"
                :toolbar="[
                    ['bold', 'italic', 'strike', 'underline'],
                    ['upload', 'save']]"/>
            </div>

        <div class="col-12 col-sm-12">
        <q-card class="row"
        flat bordered v-for="(item,index) in tasks" :key="index" >
          
        <q-card-section class="col" v-html="item.texto" 
        :class="item.estado ? 'tachar' : ''" />
        <q-btn flat color="blue" @click="item.estado = !item.estado">Acción</q-btn>
        <q-btn flat color="red" @click="eliminar(index)">Eliminar</q-btn>
                 
        </q-card>
        <div v-if="tasks.length == 0" class="flex flex-center">
        <p class="text-h6">Sin Notas</p>
        </div>
        </div>

         <div class="col-12" >
         <q-toggle label = "Aceptar los Términos " v-model="terminos"/>
         </div>
               
         <div class="col-12 col-sm-12">
         <q-btn label="Submit" color="dark" type="submit"/>
         <q-btn label="Reset" color="brown-5" outline class="q-ml-sm" type="reset"/>
         </div>
         
         </q-form>

         <pinta-notas>
             
        </q-page>
</template>

<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'
import { colors } from 'quasar'
import PintaNotas from 'src/components/PintaNotas.vue'

export default {
  components: { PintaNotas },
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
                    message: 'Debe Aceptar los terminos y llenar el espacio de nota'
              })
            }else {
                $q.notify({
                    color: 'green-4',
                    textColor: 'white',
                    icon: 'cloud_done',
                    message: 'Nota Guardad'
            }),
            
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
             editor: ref(
        ''
      ),
            Nota,
            seleccion,
            opciones,
            procesarNota,
            terminos,
            reset,
            myForm,

         editor: '',
      tasks: [ 
      {texto: 'No.1', estado: false},
      ]
      }
  },
  methods:{
   saveWork () {
     this.tasks.push({
       texto: this.editor,
       estado: false
     })
        this.$q.notify({
          message: 'Nota Guardada',
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done'
        })
      },
      uploadIt () {
       this.$q.notify({
          message: 'Servidor Invalido Intente Conectar.',
          color: 'red-5',
          textColor: 'white',
          icon: 'warning'
        })
      },
 eliminar(index){
   this.$q.dialog({
    title: 'Adventencia',
    message: 'Esta seguro de eliminar su nota',
    cancel: true,
    persistent: true
  }).onOk(() => {
      console.log(index);
     this.tasks.splice(index, 1);
    
  })
}
}
}

</script>

<style>
  .tachar {
    text-decoration: line-through;
  }
</style>