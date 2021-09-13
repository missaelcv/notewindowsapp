<template>
    <q-page padding>
   
      <div class="col-12 col-sm-6">
        <h5 class="text-center" >Agregar Nueva Nota.</h5>
      
      <div class="q-mt-md">
       <q-tabs v-model="tab" inline-label
       class="bg-positive  text-white shadow-2">

        <q-badge color="red" rounded floating />
        <q-tab name="alarms" icon="alarm" label="Alarms" />
        <q-badge color="red" rounded floating />
        <q-tab name="photos" icon="photo" label="Photos" />
        <q-tab name="addressbook" icon="people" label="Address Book" />
      </q-tabs>
      </div>

        
        <q-form class="row q-col-gutter-md"
        @submit.prevent = "procesarNota"
        @reset="reset"
        ref="myForm">

          <div class="col-12 col-sm-6">
          <q-input filled v-model="input" mask="date" :rules="['date']">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy :breakpoint="600">
                  <q-date v-model="input" />
                </q-popup-proxy>
              </q-icon>
              </template>
            </q-input>
          </div>
        
                <div class="col-12 col-sm-6">
                 <q-input label="Nombre de la nota" v-model.trim="Nota" 
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
        <q-card class="row"
        flat bordered v-for="(item,index) in tasks" :key="index" >
                 
        </q-card>
        <div v-if="tasks.length == 0" class="flex flex-center">
        <p class="text-h6">Sin Notas</p>
        </div>
        </div>

         <div class="col-12" >
         <q-toggle label = "Aceptar los Términos "
         v-model="terminos"/>
         </div>
               
         <div class="col-12 col-sm-12">
         <q-btn label="Submit" color="positive" type="submit"/>
         <q-btn label="Reset" color="dark" outline class="q-ml-sm" type="reset"/>
         </div>

         </q-form>
      
         <pinta-notas class="q-mt-xl" :notas="notas"/>

         <email/>

    <div class="q-pa-md">
    <q-btn size="sm" color="primary" @click="randomize" label="Change Model" />
    <q-linear-progress reverse :value="progress" class="q-mt-md" />
    <q-linear-progress reverse :value="progress" color="warning" class="q-mt-sm" />
    <q-linear-progress reverse :value="progress" color="secondary" class="q-mt-sm" />
    </div>
    </div>

        </q-page>
</template>

<script>
import { useQuasar } from 'quasar'
import { ref,  onMounted, onBeforeUnmount } from 'vue'
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
        const opciones = ['Maxima', 'Regular','Minima','Baja']

          const progress = ref(0.01)
          const buffer = ref(0.01)

        let interval, bufferInterval

    onMounted(() => {
      interval = setInterval(() => {
        if (progress.value >= 1) {
          progress.value = 0.01
          buffer.value = 0.01
          return
        }

        progress.value = Math.min(1, buffer.value, progress.value + 0.1)
      }, 700 + Math.random() * 1000)

      bufferInterval = setInterval(() => {
        if (buffer.value < 1) {
          buffer.value = Math.min(1, buffer.value + Math.random() * 0.2)
        }
      }, 700)
    })

    onBeforeUnmount(() => {
      clearInterval(interval)
      clearInterval(bufferInterval)
    })


        const notas = ref([])

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
                    message: 'Nota Guardada'
            }),
            
            myForm.value.resetValidation();

            notas.value = [...notas.value, {
                Nota: Nota.value,
                prioridad: seleccion.value
            }]

              reset()
            }
        } 

        const reset = () => {
            Nota.value = null;
            seleccion.value = null ;
            terminos.value = false;
        }
        return {
          input: ref(''),
      date: ref('2018/11/03'),
           progress,
      randomize () {
        progress.value = Math.random()
      },

           tab: ref('mails'),
            Nota,
            seleccion,
            opciones,
            procesarNota,
            terminos,
            reset,
            myForm,
            notas,

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