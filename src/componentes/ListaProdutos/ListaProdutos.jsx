const ListaProdutos = () => {

    const produtos = [
        {
            nome: 'Smartphone Samsung',
            preco: 2999,
            cores: ['#29d8d5', '#252a34', '#fc3766'],
        },
        {
            nome: 'Notebook Acer',
            preco: 4999,
            cores: ['#ffd045', '#d4394b', '#f37c59'],
        },
        {
            nome: 'Tablet Asus',
            preco: 1499,
            cores: ['#365069', '#47c1c8', '#f95786'],
        },
    ];


    return <div>
        <h1>Lista de Produtos</h1>
        {produtos.map((item, index) => {
            return <div key={index}>

                <span>Nome: </span>
                <span>{item.nome}</span>
                <br />

                <span>Preço: </span>
                <span>{item.preco}</span>
                <br />
                <strong>Cores Disponíveis: </strong>
                    {item.cores.map((cor, index) => {
                        return <div key={index} style={{width: 24, height: 24, backgroundColor: cor}} />;
                    })}
                    
                <br />
                <br />

                </div>



        })}

    </div>
};
export default ListaProdutos;