<template>
  <div>{{ $title }}</div>
</template>

<script>
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import { boot } from 'quasar/wrappers'
import axios from 'axios'

export default boot(async ({ app, router, store }) => {
  // something to do
  await something()
})
</script>
