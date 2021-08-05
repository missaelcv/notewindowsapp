<template>
  <div class="q-pa-md q-gutter-sm">
    <q-editor v-model="editor" min-height="5rem" />
      
    <q-card flat bordered>
      <q-card-section v-html="editor" />
    </q-card>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      editor: ''
    }
  }
}
</script>