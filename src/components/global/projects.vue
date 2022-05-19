<template>
  <div class="flex flex-col relative pt-[5%]">
    <div class="px-[8%] md:px-[12%] text-left font-bold text-5xl md:text-6xl relative">
      <ContentTitle text="My" ext-class="gradient-green pb-1" />
      <ContentTitle text="Projects" ext-class="gradient-green pb-16" />
    </div>

    <div
      class="
        px-[12%]
        grid grid-cols-1
        md:grid-cols-3
        lg:grid-cols-4
        gap-4
        h-full
        project-cards
      "
    >
      <div
        v-for="(item, index) in githubRepoData.slice(0, 6)"
        :id="`project-card-${index}`"
        :key="index"
        class="
          max-w-full
          mx-4
          bg-[#23283b]
          text-gray-400
          m-3
          py-3
          h-52
          rounded-xl
        "
      >
        <div class="h-full">
          <div class="grid flex-col px-4 py-3 h-full">
            <div class="flex justify-end items-center w-full">
              <a aria-label="GitHub Link" :href="item.html_url" target="_blank">
                <svg
                  id="github"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 438.549 438.549"
                  class="h-7"
                  fill="currentColor"
                >
                  <Title>GitHub</Title>

                  <defs>
                    <radialGradient id="githubLogoHover">
                      <stop offset="20%" stop-color="#059669" />
                      <stop offset="100%" stop-color="#6ee7b7" />
                    </radialGradient>
                  </defs>

                  <path
                    d="M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365 c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63 c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996 c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136 c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559 c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559 c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997 c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851 c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136 c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41 c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126 c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817 c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994 c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849 c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24 c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979 c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146 c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995 c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906 C438.536,184.851,428.728,148.168,409.132,114.573z"
                  />
                </svg>
              </a>
            </div>
            <div class="max-w-full py-6">
              <h1 class="text-xl font-bold font-mono">
                {{ item.name }}
              </h1>
            </div>
            <div class="flex justify-between">
              <div class="flex justify-around max-w-md">
                <div class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    role="presentation"
                    class="mr-2"
                  >
                    <g transform="translate(2.5 3)">
                      <path
                        d="M10.214.441,12.53,5.1a.8.8,0,0,0,.6.437l5.185.749a.8.8,0,0,1,.528.306.77.77,0,0,1-.085,1.032L15,11.258a.762.762,0,0,0-.226.7l.9,5.128a.787.787,0,0,1-.652.892.868.868,0,0,1-.516-.08L9.888,15.478a.776.776,0,0,0-.742,0L4.494,17.912a.812.812,0,0,1-1.077-.33.8.8,0,0,1-.081-.5l.9-5.128a.788.788,0,0,0-.226-.7L.232,7.621a.786.786,0,0,1,0-1.112l0,0a.909.909,0,0,1,.452-.222L5.87,5.534a.812.812,0,0,0,.6-.438L8.784.441a.787.787,0,0,1,.458-.4.8.8,0,0,1,.61.044A.82.82,0,0,1,10.214.441Z"
                        transform="translate(0 0)"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        strokeWidth="1.5px"
                      />
                    </g>
                  </svg>

                  <div>
                    {{ item.stargazers_count }}
                  </div>
                </div>
              </div>

              <h1 class="font-mono">
                {{ item.language }}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="githubRepoData.length > 5" class="mt-10 md:mt-24">
      <Btn :action="linkToGithub" text="See more" />
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
import gsap from 'gsap'

import ContentTitle from '../atom/title.vue'
import Btn from '../atom/button.vue'

// composition modules
import fromto from '../../modules/gsap/fromto'

export default defineComponent({
  components: {
    ContentTitle,
    Btn,
  },
  props: {
    username: {
      type: String,
      required: false,
    },
  },
  setup(props) {
    const githubRepoData = ref([])

    const { createTimelineFromTo } = fromto()

    const getGithubRepo = async () =>
      await fetch(
        `https://api.github.com/users/${props.username}/repos?per_page=20`,
      )

    const linkToGithub = () => (window.location = 'https://github.com/suppeep')

    onMounted(async () => {
      githubRepoData.value = await (await getGithubRepo()).json()

      const animation = gsap.fromTo(
        '.project-cards',
        { autoAlpha: 0, y: 150 },
        { duration: 1, autoAlpha: 1, y: 0 },
      )
      const scrollFormTo = createTimelineFromTo('.project-cards', animation)
    })

    return {
      githubRepoData,
      linkToGithub,
    }
  },
})
</script>

<style scoped>
#github:hover {
  fill: url("#githubLogoHover");
}
</style>
