<template>
  <div>
    <div class="content-container">
      <h1>Vores seneste projekter</h1>
      <div class="line" />
      <p>Vi bestræber os på altid at udføre kundens ønske til perfektion. Se nogle af vores tidligere <br> projekter ved at klikke på et af billederne herunder.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectHero'
}
</script>

<style lang="scss">
    @import './assets/scss/variables.scss';
    .content-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        .line {
            width: 5%;
            height: 1px;
            margin: 30px 0;
            background-color: $primary-color;
        }
        h1 {
          font-size: 40px;
          color: $primary-color;
          font-family: $poppins;
          margin: 0;
          padding: 40px 0 20px 0;
        }
        p {
            font-weight: 200;
            font-size: 14px;
        }
    }

    // Mobil
    @media screen and (max-width: 375px) {
      .content-container {
        padding: 0 20px;
        .line {
          margin: 15px 0;
        }
        h1 {
          font-size: 24px;
        }
      }
    }

</style>
