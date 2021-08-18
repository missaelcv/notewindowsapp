<template>

<div class="col-12 col-sm-12">
  <div class="q-pa-md q-gutter-sm">
    <q-editor v-model="editor"
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
  </div>
</template>

<script>
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import VuePageTitle from 'vue-page-title'

export default {
  data () {
    return {
      editor: '',
      tasks: [
      //    {texto: 'Nota #1', estado: false},
      //    {texto: 'Nota #2', estado: false},
      //    {texto: 'Nota #3', estado: false},
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
    // console.log('>>>> OK')
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