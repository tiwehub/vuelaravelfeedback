<template>
    <div class="p-4">
        <form
            @submit.prevent="submitForm"
            class="max-w-md mx-auto bg-white p-8 rounded shadow-lg"
        >
            <h1 class="text-center mb-2 text-2xl text-indigo-500 font-bold">
                Форма
            </h1>
            <div class="mb-4">
                <label
                    for="name"
                    class="block text-gray-700 text-sm font-bold mb-2"
                    >Имя</label
                >
                <input
                    v-model="name"
                    id="name"
                    type="text"
                    placeholder="Введите ваше имя"
                    class="w-full px-3 py-2 border rounded focus:outline-none focus:border-indigo-500"
                />
            </div>
            <div class="mb-4">
                <label
                    for="message"
                    class="block text-gray-700 text-sm font-bold mb-2"
                    >Сообщение</label
                >
                <input
                    v-model="message"
                    id="message"
                    type="text"
                    placeholder="Введите ваше сообщение"
                    class="w-full px-3 py-2 border rounded focus:outline-none focus:border-indigo-500"
                />
            </div>
            <button
                type="submit"
                class="bg-indigo-500 text-white py-2 px-4 rounded focus:outline-none hover:bg-indigo-700"
            >
                Отправить
            </button>
        </form>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    data() {
        return {
            name: "",
            message: "",
        };
    },
    methods: {
        ...mapActions(["submitFeedback"]),
        async submitForm() {
            await this.submitFeedback({
                name: this.name,
                message: this.message,
            });
            this.name = "";
            this.message = "";
        },
    },
};
</script>
