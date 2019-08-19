# Aula de Git e GitHub

    Link do Guia: http://rogerdudler.github.io/git-guide/index.pt_BR.html

Gírias Comuns sobre Git e GitHub

    Git --> Software de versionamento de código
    GitHub, GitLab, GitBucket --> Site que hospeda repositórios Git
    Commit, Dar Commit ou Commitar --> Aceitar alterações e mandar para o Head
    Push --> Enviar para o servidor ou repo de versionamento
    Pull --> Baixa as últimas alterações feitas no servidor/repo local
    Sync --> Sincronizar repositório (envia as últimas alterações e baixa as últimas, respectivamente)
    Repo --> Repositório
    Master --> Ramo principal do repositório
    Branch --> Ramos/Braços do Repositório onde você pode criar vários, para evitar mandar direto para o Master
    Merge --> Mesclar branchs para juntar alterações


Comandos:

Iniciar Repositório

    --> git init

Adicionar Repositório Remoto 
    
    --> git remote add origin <servidor>

Clonar Repositório

    Local --> git clone /caminho/para/o/repositório

    Servidor --> git clone usuário@servidor:/caminho/para/o/repositório


Adicionar Arquivo

    Adicionar Arquivo Único --> git add <arquivo>

    Adicionar Todos os Arquivos --> git add *

Confirmar Alterações e Commitar

    Commit --> git commit -m "comentários das alterações"

Enviar para o Servidor

    Push --> git push origin master

        Origin --> local de origem do repositório
        Master --> Ramificação Principal do Repositório

Atualizar Repo

    --> git pull

Fazer Merge em outra Branch

    git merge <branch>