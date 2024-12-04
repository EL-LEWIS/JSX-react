# projeto-react

## Instalaçao:
começamos a instalar o npm com as principais pastas


## Configurando:
   As principais pastas (confusion e src), na pasta public criando uma pasta chamada (assets) e colocando as imagens dos pratos. em seguida na pasta src criando uma pasta (Components) criando 2 arquivos (MenuComponent.js e DishdetailComponent.js ) e adcionando os codigos apresdentados as aulas, em seguida criando a pasta shared e criando um arquivo (dishes.js) para adcionar as informacoes dos pratos.

## alteraçoes do codigo:

## Adicionar o DishDetailComponent

Criar o componente DishDetailComponent.
Exibir os detalhes do prato selecionado ao invés de mostrar o prato diretamente no MenuComponent.
Configurar layout responsivo usando classes do Bootstrap.
Implementação:
O arquivo DishdetailComponent.js foi criado.
O componente DishDetail recebe um prato como props. Se o prato for null, retorna um div vazio.
O layout usa o Bootstrap para garantir a responsividade:
Detalhes do prato e comentários são renderizados lado a lado em telas maiores.
São empilhados em telas menores (xs e sm).

## Renderizar os Detalhes do Prato


Criar a função renderDish() dentro de DishDetailComponent.
Renderizar os detalhes do prato em um cartão estilizado com Reactstrap.
Verificar se o prato é válido antes de renderizar.
Implementação:
A função renderDish() foi criada e usa componentes do Reactstrap:
Card para estruturar o conteúdo.
CardImg, CardBody, CardTitle, e CardText para exibir a imagem, título e descrição.

## Renderizar os Comentários

Criar a função renderComments() para exibir os comentários.
Cada comentário deve ser formatado com a estrutura:
Primeira linha: o comentário.
Segunda linha: autor e data.
Usar a classe Bootstrap list-unstyled para remover estilos padrão.
Implementação:
A função renderComments() recebe a lista de comentários como argumento.
Os comentários são mapeados para renderizar dinamicamente o conteúdo.
Se os comentários forem nulos, retorna um div vazio.

![alt text](<Captura de tela 2024-12-04 195504.png>)