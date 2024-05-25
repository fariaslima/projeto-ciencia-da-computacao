<template>
	<v-app>
		<Header />
		<div>
			<v-container class="container">
				<router-view></router-view>
			</v-container>
		</div>
    <Footer />
	</v-app>
</template>

<script>
import Header from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'

export default {
  components: { Header, Footer},
}
</script>

<style>

body {
  font-family: 'Lato', sans-serif;
  /* background: #2193b0;
  background: -webkit-linear-gradient(to right, #6dd5ed, #2193b0);
  background: linear-gradient(to right, #6dd5ed, #2193b0); */
  
}

.container {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
}
/*
 header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>
