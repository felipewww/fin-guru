###TODO

-[ ] Criar uma classe de validação de dados, talvez uma extenao do "npm validator". Pode ser criado um package disso e disponibilizado no npm
para validar por exemplo o req.body

this.validator(req.body, {
    required: '*',
    fields: {
        description: {
            type: 'string',
            min: 1,
            max: 255,
            required: true,
        },
        day: {
            type: 'integer',
            min: 1,
            max: 31,
            required: true,
        },
        amount: {
            type: 'decimal',
            min: 0.01,
            required: true,
        },
        user_id: {
            type: 'integer',
            min: 1,
            required: true,
        },
    }
});

-[ ] Criar um package do RESPONSER para ser utilizado por todos os serviços igualmente

-[ ] Enviar as variaveis de ambiente DB_ via docker, para não precisar ficar alterando todos os .env

-[ ] o mesmo serve para uma classe de logger, utilziadas por todos os serviços, para avaliar todas as requisições feitas em todos os serviços

-[ ] Os serviços de VariablePayable (contas variáveis ) não terá rotas comuns, pois esses valores são gerados após importação de fatura ou fechamento de período