import React, { useState } from "react"
import { motion } from "framer-motion"
import DragHand from "../components/drag-hand"

const StepsDraggable = () => {
  const [explainerVisible, setExplainerVisible] = useState("visible")

  return (
    <>
      <div className={`drag-hand-cnt ${explainerVisible}`}>
        <DragHand />
        <div className="drag-explainer">Click and drag</div>
      </div>
      <div className="steps-cnt">
        <motion.div
          className="steps-draggable"
          drag="x"
          dragConstraints={{ left: -3800, right: 0 }}
          dragElastic={0.4}
          dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
        >
          {steps.map(({ title, description, num, link }) => (
            <div
              className="step"
              onMouseEnter={() => setExplainerVisible("invisible")}
              onMouseLeave={() => setExplainerVisible("visible")}
            >
              <div className="number">{num}</div>
              <article>
                <div className="line" />
                <h3>{title}</h3>
                <p>{description}</p>

                <a href={link}>Read more</a>
              </article>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  )
}

export default StepsDraggable

const steps = [
  {
    num: 1,
    title: "Create the container",
    description:
      "Choose a time frame and a place where you can connect without being interrupted. A comfy.",
    link: "/",
  },
  {
    num: 2,
    title: "Create your nest",
    description:
      "Create a physical setting that will be supportive and nourishing for both of you. Use cushions, fabrics, blankets, candles, and other props to cultivate an intentional space.",
    link: "/",
  },
  {
    num: 3,
    title: "Share Intentions",
    description:
      "What do both people want out of this process and time together? How do you want to feel about yourself and each other during the process? Setting intentions creates an anchor to return to through the process.",
    link: "/",
  },
  {
    num: 4,
    title: "Wholing Meditation",
    description:
      "Tune into your resources of groundedness, compassion and wholeness through meditation or movement.",
    link: "/",
  },

  {
    num: 5,
    title: "Nest Check-in",
    description:
      "How is the nest of your relationship? Does it feel secure in the tree? How are both people’s baby birds doing? How do they feel in relation to one another? How are the adult birds? How are they relating to each other and to the baby birds?",
    link: "/",
  },
  {
    num: 6,
    title: "Sharing and Listening",
    description:
      "Take turns sharing what is alive for you. When one person is sharing, the other person is just listening. Practicing active listening and not taking things personally. Bringing an attitude of curiosity. We use nonviolent communication techniques here.",
    link: "/",
  },
  {
    num: 7,
    title: "Mutual Agreement/Repair",
    description:
      "After both people have shared and been heard, if there is an agreement or a repair to be made, it happens here.",
    link: "/",
  },
  {
    num: 8,
    title: "Check Back in with the Nest",
    description:
      "How is the nest now? How are the baby birds? How are the adult birds? How are they all relating together?",
    link: "/",
  },
  {
    num: 9,
    title: "Beaming",
    description:
      "Bring your cupped hands together in front of you and imagine you are holding the nest of your relationship. Beam love into this precious nest. ",
    link: "/",
  },
]
