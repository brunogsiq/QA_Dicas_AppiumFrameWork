    it("Exemplo 01", () => {});
    const getSomething01 = () => 10;
    const system01 = () =>
    {
        //Imprime init
        console.log("init");
        //Atribuição do valor de getSomething a constante something
        const something = getSomething01()
        //Imprime valor de something
        console.log(`O valor de something is ${something}`)
        //Imprime end
        console.log("end")
    };
    //Invocando o metódo acima:
    system01();

    /*
    Caso o retorno evolva muita coisa e pode haver demora na resposta,
       torna-se uma boa prática a realização dos testes da seguinte forma.
            Reescrevendo o mesmo acima, ficará:
    */
    it("Exemplo 02", () => {});
        const getSomething02 = () =>
        {
            setTimeout(() =>
            {
                console.log("A resposta é: ...");
                return 11;
            }, 1000)
    };

    const system02 = () =>
    {
        console.log("init");
        const something02 = getSomething02();
        console.log(`something02 is ${something02}`)
        console.log("end")
    };
    system02()

    /*
    Mais um saída para resposta de funções:
       Neste exemplo, primeiro será impresso init, depois end, depois a expressão something is 17
    */
    it("Exemplo 03", () => {});
    const getSomething03 = (callback) =>
    {
        setTimeout(() =>
        {
            callback(17)
        }, 1000)
    };
    const system03 = () =>
    {
        console.log("init");
        getSomething03((some) => console.log(`something is ${some}`));
        console.log("end")
    }
    system03();

    /*
    Mais um saída para resposta de funções:
        Resolvendo o problema da impressão do end no exemplo acima,
            primeiro será impresso init, ,depois a expressão something is 19, depois end.
    */
    it("Exemplo 04", () => {});
    const getSomething04 = callback =>
    {
        setTimeout(() =>
        {
            callback(19)
        }, 1000)
    }
    const system04 = () =>
    {
        console.log("init");
        getSomething04(some =>
        {
            console.log(`something is ${some}`);
            console.log("end")
        })
    }
    system04();

    /*
    Agora o exemplo do exerício proposto, trabalhar com promise:
        primeiro será impresso init, ,depois a expressão something is 21, depois end.
    */
    it("Exemplo 05", () => {});
    const getSomething05 = () =>
    {
        return new Promise((resolve, reject) =>
        {
            setTimeout(() => {
            resolve(21);
            }, 1000);
        })
    }
    const system05 = () =>
    {
        console.log("init");
        getSomething05().then(some =>
        {
            console.log(`Something is ${some}`)
            console.log("end")
        })
    }
    system04();