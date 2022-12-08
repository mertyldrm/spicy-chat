<template>
  <div class="container">
    <div class='formContainer'>
      <div className={styles.logoDiv}>
        <img src='./chili-pepper.png' alt="logo" class='logo' />
        <label class='logoName'>Spicy Chat</label>
      </div>
      <form @submit.prevent="onSubmit">
        <input class="input" v-model="username" placeholder="Username..." />
        <button class="send-button" :disabled="!isValid">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectUsername",
  data() {
    return {
      username: "",
    };
  },
  computed: {
    isValid() {
      return this.username.length > 2;
    },
  },
  methods: {
    onSubmit() {
      this.$emit("input", this.username);
    },
  }
};
</script>

<style scoped>
.send-button {
  vertical-align: middle;
  margin-top: 20px;
  background-color: #4CAF50;
  border: none;
  border-radius: 10%;
  color: white;
  padding: 13px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
}

.container {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #121212;
}

.formContainer {
  width: 400px;
  margin: 0 auto 0 auto;
  padding: 32px;
  background: #404040;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
}

.input {
  width: 100%;
  padding: 12px;
  border-radius: 6px;
  border: 1px solid rgb(63, 73, 204);
  font-size: 0.9rem;
}

.input option {
  margin-top: 20px;
}

.logoDiv {
  border-bottom: 1px solid #dfdfdf;
}

.logo {
  width: 60px;
  height: 60px;
  margin-top: 10px;
}

.logoName {
  font-size: 40px;
  font-weight: bold;
  color: #fff;
}
</style>
