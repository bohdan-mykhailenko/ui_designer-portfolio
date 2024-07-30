<template>
  <div class="hero bg-base-200 min-h-screen">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <img
        src="https://content.freelancehunt.com/profile/photo/225/dashk_a.png"
        class="max-w-sm rounded-lg shadow-2xl"
        alt=""
      />
      <div>
        <h1 class="text-5xl font-bold">
          {{ $t("hero.title") }}
        </h1>
        <p class="py-6">
          {{ $t("hero.description") }}
        </p>
        <button class="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>
</template>
