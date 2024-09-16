<template>
    <div :class="[
        

    ]" >
      
      <div :class="[
        'flex items-center justify-start gap-1 h-[30px] cursor-pointer transition-all duration-150', //base
        'hover:bg-neutral-700 ', //hovering
      ]" >
        <UIcon @click="open=!open" :name="link.icon" :class="[
            'w-[20px] h-[20px] transition-all duration-200',
            link.sublinks && link.sublinks.length > 0 && open ?  'text-secondary-600' : 'text-neutral-100  ',
        ]"   />
        
        <span @click="open=!open" :class="[
            'text-md w-full transition-all duration-200 ',
            link.sublinks && link.sublinks.length > 0 && open ?  'text-secondary-600' : 'text-neutral-100 hover:text-white ',
        ]" >{{ link.text }}</span>
        
        <UIcon v-if="link.sublinks && link.sublinks.length > 0" @click="open=!open" name="mingcute:down-line" :class="[
          'w-[20px] h-[20px]  transition-all duration-200',
           open ?  'text-secondary-600' : 'text-neutral-100',
          !open ? '-rotate-90' : null,
        ]"   />
      </div>
  
      <div :class="[
        'ml-[17px] overflow-hidden transition-all duration-300', //base style
        !open ? 'max-h-[0px] pointer-events-none' : 'max-h-[150px]' 
      ]" >
        <DropDownMenuExtendableLine v-for="sublink,index in link.sublinks" :key="index" :sublink="sublink" />
      </div>
  
    </div>
  </template>
   
<script  setup>
     
    const props = defineProps(['link'])
     
    const open = ref(false)


</script>
  
