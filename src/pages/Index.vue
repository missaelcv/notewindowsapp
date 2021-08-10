<template>
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

      
      
    <q-card flat bordered v-for="(item,index) in tasks" :key="index" >
      <q-card-section v-html="item.texto" />
    </q-card>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useQuasar } from 'quasar'

export default {
  data () {
    return {
      editor: '',
      tasks: [
        {texto: 'Nota #1', estado: false},
        {texto: 'Nota #2', estado: true},
        {texto: 'Nota #3', estado: false},
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
      }
  }
}
</script>