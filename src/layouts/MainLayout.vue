<template>
    <q-layout view="lHh Lpr lff">
      <q-header elevated class="bg-primary">
        <q-toolbar>
          <q-toolbar-title class="bg-gray">App The Note</q-toolbar-title>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        </q-toolbar>
      </q-header>
      <q-drawer v-model="drawer" :width="200" :persistent='false' >
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>

            <q-item clickable v-ripple to="/"  active-class="my-menu-link" exact>
              <q-item-section avatar>
                <q-icon name="inbox" />
              </q-item-section>
            
              <q-item-section>
                Inicio
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="historia" active-class="my-menu-link">
              <q-item-section avatar>
                <q-icon name="drafts" />
              </q-item-section>

              <q-item-section>
                Historia
              </q-item-section>
            </q-item>

             <q-item clickable v-ripple to="agregar" active-class="my-menu-link">
              <q-item-section avatar>
                <q-icon name="inbox" />
              </q-item-section>

              <q-item-section>
              Agregar 
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="settings"    :active="link === 'settings'" @click="link = 'settings'"
        active-class="my-menu-link">
        <q-item-section avatar>
          <q-icon name="settings" />
        </q-item-section>

        <q-item-section>
          Settings
          </q-item-section>
      </q-item>
            
          </q-list>
        </q-scroll-area>

        

       

        <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <div class="text-weight-bold">Bloc and Notes</div>
            <div>@blocandNote</div>
          </div>
        </q-img>
      </q-drawer>

      <q-page-container>
        <router-view></router-view>
      </q-page-container>
    </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

import { defineComponent, ref } from 'vue'

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  }
];


export default {
  setup () {
    const drawer = ref(false)

    return {
      drawer ,
       link: ref('inbox')
    }
  }
}
</script>


<style lang="scss">
.my-menu-link {
  color: red;
  background: #F2C037
}
  
</style>