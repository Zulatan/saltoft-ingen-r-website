<template>
    <div>
        <div class="content-container">
            <h1>Vores seneste projekter</h1>
            <div class="line"></div>
            <p>Vi bestræber os på altid at udføre kundens ønske til perfektion. Se nogle af vores tidligere <br> projekter ved at klikke på et af billederne herunder.</p>
        </div>
    </div>
</template>


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
            color: $primary-color;
            font-family: $poppins;
        }
        p {
            font-weight: 200;
            font-size: 14px;
        }
    }

</style>

<script>
export default {
    name: 'OmOsHero'
}
</script>
