// Função para carregar conteúdo dinamicamente
function carregarConteudo(opcao) {
  const conteudo = {
    MENU: `
    <h1>Seja bem-vindo!</h1>
    <p>Escolha o conteúdo desejado
    </p>
    <p>Acesse o site de meus amigos também! ;)</p>
    <a href="https://gabs-kirio.github.io/sitejapones2/" target="_blank">https://gabs-kirio.github.io/sitejapones2/</a><br>
    <a href="https://1tecno.github.io/1tecno/" target="_blank">https://1tecno.github.io/1tecno/</a><br>
    <a href="https://1tecno.github.io/teste2/" target="_blank">https://1tecno.github.io/teste2/</a>
    `,
    AMC: `<h2 style="text-align: center;">Conteúdo de AMC</h2><p>Aqui está o material de Arquitetura e Manutenção de Computadores.</p>
     <ul> 
      <li><button class="contbutton" onclick="textcont('contAMC1')">Memória RAM</button></li>
    </ul>
    `,
    PROGWEB: `<h2 style="text-align: center;">Conteúdo de PROGWEB</h2><p>Aqui está o material de Programação Web.</p>`,
    HTMLCSS: `<h2 style="text-align: center;">Conteúdo de HTML/CSS</h2><p>Aqui está o material de HTML e CSS.</p>`,
    POOJAVA: `<h2 style="text-align: center;">Conteúdo de POO JAVA</h2><p>Aqui está o material de Programação Orientada a Objetos com Java.</p>`,
    SO: `<h2 style="text-align: center;">Conteúdo de S.O</h2><p>Aqui está o material de Sistemas Operacionais.</p>
    <ul>
      <li><button class="contbutton" onclick="textcont('contSO1')">O que é um Sistema Operacional?</button>
    </ul>
   `,
    LOGPR: `<h2 style="text-align: center;">Conteúdo de LOGPR</h2><p>Aqui está o material de Lógica de Programação.</p>`,
    NR: `<h2 style="text-align: center;">Conteúdo de N.R</h2><p>Aqui está o material de Noções de Robótica.</p>
    <ul> 
      <li><button class="contbutton" onclick="textcont('contNR1')">Robótica x Automação</button></li>
    </ul>
    
    `,
    GT: `<h2 style="text-align: center;">Conteúdo de G.T</h2><p>Aqui está o material de Gestão de Tempo.</p>
    `,
    changelog: `
    <h2>ALPHA 0.0.1</h2>
                 <ul>
                   <li>Adição de menu dinâmico em JS</li>
                   <li>Conteúdo de S.O atualizado</li>
                 </ul>
    <h2>ALPHA 0.0.2</h2>
                 <ul>
                   <li>Site movido para o Github</li>
                   <li>Agora o site pode ser acessado pela internet</li>
                 </ul>
    <h2>ALPHA 0.0.3</h2>
                 <ul>
                   <li>Melhorias na interface</li>
                   <li>Adição de novos conteúdos</li>
                   <li>Otimização para o uso em dispositivos móveis</li>
                 </ul>
    `,
  };

  // Insere o conteúdo correspondente na div "conteudo"
  const divConteudo = document.getElementById('conteudo');
  divConteudo.innerHTML = conteudo[opcao] || "<h2>Conteúdo não encontrado!</h2>";
}
function textcont(opcao) {
  const conteudo = {
    // Conteúdos de Noções de Robótica
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
 `,
    // Conteúdos de Sistemas Operacionais
contSO1: `
 <h3>O que é um Sistema Operacional?</h3><br>
    <p>Um sistema operacional (SO) é o software central que faz a ponte entre o hardware do computador e os programas que você utiliza. 
    Ele gerencia os recursos do sistema, fornece serviços essenciais e cria um ambiente onde outros programas podem rodar.</p><br>
    <h3>Funções Básicas de um Sistema Operacional:</h3><br>
    <ul>
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
    // Conteúdos de Arquitetura e Manutenção de Computadores
contAMC1: `
<h2>O que é memória RAM?</h2>
<p>A Memória de Acesso Aleatório, ou RAM, é uma peça do computador que funciona como um armazenamento de dados temporários: Quando você abre uma foto, um programa ou mais uma aba no navegador, os dados não vão direto para o disco rígido do PC junto dos grandes arquivos, ao invés disso, ficam armazenados temporariamente na memória RAM. Todo computador trabalha assim, já que buscar arquivos direto no disco rígido é muito demorado e ineficiente. A memória RAM trabalha em frequências altíssimas, transmitindo as informações de você para o processador em frações de microsegundos.</p><br>

<h3>1. DRAM (Dynamic RAM)</h3>
<ul>
<li>Descrição: A DRAM é o tipo mais comum de memória RAM. Ela armazena dados em capacitores que precisam ser periodicamente recarregados (refresh) para manter as informações.</li>
<li>Exemplo: Memórias DDR, DDR2, DDR3, DDR4, DDR5.</li>
<li>Velocidade: Comparado a outros tipos de RAM, a DRAM é mais lenta, mas mais barata de produzir.</li>
</ul>
<h3>2. SRAM (Static RAM)</h3>
<ul>
<li>Descrição: Ao contrário da DRAM, a SRAM não precisa ser recarregada constantemente. Ela é mais rápida e mais cara. Utiliza transistores para armazenar dados.</li>
<li>Exemplo: Usada em caches de processadores.</li>
<li>Velocidade: Muito mais rápida que a DRAM, mas consome mais energia e é mais cara.</li>
</ul>
<h3>3. SDRAM (Synchronous DRAM)</h3>
<ul>
<li>Descrição: A SDRAM é uma versão de DRAM que é sincronizada com o clock do processador, tornando a comunicação mais eficiente.</li>
<li>Exemplo: DDR (Double Data Rate) é um tipo de SDRAM.</li>
<li>Velocidade: Oferece melhores velocidades e desempenho em comparação com a DRAM tradicional.</li>
</ul>
<h3>4. DDR (Double Data Rate) SDRAM</h3>
<ul>
<li>Descrição: Tipo de SDRAM que transfere dados duas vezes por ciclo de clock. Existem várias gerações, como DDR, DDR2, DDR3, DDR4, DDR5.</li>
<li>Exemplo: DDR4 é comum em sistemas modernos, enquanto DDR5 está emergindo.</li>
<li>Velocidade: A cada nova geração, a velocidade de transferência de dados aumenta significativamente.</li>
</ul>
<h3>5. LPDDR (Low Power DDR)</h3>
<ul>
<li>Descrição: Variante de DDR desenvolvida para dispositivos móveis, como smartphones e tablets, que consome menos energia.</li>
<li>Exemplo: LPDDR3, LPDDR4, LPDDR5.</li>
<li>Velocidade: Menor em comparação com DDR, mas com foco em eficiência energética.</li>
</ul>
<h3>6. GDDR (Graphics DDR)</h3>
<ul>
<li>Descrição: Usada em placas de vídeo (GPUs), a GDDR é otimizada para fornecer grandes quantidades de dados rapidamente, o que é essencial para gráficos de alta performance.</li>
<li>Exemplo: GDDR5, GDDR6.</li>
<li>Velocidade: Mais rápida que a DDR comum, com maior largura de banda, adequada para gráficos e jogos.</li>
</ul>
<h3>7. ECC RAM (Error-Correcting Code RAM)</h3>
<ul>
<li>Descrição: Um tipo de RAM que tem a capacidade de detectar e corrigir erros de memória, tornando-a ideal para servidores e sistemas que exigem alta confiabilidade.</li>
<li>Exemplo: Usada principalmente em servidores e workstations.</li>
<li>Velocidade: Geralmente mais lenta que a RAM convencional, devido ao processo de correção de erros.</li>
</ul>
<h3>8. 3D XPoint</h3>
<ul>
<li>Descrição: Uma tecnologia de memória desenvolvida pela Intel e Micron, que oferece alta velocidade e persistência de dados, situada entre a memória RAM e o armazenamento SSD.</li>
<li>Exemplo: Intel Optane.</li>
<li>Velocidade: Mais rápida que os SSDs tradicionais, mas mais lenta que a RAM convencional.</li>
</ul>

<h2>Gerações: O que significa DDR?</h2>
<p>Os termos DDR, DDR2, DDR3, DDR4 e DDR5 referem-se a gerações diferentes de memória SDRAM (Synchronous Dynamic Random Access Memory), sendo o "DDR" uma abreviação de Double Data Rate. Cada uma dessas gerações traz melhorias significativas em termos de desempenho, velocidade de transferência de dados e eficiência energética. Vou explicar o que cada um significa:</p>
<h3>DDR (Double Data Rate)</h3>
<ul>
<li>Significado: Foi a primeira geração a oferecer "double data rate", ou seja, ela pode transferir dados tanto na subida quanto na descida do sinal de clock, aumentando a taxa de transferência sem aumentar a frequência do clock.</li>
<li>Características: Apareceu no final dos anos 90 e foi a evolução da memória SDR (Single Data Rate).</li>
<li>Velocidade: Taxas de transferência de dados de até 400 MT/s (milhões de transferências por segundo).</li>
</ul>
<h3>DDR2 (Double Data Rate 2)</h3>
<ul>
<li>Significado: Segunda geração do DDR, com melhorias significativas em relação ao DDR original.</li>
<li>Características: A DDR2 introduziu um clock de memória mais rápido e maior largura de banda. Além disso, usava uma tensão de operação menor (1,8V, contra 2,5V do DDR).</li>
<li>Velocidade: Taxas de transferência de dados entre 400 MT/s a 1066 MT/s.</li>
</ul>
<h3>DDR3 (Double Data Rate 3)</h3>
<ul>
<li>Significado: A terceira geração da memória DDR, trazendo ainda mais melhorias na velocidade e eficiência energética.</li>
<li>Características: A DDR3 oferece uma maior largura de banda e uma eficiência energética melhorada, operando com uma tensão de 1,5V (menor que a DDR2). Além disso, ela é capaz de atingir maiores frequências e tem um desempenho superior em relação ao DDR2.</li>
<li>Velocidade: Taxas de transferência de dados entre 800 MT/s a 2133 MT/s.</li>
</ul>
<h3>DDR4 (Double Data Rate 4)</h3>
<ul>
<li>Significado: Quarta geração da memória DDR, que trouxe novas melhorias em relação à DDR3.</li>
<li>Características: A DDR4 oferece maior densidade (capacidade de armazenamento por módulo), maior velocidade e menor consumo de energia, operando com uma tensão de 1,2V. A largura de banda foi significativamente aumentada em comparação com as gerações anteriores.</li>
<li>Velocidade: Taxas de transferência de dados entre 1600 MT/s a 3200 MT/s, com algumas versões especializadas alcançando até 5000 MT/s.</li>
<h3>DDR5 (Double Data Rate 5)</h3>
<ul>
<li>Significado: A quinta geração da memória DDR, que ainda está em processo de adoção em PCs e dispositivos mais recentes.</li>
<li>Características: A DDR5 oferece melhorias em termos de capacidade (maiores módulos de RAM), maior largura de banda, e eficiência energética, operando com uma tensão de 1,1V. Além disso, ela é projetada para suportar novas tecnologias e aplicações mais exigentes, como inteligência artificial e processamento intensivo.</li>
<li>Velocidade: Taxas de transferência de dados entre 4800 MT/s a 8400 MT/s (e talvez mais no futuro).</li>
</ul>
<p>Resumo das principais diferenças:</p>
<ul>
<li>Velocidade: Cada nova geração aumenta as taxas de transferência de dados (MT/s), o que resulta em maior desempenho.</li>
<li>Eficiência energética: Cada geração também visa reduzir o consumo de energia, o que é especialmente importante em dispositivos móveis.</li>
<li>Capacidade e largura de banda: A cada nova geração, as capacidades de módulos RAM aumentam, assim como a largura de banda, permitindo que mais dados sejam transferidos simultaneamente.</li>
</ul>
<h2>Como posso identificar as gerações?<h2>
<p>Para identificar a geração de um módulo de memória RAM, você pode observar alguns aspectos principais, como o nome do modelo, as características de desempenho (como a velocidade de transferência de dados), a tensão de operação, e o formato físico da memória. Vamos detalhar esses elementos:</p>
<h3>1. Nome do Modelo (Part Number)</h3>
<ul>
<li>A forma mais fácil de identificar a geração da memória RAM é olhando o número de modelo (ou part number) no próprio módulo de memória ou nas especificações fornecidas pelo fabricante.</li>


<li><p>O part number frequentemente inclui informações sobre a geração. Exemplo:<p><ul>


<li>DDR3: Um módulo de memória com o nome "Corsair Vengeance LPX 8GB DDR3-1600" indica que é um módulo DDR3 com 8GB de capacidade e uma velocidade de 1600 MT/s.</li>
<li>DDR4: Já um módulo chamado "Corsair Vengeance LPX 8GB DDR4-2400" é uma memória DDR4 com 8GB e uma velocidade de 2400 MT/s.</li>
<li>DDR5: Um módulo de memória com o nome "G.Skill Ripjaws V 16GB DDR5-4800" mostra que é uma memória DDR5 com 16GB e uma velocidade de 4800 MT/s.</li>
</ul>
</ul></li>
<p>Geralmente, o tipo de RAM (DDR3, DDR4, DDR5) será claramente indicado no nome do modelo.</p>
<h3>2. Velocidade de Transferência de Dados</h3>
<ul>
<li><p>Cada geração de RAM tem uma faixa de velocidade (medida em MT/s, ou transferências por segundo) que pode ser usada para identificar a geração:<p><ul>
<li>DDR2: Velocidades típicas variam de 400 MT/s a 1066 MT/s.
DDR3: As velocidades começam em torno de 800 MT/s e podem ir até 2133 MT/s (alguns módulos mais avançados podem chegar a 2400 MT/s ou mais).</li>
<li>DDR4: As velocidades variam de 1600 MT/s a 3200 MT/s, com módulos de alto desempenho podendo ultrapassar 5000 MT/s.</li>
<li>DDR5: Começa em 4800 MT/s e pode chegar até 8400 MT/s ou mais.</li></ul></li></ul>
<p>Se o módulo de memória tem uma velocidade dentro de uma dessas faixas, isso pode indicar facilmente a geração a que pertence.</p>
<h3>3. Tensão de Operação</h3>
<ul>
<li><p>Outra forma de identificar a geração de RAM é verificando a tensão de operação, pois cada geração tem uma tensão diferente:</p><ul>
<li>DDR2: 2,5V ou 1,8V.</li>
<li>DDR3: 1,5V (ou 1,35V em versões de baixo consumo).</li>
<li>DDR4: 1,2V.</li>
<li>DDR5: 1,1V.</li></ul></li></ul>
<p>Se a memória RAM opera em uma dessas tensões, é um indicativo claro da sua geração.</p>
<h3>4. Físico e Formato</h3>
<ul>
<li>O formato físico também pode ajudar a identificar a geração, embora não seja o método mais confiável, pois o formato físico das memórias de desktop (DIMM) tem mudado pouco entre as gerações.</li>
<li>No entanto, as memórias DDR4 e DDR5 têm pinos diferentes e não são compatíveis com as versões anteriores (DDR3 ou DDR2). A chave de encaixe (notch) no módulo de memória muda de posição para evitar o erro de instalação em slots errados.</li>
</ul>
<h3>5. Placa-Mãe e Processador</h3>
<ul>
<li><p>Para identificar a geração da RAM também é possível considerar as especificações da placa-mãe e do processador. Eles têm suporte específico para determinadas gerações de memória.</p><ul>

<li>DDR3 era comum até meados da década de 2010.</li>
<li>DDR4 passou a ser o padrão a partir de 2017.</li>
<li>DDR5 é relativamente novo e começou a ser adotado em 2021.</li></ul></li></ul>

`,
}
const divConteudo = document.getElementById('conteudo');
  divConteudo.innerHTML = conteudo[opcao] || "<h2>Conteúdo não encontrado!</h2>";
}

