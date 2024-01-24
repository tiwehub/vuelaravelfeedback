<template>
    <nav>
        <ul class="flex p-4">
            <li class="mr-4">
                <router-link class="text-blue-500" to="/" v-slot="{ isActive }">
                    <span
                        :class="{
                            'font-bold': isActive,
                            'text-gray-500': !isActive,
                        }"
                        >Форма обратной связи</span
                    >
                </router-link>
            </li>
            <p class="mr-4">></p>
            <li>
                <router-link
                    to="/list"
                    class="text-blue-500"
                    v-slot="{ isActive }"
                >
                    <span
                        :class="{
                            'font-bold': isActive,
                            'text-gray-500': !isActive,
                        }"
                        >Список обращений</span
                    >
                </router-link>
            </li>
        </ul>
    </nav>
    <router-view />
</template>

<script>
export default {
    name: "App",
};
</script>
