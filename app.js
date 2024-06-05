// var ambiente_processo = 'producao';
var ambiente_processo = 'desenvolvimento';

var caminho_env = ambiente_processo === 'producao' ? '.env' : '.env.dev';
// Acima, temos o uso do operador ternário para definir o caminho do arquivo .env
// A sintaxe do operador ternário é: condição ? valor_se_verdadeiro : valor_se_falso

require("dotenv").config({ path: caminho_env });

var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA_APP = process.env.APP_PORT;
var HOST_APP = process.env.APP_HOST;

var app = express();

var usuarioRouter = require("./src/routes/usuario");
var jogosRouter = require("./src/routes/jogos");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/usuario", usuarioRouter);
app.use("/jogos", jogosRouter);

app.listen(PORTA_APP, function () {
    console.log(`
                                                                                                                             
                                                                                                                             
    OOOOOOOOO                               CCCCCCCCCCCCCTTTTTTTTTTTTTTTTTTTTTTTRRRRRRRRRRRRRRRRR   LLLLLLLLLLL             
    OO:::::::::OO                          CCC::::::::::::CT:::::::::::::::::::::TR::::::::::::::::R  L:::::::::L             
  OO:::::::::::::OO                      CC:::::::::::::::CT:::::::::::::::::::::TR::::::RRRRRR:::::R L:::::::::L             
 O:::::::OOO:::::::O                    C:::::CCCCCCCC::::CT:::::TT:::::::TT:::::TRR:::::R     R:::::RLL:::::::LL             
 O::::::O   O::::::Onnnn  nnnnnnnn     C:::::C       CCCCCCTTTTTT  T:::::T  TTTTTT  R::::R     R:::::R  L:::::L               
 O:::::O     O:::::On:::nn::::::::nn  C:::::C                      T:::::T          R::::R     R:::::R  L:::::L               
 O:::::O     O:::::On::::::::::::::nn C:::::C                      T:::::T          R::::RRRRRR:::::R   L:::::L               
 O:::::O     O:::::Onn:::::::::::::::nC:::::C                      T:::::T          R:::::::::::::RR    L:::::L               
 O:::::O     O:::::O  n:::::nnnn:::::nC:::::C                      T:::::T          R::::RRRRRR:::::R   L:::::L               
 O:::::O     O:::::O  n::::n    n::::nC:::::C                      T:::::T          R::::R     R:::::R  L:::::L               
 O:::::O     O:::::O  n::::n    n::::nC:::::C                      T:::::T          R::::R     R:::::R  L:::::L               
 O::::::O   O::::::O  n::::n    n::::n C:::::C       CCCCCC        T:::::T          R::::R     R:::::R  L:::::L         LLLLLL
 O:::::::OOO:::::::O  n::::n    n::::n  C:::::CCCCCCCC::::C      TT:::::::TT      RR:::::R     R:::::RLL:::::::LLLLLLLLL:::::L
  OO:::::::::::::OO   n::::n    n::::n   CC:::::::::::::::C      T:::::::::T      R::::::R     R:::::RL::::::::::::::::::::::L
    OO:::::::::OO     n::::n    n::::n     CCC::::::::::::C      T:::::::::T      R::::::R     R:::::RL::::::::::::::::::::::L
      OOOOOOOOO       nnnnnn    nnnnnn        CCCCCCCCCCCCC      TTTTTTTTTTT      RRRRRRRR     RRRRRRRLLLLLLLLLLLLLLLLLLLLLLLL
      
    Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar .: http://${HOST_APP}:${PORTA_APP} :. \n\n
    Você está rodando sua aplicação em ambiente de .:${process.env.AMBIENTE_PROCESSO}:. \n\n
    \tSe .:desenvolvimento:. você está se conectando ao banco local. \n
    \tSe .:producao:. você está se conectando ao banco remoto. \n\n
    \t\tPara alterar o ambiente, comente ou descomente as linhas 1 ou 2 no arquivo 'app.js'\n\n`);
});
