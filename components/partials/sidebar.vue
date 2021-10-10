<template>
    <div class="main-sidebar">
    <aside id="sidebar-wrapper">
      <div class="sidebar-brand">
        <a href="index.html">Fullstack</a>
      </div>
      <div class="sidebar-brand sidebar-brand-sm">
        <a href="index.html">FS</a>
      </div>
      <ul class="sidebar-menu">
        <li v-for="(menu,i) in listMenu" :key="i">
          <nuxt-link class="nav-link" :to="menu.to">
            <i :class="menu.icon"></i> <span>{{menu.name}}</span>
          </nuxt-link>
        </li>
        </ul>
        
      </aside>
    </div>
</template>

<script>
export default {
   data() {
    return {
      listMenu: [
        {
          name: "Semua Kelas",
          icon: "fas fa-home",
          to: "/all-class"
        },
        {
          name: "Kelasku",
          icon: "fas fa-bookmark",
          to: "/"
        },
        {
          name: "Presensi",
          icon: "fas fa-user",
          to: "/presensi"
        },
      ]
    }
  },
}
</script>