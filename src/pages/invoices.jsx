import React, { useState, useEffect } from "react"
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion"
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  PDFDownloadLink,
} from "@react-pdf/renderer"
import "../styles/App.less"
import "../styles/pdf-maker.scss"
import { Input, Button } from "antd"
import {
  UserOutlined,
  DownloadOutlined,
  CheckCircleFilled,
  DollarOutlined,
} from "@ant-design/icons"
import uuid from "react-uuid"

const PDFmaker = () => {
  const [pdfData, setPdfData] = useState({
    person: "Tom Blogg",
    date: dateOutput,
    message:
      "Hello lovely, thank you for our session. Remember your homework and see you back soon!",
    bank: "38-9020-0623687-00",
  })

  const [dataInWaiting, setDataInWaiting] = useState(pdfData)

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  //#region Typing handler

  var typingTimer //timer identifier
  var doneTypingInterval = 500 // time in ms, 5 second for example
  function keyUp() {
    clearTimeout(typingTimer)
    typingTimer = setTimeout(doneTyping, doneTypingInterval)
  }
  function keyDown() {
    clearTimeout(typingTimer)
  }
  function doneTyping() {
    setPdfData({
      ...pdfData,
      person: dataInWaiting.person,
      date: dataInWaiting.date,
      message: dataInWaiting.message,
      bank: dataInWaiting.bank,
    })
  }
  //#endregion

  const [services, changeServicesList] = useState([
    {
      name: "One-on-one counselling session",
      duration: "1 hour",
      rate: 95,
      id: "service-1",
    },
  ])

  const servicesTotal = services.reduce((prev, cur) => prev + cur.rate, 0)

  const [idNumber, changeIdNumber] = useState(3)

  const addService = newService => {
    const newServicesList = [...services, newService]
    changeServicesList(newServicesList)
  }

  function deleteService(id) {
    const remainingServices = services.filter(service => id !== service.id)
    changeServicesList(remainingServices)
  }

  function handleOnEnterKey(event, newService) {
    if (event.key === "Enter") {
      addService(newService)
    }
  }

  return (
    <>
      <div className="pdf-maker-cnt">
        <div className="column-1">
          <div className="margin x-small">
            <div>
              <h2>Invoice maker</h2>
            </div>
            <AnimateSharedLayout>
              <motion.div layout className="controls-cnt">
                <form>
                  <div className="grid">
                    <Input
                      placeholder="Tom Blogg"
                      prefix={<UserOutlined />}
                      onKeyDown={keyDown}
                      onKeyUp={keyUp}
                      onChange={e =>
                        setDataInWaiting({
                          ...dataInWaiting,
                          person: e.target.value,
                        })
                      }
                    />
                    <input
                      type="date"
                      placeholder="today"
                      onChange={e =>
                        setPdfData({
                          ...pdfData,
                          date: e.target.value,
                        })
                      }
                    />
                  </div>

                  <h4>Special message</h4>
                  <textarea
                    name="special-message"
                    id="special-message"
                    cols="30"
                    rows="2"
                    onKeyDown={keyDown}
                    onKeyUp={keyUp}
                    onChange={e =>
                      setDataInWaiting({
                        ...dataInWaiting,
                        message: e.target.value,
                      })
                    }
                  >
                    {pdfData.message}
                  </textarea>

                  <h4>Services</h4>
                  <AnimatePresence exitBeforeEnter>
                    {services.map(({ name, duration, rate, id }) => (
                      <Service
                        key={uuid()}
                        description={name}
                        duration={duration}
                        rate={rate}
                        id={id}
                        deleteService={deleteService}
                      />
                    ))}
                  </AnimatePresence>
                  <AddNewServiceForm
                    addService={addService}
                    idNumber={idNumber}
                    changeIdNumber={changeIdNumber}
                    handleOnEnterKey={handleOnEnterKey}
                  />
                  <h4>Bank details</h4>
                  <Input
                    defaultValue={pdfData.bank}
                    onKeyDown={keyDown}
                    onKeyUp={keyUp}
                    onChange={e =>
                      setDataInWaiting({
                        ...dataInWaiting,
                        bank: e.target.value,
                      })
                    }
                  />
                </form>
                <div className="flex space-between align-center">
                  {isClient && (
                    <PDFDownloadLink
                      document={
                        <MyDocument
                          pdfData={pdfData}
                          services={services}
                          servicesTotal={servicesTotal}
                        />
                      }
                      fileName={`invoice ${pdfData.date}.pdf`}
                    >
                      <Button
                        size="large"
                        type="primary"
                        icon={<DownloadOutlined />}
                      >
                        Download
                      </Button>
                    </PDFDownloadLink>
                  )}
                  <div>Total: ${servicesTotal}</div>
                </div>
              </motion.div>
            </AnimateSharedLayout>
          </div>
        </div>
        <div className="column-2">
          {isClient && (
            <PDFViewer style={{ width: "100%", height: "100vh" }}>
              <MyDocument
                pdfData={pdfData}
                services={services}
                servicesTotal={servicesTotal}
              />
            </PDFViewer>
          )}
        </div>
      </div>
    </>
  )
}

const Service = ({ deleteService, description, duration, rate, id }) => {
  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: "auto", transition: { duration: 0.7 } }}
      exit={{ height: 0, transition: { duration: 0.5 } }}
      style={{
        overflow: "hidden",
        paddingRight: 10,
        width: "calc(100% + 10px)",
      }}
    >
      <motion.div id={id} className="service">
        <div>{description}</div>
        <div>{duration}</div>
        <div>${rate}</div>
        <div></div>
        <div className="exit-button" onClick={() => deleteService(id)}>
          +
        </div>
      </motion.div>
    </motion.div>
  )
}

const AddNewServiceForm = ({
  addService,
  idNumber,
  changeIdNumber,
  handleOnEnterKey,
}) => {
  const [newService, setNewService] = useState({
    name: "",
    duration: "",
    rate: 0,
    id: "service-2",
  })
  return (
    <>
      <form className="add-new-cnt">
        <h4 style={{ marginTop: 0 }}>Add service</h4>
        <div className="grid">
          <Input
            placeholder="Service"
            onChange={e =>
              setNewService({ ...newService, name: e.target.value })
            }
            onKeyDown={e => handleOnEnterKey(e, newService)}
          />
          <Input
            placeholder="1 hour"
            onChange={e =>
              setNewService({ ...newService, duration: e.target.value })
            }
            onKeyDown={e => handleOnEnterKey(e, newService)}
          />

          <input
            type="number"
            name="Rate"
            id=""
            placeholder="90.00"
            onChange={e =>
              setNewService({ ...newService, rate: Number(e.target.value) })
            }
            onKeyDown={e => handleOnEnterKey(e, newService)}
          />

          <Button
            type="primary"
            icon={<CheckCircleFilled />}
            onClick={() => {
              changeIdNumber(idNumber + 1)
              setNewService({ ...newService, id: `service-${idNumber}` })
              addService(newService)
            }}
          >
            Add
          </Button>
        </div>
      </form>
    </>
  )
}

export default PDFmaker

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FAFAFA",
    padding: 30,
    fontSize: 12,
  },
  container: {
    position: "relative",
    width: "100%",
    padding: 15,
  },
  flexDistribute: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  section: {
    marginBottom: 20,
  },
  header: {
    width: "100%",
  },
  message: {
    maxWidth: 300,
  },
  line: {
    width: "100%",
    height: 0.5,
    backgroundColor: "grey",
    margin: "10px 0",
  },
  textRight: {
    textAlign: "right",
  },
})

// Create Document Component
export const MyDocument = ({ pdfData, services, servicesTotal }) => {
  return (
    <Document
      title="Invoice"
      author="Ari Amala"
      creator="Ari Amala"
      producer="Ari Amala"
    >
      <Page size="A4" style={styles.page}>
        <View style={styles.container}>
          <View style={styles.flexDistribute}>
            <View style={{ marginBottom: 20 }}>
              <Text>Ari Amala Counseling</Text>
            </View>
            <View>
              <Text>{pdfData.date}</Text>
            </View>
          </View>
          <View style={styles.section}>
            <Text>{pdfData.person}</Text>
          </View>
          <View style={{ ...styles.section, ...styles.message }}>
            <Text>{pdfData.message}</Text>
          </View>
          <View style={styles.line} />
          {services.map(({ name, duration, rate }) => (
            <View key={uuid()}>
              <View style={styles.flexDistribute}>
                <Text style={{ width: "70%", paddingRight: 10 }}>{name}</Text>
                <Text style={{ width: "15%" }}>{duration}</Text>
                <Text style={{ width: "15%", textAlign: "right" }}>
                  ${rate}
                </Text>
              </View>
              <View style={styles.line} />
            </View>
          ))}
          <Text style={{ marginTop: 30 }}>Payable to</Text>
          <View style={{ ...styles.flexDistribute }}>
            <Text>{pdfData.bank}</Text>

            <Text>Total: ${servicesTotal}</Text>
          </View>
        </View>
      </Page>
    </Document>
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
const dateOutput = day + " " + month + " " + year

const array1 = [3, 3, 3, 3]

const reducer = (accumulator, currentValue) => accumulator + currentValue

const summedNumber = array1.reduce(reducer)
