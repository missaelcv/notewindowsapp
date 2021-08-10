<template>
  <div class="q-pa-md q-gutter-sm">
    <q-editor
      v-model="editor"
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
        ['upload', 'save']
      ]"/>
      
    <q-card flat bordered>
      <q-card-section v-html="editor" />
    </q-card>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useQuasar } from 'quasar'

export default {
  setup () {
    return {
      editor: ''
    }
  },
  methods:{
   saveWork () {
        this.$q.notify({
          message: 'Su Archivo ha sido Guardado en su Nube.',
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