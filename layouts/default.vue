<template>
  <div>
    <div id="app">
      <div class="main-wrapper">
        <div class="navbar-bg"></div>
        <partials-navbar />
        <partials-sidebar />

        <!-- Main Content -->
        <div class="main-content">
          <section class="section">
            <div class="section-header">
              <!-- {{ $store.state.jadwal.Fullstack.jadwal[1].materi }} ini cara manggil datanya -->
              <nuxt />
            </div>

            <div class="section-body"></div>
          </section>
        </div>
        <partials-footer />
      </div>
    </div>
  </div>
</template>