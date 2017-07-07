<template>

  <div id="app" class="grid">
    <header><img src="./assets/logo.png"></header>
    <div class="grid-body">
      <main class="grid-content banner">
        <transition :name="transitionName">
          <router-view keep-alive></router-view>
        </transition>
      </main>
      <nav class="grid-nav">
        <ul id="navs" class="navs" role="tablist">
          <li :key="item.id" v-for='item in urlItems' role="presentation"><router-link :to="item.linkTo" class="nav-ceil">{{ item.name }}</router-link></li>
        </ul>
      </nav>
      <aside class="grid-ads">
        <p>Never give up !</p>
      </aside>
    </div>
    <footer>www.zhoou.com</footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      urlItems: [
        {id: 0, name: 'home', linkTo: '/home'},
        {id: 1, name: 'Hello', linkTo: '/hello'},
        {id: 2, name: 'me', linkTo: '/me'}
      ]
    }
  }
}
</script>
