<template>
  <section class="relative bg-slate-900 text-white overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
    <div class="absolute -top-24 -left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
    <div class="absolute top-1/2 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

    <UContainer class="relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div class="lg:col-span-7 text-center lg:text-left space-y-6">
          
          <div class="inline-flex items-center">
            <UBadge
              color="emerald"
              variant="soft"
              size="lg"
              class="rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium border border-emerald-500/20"
            >
              <UIcon name="i-heroicons-shield-check" class="w-4 h-4 mr-2 text-emerald-400" />
              Contabilidade de Alta Performance
            </UBadge>
          </div>

          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
            Sua contabilidade sem complicação para o seu negócio <span class="text-emerald-400  decoration-emerald-500/40 decoration-wavy decoration-2">crescer com segurança</span>.
          </h1>

          <p class="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Oferecemos consultoria financeira, planejamento tributário e gestão trabalhista sob medida para empresas, médicos, advogados e prestadores de serviços.
          </p>

          <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <UButton
              size="xl"
              
              variant="solid"
              class="w-full sm:w-auto justify-center bg-emerald-600 font-semibold text-white shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/40 transition-all duration-300"
              icon="i-heroicons-chat-bubble-left-right"
            >
              Falar com um Especialista
            </UButton>

            <UButton
              size="xl"
              variant="ghost"
              class="w-full sm:w-auto bg-gray-600 justify-center font-medium text-slate-200 hover:text-white hover:bg-slate-800 border border-slate-700/60"
              icon="i-heroicons-calculator"
            >
              Simular Rescisão Grátis
            </UButton>
          </div>

          <div class="pt-6 border-t border-slate-800/80 grid grid-cols-2 gap-4 text-center lg:text-left">
            <div>
              <p class="text-xl sm:text-2xl font-bold text-white">2 Unidades</p>
              <p class="text-xs sm:text-sm text-slate-400">Para te atender</p>
            </div>
            
            <div>
              <p class="text-xl sm:text-2xl font-bold text-white">+500 Clientes</p>
              <p class="text-xs sm:text-sm text-slate-400">Satisfeitos</p>
            </div>
          </div>

        </div>

        <div class="lg:col-span-5 relative">
          <div class="relative mx-auto max-w-md lg:max-w-none">
            <div class="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-2xl blur-lg opacity-30"></div>
            
            <div class="relative bg-slate-800/90 border border-slate-700/80 rounded-2xl p-6 shadow-2xl backdrop-blur-sm space-y-6">
              
              <div class="overflow-hidden rounded-xl bg-slate-900 border border-slate-700/50 aspect-video relative group">
                <img 
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&amp;fit=crop&amp;w=800&amp;q=80" 
                  alt="Escritório Cecim Contábil" 
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
                <div class="absolute bottom-3 left-3 right-3 text-left">
                  <p class="text-xs font-semibold uppercase tracking-wider">Cecim Contábil</p>
                </div>
              </div>

              <div class="bg-slate-900/80 rounded-xl p-4 border border-slate-700/50 flex align-colunm items-center space-x-4">
                <div class="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <UIcon name="i-heroicons-document" class="w-6 h-6" />
                </div>
                <div>
                  <h4 class="text-sm font-semibold text-white">Gestão Fiscal</h4>
                  <p class="text-xs text-slate-400">Impostômetro sob controle</p>
                </div>
              </div>
              <div class="bg-slate-900/80 rounded-xl p-4 border border-slate-700/50 flex align-colunm items-center space-x-4">
                <div class="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <UIcon name="i-heroicons-users" class="w-6 h-6" />
                </div>
                <div>
                  <h4 class="text-sm font-semibold text-white">Departamento Pessoal</h4>
                  <p class="text-xs text-slate-400">Pagamentos Verificados</p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </UContainer>
  </section>
</template>