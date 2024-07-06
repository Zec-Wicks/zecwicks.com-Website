<template>
    <nav class="navbar">
      <!-- Navigation buttons -->
      <div class="navbar-left">
        <button :class="{ 'active': $route.path === '/' }" @click="navigateTo('/')">Home</button>
        <button :class="{ 'active': $route.path === '/resume' }" @click="navigateTo('/resume')">Resume</button>
        <button :class="{ 'active': $route.path === '/about' }" @click="navigateTo('/about')">About</button>
        <button :class="{ 'active': $route.path === '/contact' }" @click="navigateTo('/contact')">Contact</button>
      </div>
      <!-- Name and icon links -->
      <div class="navbar-right">
        <span class="navbar-name">Zechariah Wicks</span>
        <a href="https://github.com/zec-wicks" target="_blank">
          <img src="../assets/GitHubLogo.svg" alt="GitHub Logo" class="navbar-icon">
        </a>
        <a href="https://linkedin.com/in/zechariah-wicks/" target="_blank">
          <img src="../assets/LinkedinLogo.svg" alt="Linkedin Logo" class="navbar-icon">
        </a>
      </div>
    </nav>
</template>
  
<script>
  export default {
    name: 'NavBar',
    methods: {
      navigateTo(path) {
        this.$router.push(path);
      }
    }
  }
</script>
  
<!-- navigation bar styling -->
<style>
@import '../assets/page.css';

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 0; /* Remove padding */
  margin: 0; /* Remove margin */
}

.navbar-left {
  display: flex;
/*  flex: 1; /* Not sure how I feel about this this makes the buttons span the width of the task bar */
}

.navbar-right {
  display: flex;
  align-items: center;
  margin-right: 10px;
  margin-top: 4px;
}

.navbar-name {
  margin-right: 0.5rem;
}

.navbar-icon {
  margin: 0rem 0.2rem;
}

.navbar-icon:hover {
  filter: invert();
}

</style>

