<template>
    <div>
      <header>
        <p>Hi-hi</p>
      </header>
      <div>
        <slot />
      </div>
      <footer>
        <nav>
          <ul>
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/products">Products</NuxtLink></li>
          </ul>
        </nav>
      </footer>
    </div>
</template>

<style scoped>
  .router-link-exact-active {
    color: aquamarine;
  }
</style>