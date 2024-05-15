O ORM Prisma é uma ferramenta de mapeamento objeto-relacional (ORM) moderna e poderosa para bancos de dados. Ele facilita a interação entre a aplicação e o banco de dados, permitindo que os desenvolvedores escrevam consultas de banco de dados usando uma sintaxe familiar de linguagem de programação, em vez de consultas SQL diretamente.

O Prisma é uma ferramenta de código aberto que oferece suporte a vários bancos de dados populares, como PostgreSQL, MySQL, MongoDB, SQLite  e outros. Ele permite que os desenvolvedores definam modelos de dados usando uma linguagem de definição de modelo declarativa e, em seguida, fornece métodos para realizar operações de leitura, gravação, atualização e exclusão (CRUD) nesses modelos de dados.

O Prisma também oferece suporte a recursos avançados, como transações, relacionamentos entre tabelas, migrações de banco de dados e consultas complexas. Além disso, ele é compatível com muitos frameworks e tecnologias de back-end populares, o que o torna uma escolha atraente para muitos desenvolvedores e equipes de desenvolvimento.


Instale o Prisma como dependência de desenvolvimento
npm i prisma -D

Após a instalação do Prisma será criado a pasta node_modules com todas as dependências e os arquivos package.json e package-lock.json. 

Faça a inicialização do Prisma. 
npx prisma init

DATABASE_URL="mysql://root:123456789@localhost:3306/ormprisma?schema=public"

@unique significa que o tipo é único, ou seja, UNIQUE. 

UUID significa "Universally Unique Identifier" (Identificador Único Universal) e é um identificador padrão utilizado em software e sistemas para identificar de forma única informações, componentes ou recursos. O UUID é um identificador de 128 bits frequentemente representado por 32 dígitos hexadecimais, geralmente exibidos em cinco grupos separados por hifens, na forma 8-4-4-4-12, por exemplo, "550e8400-e29b-41d4-a716-446655440000". Esses identificadores são gerados de forma que a probabilidade de gerar o mesmo identificador em outro sistema é extremamente baixa. 

A interrogação significa que o campo é opcional. @default significa que o campo será um valor padrão, quando não atribuído. Com o uso de @@map, você pode especificar explicitamente o nome da tabela no banco de dados para a qual um modelo do Prisma deve ser mapeado.

Para gerar a tabela e seus respectivos campos no bd, iremos utilizar o comando abaixo:
npx prisma migrate dev

Será solicitado um nome para a migrate (coloquei create_courses) e depois gerado a tabela no bd. 

Para gerar utilize o comando npx prisma migrate dev novamente. Coloquei o nome "create_table_modules" como nome da migrate gerada. 

Para visualizar os dados de maneira mais simplificada, iremos utilizar o Prisma Studio, responsável por manipular os dados diretamente no navegador.
npx prisma studio



Crie uma pasta src, em seguida Courses e um arquivo chamado create.ts

Para executar o arquivo criado, utilize o comando:
npx ts-node-dev src/Courses/create.ts

Para executar o arquivo em JS, primeiramente configure o arquivo package.json para aceitar importações via module: 
 "type":"module"

Para executar o arquivo, utilize o comando:
node src/Courses/create.ts

RELACIONAMENTO ONE-TO-ONE (1:1)
Agora iremos trabalhar com relacionamento um para um. Um relacionamento um para um em bancos de dados relacionais é um tipo de relação entre duas entidades em que uma instância de uma entidade está associada a no máximo uma instância de outra entidade. Isso significa que cada registro na tabela A está relacionado a no máximo um registro na tabela B e vice-versa.

Um exemplo comum é um relacionamento entre duas entidades, como "Pessoa" e "Passaporte". Cada pessoa pode ter no máximo um passaporte, e cada passaporte está associado a apenas uma pessoa.

Geralmente, esse tipo de relacionamento é representado através de chaves estrangeiras. Em um banco de dados relacional, a chave estrangeira em uma tabela aponta para a chave primária em outra tabela, estabelecendo assim o vínculo entre os dados de ambas as tabelas.

No nosso contexto, utilizaremos a ideia de que um professor pode ser vinculado a somente um curso e um curso terá somente um professor, conforme como segue a imagem abaixo:


Para gerar a tabela e seus respectivos campos no bd, iremos utilizar o comando abaixo:
npx prisma migrate dev

3.2 CRIAR REGISTRO QUE PODE EXISTIR - CONNECT OR CREATE
Como alteramos a estrutura da tabela, os comandos criados anteriormente não irão mais funcionar corretamente, isso porque agora na Tabela Course possui um relacionamento com a tabela Teacher. Dessa forma, irei renomear a pasta Courses para Old_Courses e criar uma nova pasta Courses para os novos comandos. 

Para fazer a inserção de registros vinculados a chave estrangeira, podemos utilizar quatro abordagens:
ConnectOrCreate: se a chave estrangeira não existe, será criada. 
Connect: conecta uma chave estrangeira existente. 
Create: cria uma nova chave estrangeira
Vinculando a fk: vincula a uma chave estrangeira existente. 

O primeiro comando para criar registros utilizando o Prisma é utilizando o comando connectOrCreate, onde será criado os registros em ambas as tabelas, ou seja, nas tabelas Tearcher e Courses.  Porém, caso não exista na tabela Teacher, será criado


O comando está incompleto, pois é para inserir os dados na tabela Courses. Porém observe que será criado um usuário de nome "Bruno Fernandes". Ou seja, os dados serão inseridos na tabela Courses e se existir um usuário de nome Bruno Fernandes, porém se não estiver o nome informado do parâmetro, será criado o registro na outra tabela. Por isso o comando connect or create (conecte ou crie). 

Crie um arquivo chamado create.ts com seguinte código (completo).

Muita atenção ao adicionar um registro utilizando connectOrCreate, pois definimos na tabela Courses que a chave estrangeira fk_id_teacher possui valor único. Portanto, o comando de create só deverá funcionar se for criar um registro que não existe, ou seja, um novo Teacher. 
