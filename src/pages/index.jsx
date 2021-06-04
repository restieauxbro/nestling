import React, { useContext } from "react"
import { graphql } from "gatsby"
import { motion } from "framer-motion"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import StepsDraggable from "../components/steps-draggable"
import { TicketCircles } from "../images/svg.jsx"
import { stagger, easeOut, item } from "../utils/animations"
import { IntersectionObserver } from "../utils/intersection-observer"
import { IntersectionContext } from "../utils/intersection-observer"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="The Nestling Process" />
    <main className="main-content">
      <Hero />
      <TheConcept />
      <HowItGoes />
      <ComeNestle
        link={data.site.siteMetadata.tickets}
        day={data.site.siteMetadata.day}
        time={data.site.siteMetadata.time}
        location={data.site.siteMetadata.location}
      />
    </main>
  </Layout>
)

export default IndexPage

const Hero = () => {
  return (
    <motion.div
      variants={stagger}
      initial="initial"
      animate="animate"
      className="hero-cnt"
    >
      <div className="hero">
        <div className="grid">
          <div className="row-1">
            <motion.h1 variants={item} initial="initial" animate="animate">
              The Nestling <br /> Process
            </motion.h1>
            <motion.p variants={item} initial="initial" animate="animate">
              Fostering a deep sense of safety, trust, and love in
              relationships.
            </motion.p>
            <div className="image-cnt">
              <Image />
              <motion.div
                variants={swipeOut}
                initial="initial"
                animate="animate"
                className="hide-block"
              />
            </div>
          </div>
          <div className="flex column justify-end">
            <motion.p variants={item}>
              Intimate relationships have a way of excavating and pressing up
              against our deepest wounds. Yet, they also hold the potential for
              our deepest healing. The Nestling Process provides a pathway from
              disconnection and painful triggers through to intimacy, healing,
              and wholeness.
            </motion.p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const swipeOut = {
  initial: { x: 0 },
  animate: { x: "80%", skewX: -25, transition: { duration: 1, ease: easeOut } },
}

const TheConcept = () => {
  return (
    <>
      <div className="theconcept-cnt margin flex justify-center align-center">
        <div className="medium theconcept">
          <div className="line" />
          <h2>It's a conversation</h2>
          <p>
            The process works by learning to have a self-guided conversation
            with your partner using theraputic frameworks.
          </p>
        </div>
      </div>
    </>
  )
}

const TheConceptAnim = () => {
  const { inView } = useContext(IntersectionContext)
  return (
    <div className="medium theconcept">
      <div className="line" />
      <h2>It's a conversation</h2>
      <p>
        The process works by learning to have a self-guided conversation with
        your partner using theraputic frameworks.
      </p>
    </div>
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

const ComeNestle = ({ link, day, time, location }) => {
  return (
    <div className="comenestle-cnt">
      <div className="margin">
        <div className="grid">
          <div className="row-1">
            <h2>
              Come nestle with us <br />
              {/* <div className="online">Online!</div> */}
            </h2>

            <p>
              {day} <br />
              {time} <br />
              {location}
            </p>
            <div className="ticket-circles-cnt">
              <a href={link} style={{ height: "100%" }}>
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

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        tickets
        day
        time
        location
      }
    }
  }
`
