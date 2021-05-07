import React, { useRef, useState } from "react"
import {
  Document,
  Page,
  Text,
  Line,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer"
import "../styles/pdf-maker.scss"

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FAFAFA",
    padding: 30,
  },
  container: {
    position: "relative",
    width: "100%",
    padding: 20,
  },
  flexDistribute: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  section: {
    flexGrow: 1,
  },
  header: {
    width: "100%",
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "grey",
    margin: "20px, 0",
  },
})

const PDFmaker = () => {
  const specialMessageSelect = useRef(null)
  const [number, ChangeNumber] = useState(1)
  const [documentVisible, changeDocumentVisible] = useState(false)
  const [specialMessage, updateSpecialMessage] = useState(
    "Hello lovely, thank you for our session. Remember your homework and see you back soon!"
  )

  var typingTimer //timer identifier
  var doneTypingInterval = 1000 //time in ms, 5 second for example
  function keyUp() {
    clearTimeout(typingTimer)
    typingTimer = setTimeout(doneTyping, doneTypingInterval)
  }
  function keyDown() {
    clearTimeout(typingTimer)
  }
  function doneTyping() {
    updateSpecialMessage(specialMessageSelect.value)
  }

  return (
    <>
      <div className="pdf-maker-cnt">
        <div className="column-1">
          <div className="controls-cnt margin x-small">
            <h2>Invoice maker</h2>
            <h3>{specialMessageSelect.value}</h3>
            <form action="">
              <div className="input">
                <label htmlFor="special-message">Special message</label>
                <textarea
                  ref={specialMessageSelect}
                  name="special-message"
                  id="special-message"
                  cols="30"
                  rows="3"
                  onKeyDown={keyDown}
                  onKeyUp={keyUp}
                >
                  {specialMessage}
                </textarea>
              </div>
            </form>
          </div>
        </div>
        <div className="column-2">
          <PDFViewer style={{ width: "100%", height: "100vh" }}>
            <MyDocument number={number} specialMessage={specialMessage} />
          </PDFViewer>
        </div>
      </div>
    </>
  )
}

export default PDFmaker

// Create Document Component
export const MyDocument = ({ number, specialMessage }) => {
  return (
    <>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.container}>
            <View style={styles.flexDistribute}>
              <View>
                <Text>Ari Amala Counseling</Text>
              </View>
              <View>
                <Text>{dateOutput}</Text>
              </View>
            </View>
            <View style={styles.section}>
              <Text>{specialMessage}</Text>
            </View>
            <View style={styles.section}>
              <Text>Section #{number}</Text>
            </View>
            <View style={styles.section}>
              <Text>Section #2</Text>
            </View>
            <View style={styles.line} />
          </View>
        </Page>
      </Document>
    </>
  )
}

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]
const dateObj = new Date()
const month = monthNames[dateObj.getMonth()]
const day = String(dateObj.getDate()).padStart(2, "0")
const year = dateObj.getFullYear()
const dateOutput = month + " " + day + ", " + year

var typingTimer //timer identifier
var doneTypingInterval = 5000 //time in ms, 5 second for example

function keyUp() {
  clearTimeout(typingTimer)
  typingTimer = setTimeout(doneTyping, doneTypingInterval)
}

function keyDown() {
  clearTimeout(typingTimer)
}

function doneTyping() {
  //do something
}
