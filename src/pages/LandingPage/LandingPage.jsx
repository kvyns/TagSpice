import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import { useSelector } from 'react-redux'

function LandingPage() {
  
  const links = [
    { name: 'Submit comments', href: '#' },
    { name: 'View Analysis Results', href: '#' },
    { name: 'Learn about tools', href: '#' },
    { name: 'Contact support', href: '#' },
  ]
  const stats = [
    { name: 'Comments Analyzed', value: '1000+' },
    { name: 'Sentiment Categories', value: '10' },
    { name: 'Users Served', value: '40+' },
    { name: 'Accuracy Rate', value: '95%' },
  ]
  const user = useSelector(state => state.userData)
  // const login = user.success
  const login = true 
  return (
    <div className='h-full'>
      {login ? (
        <div>
          <div className=''>
            <Header />
          </div>
          <div className=''>
            User is successfully Logged in
          </div>
        </div>
      ) : (
        <div className="relative isolate overflow-hidden py-24 sm:py-32 max-h-screen">
          <Header />
          <div
            aria-hidden="true"
            className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            />
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-4xl font-bold tracking-tight text-indigo-600 sm:text-6xl">We Add Value To Your Insights</h2>
              <p className="mt-6 text-lg leading-8 text-black">
              Unlock valuable insights from customer feedback to boost your business. Our service delivers clear sentiment analysis, identifying strengths, weaknesses, and opportunities for improvement. Leverage this data to enhance your products and services, and stay ahead of the competition.
              </p>
            </div>
            <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-indigo-600 sm:grid-cols-2 md:flex lg:gap-x-10">
                {links.map((link) => (
                  <a key={link.name} href={link.href}>
                    {link.name} <span aria-hidden="true">&rarr;</span>
                  </a>
                ))}
              </div>
              <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.name} className="flex flex-col-reverse">
                    <dt className="text-base leading-7 text-indigo-600">{stat.name}</dt>
                    <dd className="text-2xl font-bold leading-9 tracking-tight text-black">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default LandingPage
