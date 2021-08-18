<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn label="Historial" color="primary" @click="dialog = true" />

    <q-btn label="Clear Historial" color="negative" @click="dialog = true" />

    <q-dialog
      v-model="dialog"
      persistent
      :maximized="maximizedToggle"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card class="bg-primary text-white">
        <q-bar>
          <q-space />

          <q-btn dense flat icon="minimize" @click="maximizedToggle = false" :disable="!maximizedToggle">
            <q-tooltip v-if="maximizedToggle" class="bg-white text-primary">Historia</q-tooltip>
          </q-btn>
          <q-btn dense flat icon="crop_square" @click="maximizedToggle = true" :disable="maximizedToggle">
            <q-tooltip v-if="!maximizedToggle" class="bg-white text-primary">Historial</q-tooltip>
          </q-btn>
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section>
          <div class="text-h5 text-color-red" >Alerta</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
        Todas las notas aqui en presente vista son las ultimas notas vista modificadas.
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      dialog: ref(false),
      maximizedToggle: ref(true)

    }
  }
}
</script>