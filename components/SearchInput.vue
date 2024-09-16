<template>
  <div>
    <UInput
        :ui="{
            color : {
                gray : {
                    outline: 'text-red-500 bg-red-500',
                },
            },
            wrapper : 'bg-secondary-100 rounded-md text-gray-400'
        }"
        color="gray"
        variant="none"
        placeholder="Search For..."
        icon="i-material-symbols-light-search"
        size="sm"
        oultine="gray"
     />
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>