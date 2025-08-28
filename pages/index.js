function Home() {
  /* const style = {
    background:
      "linear-gradient(90deg, rgba(224,16,16,1) 0%, rgba(121,9,82,1) 42%, rgba(0,213,255,1) 100%)",
    maxWidth: "480px",
    height: "40px",
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: "30px",
    margin: "auto",
  }; */

  const declaration = () => (
    <div>
      <h1 style={{ textAlign: "center" }}>
        Mensagem dedicada a todos os meus familiares e principalmente ao meu
        amor (Núbia 😍).
      </h1>
      <div style={style}>Eu amo todos vocês! ❤️</div>
      <br />
      <div style={{ fontSize: "26px" }}>Núbia, meu amor, casa comigo?</div>
      <div>
        <input type="checkbox"></input>
        <label for="first-response">SIM: </label>
        <span style={{ margin: "0 8px" }}>OU</span>
        <input type="checkbox"></input>
        <label for="first-response">COM CERTEZA: </label>
      </div>
    </div>
  );
  return (
    <>
      <h1>Em construção</h1>
    </>
  );
}

export default Home;
