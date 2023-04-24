<template>
  <div class="top-nav">
    <div class="brand">
      <div class="logo">
        i
      </div>
      <h5><span>The</span> Informant</h5>
      <span class="pipe mx-3">|</span>
    </div>

    <div class="msg-board">
      <div class="messages">
        <h5>
          Stay up to date with The Informant.
        </h5>
      </div>
    </div>
    
  </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

.top-nav {
  margin: 25px auto;
  padding: 10px 20px;
  width: 85%;
  height: 65px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 1px 0 #333;
}
.top-nav * {
  align-items: center;
}
.brand {
  display: flex;
}
.logo {
  /* border: 5px solid black; */
  box-shadow: -5px -5px 0 crimson, 5px 5px 0 black;
  font-size: larger;
  font-weight: bolder;
  font-family: 'Noto Serif', serif;
  width: 30px;
  height: 30px;
  justify-content: center;
  text-align: center;
  align-content: center;
}

.brand h5 {
  font-weight: bold;
  margin-left: 10px;
  color: black;
}

.brand h5 span {
  color: crimson;
  text-shadow: 0 0 1px #fff;
}

.pipe {
  font-size: 35px;
  font-weight: normal;
  margin: 0;
  padding: 0;
}
.msg-board {
  width: 100%;
  margin-right: 10px;
  height: 40px;
}

.msg-board * {
  line-height: 40px;
}
.msg-board .messages {
  display: flex;
  justify-content: left;
}


</style>