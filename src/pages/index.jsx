import React, { useEffect } from "react"
import gsap, { Power4 } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import StepsDraggable from "../components/steps-draggable"
import { TicketCircles } from "../images/svg.jsx"

gsap.registerPlugin(ScrollTrigger)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <main className="main-content">
      <Hero />
      <TheConcept />
      <HowItGoes />
      <ComeNestle />
    </main>
  </Layout>
)

export default IndexPage

const Hero = () => {
  useEffect(() => {
    var tl = gsap.timeline({
      defaults: { ease: Power4, duration: 1 },
    })

    tl.from("h1", { opacity: 0, y: 30, duration: 0.8, ease: { Power4 } })
    tl.to(".hide-block", { skewX: -40, x: "100%", duration: 1.5 }, "-=.2")
    tl.from(
      ".hero .gatsby-image-wrapper",
      { scale: 1.15, duration: 1.5 },
      "-=1.8"
    )
    tl.from(".hero p", { autoAlpha: 0, stagger: 0.3 })
  })

  return (
    <div className="hero-cnt">
      <div className="hero">
        <div className="grid">
          <div className="row-1">
            <h1>
              The Nestling <br /> Process
            </h1>
            <p>
              Fostering a deep sense of safety, trust, and love in
              relationships.
            </p>
            <div className="image-cnt">
              <Image />
              <div className="hide-block" />
            </div>
          </div>
          <div className="flex column justify-end">
            <p>
              Intimate relationships have a way of excavating and pressing up
              against our deepest wounds. Yet, they also hold the potential for
              our deepest healing. The Nestling Process provides a pathway from
              disconnection and painful triggers through to intimacy, healing,
              and wholeness.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const TheConcept = () => {
  useEffect(() => {
    const tl = new gsap.timeline({
      scrollTrigger: {
        trigger: ".theconcept",
        start: "top center+=100",
        toggleActions: "play pause resume pause"
      },
    })

    tl.from(".theconcept h2, .theconcept p", {
      autoAlpha: 0,
      y: 50,
      stagger: 0.3,
      duration: 1,
    })
    tl.from(".theconcept .line", { height: 0 }, "-=.8")
  })
  return (
    <>
      <div className="theconcept-cnt margin flex justify-center align-center">
        <div className="medium theconcept">
          <div className="line" />
          <h2>It's a conversation</h2>
          <p>
            
            The process works by learning to have a self-guided conversation
            with your partner using theraputic frameworks. <br />
            <br /> No therapist needed once you've had a walk through.
          </p>
        </div>
      </div>
    </>
  )
}

const HowItGoes = () => {
  return (
    <>
      <div className="howitgoes-cnt">
        <div className="margin">
          <div className="howitgoes-content">
            <h2>How it goes</h2>
            <div className="medium">
              We recommend you attend one of our workshops to walk through the
              process, but for those who have already attended, or if you’d just
              like to give it a go, here’s the idea:
            </div>

            <StepsDraggable />
          </div>
        </div>
      </div>
    </>
  )
}

const ComeNestle = () => {
  useEffect(() => {
    const tl = new gsap.timeline({
      scrollTrigger: {
        trigger: ".ticket-circles-cnt",
        start: "top center+=100",
      },
    })

    tl.from(".theconcept h2, .theconcept p", {
      autoAlpha: 0,
      y: 50,
      stagger: 0.3,
    })
    tl.from(".theconcept .line", { height: 0 }, "-=.5")
  })
  return (
    <div className="comenestle-cnt">
      <div className="margin">
        <div className="grid">
          <div className="row-1">
            <h2>Come nestle with us</h2>
            <p>
              6th February <br />
              2:00pm - 4:00pm <br />
              Movespace, Dominion Road <br />
              Auckland
            </p>
            <div className="ticket-circles-cnt">
              <a href="https://www.trybooking.com/nz/events/landing?eid=4163" style={{height: "100%"}}>
                <TicketCircles />
              </a>
            </div>
          </div>
          <div className="row-2">
            <p>
              The first part of the workshop will be focussed on learning the
              Nestling Process and theory behind it, and then you’ll get an
              opportunity to have a guided experience of the process with a
              partner. <br />
              <br />
              Together you will create a warm and secure relational nest that
              will nourish and transform your relationships.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
