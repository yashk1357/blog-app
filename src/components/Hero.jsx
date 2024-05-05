import React from 'react'
import { Button } from 'react-bootstrap'

function Hero() {
  return (
    <div className="relative w-full bg-white">
  <div className="mx-auto max-w-7xl lg:px-8">
    <div className="flex flex-col justify-center px-4 py-10 lg:px-6">
      <h1 className="mt-8 max-w-4xl text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
        People who really cares about your business
      </h1>
      <p className="mt-8 max-w-3xl text-lg text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ipsam
        nulla aperiam quo possimus, nihil molestiae modi tenetur esse qui
        repudiandae cum fuga aspernatur ea?
      </p>
      <div className="mt-8">
        <Button
          href='/signup'
          type="button"
          className="rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Sign Up
        </Button>
      </div>
    </div>
  </div>
</div>

  )
}

export default Hero