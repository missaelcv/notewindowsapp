<template>
    <q-table class="q-mt-md"
    no-data-label="Sin nota para mostrar"
    title="Notas Creadas"
    :columns= 'columns'
    :rows="notas"
    dark color="amber"/>
</template>

<script>

const columns = [
    {
        name:     'Nota',
        label:    'Nota',
        align:    'left',
        field:    'Nota',
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

    const rows = [{
        //nota: 'Nota 1',
       // prioridad: "Maxima"
    }]

export default {
    props: {
        notas: Array
    },
    setup() {
        return{
            columns,
            rows,
        }
    },
}
</script>