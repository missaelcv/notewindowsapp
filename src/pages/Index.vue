<template>
<q-page padding>
  <div class="col-12 col-sm-6">

  <div class="q-pa-md q-gutter-sm" style="max-width: 400px">
  <div class="jumbotron flex flex-center">
  <h4 class="display-4 q-mr-xs text-center"> Welcome to app Notes!</h4>
  <h6 class=" col-12 col-sm col-md-3 lead text-center" >Esta aplicacion te ayudara a crear tus apuntes donde podras recorda con 
  tiempo y apunte rapidos que te ayudara para que no te falten cualquier dato importante 
  que vallas a necesitar para futuros usos...</h6>
  <hr class="my-4">
  </div>
  
 <div class="text-center">
  <h6 class="text-center">Empieza a crear notas ya!!</h6>
        <div class="text-center">
        

                  <router-view></router-view>

            <div class="q-pa-md">
            <q-ajax-bar
              ref="bar"
              position="bottom"
              color="positive"
              size="10px"
              skip-hijack/>
            <q-btn color="positive" label="New Nota" glossy unelevated icon="camera_enhance" @click="trigger" />
          </div>

        </div>
         </div>
         </div>
         </div>
         </q-page>
</template>

<script>
import { ref } from 'vue'
import { useQuasar } from 'quasar'

export default {
  setup () {
     const bar = ref(null)

          function trigger () {
          const barRef = bar.value
          barRef.start()

          setTimeout(() => {
            const barRef = bar.value
            if (barRef) {
              barRef.stop()
            }
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
      trigger
    }
  }
}
</script>
