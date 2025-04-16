# port

This template should help get you started developing with Vue 3 in Vite.

## library

npm vue-router
npm install lucide-vue-next
npm install vue-i18n

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

 <!-- sidebar -->
  <div class="bg-rose-500">
    <div class="flex">
      <Layout @toggle-file="toggleFile" />
      <div
        :class="[
          'transition-all duration-300 ease-in-out overflow-hidden border-r-[1px] border-stone-800 min-h-screen px-4 py-6',
          showFile ? 'ml-20 w-64 opacity-100' : 'w-0 opacity-0',
        ]"
      >
        <div v-if="showFile">
          explorer port
          <p>{{ t("hello") }}</p>
        </div>
      </div>
      <!-- RouterView_body -->
      <div :class="showFile ? 'ml-0 ' : 'ml-15 '">
        <!-- <RouterView /> -->
      </div>
    </div>
  </div>
