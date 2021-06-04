import React from "react"
import { motion } from "framer-motion"
import { stagger, item, easeOut } from "../../utils/animations"
import { graphql, useStaticQuery } from "gatsby"

const Sidebar = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          tickets
        }
      }
    }
  `)
  const ticketsLink = data.site.siteMetadata.tickets
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
          <a className="button" href={ticketsLink}>
            Register
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
