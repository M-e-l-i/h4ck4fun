import { useRef, useState } from "react";

const ReportTemplate = () => {
    const [name,setName]=useState('');
    const [age,setAge]=useState('');
    const [diag,setDiag]=useState('');
    const [med,setMed]=useState('');
    const [date,setDate]=useState('');
    

  const styles = {
    page: {
      marginLeft: "15rem",
      marginRight: "15rem",
      "page-break-after": "always",
      BackgroundColor: "white",
      color:"black"
    },

    columnLayout: {
      display: "flex",
      justifyContent: "space-between",
      margin: "3rem 0 5rem 0",
      gap: "2rem",
    },

    column: {
      display: "flex",
      flexDirection: "column",
    },

    spacer2: {
      height: "2rem",
    },

    fullWidth: {
      width: "100%",
    },

    marginb0: {
      marginBottom: 0,
    },
    introText: {
        fontSize: "1.5rem",
        fontWeight: "bold",
        color: "black",
        textAlign: "center",
        margin: "1rem 0 1rem 0",},
  };
    const [name1, setName1] = useState("");

  
  return (
    <>
      <form className="form-submit">
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Patient Name"
        />
        <input
          type="text"
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter Patient Age"
        />
        <input
          type="text"
          onChange={(e) => setDiag(e.target.value)}
          placeholder="Enter Patient Diagnosis"
        />
        <input
          type="text"
          onChange={(e) => setMed(e.target.value)}
          placeholder="Enter Patient Medication"
        />
        <input
          type="text"
          onChange={(e) => setDate(e.target.value)}
          placeholder="Enter Date"
        />
      </form>
      <div style={styles.page}>
        <div>
          <h1 style={styles.introText}>{name}</h1>
        </div>

        <div style={styles.spacer2}></div>
      </div>

      <div style={styles.page}>
        <div>
          <h2 style={styles.introText}>Medical Data</h2>
        </div>

        <div style={styles.columnLayout}>
          <div style={styles.column}>
            <h4 style={styles.marginb0}>Subtitle One</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div style={styles.column}>
            <h4 style={styles.marginb0}>Subtitle Two</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div style={styles.columnLayout}>
          <div style={styles.column}>
            <h4 style={styles.marginb0}>Subtitle One</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div style={styles.column}>
            <h4 style={styles.marginb0}>Subtitle Two</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>

    </>
  );
};

export default ReportTemplate;
