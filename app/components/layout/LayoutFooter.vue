<template>
  <footer class="bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-16 pb-12">
    <UContainer>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-800/60 items-start">
        
        <div class="lg:col-span-3 space-y-4">
          <div class="flex items-center space-x-3">
            <div class="flex items-center">
              <img src="/favicon.png" alt="Cecim Contábil" class="h-9 w-auto object-contain scale-200 transform" />
            </div>
            <span class="text-xl font-bold text-white tracking-wide">
              CECIM CONTÁBIL
            </span>
          </div>

          <p class="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Sua parceira estratégica para assessoria e gestão contábil de resultados.
          </p>
        </div>

        <div class="lg:col-span-3 space-y-4">
          <h3 class="text-xs font-semibold text-white uppercase tracking-wider">
            LINKS RÁPIDOS
          </h3>

          <ul class="space-y-2.5 text-xs sm:text-sm">
            <li v-for="link in linksRapidos" :key="link.nome">
              <a 
                :href="link.href" 
                class="hover:text-emerald-400 transition-colors"
              >
                {{ link.nome }}
              </a>
            </li>
          </ul>
        </div>

        <div class="lg:col-span-3 space-y-4">
          <h3 class="text-xs font-semibold text-white uppercase tracking-wider">
            CONTATO
          </h3>

          <ul class="space-y-3 text-xs sm:text-sm">
            <li class="flex items-center space-x-2.5">
              <UIcon name="i-heroicons-phone" class="w-4 h-4 text-emerald-400 shrink-0" />
              <span>(91) 98456-7097</span>
            </li>
            <li class="flex items-center space-x-2.5">
              <UIcon name="i-heroicons-envelope" class="w-4 h-4 text-emerald-400 shrink-0" />
              <a href="mailto:esc.cecimcontabil@gmail.com" class="hover:text-emerald-400 transition-colors">
                esc.cecimcontabil@gmail.com
              </a>
            </li>
            <li class="flex items-center space-x-2.5">
              <UIcon name="i-simple-icons-instagram" class="w-4 h-4 text-emerald-400 shrink-0" />
              <a 
                href="https://www.instagram.com/cecimcontabil/" 
                target="_blank" 
                rel="noopener noreferrer"
                class="hover:text-emerald-400 transition-colors"
              >
                @cecimcontabil
              </a>
            </li>
          </ul>
        </div>

        <div class="lg:col-span-3 space-y-4">
          <h3 class="text-xs font-semibold text-white uppercase tracking-wider">
            UNIDADES
          </h3>

          <div class="space-y-4 text-xs sm:text-sm">
            <div class="space-y-1">
              <div class="flex items-center space-x-1.5 text-white font-bold">
                <UIcon name="i-heroicons-map-pin" class="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Belém - PA</span>
              </div>
              <p class="text-slate-400 text-xs pl-5">
                Unidade 01 • Centro
              </p>
            </div>

            <div class="space-y-1">
              <div class="flex items-center space-x-1.5 text-white font-bold">
                <UIcon name="i-heroicons-building-office-2" class="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Salinópolis - PA</span>
              </div>
              <p class="text-slate-400 text-xs pl-5">
                Unidade 02 • Centro
              </p>
            </div>
          </div>
        </div>

      </div>

      <div class="pt-8 text-center text-xs text-slate-500">
        <p>© {{ currentYear }} Cecim Contábil. Todos os direitos reservados.</p>
      </div>

    </UContainer>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()

const linksRapidos = [
  { nome: 'Serviços Contábeis', href: '#servicos' },
  { nome: 'Soluções para Médicos e Advogados', href: '#nichos' },
  { nome: 'Calculadora de Rescisão', href: '#calculadora' }
]
</script>