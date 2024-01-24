<template>
    <div class="p-4">
        <div class="overflow-x-auto">
            <table class="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th class="py-2 px-4 border-b">Имя</th>
                        <th class="py-2 px-4 border-b">Сообщение</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="feedback in feedbacks" :key="feedback.id">
                        <td class="py-2 px-4 border-b">{{ feedback.name }}</td>
                        <td class="py-2 px-4 border-b">
                            {{ feedback.message }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    computed: {
        ...mapState(["feedbacks"]),
    },
};
</script>
