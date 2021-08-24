<template>
<q-page padding>
  <div class="col-12 col-sm-6">
<q-table grid class="text-center"
      grid-header
      :rows="rows"
      :columns="columns"
      row-key="name"
      :filter="filter"
      hide-header>
      <template v-slot:top-right >
        <q-input class="text-rigth" borderless dense debounce="300" v-model="filter" placeholder="Search" align='rigth'>
          <template v-slot:append>
          <q-icon  name="search" />
          </template>
          </q-input>
          </template>
        </q-table>

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
        <q-btn class="q-pa-ms  text-center" color="positive" href="#http://localhost:8081/#/nueva" label="New Note" />
                <q-tooltip class="bg-accent">Clic para continuar</q-tooltip>
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
      val: ref(true)  
    }
  }
}
</script>
