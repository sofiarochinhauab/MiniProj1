<template>
    <header class="profile-header">
        <div class="container-profile">
            <p class="inknut-antiqua-regular name">Sofia Rocha</p>
            <p class="inknut-antiqua-regular cargo">Full-Stack Developer</p>
        </div>
        <nav class="navigation inknut-antiqua-regular ">
            <a href="/" :style="linkStyle">
                Quem sou eu?
            </a>
            <a href="/o-que-eu-faco" :style="linkStyleWork">O que eu faço?</a>
            <a href="/hobbies" :style="linkStyleHobbies">Hobbies</a>
        </nav>
    </header>
</template>

<style scoped>
.profile-header {
    background-color: #8C8C8C;
    color: #0D0D0D;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.container-profile {
    margin-left: 150px;
}

.cargo {
    font-size: 24px;
}

.name {
    font-size: 32px;
}


.navigation a {
    color: #0D0D0D;
    margin: 0 10px;
    text-decoration: none;
    font-size: 24px;
    margin-right: 150px;
}

.navigation a:hover {
    color: #F2F2F2;
}
</style>


<script>
export default {
    props: {
        page: {
            type: String,
            required: true
        }
    },
    computed: {
        linkStyle() {
            return { color: this.page === 'QuemSouEu' ? '#F2F2F2' : '#0D0D0D' };
        },
        linkStyleWork() {
            return { color: this.page === 'OQueEuFaco' ? '#F2F2F2' : '#0D0D0D' };
        },
        linkStyleHobbies() {
            return { color: this.page === 'Hobbies' ? '#F2F2F2' : '#0D0D0D' };
        }
    }
};
</script>