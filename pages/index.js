function Home(){
    const style = {
        background:"linear-gradient(90deg, rgba(224,16,16,1) 0%, rgba(121,9,82,1) 42%, rgba(0,213,255,1) 100%)",
        maxWidth: "480px",
        height: '40px',
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: '30px',
        margin: 'auto'
    }
    return (
        <div>
            <h1 style={{textAlign: "center"}}>Mensagem dedicada a todos os meus familiares e principalmente ao meu amor (Núbia 😍).</h1>
            <div style={style}>Eu amo todos vocês! ❤️</div>
        </div>
    )
}

export default Home;