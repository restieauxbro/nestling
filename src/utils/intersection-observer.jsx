import React, {
  useEffect,
  useState,
  createContext,
  useContext,
  useRef,
} from "react"
import { useIntersection } from "react-use"

export const IntersectionContext = createContext({ inView: true })

export const IntersectionObserver = ({
  children,
  reset = true, // if value set to true - observed element will reappear every time it shows up on the screen
}) => {
  const [inView, setInView] = useState(false)
  const intersectionRef = useRef(null)
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.6,
  })

  useEffect(() => {
    const inViewNow = intersection && intersection.intersectionRatio > 0.6
    if (inViewNow) {
      return setInView(inViewNow)
    } else if (reset) {
      return setInView(false)
    }
  }, [intersection, reset])

  //create the provider of intersection context, all children will recieve the provided data
  return (
    <IntersectionContext.Provider value={{ inView }}>
      <div ref={intersectionRef}>{children}</div>
    </IntersectionContext.Provider>
  )
}

const ReceivesIntersectionData = () => {
  const { inView } = useContext(IntersectionContext)
  return (
    <>
      {inView ? (
        <div className="container" style={{ padding: "200px 0" }}>
          <h1>Hello view</h1>
        </div>
      ) : (
        <div className="container" style={{ padding: "200px 0" }}>
          <h1>No view</h1>
        </div>
      )}
    </>
  )
}
