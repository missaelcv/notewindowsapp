<template>
<q-page padding>
  <div class="col-12 col-sm-6">

      <div class="q-pa-md">
    <div class="row items-start q-gutter-md">
      <q-responsive :ratio="4/4" class="col" style="max-height: 150px">
        <q-card class="column">
          <q-img class="col" src="https://cdn.quasar.dev/img/parallax1.jpg" />
        </q-card>
      </q-responsive>
    </div>
  </div>
  
      <div class="col-12 col-sm col-md-4 lead text-center">
      <q-badge  color="teal"> Time: {{ time }} </q-badge>
      </div>
    </div>
    
  <div class="q-pa-md q-gutter-sm" >
  <div class="jumbotron flex flex-center">
  <h4 class="display-3 q-mr-xs text-center "> Welcome to app Notes!</h4>
  </div>
   
  <h6 class="col-12 col-sm col-md-4 lead text-justify">Esta aplicacion te ayudara a crear tus apuntes donde podras recorda con 
  tiempo y apunte rapidos que te ayudara para que no te falten cualquier dato importante 
  que vallas a necesitar para futuros usos...</h6>
  <hr class="my-4">
  
 <div class="text-center">
  <h6 class="text-center">Empieza a crear notas ya!!</h6>
        <div class="text-center">
          </div>

            <div class="q-pa-md">
            <q-ajax-bar ref="bar" position="bottom" color="positive"
              size="10px" skip-hijack/>
            <q-btn color="positive" label="New Nota"  glossy unelevated icon="camera_enhance"
             @click="trigger" />
          </div>
          </div>
          </div>
           
         </q-page>
</template>

<script>
import { ref } from 'vue'
import { useRouter  } from 'vue-router' 

export default {
  setup () {
     const time = ref('10:56')
    const proxyTime = ref('10:56')
    const router = useRouter()
     const bar = ref(null)

          const trigger =  () => {
          const barRef = bar.value
          barRef.start()

          setTimeout(() => {
            const barRef = bar.value
            if (barRef) {
              barRef.stop()
            }
            router.push('/agregar')
          }, Math.random() * 3000 + 1000)
        }

    const columns = [
  {
    name: 'oneNote',
    required: true,
    align: 'center',
    field: row => row.name,
    sortable: true
  },
   {
    name: 'oneNote',
    required: true,
    align: 'center',
    field: row => row.name2,
    sortable: true
  }
]

const rows = [
  {
    name: 'Aqui Mostrara las tablas nuevas', 
  }  
]
    return {
      filter: ref(''),
      columns,
      rows,
      val: ref(true), 
      bar,
      trigger,
       time,
      proxyTime,      // Reloj 
     

      updateProxy () {
        proxyTime.value = time.value
      },

      save () {
        time.value = proxyTime.value
      }
    }  
  }
}
</script>
