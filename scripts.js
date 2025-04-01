// Função para carregar conteúdo dinamicamente
function carregarConteudo(opcao) {
  const conteudo = {
    AMC: `<h2 style="text-align: center;">Conteúdo de AMC</h2><p>Aqui está o material de Arquitetura e Manutenção de Computadores.</p>`,
    PROGWEB: `<h2 style="text-align: center;">Conteúdo de PROGWEB</h2><p>Aqui está o material de Programação Web.</p>`,
    HTMLCSS: `<h2 style="text-align: center;">Conteúdo de HTML/CSS</h2><p>Aqui está o material de HTML e CSS.</p>`,
    POOJAVA: `<h2 style="text-align: center;">Conteúdo de POO JAVA</h2><p>Aqui está o material de Programação Orientada a Objetos com Java.</p>`,
    SO: `<h2 style="text-align: center;">Conteúdo de S.O</h2><p>Aqui está o material de Sistemas Operacionais.</p><br>
   `,
    LOGPR: `<h2 style="text-align: center;">Conteúdo de LOGPR</h2><p>Aqui está o material de Lógica de Programação.</p>`,
    NR: `<h2 style="text-align: center;">Conteúdo de N.R</h2><p>Aqui está o material de Noções de Robótica.</p>
    <ul> 
      <li><button class="contbutton" onclick="textNR('contNR1')"></button></li>
    </ul>
    
    `,
    changelog: `
    <h2>ALPHA 0.0.1</h2>
                 <ul style="text-align: left;">
                   <li>Adição de menu dinâmico em JS</li>
                   <li>Conteúdo de S.O atualizado</li>
                 </ul>
    <h2>ALPHA 0.0.2</h2>
                 <ul style="text-align: left;">
                   <li>Site movido para o Github</li>
                   <li>Agora o site pode ser acessado pela internet</li>
                 </ul>

    `,
  };

  // Insere o conteúdo correspondente na div "conteudo"
  const divConteudo = document.getElementById('conteudo');
  divConteudo.innerHTML = conteudo[opcao] || "<h2>Conteúdo não encontrado!</h2>";
}
function textNR(opcao) {
  const conteudo = {
  contNR1: `
<h2>Qual é a diferença entre robótica e automação?</h2>
<p>De maneira geral, a automação é um conceito abrangente que engloba softwares, máquinas e ferramentas projetadas para executar tarefas que normalmente seriam realizadas por pessoas.
Um exemplo disso são as plataformas de automação de processos empresariais (BPA, ou business process automation em inglês), que são sistemas criados para otimizar as operações internas das organizações.
Já a automação robótica de processos (RPA, robotic process automation) refere-se a programas de software inteligentes (ou robôs de software) equipados com Inteligência Artificial e capacidade de aprendizado de máquina, que conseguem operar sistemas de computador como se fossem humanos.
</p>
<h2>Quem utiliza a automação robótica de processos?</h2>
<p>RPA é aplicada na automação de fluxos de trabalho complexos, na infraestrutura e em processos de retaguarda, sendo ideal para grandes corporações com extensos departamentos de recursos humanos, tecnologia da informação e finanças.
Automação robótica de processos é Inteligência Artificial?
Embora ofereça soluções inteligentes, RPA não é sinônimo de IA. RPA consiste em softwares que replicam ações humanas, enquanto a Inteligência Artificial trata da simulação da inteligência humana por meio de softwares de computador.
<p>
<h2>E o que é robótica, então?</h2>
<p>A robótica, por sua vez, refere-se especificamente às máquinas capazes de enxergar, sentir, executar ações e, em diferentes níveis, tomar decisões de forma autônoma.
Essa área inclui uma ampla gama de aplicações, como drones e robôs de exploração espacial. No entanto, dentro do contexto de robótica industrial e manufatura, essas máquinas geralmente são classificadas como robôs industriais.
Robôs industriais são dispositivos físicos utilizados em atividades como inspeção, montagem, embalagem e paletização de produtos físicos.
</p>
<h2>Automação e robótica: como se relacionam?</h2>
<p>A automação abrange uma variedade de tecnologias, incluindo programas de software sem componentes físicos, dispositivos PLC (controladores lógicos programáveis) e suas subdivisões, como a robótica, que pode ser considerada uma subcategoria dentro do campo da automação.
</p>
  
 `

}
const divConteudo = document.getElementById('conteudo');
  divConteudo.innerHTML = conteudo[opcao] || "<h2>Conteúdo não encontrado!</h2>";
}
