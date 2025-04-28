<template>
  <div class="w-full pr-5 min-h-screen relative px-10 pt-5">
    <!-- แสดง Loading ระหว่างโหลด -->
    <div
      v-if="isLoading"
      class="absolute inset-0 flex items-center justify-center bg-stone-950 z-10"
    >
      <span
        className="loading loading-spinner loading-4xl text-stone-500 w-30 animate-pulse"
      ></span>
    </div>
    <div class="flex flex-col gap-4 w-full">
      <h1 class="text-4xl underline underline-offset-8 font-semibold">
        Order_Food
      </h1>
      <span class="text-gray-300 text-sm text-balance">
        Project Flow:
        <br />
        <br />
        /homepage → Enter "Customer Name" (store name in localStorage)
        <br />
        <br />
        /selectpage → Choose food, e.g., pork, chicken, beef <br />
        <br />
        /Orderpage → Display list + selected food, click to confirm order →
        Status changes to "Please wait", click to complete <br />
        → Status changes to "Food delivered successfully". There is a Logout
        button → Clears all data from localStorage <br />
        and returns to the name entry page (LoginPage.jsx) → Enter name <br />
        <br />
        contexts/OrderContext.jsx → Used to store main states and connect with
        localStorage
      </span>
    </div>
    <div class="py-5 pr-5">
      <!-- iframe แสดงเว็บ -->
      <iframe
        src="https://react-order-food.vercel.app/"
        class="w-full min-h-screen border-none"
        frameborder="0"
        @load="isLoading = false"
        @error="handleError"
      ></iframe>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isLoading = ref(true);

const handleError = () => {
  console.error("โหลด iframe ไม่สำเร็จ");
  isLoading.value = false; // หรือจะแสดงข้อความ error แทน
};
</script>
