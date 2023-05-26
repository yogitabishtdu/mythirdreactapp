import './App.css';

function App() {
   const newstyle = {
      color: "Red",
      backgroundColor: "green",
      fontSize: "50px",
      border: "solid 20px black",
      width: "900px",
      height: "100px",
      textAlign: "center",
      padding: "50px",
    }
  return (
    <>
    <h1 style={newstyle}> My third react app </h1>
    <h2> I have made few changes today</h2>
    <h3> Changes from github </h3>
    </>
      );
}

export default App;
