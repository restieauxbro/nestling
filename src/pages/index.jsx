import React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import StepsDraggable from "../components/steps-draggable"
import { TicketCircles } from "../images/svg.jsx"


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
            <Image />
          </div>
          <div className="flex column justify-end">
            Intimate relationships have a way of excavating and pressing up
            against our deepest wounds. Yet, they also hold the potential for
            our deepest healing. The Nestling Process provides a pathway from
            disconnection and painful triggers through to intimacy, healing, and
            wholeness.
          </div>
        </div>
      </div>
    </div>
  )
}

const TheConcept = () => {
  return (
    <>
      <div className="theconcept-cnt margin flex justify-center align-center">
        <div className="medium theconcept">
          <div className="line" />

          <p>
            It's a conversation.
            <br />
            <br />
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
              <TicketCircles />
            </div>
          </div>
          <div className="row-2">
            <p>
              The first part of the workshop will be focussed on learning the
              Nestling Process and theory behind it, and then you’ll get an
              opportunity to have a guided experience of the process with a
              partner. <br/><br/>
               Together you will create a warm and secure relational
              nest that will nourish and transform your relationships.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
