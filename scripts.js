// Função para carregar conteúdo dinamicamente
function carregarConteudo(opcao) {
  const conteudo = {
    AMC: `<h2>Conteúdo de AMC</h2><p>Aqui está o material de Arquitetura e Manutenção de Computadores.</p>`,
    PROGWEB: `<h2>Conteúdo de PROGWEB</h2><p>Aqui está o material de Programação Web.</p>`,
    HTMLCSS: `<h2>Conteúdo de HTML/CSS</h2><p>Aqui está o material de HTML e CSS.</p>`,
    POOJAVA: `<h2>Conteúdo de POO JAVA</h2><p>Aqui está o material de Programação Orientada a Objetos com Java.</p>`,
    SO: `<h2>Conteúdo de S.O</h2><p>Aqui está o material de Sistemas Operacionais.</p><br>
    <h3>O que é um Sistema Operacional?</h3><br>
    <p>Um sistema operacional (SO) é o software central que faz a ponte entre o hardware do computador e os programas que você utiliza. 
    Ele gerencia os recursos do sistema, fornece serviços essenciais e cria um ambiente onde outros programas podem rodar.</p><br>
    <h3>Funções Básicas de um Sistema Operacional:</h3><br>
    <ul style="text-align: left;">
            <li>Gerenciamento de Processos: É ele quem cria, programa e encerra os processos. O SO acompanha todos os processos em execução, 
            distribui os recursos necessários e facilita a comunicação e sincronização entre eles.</li>
            <li>Gerenciamento de Memória: Coordena a utilização da memória do computador, definindo quais processos terão 
            acesso a ela e por quanto tempo.</li>
            <li>Gerenciamento de Dispositivos: Controla os dispositivos de hardware conectados, utilizando drivers específicos para intermediar a 
            comunicação entre o software e o hardware.</li>
            <li>Gerenciamento de Arquivos: Organiza os arquivos em dispositivos de armazenamento (como discos rígidos), 
            definindo quem tem autorização para acessá-los e de que forma.</li>
            <li>Segurança e Acesso: Garante que apenas usuários autorizados possam acessar os recursos do sistema, com procedimentos de login e 
            proteção de arquivos ou diretórios.</li>
            <li>Interface do Usuário: Oferece uma forma de interação com o sistema, seja por meio de uma interface de linha de comando (CLI) 
            ou uma interface gráfica (GUI) com ícones e janelas.</li>
            <li>Gerenciamento de Entrada/Saída (E/S): Coordena o funcionamento de dispositivos de E/S, como impressoras, teclados e discos.</li>
        </ul>
    
    `,
    LOGPR: `<h2>Conteúdo de LOGPR</h2><p>Aqui está o material de Lógica de Programação.</p>`,
    NR: `<h2>Conteúdo de N.R</h2><p>Aqui está o material de Noções de Robótica.</p>
    <ul  style="text-align: left;"> 
      <li><button onclick="textNR('cont1')">N.R</button></li>
    </ul>
</a>
    
    `,
    changelog: `<p style="text-align: left;">
    <h2>ALPHA 0.0.1</h2>
                 <ul>
                   <li>Adição de menu dinâmico em JS</li>
                   <li>Conteúdo de S.O atualizado</li>
                 </ul>
    <h2>ALPHA 0.0.2</h2>
                 <ul>
                   <li>Site movido para o Github</li>
                   <li>Agora o site pode ser acessado pela internet</li>
    </p>
    `,
  };

  // Insere o conteúdo correspondente na div "conteudo"
  const divConteudo = document.getElementById('conteudo');
  divConteudo.innerHTML = conteudo[opcao] || "<h2>Conteúdo não encontrado!</h2>";
}
function textNR(opcao) {
  const conteudo = {
  cont1: `<p style="text-align: left;">
<h2>Qual é a diferença entre robótica e automação?</h2>
De maneira geral, a automação é um conceito abrangente que engloba softwares, máquinas e ferramentas projetadas para executar tarefas que normalmente seriam realizadas por pessoas.
Um exemplo disso são as plataformas de automação de processos empresariais (BPA, ou business process automation em inglês), que são sistemas criados para otimizar as operações internas das organizações.
Já a automação robótica de processos (RPA, robotic process automation) refere-se a programas de software inteligentes (ou robôs de software) equipados com Inteligência Artificial e capacidade de aprendizado de máquina, que conseguem operar sistemas de computador como se fossem humanos.
<h2>Quem utiliza a automação robótica de processos?</h2>
RPA é aplicada na automação de fluxos de trabalho complexos, na infraestrutura e em processos de retaguarda, sendo ideal para grandes corporações com extensos departamentos de recursos humanos, tecnologia da informação e finanças.
Automação robótica de processos é Inteligência Artificial?
Embora ofereça soluções inteligentes, RPA não é sinônimo de IA. RPA consiste em softwares que replicam ações humanas, enquanto a Inteligência Artificial trata da simulação da inteligência humana por meio de softwares de computador.
E o que é robótica, então?
A robótica, por sua vez, refere-se especificamente às máquinas capazes de enxergar, sentir, executar ações e, em diferentes níveis, tomar decisões de forma autônoma.
Essa área inclui uma ampla gama de aplicações, como drones e robôs de exploração espacial. No entanto, dentro do contexto de robótica industrial e manufatura, essas máquinas geralmente são classificadas como robôs industriais.
Robôs industriais são dispositivos físicos utilizados em atividades como inspeção, montagem, embalagem e paletização de produtos físicos.
Automação e robótica: como se relacionam?
A automação abrange uma variedade de tecnologias, incluindo programas de software sem componentes físicos, dispositivos PLC (controladores lógicos programáveis) e suas subdivisões, como a robótica, que pode ser considerada uma subcategoria dentro do campo da automação.

  
  </p>`

}
const divConteudo = document.getElementById('conteudo');
  divConteudo.innerHTML = conteudo[opcao] || "<h2>Conteúdo não encontrado!</h2>";
}
