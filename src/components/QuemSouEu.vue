<script setup>
import Footer from '../components/Footer.vue'
import Navbar from '../components/Navbar.vue'

</script>
<template>
    <div class="profile-page relative">
        <!-- Header Section -->
        <Navbar :page="'QuemSouEu'" />

        <!-- Profile Picture and About Section -->
        <section class="profile-content">
            <div class="profile-picture">
                <img src="@/assets/profile.jpg" alt="Sofia Rocha" />
            </div>
            <div class="about ">
                <p>Sou a Sofia, 23 anos e sou apaixonada pela programação.</p>
                <p>Comecei a gatinhar nesta área na licenciatura e hoje conto com vários projetos realizados.</p>
                <p>
                    Sou bastante ambiciosa e curiosa pelo mundo e como tudo funciona, o que é uma faca de dois
                    gumes,
                    porque quero
                    fazer tudo e ao mesmo tempo não concluo nada.
                </p>
                <p>Com a minha vontade a aprender sinto que tudo é possível e isso leva-me por caminhos
                    inimagináveis.
                </p>
            </div>
        </section>

        <div class="social-icons-container">
            <!-- Left-aligned links -->
            <div class="social-links">
                <a href="https://github.com/sofiarochinhauab/MiniProj1" target="_blank">
                    <img src="@/assets/icons/github.svg" alt="GitHub">
                </a>
                <a href="https://www.linkedin.com/in/sofiarochinha/" target="_blank">
                    <img src="@/assets/icons/linkedin.svg" alt="LinkedIn">
                </a>
            </div>

            <!-- Right-aligned equation -->
            <div class="equation">
                <img src="@/assets/icons/equation.svg" alt="Equation">
            </div>
        </div>

    </div>

    <Footer class="absolute" />
</template>

<script>
export default {
    name: "QuemSouEu",
};
</script>

<style scoped>

.profile-page {
    font-family: Arial, sans-serif;
    height: 100%;
    justify-content: space-between;

}

.profile-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 40px;
}

.profile-picture img {
    width: 346px;
    height: 354px;
    border-radius: 50%;
    margin-left: 212px;
}

.about {
    max-width: 715px;
    max-height: 469px;
    text-align: left;
    background-color: #D9D9D9;
    border-radius: 20px;
    padding: 40px 50px 60px;

    font-size: 24px;
    margin-right: 150px;
}

.social-icons a {
    color: black;
    margin: 0 10px;
    font-size: 24px;
}

.social-icons-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 10px 20px;
}

.social-links {
    display: flex;
    gap: 15px;
    display: flex;
    margin-left: 212px;
    cursor: pointer;
}

.social-links img {
    width: auto;
    height: auto;
}

.equation img {
    width: auto;
}

.equation {
    margin-right: 200px;
    margin-top: 120px;
}

.absolute {
    position: absolute;
    bottom: 0;
    width: 100%;
}

.relative {
    position: relative;
}


</style>