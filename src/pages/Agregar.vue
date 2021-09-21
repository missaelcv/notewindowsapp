<template>
    <q-page padding>
                
      <div class="col-12 col-sm-6">
        <h5 class="text-center" >Agregar Nueva Nota.</h5>
            
        <q-form class="row q-col-gutter-md"
        @submit.prevent = "procesarNota"
        @reset="reset"
        ref="myForm">

          <div class="col-12 col-sm-6">
          <q-input   label="Fecha de Evento" color="dark"  filled v-model="input" mask="date" :rules="['date']">
            <template v-slot:append>
              <q-icon name="event"   color="dark" class="cursor-pointer">
                <q-popup-proxy :breakpoint="500">
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


  <div class="col-12 col-sm-6">
        <q-file label="Clic para Subir Archivo" outlined v-model="model">
        <template v-slot:prepend>
          <q-icon name="attach_file" />
        </template>
      </q-file>
       </div>
                
        
         

<div class="col-12 col-sm-12">
      <div> <q-splitter  v-model="splitterModel" style="height: 250px">
      <template v-slot:before>
        <q-tabs v-model="tab" vertical  class="text-teal">
          <q-tab name="mails" icon="mail" label="Mails" />
          <q-tab name="alarms" icon="alarm" label="Alarms" />
          <q-tab name="movies" icon="movie" label="Movies" />
        </q-tabs>
      </template>

      <template v-slot:after>
        <q-tab-panels v-model="tab" animated  swipeable vertical
          transition-prev="jump-up"
          transition-next="jump-up">
          <q-tab-panel name="mails">
            <div class="text-h4 q-mb-md">Mails</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
          </q-tab-panel>

          <q-tab-panel name="alarms">
            <div class="text-h4 q-mb-md">Alarms</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
          </q-tab-panel>

          <q-tab-panel name="movies">
            <div class="text-h4 q-mb-md">Movies</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
          </q-tab-panel>
        </q-tab-panels>
      </template>

    </q-splitter>
  </div>
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
         <q-toggle color="red" size="lg" label = "Aceptar los Términos "  v-model="terminos"/>
        
               
         <div class="col-12 col-sm-12">
         <q-btn label="Submit" color="primary"  type="submit"/>
         <q-btn label="Reset" color="dark"  class="q-ml-sm" type="reset"/>
         <q-btn label="Compartir" color="primary"   class="q-ml-sm" @click="show()" />
         </div>
         </div>

        </q-form>
      
         <pinta-notas class="q-mt-xl" :notas="notas"/>

    
    </div>

     <div class="q-pa-md">
    <div class="q-gutter-md">
      <q-skeleton class="bg-teal" animation="pulse-y" />
       <q-skeleton class="bg-dark" />
        <q-skeleton class="bg-teal" animation="pulse-y" />
      
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
  
  methods: {
    getUrl (files) {
      return `http://localhost:4444/upload?count=${files.length}`
    }
  },

  components: { PintaNotas },
    setup() {
        
        const myForm = ref(null);
        const fecha = ref(null)
        
        const $q = useQuasar()
        const Nota = ref(null)
        const seleccion = ref(null)
        const terminos = ref(false)
        const opciones = ['Maxima', 'Regular','Minima','Baja']

        //$q.bottomSheet({Nota}) // returns Object

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


           function show (grid) {
      $q.bottomSheet({
        dark: true,
        message: 'Bottom Sheet message',
        grid,
        actions: [
          {
            label: 'Drive',
            img: 'https://cdn.quasar.dev/img/logo_drive_128px.png',
            id: 'drive'
          },
          {
            label: 'Keep',
            img: 'https://cdn.quasar.dev/img/logo_keep_128px.png',
            id: 'keep'
          },
          {
            label: 'Google Hangouts',
            img: 'https://cdn.quasar.dev/img/logo_hangouts_128px.png',
            id: 'calendar'
          },
          {
            label: 'Calendar',
            img: 'https://cdn.quasar.dev/img/logo_calendar_128px.png',
            id: 'calendar'
          },
          {},
          {
            label: 'Share',
            icon: 'share',
            id: 'share'
          },
          {
            label: 'Upload',
            icon: 'cloud_upload',
            color: 'primary',
            id: 'upload'
          },
          {},
          {
            label: 'John',
            avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
            id: 'john'
          }
        ]
      }).onOk(action => {
        // console.log('Action chosen:', action.id)
      }).onCancel(() => {
        // console.log('Dismissed')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    }
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
                prioridad: seleccion.value,
                fecha : fecha.value
            }]

              reset()
            }
        } 

        const reset = () => {
            Nota.value = null;
            seleccion.value = null ;
            terminos.value = false;
            fecha.value = null;
        }

         const url = ref('https://placeimg.com/500/300/nature')
         
        return { 
          url, //btn cambio de imagen 
      refresh () {
        url.value = 'https://placeimg.com/500/300/nature?t=' + Math.random()
      }, //btn cambio de imagen 
          show ,
           tab: ref('mails'),
      splitterModel: ref(20),
          
          input: ref(''), //Fecha 
      date: ref('2018/11/20'),

        model: ref(null), // btn de subir archivo

      

           progress,
           fecha, // Fecha de evento
     

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