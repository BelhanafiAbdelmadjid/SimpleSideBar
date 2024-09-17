<template>
  <div :class="[
    'lg:sticky lg:top-0 lg:w-[200px] transition-all duration-300', //style for lg devices
    'bg-neutral-800 border-r border-gray-800 p-3 flex flex-col items-start justify-start gap-6 ', //common styling
    'h-screen w-screen absolute z-50', //style for !lg devices
    !open ? 'left-[-100%]' : 'left-[0]',
  ]">
    
    <header class="flex items-start justify-start gap-2 w-full" >
        <img class="h-[24px] w-[24px]"  src="@/assets/logos/small_logo.png" alt="small logo">
        <span class="text-white w-full" >Dashboard</span>
        <UIcon @click="!open ? openMenu() : closeMenu()" class="lg:hidden w-[24px] h-[24px] bg-neutral-100" name="material-symbols:close" />
    </header>

    <SearchInput />

    <!-- Menu goes here -->
    <aside class="w-full grow" >
      
      <DropDownMenu v-for="link,index in links" :link="link" :key="index" />
      
    </aside>
    
    <footer class="w-full flex flex-col gap-4" >
      
      <div>
        <DropDownMenu v-for="link,index in footers" :link="link" :key="index" />
      </div>

      <div class="flex items-center justify-start gap-2" >
        <img class="w-[30px] h-[30px]" src="@/assets/logos/small_logo.png" alt="">
        <div>
          <span class="text-neutral-100 text-xs" >Jhon Doe</span>
          <span class="text-neutral-100 text-xs" >Account Settings</span>
        </div>
      </div>
      
    </footer>

  </div>

  <div class="lg:hidden w-full h-[50px]  bg-neutral-800 p-3 flex" >
    <UIcon @click="openMenu()" name="i-material-symbols-menu" class=" w-[24px] h-[24px] bg-neutral-200 text-neutral-200"/>
  </div>
</template>

<script setup>
const links = ref([
    {
      text : 'Dashboard',
      icon : 'material-symbols:home',
      sublinks : [
        {
          text : 'All pages',
          active : true,
        },
        {
          text : 'Reports',
        },
        {
          text : 'Products',
        }
      ],
      active : true,
    },
    {
      text : 'Features',
      icon : 'material-symbols:star',
      sublinks : [],
      active : false,
    },
    {
      text : 'Users',
      icon : 'mdi:user',
      sublinks : [],
      active : false,
    },
    {
      text : 'Pricing',
      icon : 'mdi:dollar',
      sublinks : [],
      active : false,
    },
    {
      text : 'Integartions',
      icon : 'mdi:puzzle',
      sublinks : [],
      active : false,
    },
])

const footers = ref([
    {
      text : 'Settings',
      icon : 'material-symbols:settings',
    },
    {
      text : 'Template pages',
      icon : 'tabler:circle-letter-w-filled',
    },
])

const open = ref(false)
const openMenu = () => {
  open.value = true;
    //this is for preventing user scrolling under the opened menu
  document.body.classList.add('overflow-hidden'); 

  //Incase the user scrolls a bit and them opens the sidebar
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
    });
};

const closeMenu = () => {
  open.value = false;
    document.body.classList.remove('overflow-hidden'); 
};
const changeLocation =()=>{
    closeMenu()
};
</script>

<style>

</style>