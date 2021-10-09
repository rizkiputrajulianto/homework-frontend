<template>
    <div class="main-sidebar">
      <aside id="sidebar-wrapper">
        <div class="sidebar-brand">
          <a href="index.html">Fullstack Academy</a>
        </div>
        <div class="sidebar-brand sidebar-brand-sm">
          <a href="index.html">FS</a>
        </div>
        <ul class="sidebar-menu">
          <li v-for="(menu,i) in sbMenu" :key="i">
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
      sbMenu: [
        {
          name: "Semua Kelas",
          icon: "fas fa-home",
          to: "/"
        }
      ]
    }
  },
}
</script>