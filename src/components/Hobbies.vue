<script setup>
import Footer from '../components/Footer.vue'
import Navbar from '../components/Navbar.vue'

</script>
<template>

    <Navbar :page="'Hobbies'" />
    <div class="container relative">
        <div class="section">
            <div class="image-container">
                <img src="@/assets/books.svg" alt="Books" class="image">
            </div>
            <div class="text-container" style="margin-left: 200px;">
                <h2 class=".inknut-antiqua-bold">Leitura</h2>
                <p>
                    Adoro ler vários gêneros de livros, desde o romance ao desenvolvimento pessoal.
                </p>
                <p>
                    É a partir dos livros que aprendo sobre a história do mundo, como na trilogia “Pilares da Terra” de
                    Ken Follett; sobre finanças como no livro “Pai Rico, Pai Pobre” de Robert Kiyosaki e Sharon Lechter;
                    entre outras áreas.
                </p>
            </div>
        </div>

        <div class="section">
            <div class="text-container" style="margin-right: 50px;">
                <h2 class=".inknut-antiqua-bold">Gastronomia</h2>
                <p>
                    Gosto de experimentar novas comidas de culturas diferentes, sendo as minhas favoritas cultura
                    japonesa, coreana, italiana e portuguesa.
                </p>
                <p>
                    Adoro almoçar e jantar fora em vários restaurantes diferentes porque, apesar de o prato ser o mesmo,
                    a experiência será sempre diferente.
                </p>
            </div>
            <div class="image-container">
                <img src="@/assets/sushi.svg" alt="Sushi" class="image">
            </div>
        </div>
    </div>

    <Footer class="absolute" />
</template>

<script>
export default {
    name: "App",
};
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    margin-left: 150px;
    margin-right: 250px;

}

.section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    padding: 20px;
}

.image-container {
    flex: 1;
    max-width: 200px;
}

.image {
    width: 355px;
    height: 355px;
    border-radius: 50%;
    object-fit: cover;
}

.text-container {
    flex: 3;
    padding: 0 20px;
    background-color: #D9D9D9;
    border-radius: 20px;
    font-size: 24px;
    height: 300px;
    color: #0D0D0D;

}

h2 {
    font-size: 36px;

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