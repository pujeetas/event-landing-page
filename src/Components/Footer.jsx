import React from 'react'

const Footer = () => {
  return (
    <footer class="py-12 bg-white sm:py-16">
      <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-screen-2xl">
        <div class="relative flex flex-col items-center gap-y-8 md:flex-row md:justify-between">
          <a href="#" title="30 Days of Coding" class="flex items-center shrink-0 md:order-1">
            <img class="w-auto h-10 sm:h-12" src="images/logo.svg" alt="DSA revision logo"/>
          </a>

          <div class="relative flex items-center justify-center gap-3 md:order-3 sm:justify-end">
            <a href="https://twitter.com/singh1aryan" title="Twitter" class="p-2 transition-all duration-150 rounded-full group hover:bg-primary-50 ring-1 ring-transparent ring-inset hover:ring-primary-200" target="_blank" rel="noopener">
              <span class="sr-only">
                Twitter
              </span>
              <img class="w-6 h-6 transition-all duration-150 grayscale group-hover:grayscale-0" src="images/icon-twitter.svg" alt=""/>
            </a>

            <a href="https://youtube.com/@brwnboi" title="YouTube" class="p-2 transition-all duration-150 rounded-full group hover:bg-primary-50 ring-1 ring-transparent ring-inset hover:ring-primary-200" target="_blank" rel="noopener">
              <span class="sr-only">
                YouTube
              </span>
              <img class="w-6 h-6 transition-all duration-150 grayscale group-hover:grayscale-0" src="images/icon-youtube.svg" alt=""/>
            </a>

            <a href="https://linkedin.com/in/singh1aryan" title="LinkedIn" class="p-2 transition-all duration-150 rounded-full group hover:bg-primary-50 ring-1 ring-transparent ring-inset hover:ring-primary-200" target="_blank" rel="noopener">
              <span class="sr-only">
                LinkedIn
              </span>
              <img class="w-6 h-6 transition-all duration-150 grayscale group-hover:grayscale-0" src="images/icon-linkedin.svg" alt=""/>
            </a>

            <a href="https://instagram.com/singh.aryan.45" title="Instagram" class="p-2 transition-all duration-150 rounded-full group hover:bg-primary-50 ring-1 ring-transparent ring-inset hover:ring-primary-200" target="_blank" rel="noopener">
              <span class="sr-only">
                Instagram
              </span>
              <img class="w-6 h-6 transition-all duration-150 grayscale group-hover:grayscale-0" src="images/icon-instagram.svg" alt=""/>
            </a>
          </div>

          <p class="flex items-center justify-center text-base font-normal text-gray-500 md:absolute md:inset-0 md:order-2">
            2023 © DSA revision
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
