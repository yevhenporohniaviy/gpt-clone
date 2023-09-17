<template>
  <div class="h-screen">
    <div class="relative flex h-full max-w-full flex-1 overflow-hidden">
        <div class="flex h-full max-w-full flex-1 flex-col">
            <main class="relative h-full w-full transition-width overflow-auto flex-1">
                <div role="presentation" class="flex h-full">
                    <div class="flex-1 overflow-hidden">
                        <div class="react-scroll-to-bottom--css-ijeos-79elbk h-full dark:bg-gray-800">
                            <div class="react-scroll-to-bottom--css-ijeos-1n7m0yu">
                                <div class="flex flex-col text-sm dark:bg-gray-800">
                                    
                                <div v-for="(message, index) in messages" :key="index" class="group w-full text-token-text-primary border-b border-black/10 border-gray-900/50 "
                                :class="{'bg-gray-700': message.actor === 'AI'}"
                                data-testid="conversation-turn-2" style="--avatar-color: #AB68FF;">
                                    <div class="p-4 justify-center text-base md:gap-6 md:py-6 m-auto">
                                        <div class="flex flex-1 gap-4 text-base mx-auto md:gap-6 md:max-w-2xl lg:max-w-[38rem] xl:max-w-3xl }">
                                            <div class="flex-shrink-0 flex flex-col relative items-end">
                                                <div>
                                                  <icon v-if="message.actor === 'Human'" class="bg-indigo-500" name="uil:user" size="20"/>
                                                  <icon v-if="message.actor === 'AI'" class="bg-emerald-500" name="uil:processor" size="20"/>
                                                </div>
                                                <div class="text-xs flex items-center justify-center gap-1 absolute left-0 top-2 -ml-4 -translate-x-full invisible"><button disabled="" class="dark:text-white disabled:text-gray-300 dark:disabled:text-gray-400"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon-xs" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="15 18 9 12 15 6"></polyline></svg></button>
                                                    <span
                                                        class="flex-grow flex-shrink-0 tabular-nums">1 / 1</span><button disabled="" class="dark:text-white disabled:text-gray-300 dark:disabled:text-gray-400"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon-xs" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="9 18 15 12 9 6"></polyline></svg></button></div>
                                            </div>
                                            <div class="relative flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]">
                                              <div class="flex flex-grow flex-col gap-3 max-w-full">
                                                  <div class="min-h-[20px] flex flex-col items-start gap-3 overflow-x-auto whitespace-pre-wrap break-words">
                                                      <div class="empty:hidden">{{message.message}} </div>
                                                  </div>
                                              </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        <div class="h-32 md:h-48 flex-shrink-0"></div>
                    </div>
                </div>
        </div>
    </div>
    <div class="absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient pt-2 md:pl-2 md:w-[calc(100%-.5rem)]">
        <form class="stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
            <div class="relative flex h-full flex-1 items-stretch md:flex-col">
              
                <div class="flex w-full items-center">
                    <div class="flex flex-col w-full flex-grow relative border border-black/10 dark:border-gray-900/50 dark:text-white rounded-xl shadow-xs dark:shadow-xs dark:bg-gray-700 bg-white">
                      <textarea v-model="message" @keypress.enter.exact.prevent="submitMessage" id="prompt-textarea" tabindex="0" data-id="request-:rd:-0" rows="1" placeholder="Отправить сообщение" class="m-0 w-full resize-none border-0 bg-transparent py-[10px] pr-10 focus:ring-0 focus-visible:ring-0 dark:bg-transparent md:py-4 md:pr-12 pl-3 md:pl-4"
                            style="max-height: 200px; height: 56px; overflow-y: hidden;">
                          </textarea>
                            <button @click.prevent="submitMessage" class="absolute p-1 rounded-md md:bottom-3 md:p-2 md:right-3 dark:hover:bg-gray-900 dark:disabled:hover:bg-transparent right-2 disabled:text-gray-400 enabled:bg-brand-purple text-white bottom-1.5 transition-colors disabled:opacity-40"
                            data-testid="send-button" style="" disabled=""><span class="" data-state="closed"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" class="icon-sm m-1 md:m-0"><path d="M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z" fill="currentColor"></path></svg></span></button></div>
                </div>
            </div>
        </form>
        <div class="relative pb-3 pt-2 text-center text-xs text-gray-600 dark:text-gray-300 md:px-[60px] md:pb-6 md:pt-3"><span>ChatGPT может предоставлять неточную информацию о людях, местах или событиях. <a href="https://help.openai.com/en/articles/6825453-chatgpt-release-notes" target="_blank" rel="noreferrer" class="underline">Версия ChatGPT от 3 августа</a></span></div>
    </div>
    </div>
    </main>
    </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const message = ref('')

const messages = ref([
  {
    actor: 'Human',
    message: "Hello, how are you?"
  },
  {
    actor: 'AI',
    message: "I'am fine. How i can help you?"
  },
])
const submitMessage = async() => {
  if (message.value === '') return 

  messages.value.push({ actor: 'Human', message: message.value }) 
      message.value = ''


  const req = await fetch('/api/gpt3', {
    body: JSON.stringify(messages.value.slice(1)),
    method: 'post'
  })

  if (req.status === 200) {
    const response = await req.json()
    messages.value.push({ actor: 'AI', message: response.message })
    message.value = ''
  }
}

</script>