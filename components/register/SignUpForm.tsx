import React from 'react'
import Field from '../common/Field'

const SignUpForm = () => {
  return (
    <form>
          <Field label="Name">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Your Name"
              autoComplete="off"
              className="py-2 w-full rounded border  bg-transparent px-2 text-center text-gray-500  placeholder-[#7f8c8d] focus:ring-1 focus:ring-orange-500 focus:outline-none border-gray-500/30"/>
          </Field>
          <Field label="Email">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="name@example.com"
              autoComplete="email"
              className="py-2 w-full rounded border  bg-transparent px-2 text-center text-gray-500  placeholder-[#7f8c8d] focus:ring-1 focus:ring-orange-500 focus:outline-none border-gray-500/30"
            />
          </Field>

          <Field label="Password">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              autoComplete="no-password"
              className="py-2 w-full rounded border bg-transparent px-2 text-center text-gray-500  placeholder-[#7f8c8d] focus:ring-1 focus:ring-orange-500 focus:outline-none border-gray-500/30"
            />
          </Field>
          <Field label="Confirm Password">
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm password"
              name="confirmPassword"
              autoComplete="no-password"
              className="py-2 w-full rounded border bg-transparent px-2 text-center text-gray-500  placeholder-[#7f8c8d] focus:ring-1 focus:ring-orange-500 focus:outline-none border-gray-500/30"
            />
          </Field>

          <button className="py-2 mt-2 font-medium w-full rounded bg-orange-600 text-white transition-colors duration-300 hover:bg-orange-700 cursor-pointer">
            Create account
          </button>
        </form>
  )
}

export default SignUpForm