<script setup>
import Footer from '../components/Footer.vue'
import Navbar from '../components/Navbar.vue'

</script>
<template>
    <div class="profile-page relative">
        <!-- Header Section -->
        <Navbar :page="'OQueEuFaco'" />

        <!-- Profile Picture and About Section -->
        <section class="profile-content">
            <div class="profile-picture">
                <img src="@/assets/profile.jpg" alt="Sofia Rocha" />
            </div>
            <div class="timeline">
                <div class="timeline-item" v-for="(event, index) in works" :key="index">
                    <div class="timeline-date">{{ event.date }}</div>
                    <div class="timeline-content">
                        <h3 class="inknut-antiqua-regular">{{ event.title }}</h3>
                        <p>{{ event.description }}</p>
                    </div>
                </div>
            </div>
        </section>

        <div class="tecnologies">
            <img src="@/assets/icons/tecnologies.svg">
        </div>

    </div>

    <Footer class="absolute" />
</template>

<script>
export default {
    name: "QuemSouEu",
    data() {
        return {
            works: [
                {
                    date: "Atual",
                    title: "Norz67 - Web Developer",
                    description: "Criação e gestão de uma loja online",
                },
                {
                    date: "2023-2024",
                    title: "Red/Ocean - Full-Stack Developer",
                    description: "Desenvolvimento de interfaces em projetos laravel para gestão de produtos",
                },
                {
                    date: "2022-2023",
                    title: "Estágio Profissional",
                    description: "Desenvolvimento de soluções em python para sincronização de produtos em lojas online",
                },
                {
                    date: "2019-2022",
                    title: "Licenciatura em IT, ESTGA",
                    description: "",
                },
            ],
        };
    },
};
</script>

<style scoped>
.profile-page {
    height: 100%;
    justify-content: space-between;

}

.profile-content {
    display: flex;
    justify-content: space-between;
    padding-top: 40px;
    height: 400px;

}

.profile-picture img {
    width: 346px;
    height: 354px;
    border-radius: 50%;
    margin-left: 212px;
    margin-top: 20px;
}

.tecnologies {
    margin-left: 190px;
}

.absolute {
    position: absolute;
    bottom: 0;
    width: 100%;
}

.relative {
    position: relative;
}

.timeline {
    position: relative;
    padding-left: 40px;
    border-left: 2px solid #0D0D0D;
    font-size: 24px;
    height: 500px;
}

.timeline-item {
    position: relative;
    padding-bottom: 100px;
}

.timeline-date {
    position: absolute;
    left: -190px;
    font-weight: bold;
}

.timeline-content {
    padding-left: 20px;
    justify-content: center;
}

.timeline-content h3 {
    margin: 0;
    font-size: 1.1em;
}

.timeline-content p {
    margin: 5px 0 0;
}

.timeline-item::before {
    content: "";
    position: absolute;
    left: -65px;
    top: -10px;
    width: 50px;
    height: 50px;
    background-color: black;
    border-radius: 50%;
}
</style>