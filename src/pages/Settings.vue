<template>
  <div class="q-pa-md">

    <h4>Opcion de conection </h4>
    <q-btn push color="primary" label="Ayuda">
      <q-popup-proxy>
        <q-banner>
          <template v-slot:avatar>
            <q-icon name="signal_wifi_off" color="primary" />
          </template>
          You have lost connection to the internet. This app is offline.
        </q-banner>
      </q-popup-proxy>
    </q-btn>
  </div>
</template>

<script>
export default {
    setup() {
        
    },
}
</script>