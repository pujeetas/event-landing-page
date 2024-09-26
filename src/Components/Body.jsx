import React from 'react'

const Body = () => {
  return (
    <div>
      {/* Intro Section Start*/}
      <section className='ml-4 mt-10'>
        <div className='flex w-full font-spline'>
          <div className='ml-4 mt-4'>
            {/* Intro Start */}
            <div className='tracking-tighter text-6xl font-bold leading-none sm:text-7xl md:text-8xl lg:text-7xl xl:text-9xl'>
              <h1 className=' text-[#65c51c] font-bold mt-6'>ATTEND LIVE</h1>
              <h1 className=''>CLASSES EVERY WEEK</h1>
            </div>
            {/* Intro Ends */}

            {/* Paragraph Start */}
            <div className='mt-7 mb-7  mr-10 text-lg font-semibold leading-8 text-gray-500 '>
              <p className=''>
                Join founders, freelancers, designers, FAANG engineers, indie hackers, and more in our 24/7 WhatsApp Group for less than a cup of coffee.
                Join 24/7 Whatsapp + discord for $5/month
              </p>
            </div>
            {/* Paragraph Ends */}

            {/* Button Start */}
            <div>
              <button className='bg-[#65c51c] text-white rounded-full p-4 font-semibold justify-center'>Join 24/7 Whatsapp + discord for $5/month</button>
            </div>
            {/* Button Ends */}
          </div>
          {/* Image Start */}
          <div className='mr-10'>
            <img className='max-w-full h-auto' src='/images/Ai-bootcamp.png'></img>
          </div>
          {/* Image Ends */}
        </div>
        <div className='flex flex-wrap justify-center items-center mt-20 ml-5 mr-5 gap-20'>
          <div className='flex gap-3'>
            <img src='./public/images/icon-guides.svg'></img>
            <a className='font-semibold'>5+ Guides for Free</a>
          </div>
          <div className='flex gap-3'>
            <img src='./public/images/icon-courses.svg'></img>
            <a className='font-semibold'>Exclusive Courses & Projects</a>
          </div>
          <div className='flex gap-3'>
            <img src='./public/images/icon-whatsapp.svg'></img>
            <a className='font-semibold'>24/7 WhatsApp Support Group</a>
          </div>
          <div className='flex gap-3'>
            <img src='./public/images/icon-sessions.svg'></img>
            <a className='font-semibold'>1:1 Free Session</a>
          </div>
        </div>
      </section>
      {/* Intro Section Ends*/}

      {/* Testimonial Section Starts */}
      <section className='mt-20 ml-20 mr-20 p-10'>
        <div className='flex gap-10'>
          {/* Testimony-1 */}
          <div className='justify-center items-center'>
            <div className=' max-w-md mx-auto h-24 w-24 mb-5'>
              <img className='rounded-full border' src='images/avatars/avatar-aryan.webp'></img>
            </div>
            <div className='text-center mb-5'><p className='font-normal text-gray-950 leading-7 font-spline'>"This community has been a game-changer for my career. The exclusive courses and personalized guidance from expert mentors have helped me take my coding skills to the next level."</p></div>
            <div className='justify-center text-center mb-5' ><h3 className='font-bold font-spline'>Aryan Singh</h3>
              <h3>SWE at Google</h3>
            </div>
            <div className='flex justify-center items-center'>
              <img src='images/icon-star.svg'></img>
              <img src='images/icon-star.svg'></img>
              <img src='images/icon-star.svg'></img>
              <img src='images/icon-star.svg'></img>
              <img src='images/icon-star.svg'></img>
            </div>
          </div>
          {/* Testimony-2 */}
          <div className='justify-center items-center'>
            <div className='h-24 w-24 mx-w-md mx-auto mb-5'>
              <img className=' rounded-full border' src='images/avatars/avatar-kevin.webp'></img>
            </div>
            <div className='text-center mb-5'><p className='font-normal text-base font-spline leading-7'>"The exclusive courses and bi-weekly live sessions have been incredibly insightful, and collaborating on open-source projects has been a great way to build my portfolio. I highly recommend this community."</p></div>
            <div className='justify-center text-center mb-5'><h3 className='font-bold font-spline'>Kevin Smith</h3>
              <h3>SWE at Tesla</h3>
            </div>
            <div className='flex justify-center items-center'>
              <img src='images/icon-star.svg'></img>
              <img src='images/icon-star.svg'></img>
              <img src='images/icon-star.svg'></img>
              <img src='images/icon-star.svg'></img>
              <img src='images/icon-star.svg'></img>
            </div>
          </div>
          {/* Testimony-3 */}
          <div className='justify-center items-center'>
            <div className='h-24 w-24  max-w-md mx-auto mb-5'>
              <img className='rounded-full' src='images/avatars/avatar-umang.webp'></img>
            </div>
            <div className='justify-center text-center mb-5'><p className='font-normal leading-7 font-spline'>"Joining this community was one of the best decisions I've made for my career. The 24/7 WhatsApp group has been an incredible resource for networking and collaboration. I highly recommend this community"</p></div>
            <div className='justify-center text-center mb-5'><h3 className='font-bold font-spline'>Umang Choudhary</h3>
              <h3>SWE at Tik Tok</h3>
            </div>
            <div className='flex justify-center items-center'>
              <img src='images/icon-star.svg'></img>
              <img src='images/icon-star.svg'></img>
              <img src='images/icon-star.svg'></img>
              <img src='images/icon-star.svg'></img>
              <img src='images/icon-star.svg'></img>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial Section Ends */}
      <section>
        <div className='mt-20'>
          <div className='text-center justify-center mb-5'>
            <h1 className='text-5xl uppercase font-bold font-spline'>Simple no-tricks pricing</h1>
          </div>
          <div className='justify-center text-center'>
            <h3 className=' font-spline text-gray-500 text-lg'>Everything you need to grow 10x for less than a coffee.</h3>
          </div>
        </div>
      </section>
      {/* Subscription Details Starts */}
      <section>
        <div className=' max-w-xl lg:pl-10 mx-auto mt-12 lg:max-w-5xl lg:w-full ring-1 ring-gray-200 border lg:mmax-w-5xl lg:flex rounded-3xl lg:py-12 lg:justify-center'>
          <div className='p-2 -mt-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0'>
            <div className=''>
              <h3 className='font-bold font-spline text-xl'>Premium Elite Subscription</h3>
            </div>
            <div className=''>
              <p className='leading-7 tracking-tight lg:mt-6 text-base mt-4 font-normal text-gray-500 font-spline'>Join founders, freelancers, designers, FAANG engineers, indie hackers, and more in our 24/7 WhatsApp Group for less than a cup of coffee.</p>
            </div>
            <div class="flex items-center mt-10 gap-x-4">
              <h4 className=' flex-none leading-6 font-spline text-[#65c51c] font-bold'>What's Included</h4>
              <div class="flex-auto border-t h-px  border-gray-300"></div>
            </div>
            <ul role='list' className='grid grid-cols-2 gap-4 leading-6 text-sm mt-6'>
              <li className='flex gap-2'>
                <img src='images/icon-check.svg'></img>
                <h4 className='font-spline'>Expert Mentors</h4>
              </li>
              <li className='flex gap-2'>
                <img src='images/icon-check.svg'></img>
                <h4 className='font-spline'>Networking & Collaboration</h4>
              </li>
              <li className='flex gap-2'>
                <img src='images/icon-check.svg'></img>
                <h4 className='font-spline'>Exclusive Courses</h4>
              </li>
              <li className='flex gap-2'>
                <img src='images/icon-check.svg'></img>
                <h4 className='font-spline'>Career guidance</h4>
              </li>
            </ul>
          </div>
          <div class="p-2 -mt-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div
              class="py-10 text-center rounded-2xl bg-gray-50 ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-12">
              <div class="max-w-xs px-8 mx-auto">
                <p class="text-base font-semibold text-gray-600">
                  Less than a cup of coffee
                </p>
                <p class="flex items-center justify-center mt-6 gap-x-2">
                  <span class="text-5xl font-bold tracking-tight text-gray-900">
                    $5
                  </span>
                  <strike class="text-4xl font-semibold leading-6 tracking-wide text-gray-400">
                    $1000
                  </strike>
                </p>
                <div class="w-full mt-10">
                  <a href="https://nas.io/30dayscoding" target="_blank" rel="noreferrer"
                    class="w-full px-8 py-4 text-base font-semibold text-white transition-all duration-150 rounded-full shadow-sm bg-[#65c51c] hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500">
                    Join Community
                  </a>
                </div>

                <div class="flex flex-col items-center mt-10 gap-y-3 gap-x-4">
                  <div class="flex -space-x-2 overflow-hidden transition-all duration-150 isolate hover:-space-x-1">
                    <img class="relative z-30 inline-block w-8 h-8 rounded-full ring-2 ring-white"
                      src="images/avatars/avatar-aryan.webp" alt="" />
                    <img class="relative z-30 inline-block w-8 h-8 rounded-full ring-2 ring-white"
                      src="images/avatars/avatar-kevin.webp" alt="" />
                    <img class="relative z-30 inline-block w-8 h-8 rounded-full ring-2 ring-white"
                      src="images/avatars/avatar-umang.webp" alt="" />
                    <img class="relative z-30 inline-block w-8 h-8 rounded-full ring-2 ring-white"
                      src="images/avatars/avatar-1.png" alt="" />
                    <img class="relative z-30 inline-block w-8 h-8 rounded-full ring-2 ring-white"
                      src="images/avatars/avatar-2.png" alt="" />
                  </div>
                  <span class="text-sm font-medium text-gray-950">
                    100+ Active Members
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='pt-20'>
            <h1 className='justify-center text-center uppercase lg:text-5xl mx-auto leading-tight max-w-2xl font-bold font-spline'>Everything you need in one community</h1>
          </div>
          <div className='mt-5 '>
            <h3 className='font-spline text-center text-gray-500 text-xl lg:leading-9'>Unleashing your digital potential for lasting success</h3>
          </div>
          <div className='gap-5 lg:px-8 m-14 grid grid-cols-3 lg:gap-16'>
            <div className='text-center' class='group'>
              <img className="lg:group-hover:-translate-y-3 transition-all w-60 items-center justify-center h-auto mx-auto" src='/images/illustration-mentors.svg'></img>
              <h2 className='font-spline font-bold text-center text-xl'>EXPERT MENTORS</h2>
              <p className='text-gray-500 font-spline font-normal mt-2 text-base leading-7'>Get personalized guidance from expert mentors to take your coding skills to the next level.</p>
            </div>
            <div className='text-center' class='group'>
              <img className='lg:group-hover:-translate-y-3 transition-all  w-60 items-center justify-center h-auto mx-auto' src='/images/illustration-networking.svg'></img>
              <h2 className='font-spline font-bold text-center text-xl'>NETWORKING</h2>
              <p className='text-gray-500 font-spline font-normal mt-2 text-base leading-7'>Connect with like-minded coders from around the world and collaborate on exciting projects.</p>
            </div>
            <div className='text-centre' class='group'>
              <img className='lg:group-hover:-translate-y-3 transition-all  w-60 items-center justify-center h-auto mx-auto' src='/images/illustration-courses.svg'></img>
              <h2 className='font-spline font-bold text-center text-xl'>COURSES</h2>
              <p className='text-gray-500 font-spline font-normal mt-2 text-base leading-7'>Exclusive courses in Full Stack, AI, Blockchain, and more to help you stay ahead of the curve.</p>
            </div>



          </div>
        </div>
      </section>
      {/* Subscription Details Ends */}

      {/* Company Logo Starts */}
      <section>
        <div className='flex items-center justify-center lg:gap-x-5 mt-40 mb-40'>
          <div ><img src='/images/company-logos/adobe.svg' /></div>
          <div><img src='/images/company-logos/airbnb.svg' /></div>
          <div><img src='/images/company-logos/dropbox.svg' /></div>
          <div><img src='/images/company-logos/figma.svg' /></div>
          <div><img src='/images/company-logos/framer.svg' /></div>
          <div><img src='/images/company-logos/google.svg' /></div>
        </div>
      </section>
      {/* Company Logo Ends */}

      <section class="py-12 bg-white sm:py-16 xl:py-24 lg:py-20">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-screen-2xl">
          <div class="grid grid-cols-1 group lg:grid-cols-2 gap-y-12 lg:gap-x-16 lg:items-center lg:max-w-5xl lg:mx-auto">
            <div class="text-center lg:text-left">
              <div class="max-w-lg mx-auto lg:max-w-none lg:mx-0">
                <h2 class="text-3xl font-bold tracking-tight uppercase sm:text-4xl lg:text-5xl text-gray-950">
                  Gain a competitive edge in job market
                </h2>
                <p class="mt-5 text-base font-normal leading-7 text-gray-600 lg:leading-9 lg:text-xl sm:text-lg sm:leading-8">
                  Join founders, freelancers, designers, FAANG engineers, indie hackers, and more in our 24/7 WhatsApp
                  Group for less than a cup of coffee.
                </p>
              </div>

              <p class="mt-8 text-sm font-bold tracking-widest uppercase sm:text-base text-primary-600 sm:mt-10">
                what you'll get
              </p>

              <ul class="flex flex-col items-center mt-4 text-base sm:mt-6 sm:text-lg lg:text-xl text-gray-950 gap-y-6 sm:flex-row sm:gap-x-8 sm:max-w-md sm:mx-auto sm:items-start lg:flex-col lg:items-start lg:mx-0 lg:max-w-none">
                <li class="flex flex-col items-center gap-3 sm:flex-1 lg:flex-row">
                  <img class="w-6 h-6 shrink-0" src="images/icon-guides-2.svg" alt=""/>
                  Comprehensive guides, projects, &amp; courses
                </li>

                <li class="flex flex-col items-center gap-3 sm:flex-1 lg:flex-row">
                  <img class="w-6 h-6 shrink-0" src="images/icon-job.svg" alt=""/>
                  Exclusive job + internship postings
                </li>

                <li class="flex flex-col items-center gap-3 sm:flex-1 lg:flex-row">
                  <img class="w-6 h-6 shrink-0" src="images/icon-tips.svg" alt=""/>
                  1:1 Career guidance &amp; mentorship
                </li>
              </ul>
            </div>

            <div>
              <img class="h-auto mx-auto transition-all duration-200 w-60 sm:w-full sm:max-w-xs lg:max-w-none group-hover:rotate-6" src="images/illustration-job.svg" alt=""/>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Body
