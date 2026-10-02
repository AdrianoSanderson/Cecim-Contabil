<script setup lang="ts">
import { useWhatsapp } from '../composables/useWhatsapp'

const { openWhatsapp } = useWhatsapp()

interface Nicho {
  id: string
  titulo: string
  descricao: string
  icone: string
  mensagemWhats: string
}

const nichos: Nicho[] = [
  {
    id: 'advogados',
    titulo: 'Advogados e Escritórios',
    descricao: 'Distribuição de lucros isenta, enquadramento correto na OAB e tributação ideal.',
    icone: 'i-heroicons-scale',
    mensagemWhats: 'Olá! Sou da área jurídica e gostaria de falar com um consultor sobre soluções contábeis para advogados.'
  },
  {
    id: 'medicos',
    titulo: 'Médicos e Clínicas',
    descricao: 'Redução da alíquota de imposto por equiparação hospitalar e livro caixa.',
    icone: 'i-heroicons-heart',
    mensagemWhats: 'Olá! Sou da área da saúde e gostaria de falar com um consultor sobre soluções para médicos e clínicas.'
  },
  {
    id: 'servicos',
    titulo: 'Prestadores de Serviços',
    descricao: 'Emissão automatizada de Notas Fiscais e planejamento do Fator R no Simples Nacional.',
    icone: 'i-heroicons-computer-desktop',
    mensagemWhats: 'Olá! Sou prestador de serviços e gostaria de falar com um consultor sobre o planejamento do Fator R e NFe.'
  },
  {
    id: 'comercio',
    titulo: 'Comércio e PMEs',
    descricao: 'Recuperação de créditos tributários e gestão simplificada do estoque e caixa.',
    icone: 'i-heroicons-building-storefront',
    mensagemWhats: 'Olá! Possuo uma empresa de comércio/PME e gostaria de falar com um consultor contábil.'
  }
]
</script>

<template>
  <section id="nichos" class="py-20 bg-slate-900 text-white relative">
    <UContainer>
      
      <!-- Cabeçalho -->
      <div class="text-center max-w-3xl mx-auto space-y-3 mb-14">
        <p class="text-xs font-semibold tracking-wider text-emerald-400 uppercase">
          Especialidades
        </p>

        <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Atendimento sob medida para o seu segmento
        </h2>
      </div>

      <!-- Grid de 4 Colunas Fiel ao Protótipo Visual -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          v-for="nicho in nichos" 
          :key="nicho.id"
          class="bg-slate-950/60 border border-slate-800/80 rounded-2xl p-6 flex flex-col items-center text-center justify-between hover:border-emerald-500/40 transition-all duration-300 group"
        >
          <div class="flex flex-col items-center">
            <!-- Ícone Circular com Fundo Escuro Verde -->
            <div class="w-14 h-14 rounded-full bg-emerald-950/60 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors duration-300">
              <UIcon :name="nicho.icone" class="w-7 h-7" />
            </div>

            <!-- Título do Nicho -->
            <h3 class="text-lg font-bold text-white mb-3">
              {{ nicho.titulo }}
            </h3>

            <!-- Descrição Curta -->
            <p class="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
              {{ nicho.descricao }}
            </p>
          </div>

          <!-- Botão Textual Verde "Falar com Consultor >" -->
          <button
            type="button"
            class="text-xs sm:text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors duration-200 flex items-center justify-center space-x-1 py-1"
            @click="openWhatsapp(nicho.mensagemWhats)"
          >
            <span>Falar com Consultor</span>
            <span class="text-base leading-none">›</span>
          </button>
        </div>
      </div>

    </UContainer>
  </section>
</template>