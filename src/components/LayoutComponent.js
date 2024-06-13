import React from 'react'
import { Link } from 'react-router-dom'
//ヘッダー
function EmptyHeader() {
  return (
    <section className="-z-[-2] fixed w-screen  bg-[#427d9d] text-white text-center font-bold py-5">
      <div>　　　</div>
    </section>
  )
}
function UnivividHeader() {
  return (
    <section className="-z-[-2] fixed w-screen  bg-[#427d9d] text-white text-center font-bold py-5">
      <div>
        <span className="text-6xl">U</span>
        <span className="text-3xl">ni</span>
        <span className="text-6xl">V</span>
        <span className="text-3xl">ivid</span>
      </div>
    </section>
  )
}
function Unifooter() {
  return (
    <section className="w-screen bg-[#427d9d] text-white text-6xl text-center font-bold py-5">
      <div>　　　</div>
    </section>
  )
}
export { UnivividHeader, Unifooter, EmptyHeader }
