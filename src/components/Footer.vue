<template>
    <!-- Footer Section -->
    <footer class="profile-footer inknut-antiqua-regular">
        <p class="mestrado">MEIW, Programação Web Avançada</p>
        <a href="https://portal.uab.pt/" target="_blank">
            <img src="@/assets/logo-uab.png" alt="Universidade Aberta" />
        </a>
    </footer>
</template>

<style scoped>
.profile-footer {
    background-color: #D9D9D9;

    display: flex;
    justify-content: space-between;
    font-size: 24px;
    align-items: center;

    max-height: 74px;
    
}

img {
    width: auto; /* you can use % */
    height: 50px;
    display: flex;
    margin-right: 150px;
}

.mestrado{
    
    margin-left: 150px;
}


</style>
