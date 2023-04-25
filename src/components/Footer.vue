<template lang="">
    <footer class="bg-dark text-light">
      <div class="footer d-block flex-column">

        <div class="info">
          <p>Address: Corlie Road, South Field</p>
          <p>Ph: 063 681 3151</p>
          <p>Email: johnnoad04@gmail.com</p>
        </div>

        <div class="container-fluid d-flex justify-content-center align-items-center footer-items">
          <div class="github footer-item">
            <a href="https://github.com/Zile10" target="_blank">
              <img src="https://img.icons8.com/ios-glyphs/30/FFFFFF/github.png" loading="lazy" class="d-inline">
              <p class="d-inline">Github</p>
            </a>
          </div>
          <div class="gmail footer-item">
            <a href="mailto:johnnoad04@gmail.com" target="_blank">
              <img src="https://img.icons8.com/fluency/48/null/gmail.png" loading="lazy" class="d-inline">
              <p class="d-inline">Gmail</p>
            </a>
          </div>
          <div class="linkedin footer-item">
            <a href="https://www.linkedin.com/in/john-bruce-noad-518171266/" target="_blank">
              <img src="https://img.icons8.com/color/48/null/linkedin.png">
              <p class="d-inline">LinkedIn</p>
            </a>
          </div>
        </div>
        <div class="copyright">
          <p>Copyright &copy; 2023</p>
        </div>
      </div>
    </footer>
</template>
<script>
export default {
  
}
</script>
<style scoped>
  footer {
    box-shadow: 0 0 6px 4px black;
    z-index: 20;
    position: inherit;
    bottom: 0;
    padding: 15px;
    text-align: center;
    word-wrap: break-word;
    width: 100%;
  }
  footer .info p {
    margin: 2px auto;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
  footer a {
    text-decoration: none;
    color: white;
  }
  footer .footer-item:hover {
    scale: 1.05;
  }
  .footer-item {
    margin: 5px 20px;
  }
  footer img {
    width: 25px;
  }
</style>