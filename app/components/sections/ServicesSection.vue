<template>
  <section id="servicos" class="py-20 bg-slate-950 text-white relative">
    <UContainer>
      
      <!-- Cabeçalho -->
      <div class="text-center max-w-3xl mx-auto space-y-3 mb-14">
        <p class="text-xs font-semibold tracking-wider text-emerald-400 uppercase">
          Áreas de Atuação
        </p>

        <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Soluções completas para cada fase do seu negócio
        </h2>

        <p class="text-slate-400 text-sm sm:text-base">
          Substituímos a burocracia por estratégias eficientes de crescimento.
        </p>
      </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div 
                v-for="servico in servicos" 
                :key="servico.id"
                class="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-300 group"
            >           
                <div>
                  <div class="flex items-center space-x-3.5 mb-4">
                    <div class="w-11 h-11 rounded-xl bg-emerald-950/60 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors duration-300 shrink-0">
                      <UIcon :name="servico.icone" class="w-6 h-6" />
                    </div>
                
                    <h3 class="text-lg font-bold text-white leading-snug">
                      {{ servico.titulo }}
                    </h3>
                  </div>
              
                  <p class="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                    {{ servico.descricao }}
                  </p>
                </div>

                <button
                  type="button"
                  class="w-full py-2.5 px-4 rounded-xl border border-slate-800 bg-slate-900/40 text-xs sm:text-sm font-medium text-slate-200 hover:text-white hover:border-emerald-500/50 hover:bg-slate-800/60 transition-all duration-200 flex items-center justify-center space-x-2 group/btn"
                  @click="openWhatsapp(servico.mensagemWhats)"
                >
                  <span>Solicitar Proposta</span>
                  <UIcon name="i-heroicons-arrow-right" class="w-4 h-4 text-slate-400 group-hover/btn:translate-x-1 group-hover/btn:text-emerald-400 transition-all" />
                </button>
            </div>
        </div>

    </UContainer>
  </section>
</template>

<script setup lang="ts">
import { useWhatsapp } from '../composables/useWhatsapp'

const { openWhatsapp } = useWhatsapp()

interface Servico {
  id: string
  titulo: string
  descricao: string
  icone: string
  mensagemWhats: string
}

const servicos: Servico[] = [
  {
    id: 'societario',
    titulo: 'Societário',
    descricao: 'Abertura, alteração, legalização de empresas, obtenção de alvarás e estruturação societária simplificada.',
    icone: 'i-heroicons-building-office-2',
    mensagemWhats: 'Olá! Gostaria de solicitar uma proposta para a área Societária (Abertura/Alteração de Empresa).'
  },
  {
    id: 'contabil',
    titulo: 'Gestão Contábil',
    descricao: 'Balanços, demonstrações financeiras e relatórios analíticos para tomada de decisão fundamentada.',
    icone: 'i-heroicons-calculator',
    mensagemWhats: 'Olá! Gostaria de solicitar uma proposta para a área de Gestão Contábil.'
  },
  {
    id: 'fiscal',
    titulo: 'Fiscal & Tributário',
    descricao: 'Planejamento tributário preventivo para redução legal do pagamento de impostos e apurações precisas.',
    icone: 'i-heroicons-percent-badge',
    mensagemWhats: 'Olá! Gostaria de solicitar uma proposta para a área Fiscal & Tributária.'
  },
  {
    id: 'bpo',
    titulo: 'BPO Financeiro',
    descricao: 'Terceirização da gestão financeira, contas a pagar/receber, faturamento e emissão de notas fiscais.',
    icone: 'i-heroicons-wallet',
    mensagemWhats: 'Olá! Gostaria de solicitar uma proposta para a área de BPO Financeiro.'
  },
  {
    id: 'DP',
    titulo: 'Departamento Pessoal',
    descricao: 'Gestão de folha de pagamento, admissões, rescisões, eSocial e cumprimento de todas as obrigações trabalhistas.',
    icone: 'i-heroicons-user-group',
    mensagemWhats: 'Olá! Gostaria de solicitar uma proposta para a área de Departamento Pessoal.'
  },
  {
    id: 'Auditoria',
    titulo: 'Auditoria Contábil',
    descricao: 'Análise minuciosa de demonstrações financeiras e processos internos para prevenir inconsistências e garantir segurança fiscal.',
    icone: 'i-heroicons-magnifying-glass-circle',
    mensagemWhats: 'Olá! Gostaria de solicitar uma proposta para a área de Auditoria Contábil.'
  }
]
</script>