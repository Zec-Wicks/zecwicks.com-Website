<template>
    <nav class="navbar">
      <!-- Navigation buttons -->
      <div class="navbar-left">
        <button :class="{ 'active': $route.path === '/' }" @click="navigateTo('/')">Home</button>
        <button :class="{ 'active': $route.path === '/portfolio' }" @click="navigateTo('/portfolio')">Portfolio</button>
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
}

button {
  color: #ccc;
  background-color: #333; /* Inactive button background color */
  border: none;
  padding: 0.5rem 1rem;
  margin: 0rem 0.1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%; /* Make the buttons fill the available space */
  text-align: center; /* Center the button text */
}

button.active {
  background-color: #8a2be2; /* Accent color for active button */
}

button:not(.active):hover {
  background-color: #6b3890;
}

.navbar-item {
  color: #ccc;
  text-decoration: none;
  margin-right: 1rem;
  transition: color 0.3s;
}

.navbar-item.active {
  color: #8a2be2; /* Light purple accent color */
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

body {
  margin: 0;
  padding: 0;
}
</style>
  