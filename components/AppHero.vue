<template>
  <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <img
        src="https://content.freelancehunt.com/profile/photo/225/dashk_a.png"
        className="max-w-sm rounded-lg shadow-2xl"
      />
      <div>
        <h1 className="text-5xl font-bold">
          {{ $t("hero.title") }}
        </h1>
        <p className="py-6">
          {{ $t("hero.description") }}
        </p>
        <button className="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>
</template>
