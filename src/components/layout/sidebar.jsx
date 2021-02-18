import React from "react"
import { motion } from "framer-motion"
import { stagger, item, easeOut } from "../../utils/animations"

const Sidebar = () => {
  return (
    <div className="sidebar-cnt">
      <motion.div
        animate={{ height: "100%", transition: { duration: 1, ease: easeOut } }}
        className="desktop-line"
      />
      <motion.div
        className="sidebar-content"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        <div className="desktop-placeholder">
          <a href="http://www.ariamala.com">AriAmala.com</a>
        </div>
        <div className="createdby-desktop">
          <motion.p variants={item} className="small-text">
            A process created by
          </motion.p>
          <motion.p variants={item} style={{ fontSize: "14px" }}>
            <div className="tilt">
              Ari Amala
              <br />
              &amp;
              <br />
              Alexander Jenkins
            </div>
          </motion.p>
        </div>
        <div className="createdby-small">Ari &amp; Alexander</div>
        <div className="booking-cnt">
          <a
            className="button"
            href="https://www.trybooking.com/nz/events/landing?eid=4288"
          >
            Book now
          </a>
          <div className="upcoming-event" style={{ marginTop: `1.5em` }}>
            <motion.div
              initial={{ x: "-100%" }}
              animate={{
                x: 0,
                transition: { duration: 1.5, ease: easeOut, delay: 9 },
              }}
            >
              Upcoming workshop in Auckland
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Sidebar
