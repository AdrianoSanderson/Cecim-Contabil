<template>
  <div class="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-emerald-500 selection:text-white">
    <main>
      <SectionsHeroSection />
      <SectionsServicesSection />
      <SectionsNicheSection />
      <SectionsCalculator />
    </main>

    <LayoutFooter />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Cecim Contábil | Assessoria e Consultoria Contábil em Belém e região',
  ogTitle: 'Cecim Contábil | Assessoria e Consultoria Contábil em Belém e região',
  description: 'Assessoria contábil, gestão fiscal, BPO financeiro e consultoria especializada para empresas, médicos e advogados em Belém e região.',
  ogDescription: 'Soluções contábeis estratégicas para o seu negócio crescer com segurança. Fale com nossos especialistas.',
  ogImage: '/og-image.jpg',
  twitterCard: 'summary_large_image'
})
</script>