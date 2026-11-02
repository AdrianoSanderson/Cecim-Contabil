<template>
  <section id="faq" class="py-20 md:py-28 bg-slate-950 text-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Cabeçalho da Seção -->
      <div class="text-center mb-16">
        <span class="text-emerald-400 font-semibold uppercase tracking-wider text-sm mb-3 block">
          Dúvidas Frequentes
        </span>
        <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-white">
          Perguntas comuns dos nossos clientes
        </h2>
      </div>

      <!-- Lista de FAQ (Acordeão com caixas separadas) -->
      <div class="space-y-4">
        <UAccordion 
          :items="faqItems" 
          :ui="{
            item: 'bg-slate-900/60 border border-slate-800 rounded-xl overflow-hidden transition-all duration-200 shadow-lg',
            trigger: 'flex justify-between items-center w-full text-left px-6 py-5 font-medium text-base md:text-lg text-white hover:text-emerald-400 transition-colors focus:outline-none',
            content: 'px-6 pb-5 text-slate-300 text-sm md:text-base leading-relaxed'
          }"
          class="space-y-4"
        >
        </UAccordion>
      </div>

      <!-- Chamada de Suporte Adicional -->
      <div class="mt-12 text-center">
        <p class="text-slate-400 text-sm sm:text-base">
          Ainda tem dúvidas sobre o seu caso específico?
          <a 
            href="https://wa.me/5591981234567?text=Olá!%20Gostaria%20de%20tirar%20uma%20dúvida%20sobre%20os%20serviços%20da%20Cecim%20Contábil." 
            target="_blank" 
            rel="noopener noreferrer"
            class="text-emerald-400 font-semibold hover:underline inline-flex items-center gap-1 ml-1"
          >
            Fale diretamente conosco pelo WhatsApp
          </a>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const faqItems = [
  {
    label: 'Como funciona a migração da minha empresa para a Cecim Contábil?',
    content: 'A transição é simples e totalmente gerida pela nossa equipa. Nós entramos em contacto com o seu contabilista anterior para solicitar os ficheiros e a documentação histórica. A sua empresa não sofre qualquer interrupção nos serviços nem risco de multas.',
    defaultOpen: true
  },
  {
    label: 'O que é o BPO Financeiro e como ele ajuda minha empresa?',
    content: 'O BPO Financeiro é a terceirização do nosso setor financeiro para a sua empresa. Nós cuidamos do contas a pagar, contas a receber, conciliação bancária e emissão de relatórios de fluxo de caixa, permitindo que você foque 100% no crescimento do seu negócio.'
  },
  {
    label: 'A Cecim Contábil atende apenas empresas de Belém e região?',
    content: 'Embora a nossa sede física e atuação principal estejam focadas em Belém e no estado do Pará, atendemos clientes de forma digital em diversas outras regiões com total segurança e agilidade.'
  },
  {
    label: 'Quanto tempo demora para abrir um novo CNPJ?',
    content: 'O prazo médio varia entre 5 a 10 dias úteis, dependendo da natureza jurídica e da agilidade dos órgãos de registro locais (Junta Comercial, Prefeitura e Receita Federal).'
  }
]
</script>