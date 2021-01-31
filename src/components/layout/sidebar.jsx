import React from "react"

const Sidebar = () => {
  return (
    <>
      <div className="sidebar-cnt">
        <div className="line" />
        <div className="sidebar-content">
          <div></div>
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
            <a href="ariamala.com">Ari Amala</a> &amp;{" "}
            <a href="">Alexander Jenkins</a>
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
