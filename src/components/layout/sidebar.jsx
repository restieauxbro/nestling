import React, { useEffect } from "react"
import gsap from "gsap"

const Sidebar = () => {
  useEffect(() => {
    var tl = gsap.timeline({ defaults: { duration: 1 } })

    tl.from(".sidebar-cnt .line", { height: 0 })
    tl.from(".sidebar-cnt a", { autoAlpha: 0, y: 30, stagger: 0.3 })
  })
  return (
    <>
      <div className="sidebar-cnt">
        <div className="line" />
        <div className="sidebar-content">
          <div className="desktop-placeholder"/>
          <div className="createdby-desktop">
            <p className="small-text">A process created by</p>
            <p className="tilt">
              <a href="ariamala.com">Ari Amala</a>
              <br />
              &amp;
              <br />
              <a href="">Alexander Jenkins</a>
            </p>
          </div>
          <div className="createdby-small">
            <a href="ariamala.com">Ari</a> &amp; <a href="">Alexander</a>
          </div>
          <div className="booking-cnt">
            <a
              className="button"
              href="https://www.trybooking.com/nz/events/landing?eid=4163"
            >
              Book now
            </a>
            <div className="upcoming-event" style={{ marginTop: `1.5em` }}>
              Upcoming workshop in Auckland
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
