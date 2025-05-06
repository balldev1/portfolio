<template>
  <div class="flex flex-col gap-4">
    <span
      class="text-gray-950 border-none uppercase text-balance mt-2 badge bg-white p-4 shadow-md shadow-gray-500"
    >
      Props & emit
    </span>

    <span class="text-gray-300 leading-8">
      props คือส่ง data จาก parent ไป child component <br />
      emit คือส่ง data จาก child componebts ไป parent
    </span>

    <div class="mt-5 flex flex-col gap-5 w-full items-center">
      <img src="/project/propsemit.png" loading="lazy" class="w-[40rem]" />
    </div>
  </div>
</template>
