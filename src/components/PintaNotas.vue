<template>
    <q-table class="q-mt-md"
    no-data-label="Sin nota para mostrar"
    title="Formulario"
    :columns= 'columns'/>
</template>

<script>

const columns = [
    {
        name:     'nota',
        label:    'Nota',
        align:    'left',
        field:    'nota',
        sortable: 'true'
    },
     {
        name:     'prioridad',
        label:    'Prioridad',
        align:    'left',
        field:    'prioridad',
        sortable: 'true'
    }
]
export default {
    setup() {
        return{
            columns
        }
    },
}
</script>