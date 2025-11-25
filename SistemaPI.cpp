#include <iostream>
#include <string> 		 /*string para ler o nome de pacientes*/
#include <iomanip>		 /*Biblioteca pra deixar o texto organizado*/
#include <windows.h>	 /*Mudar a cor das letras*/
#include <vector>		 /*inclui vetor*/
#include <fstream>		 /*inclui a biblioteca para a manipulação de arquivo*/
#include <limits>		 /*Serve pra por limites*/
#include <conio.h>		 // Para _getch e _kbhit
#include <stdlib.h>    	 // Para system, srand, rand, exit
#include <algorithm> 	 // Para random_shuffle
#include <ctime>    	 // Para time

using namespace std;
/*COLOCAR DATA*/
	/*O horário de funcionamento da clínica seria das 07:00h até as 21:00h*/
void cadastro();
void registro();
int marcar();
int horario();
int data();
int reagendar();
int cancelar();
int jogo();
int l;

struct Paciente{ /*estrutura pra colocar os dados do paciente no arquivo*/
	string nome;
	int idade;
	string cpf;
	string tipoconsulta;
	int horaconsulta;
	int diaconsulta;
};

Paciente info; /*variavel universal para os pacientes*/
	bool cpfvalido(const string& cpf) { /*verificação pro cpf ter apenas numeros*/
		if (cpf.length()!= 11) return false; /*o .length serve pra colocar um limite na string*/
		for(int i = 0; i < 11; i++) { /*percorre cada caracter da string pra verificar se é um numero*/
			if (!isdigit(cpf[i])) return false;
		} return true;
	}
HANDLE hConsole = GetStdHandle(STD_OUTPUT_HANDLE); /*muda a cor de todo o texto abaixo*/
/*Painel inicial*/
int main()
{

	int opcao;
	do{
	SetConsoleTextAttribute(hConsole, 6); /*trocar a cor das letras*/
	cout << "\n-----------------------------------------";
	cout << "\n SEJA BEM-VINDO AO SISTEMA DA CLINICA PI";
	cout << "\n Escolha alguma opcao a seguir: ";
	cout << endl;
	SetConsoleTextAttribute(hConsole, 7); /*volta as cores ao padrao*/
	cout << "\n [1] Cadastrar paciente";
	cout << "\n [2] Ver registro de pacientes";
	cout << "\n [3] Marcar consulta";
	cout << "\n [4] Reagendar consulta";
	cout << "\n [5] Cancelar consulta";
	cout << "\n [6] Jogo Especial";
	cout << "\n [7] Fechar sistema";
	cout << "\n\n Escolha a opcao que deseja:  ";
		while (!(cin >> opcao) || opcao <= 0 || opcao > 7){
		cout << " Digite novamente: ";
		cin.clear();
		cin.ignore(1000, '\n');
	}
		switch (opcao)
		{
			case 1: cadastro(); break;
			case 2: registro(); break;
			case 3: marcar(); break;
			case 4: reagendar(); break;
			case 5: cancelar(); break;
			case 6: jogo(); break;
			case 7: cout << "\n Encerrando..."; return 0; break;
			default: cout << "\n CODIGO INVALIDO!\n TENTE NOVAMENTE";break;
		}
	} while (opcao != 7);
return 0;
}

void cadastro()
{
	int i,j;
	i = 0;
	j = 0;
	cout << endl;
	SetConsoleTextAttribute(hConsole, 6);
	cout << "   ---   CADASTRAR PACIENTE   ---";
	SetConsoleTextAttribute(hConsole, 7);
	cout << "\n Quantos pacientes deseja cadastrar: ";
	
	while (!(cin >> l) || l <= 0){
		cout << " Digite novamente: ";
		cin.clear();
		cin.ignore(1000, '\n');
	}
	
	ofstream arquivo ("pacientes.txt", ios::app);
	if (!arquivo){ /*verifica se tem algum erro no arquivo*/
		SetConsoleTextAttribute(hConsole, 4);
		cout << " Erro ao abrir o arquivo! :/ \n";
		return;	
	}
	
	for (i = 0; i < l; i++){
		cout << "\n Nome do paciente: ";
		cin.ignore();			/*esta linha ignora o cin<< anterior para que a string funcione*/
		getline(cin, info.nome);	/*o getline é usado pra ler nomes com espaço*/
	do{
		
		cout << " CPF do paciente (11 digitos): ";
		getline(cin,info.cpf);
		if (!cpfvalido(info.cpf)){ 
			cout << " CPF Invalido! Tente novamente:\n";
		}
	} while (!cpfvalido(info.cpf));
		
		cout << " Idade do paciente: ";
		cin >> info.idade;
		while (info.idade < 1 || info.idade > 99){
			cout << "\n Idade Invalida!";
			cout << "\n Digite novamente: ";
			cin >> info.idade;
		}
		info.diaconsulta = 0;
		info.horaconsulta = 0;
		info.tipoconsulta = "Desmarcado";
		
		arquivo << info.nome << ";" << info.idade << " " << info.cpf << ";" << info.tipoconsulta << ";" << info.horaconsulta << ";" << info.diaconsulta << "\n"; /*escreve os dados no arquivo .txt*/
	}
		arquivo.close();
	cout << "\n Pacientes adicionados!";
return;
}

void registro()
{
	 string tempIdade, tempHora, tempDia;
	/*o setw(0) define o tamanho da coluna*/
	/*o setfill ('-') preenche a coluna de acordo com o setw(X)*/
	cout << endl;
	SetConsoleTextAttribute(hConsole, 6);
	cout << "\n   ---   REGISTRO DE PACIENTES   ---";
	SetConsoleTextAttribute(hConsole, 7);
	cout << endl;
	ifstream arquivo("pacientes.txt");
	if (!arquivo){ /*verifica se tem algum erro no arquivo*/
		SetConsoleTextAttribute(hConsole, 4);
		cout << " Erro ao abrir o arquivo! :/ \n";
		return;	
	}
	
	cout << left << setw(45) << " Nome" << setw(10) << " Idade" << setw(15) << "  CPF" << setw(20) << " Consulta" << setw(15) << " Horario" << setw(10) << " Data" << setw(20) << endl; /*deixa a exibição arrumadinha*/
	cout << setfill ('-') << setw(116) << "-" << setfill(' ') << endl;
	
	while (getline(arquivo, info.nome, ';') && (getline(arquivo, tempIdade, ' ') && getline(arquivo, info.cpf, ';') && getline(arquivo, info.tipoconsulta, ';') &&( getline(arquivo, tempHora, ';')) && (getline(arquivo, tempDia) ))){
		info.idade = stoi(tempIdade);
        info.horaconsulta = stoi(tempHora);
        info.diaconsulta = stoi(tempDia);
		 /*ERA SÓ REMOVER UMA LINHA PRA ISSO FUNCIONAR AAAAAAAAA*/
		cout << " " << left << setw(45) << info.nome << setw(10) << info.idade << setw(15) << info.cpf << setw(20) << info.tipoconsulta << setw(15) << info.horaconsulta << setw(10) << info.diaconsulta << endl;
	}
	
	arquivo.close();
return;
}

int marcar()
{
	int opcao,i;
	int tipo;
	opcao = 0;
	i = 0;
	SetConsoleTextAttribute(hConsole, 6);
	cout << "\n   ---   MARCAR CONSULTA   ---";
	SetConsoleTextAttribute(hConsole, 7);
	
	ifstream arquivo("pacientes.txt");
	if (!arquivo){ /*verifica se tem algum erro no arquivo*/
	SetConsoleTextAttribute(hConsole, 4);
		cout << "\n Erro ao abrir o arquivo! :/ \n";
		return 0;	
	}
	
	  vector<string> linhas; /*isso aqui serve pra armazenar todas as linhas do arquivo*/
    string linha;
    while (getline(arquivo, linha)) {
        linhas.push_back(linha);
    }
    arquivo.close();
	cout << "\n Escolha o Paciente para marcar a consulta:\n";
    for (i = 0; i < linhas.size(); i++) {
        string nomeTemp;
        stringstream ss(linhas[i]);
        getline(ss, nomeTemp, ';'); /*exibe o nome apenas T-T*/
        cout <<" [" << i+1 << "] " << nomeTemp << endl;
    }
    
		cout << " [-] Selecione o Paciente: ";
		while (!(cin >> opcao)){
			cout << " Digite novamente: ";
			cin.clear();
			cin.ignore(1000, '\n');
		}
		if(opcao != 0 && opcao <= linhas.size())
	{
		stringstream ssSelecionado(linhas[opcao-1]);
		getline(ssSelecionado, info.nome, ';');
		(ssSelecionado >> info.idade);
		ssSelecionado.ignore(); // ignora espaço
		getline(ssSelecionado, info.cpf, ';');
		
		SetConsoleTextAttribute(hConsole, 6);
			cout << "\n Escolha o tipo da sua consulta: ";
		SetConsoleTextAttribute(hConsole, 7);
			cout << "\n [1] Consulta Odontologica";
			cout << "\n [2] Consulta Pediatrica";
			cout << "\n [3] Consulta Dermatologica";
			cout << "\n [4] Consulta Cardiologica";
			cout << "\n [5] Consulta Oftalmologista";
			cout << "\n [-] Opcao desejada:  ";
			
			while (!(cin >> tipo) || tipo <= 0 || tipo > 5){
				SetConsoleTextAttribute(hConsole, 4);
			cout << " Digite novamente: ";
			SetConsoleTextAttribute(hConsole, 7);
			cin.clear();
			cin.ignore(1000, '\n');
		}
			switch (tipo)
			{
				case 1: info.tipoconsulta = "odontologica"; break;
				case 2: info.tipoconsulta = "pediatrica"; break;
				case 3: info.tipoconsulta = "dermatologica"; break;
				case 4: info.tipoconsulta = "cardiologica"; break;
				case 5: info.tipoconsulta = "oftamologica"; break;
				default: cout << " Opcao invalida, tente novamente!"; return marcar();
			}
	
		
	horario();
	
	// atualiza a linha escolhida
        stringstream ss;
        ss << info.nome << ";" << info.idade << " " << info.cpf << ";"
           << info.tipoconsulta << ";" << info.diaconsulta << ";" << info.horaconsulta;
        linhas[opcao-1] = ss.str();

        // reescreve o arquivo inteiro
        ofstream arquivoOut("pacientes.txt", ios::trunc);
        for (auto &l : linhas) {
            arquivoOut << l << "\n";
        }
        arquivoOut.close();

        cout << " Consulta marcada com exito!\n";
	}
    else
    {
    	SetConsoleTextAttribute(hConsole, 4);
        cout << " Escolha invalida, tente novamente!";
        SetConsoleTextAttribute(hConsole, 7);
        return marcar();
    }

return 0;
}

int horario()
{
	int hora;
	
	SetConsoleTextAttribute(hConsole, 6);
	cout << "\n   ---   HORARIO DA CONSULTA   ---";
	SetConsoleTextAttribute(hConsole, 7);
	cout << "\n Horario de funcionamento: 07:00h - 21:00h" << endl;
	cout << " Selecione um horario para marcar sua consulta: "; cin >> hora;
	cout << endl;
	if(hora > 21 || hora < 7)
	{
		SetConsoleTextAttribute(hConsole, 4);
		cout << " Horario invalido! Tente novamente!" << endl;
		SetConsoleTextAttribute(hConsole, 7);
		return horario();
		
	}
	else
	{
		cout << " Horario marcado!";
		cout << endl;
		 info.horaconsulta = hora;
		return data();
	}
}

int data()
{	
	int datamarc;
	SetConsoleTextAttribute(hConsole, 6);
	cout << "\n   ---   DATA DA CONSULTA   ---";
	SetConsoleTextAttribute(hConsole, 7);
	cout << "\n Te atendemos a semana toda!" << endl;
	cout << " Escolha um dia para marcar sua consulta: "; cin >> datamarc;
	while (datamarc > 31 || datamarc < 1) {
		SetConsoleTextAttribute(hConsole, 4);
		cout << " Data invalida! Tente novamente: ";
		SetConsoleTextAttribute(hConsole, 7);
		cin >> datamarc;

	} 
	info.diaconsulta = datamarc;

	cout << " Consulta marcada com exito!";
	
	return 0;
}

int reagendar()
{
	int opcao;
	SetConsoleTextAttribute(hConsole, 6);
	cout << "\n   ---   REAGENDAR CONSULTA   ---";
	SetConsoleTextAttribute(hConsole, 7);
	cout << "\n Voce deseja reagendar sua consulta?";
	cout << "\n <1> para SIM ou <0> para NAO!: ";
	cin >> opcao;
	switch (opcao){
		case 1: marcar(); break;
		case 0: return 0;
		default: cout << "Comando Invalido!"; break;
	}
return 0;
}

int cancelar()
{
	int i,opcao;
	int can;
	SetConsoleTextAttribute(hConsole, 4);
	cout << "\n   ---   CANCELAR CONSULTA   ---";
	SetConsoleTextAttribute(hConsole, 7);
	cout << "\n Voce deseja cancelar sua consulta?";
	cout << "\n <1> para SIM ou <0> para NAO!: "; cin >> can;
	
	if (can == 1){
				
	ifstream arquivo("pacientes.txt");
	if (!arquivo){ /*verifica se tem algum erro no arquivo*/
	SetConsoleTextAttribute(hConsole, 4);
		cout << "\n Erro ao abrir o arquivo! :/ \n";
		return 0;	
	}
	
	  vector<string> linhas; /*isso aqui serve pra armazenar todas as linhas do arquivo*/
    string linha;
    while (getline(arquivo, linha)) {
        linhas.push_back(linha);
    }
    arquivo.close();
	cout << "\n Escolha o Paciente para marcar a consulta:\n";
    for (i = 0; i < linhas.size(); i++) {
        string nomeTemp;
        stringstream ss(linhas[i]);
        getline(ss, nomeTemp, ';'); /*exibe o nome apenas T-T*/
        cout <<" [" << i+1 << "] " << nomeTemp << endl;
    }
    
		cout << " [-] Selecione o Paciente: ";
		while (!(cin >> opcao)){
			cout << " Digite novamente: ";
			cin.clear();
			cin.ignore(1000, '\n');
		}
		if(opcao != 0 && opcao <= linhas.size())
	{
		stringstream ssSelecionado(linhas[opcao-1]);
		getline(ssSelecionado, info.nome, ';');
		(ssSelecionado >> info.idade);
		ssSelecionado.ignore(); // ignora espaço
		getline(ssSelecionado, info.cpf, ';');
		
		info.diaconsulta = 0;
		info.horaconsulta = 0;
		info.tipoconsulta = "Desmarcado";
		
	// atualiza a linha escolhida
        stringstream ss;
        ss << info.nome << ";" << info.idade << " " << info.cpf << ";"
           << info.tipoconsulta << ";" << info.diaconsulta << ";" << info.horaconsulta;
        linhas[opcao-1] = ss.str();

        // reescreve o arquivo inteiro
        ofstream arquivoOut("pacientes.txt", ios::trunc);
        for (auto &l : linhas) {
            arquivoOut << l << "\n";
        }
        arquivoOut.close();

	}
	
		cout << "\n Sua consulta foi cancelada!";
}

	else{
		return 0;
	}

return 0;
}



	
	
const int COLOR_DEFAULT = 7; // Branco "fraco"
const int COLOR_GREY = 8;    // Cinza escuro (para cartas roubadas)
const int COLOR_GREEN = FOREGROUND_GREEN | FOREGROUND_INTENSITY;
const int COLOR_YELLOW = FOREGROUND_RED | FOREGROUND_GREEN | FOREGROUND_INTENSITY;
const int COLOR_RED = FOREGROUND_RED | FOREGROUND_INTENSITY;
const int COLOR_CYAN = FOREGROUND_BLUE | FOREGROUND_INTENSITY;

string NOMES_ATRIBUTOS[6] = {
    "Inteligencia",
    "Influencia Hist.",
    "Originalidade",
    "Ideologia",
    "Tempo de Infl.",
    "Relevancia Atual"
};


// -----------------------------------------------------------------
// PARTE 3: ESTRUTURAS DE DADOS
// -----------------------------------------------------------------

enum Familia {
    GREGOS,
    ALEMAES,
    BRASILEIROS,
    ROMANOS
};

// Molde de cada carta
struct Carta {
    string nome;
    Familia familia;

    int inteligencia;
    int influencia;
    int originalidade;
    int ideologia;
    int tempoInfluencia;
    int relevancia;

    bool superTrunfo;
    int cooldown; 
    bool roubada; // true se esta carta foi roubada do oponente
};


// -----------------------------------------------------------------
// PARTE 4: DECLARACAO DE FUNCOES (PROTOTIPOS)
// (O "indice" do nosso programa)
// -----------------------------------------------------------------

// --- Funcoes de Utilidade (Basicas) ---
void setColor(int c);
void resetColor();
void limparTela();
void espera(int ms);
void pausa();
void efeitoCarregando(const string &texto, int ciclos = 3, int vel = 200);

// --- Funcoes de Menu e Regras ---
void imprimirLogoGrande();
void mostrarOpcoes(const vector<string> &op, int selecionado);
void mostrarRegras();
void menuPrincipal();

// --- Funcoes de Geracao de Cartas (Baralho) ---
vector<Carta> gerarBaralho();
int corFamilia(Familia f, bool roubada); // Checa se e roubada

// --- Funcoes de Exibicao das Cartas (ASCII Art) ---
void mostrarCartaFrente(const Carta& c);
void mostrarCartaVirada(bool super, bool roubada, bool onCooldown);
void mostrarCartasJogador(const vector<Carta>& mao, int destaque = -1);

// --- Funcoes de Logica do Jogo (Gameplay) ---
void mostrarTelaVitoria(const string& nomeVencedor);
int sorteioAnimado(const string& nomeJogador);
bool superTrunfosOk(const vector<Carta>& mao); // ATUALIZADO
void distribuirCartas(const vector<Carta>& baralhoBase, vector<Carta>& mao1, vector<Carta>& mao2); // ATUALIZADO
void processoSorteioInicial(vector<Carta>& mao1, vector<Carta>& mao2, int& jogadorInicial, const string& nome1, const string& nome2);
int escolherCartaParaJogar(const vector<Carta>& mao, const string& nomeJogador);
int sortearAtributoAnimado();
int getAtributo(const Carta& c, int atributo);
int compararCartas(const Carta& c1, const Carta& c2, int atributo);
void mostrarResultadoComparacao(const Carta& c1, const Carta& c2, int atributo, const string& nome1, const string& nome2);
void modo2JogadoresCompleto();


// -----------------------------------------------------------------
// PARTE 5: FUNCAO PRINCIPAL (MAIN)
// (Onde tudo comeca)
// -----------------------------------------------------------------

int jogo() {
    // Semeia o gerador aleatorio para que os numeros
    // sejam diferentes a cada vez que o jogo abrir
    srand((unsigned)time(NULL));

    limparTela();
    efeitoCarregando("Carregando Sistema", 4, 160);
    
    // Chama o menu, que controla o resto do programa
    menuPrincipal();

    return 0; // Fim do programa
}


// -----------------------------------------------------------------
// PARTE 6: IMPLEMENTACAO DAS FUNCOES
// (O "recheio" de cada funcao do indice)
// -----------------------------------------------------------------

// --- Funcoes de Utilidade (Basicas) ---

void setColor(int c) {
    SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), c);
}
void resetColor() {
    SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), COLOR_DEFAULT);
}
void limparTela() {
    system("cls"); // Comando do Windows para limpar console
}
void espera(int ms) {
    Sleep(ms); // Pausa o programa por N milissegundos
}

// Funcao segura para pausar, limpando o buffer de entrada
void pausa() {
    cout << "\nPressione ENTER para continuar...";
    cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n');
    cin.get();
}

void efeitoCarregando(const string &texto, int ciclos, int vel) {
    for (int c = 0; c < ciclos; ++c) {
        for (int dots = 0; dots <= 3; ++dots) {
            cout << texto;
            for (int i = 0; i < dots; ++i) cout << '.';
            cout.flush(); // Forca a tela a atualizar
            espera(vel);
            // \r volta ao inicio da linha e reescreve por cima
            cout << '\r' << string(texto.size() + 4, ' ') << '\r';
        }
    }
    cout << texto << "..." << '\n';
}

// --- Funcoes de Menu e Regras ---


void imprimirLogoGrande() {
    cout <<
" ________  ___  _________  ________  ________  ________  ________  ________  ________      \n"
"|\\   __  \\|\\  \\|\\___   ___\\\\   __  \\|\\   ____\\|\\   __  \\|\\   __  \\|\\   __  \\|\\   ____\\     \n"
"\\ \\  \\|\\  \\ \\  \\|___ \\  \\_\\\\ \\  \\|\\  \\ \\  \\___|\\ \\  \\|\\  \\ \\  \\|\\  \\ \\  \\|\\  \\ \\  \\___|_    \n"
" \\ \\   ____\\ \\  \\   \\ \\  \\  \\ \\   __  \\ \\  \\  __\\ \\  \\\\\\  \\ \\   _  _\\ \\   __  \\ \\_____  \\   \n"
"  \\ \\  \\___|\\ \\  \\ __\\ \\  \\  \\ \\  \\ \\  \\ \\  \\|\\  \\ \\  \\\\\\  \\ \\  \\\\  \\\\ \\  \\ \\  \\|____|\\  \\  \n"
"   \\ \\__\\    \\ \\__\\\\__\\ \\__\\  \\ \\__\\ \\__\\ \\_______\\ \\_______\\ \\__\\\\ _\\\\ \\__\\ \\__\\____\\_\\  \\ \n"
"    \\|__|     \\|__\\|__|\\|__|   \\|__|\\|__|\\|_______|\\|_______|\\|__|\\|__|\\|__|\\|__|\\_________\\\n"
"                                                                               \\|_________| \n";

}

void mostrarOpcoes(const vector<string> &op, int selecionado) {
    cout << "\n";
    for (int i = 0; i < (int)op.size(); ++i) {
        if (i == selecionado) {
            setColor(COLOR_GREEN);
            cout << "  > " << op[i] << " <\n";
            resetColor();
        } else {
            cout << "    " << op[i] << "  \n";
        }
    }
    cout << "\n";
}

// ATUALIZADO: Com ASCII art e regra de 1 ST
void mostrarRegras() {
    limparTela();
    
 
    setColor(COLOR_CYAN);
    cout <<
" ________  _______   ________  ________  ________  ________      \n"
"|\\   __  \\|\\  ___ \\ |\\   ____\\|\\   __  \\|\\   __  \\|\\   ____\\     \n"
"\\ \\  \\|\\  \\ \\   __/|\\ \\  \\___|\\ \\  \\|\\  \\ \\  \\|\\  \\ \\  \\___|_    \n"
" \\ \\   _  _\\ \\  \\_|/_\\ \\  \\  __\\ \\   _  _\\ \\   __  \\ \\_____  \\   \n"
"  \\ \\  \\\\  \\\\ \\  \\_|\\ \\ \\  \\|\\  \\ \\  \\\\  \\\\ \\  \\ \\  \\|____|\\  \\  \n"
"   \\ \\__\\\\ _\\\\ \\_______\\ \\_______\\ \\__\\\\ _\\\\ \\__\\ \\__\\____\\_\\  \\ \n"
"    \\|__|\\|__|\\|_______|\\|_______|\\|__|\\|__|\\|__|\\|__|\\_________\\\n"
"                                                     \\|_________| \n\n";

    resetColor();

    cout <<
    "OBJETIVO:\n"
    "1) O primeiro jogador a roubar 3 cartas do oponente vence.\n"
    "   Alternativamente, o jogo termina quando um jogador atingir 9 cartas\n"
    "   ou o oponente ficar sem cartas.\n\n"
    "PREPARACAO:\n"
    "   - O baralho de 24 filosofos e embaralhado.\n"
    "   - Cada jogador recebe 6 cartas.\n"
    "   - (Regra da Casa) Cada jogador pode ter no maximo 1 Super Trunfo.\n" // ATUALIZADO
    "   - Se a distribuicao falhar, sera refeita ate a regra ser cumprida.\n\n"
    "RODADA:\n"
    "   - Os jogadores escolhem suas cartas SECRETAMENTE. A carta do oponente\n"
    "     so e revelada no momento da batalha.\n"
    "   - O atributo da rodada e SORTEADO aleatoriamente.\n"
    "   - O maior valor no atributo sorteado vence a rodada.\n"
    "   - Em caso de EMPATE, as cartas vao para um 'monte de acumulacao'.\n"
    "     O vencedor da proxima rodada leva o monte junto.\n\n"
    "SUPER TRUNFO (Regra da Casa):\n"
    "   - Super Trunfo vence automaticamente, a menos que o oponente\n"
    "     tambem jogue um Super Trunfo (nesse caso, vale a regra normal).\n"
    "   - COOLDOWN: Apos ser jogado, um Super Trunfo nao pode ser jogado\n"
    "     por 2 rodadas (fica disponivel na 3a rodada apos o uso).\n\n"
    "CARTAS ROUBADAS:\n"
    "   - Cartas ganhas diretamente do oponente sao marcadas em CINZA.\n\n";
    pausa();
}

void menuPrincipal() {
    vector<string> opcoes = { "JOGAR", "REGRAS", "SAIR" };
    int selecionado = 0; 

    while (true) {
        limparTela();
        imprimirLogoGrande();
        cout << "\nUse as setas (UP / DOWN) ou W/S e pressione ENTER para selecionar.\n";
        mostrarOpcoes(opcoes, selecionado);

        int tecla = _getch(); 

        if (tecla == 0 || tecla == 224) {
            int s = _getch();
            if (s == 72) { // Seta para Cima
                selecionado = (selecionado - 1 + opcoes.size()) % opcoes.size();
            } else if (s == 80) { // Seta para Baixo
                selecionado = (selecionado + 1) % opcoes.size();
            }
        } else if (tecla == 'w' || tecla == 'W') {
            selecionado = (selecionado - 1 + opcoes.size()) % opcoes.size();
        } else if (tecla == 's' || tecla == 'S') {
            selecionado = (selecionado + 1) % opcoes.size();
        } else if (tecla == 13) {
            // ENTER
            if (selecionado == 0) { // JOGAR
                limparTela();
                efeitoCarregando("Iniciando Jogo", 3, 180);
                modo2JogadoresCompleto(); 
            } else if (selecionado == 1) { // REGRAS
                mostrarRegras();
            } else if (selecionado == 2) { // SAIR
                limparTela();
                efeitoCarregando("Saindo", 3, 160);
                limparTela();
                cout << "Obrigado por jogar. Ate a proxima!\n";
                break; 
            }
        }
    }
}


// --- Funcoes de Geracao de Cartas (Baralho) ---

// Inicializa todas as cartas com cooldown 0 e roubada false
vector<Carta> gerarBaralho() {
    vector<Carta> deck; 

    // BRASILEIROS
    deck.push_back({"Bento Prado Jr.", BRASILEIROS, 8,7,8,8,7,7, false, 0, false});
    deck.push_back({"Mangabeira Unger", BRASILEIROS, 9,8,9,8,8,8, false, 0, false});
    deck.push_back({"Miguel Reale", BRASILEIROS, 9,9,8,9,9,8, false, 0, false});
    deck.push_back({"Paulo Freire", BRASILEIROS, 10,10,9,8,9,10, true, 0, false});
    deck.push_back({"Marilena Chaui", BRASILEIROS, 9,8,8,8,8,9, false, 0, false});
    deck.push_back({"Leandro Konder", BRASILEIROS, 8,8,8,7,7,8, false, 0, false});
    // ALEMAES
    deck.push_back({"Schopenhauer", ALEMAES, 9,8,8,9,8,8, false, 0, false});
    deck.push_back({"Karl Marx", ALEMAES, 10,10,9,8,9,10, false, 0, false});
    deck.push_back({"Heidegger", ALEMAES, 9,9,9,10,8,9, false, 0, false});
    deck.push_back({"Immanuel Kant", ALEMAES, 10,10,10,10,10,9, true, 0, false});
    deck.push_back({"Nietzsche", ALEMAES, 10,9,10,8,9,10, false, 0, false});
    deck.push_back({"Hegel", ALEMAES, 10,9,9,10,9,8, false, 0, false});
    // GREGOS
    deck.push_back({"Aristoteles", GREGOS, 10,10,9,10,10,10, true, 0, false});
    deck.push_back({"Epicuro", GREGOS, 8,8,8,7,8,8, false, 0, false});
    deck.push_back({"Heraclito", GREGOS, 9,8,9,8,9,8, false, 0, false}); // Nao e ST
    deck.push_back({"Platao", GREGOS, 10,10,10,9,10,9, false, 0, false});
    deck.push_back({"Socrates", GREGOS, 10,10,9,8,10,9, false, 0, false});
    deck.push_back({"Pitagoras", GREGOS, 9,8,8,7,9,7, false, 0, false});
    // ROMANOS
    deck.push_back({"Epicteto", ROMANOS, 8,8,7,6,8,8, false, 0, false});
    deck.push_back({"Lucrecio", ROMANOS, 8,7,8,7,7,6, false, 0, false});
    deck.push_back({"Plotino", ROMANOS, 9,8,9,9,8,7, false, 0, false});
    deck.push_back({"Seneca", ROMANOS, 9,9,8,8,9,8, true, 0, false});
    deck.push_back({"Cicero", ROMANOS, 8,9,8,7,9,7, false, 0, false});
    deck.push_back({"Marco Aurelio", ROMANOS, 8,8,7,6,8,8, false, 0, false});

    return deck;
}

// Cor cinza tem prioridade sobre cor da familia
int corFamilia(Familia f, bool roubada) {
    if (roubada) {
        return COLOR_GREY; // Cor cinza se for roubada
    }
    
    switch (f) {
        case GREGOS:       return COLOR_CYAN;
        case ALEMAES:      return COLOR_YELLOW;
        case BRASILEIROS:  return COLOR_GREEN;
        case ROMANOS:      return COLOR_RED;
    }
    return COLOR_DEFAULT;
}


// --- Funcoes de Exibicao das Cartas (ASCII Art) ---

// ATUALIZADO: Prioridade de cor corrigida
void mostrarCartaFrente(const Carta& c) {
    // Cor da borda e nome: cinza se roubada, senao cor da familia
    int cor = corFamilia(c.familia, c.roubada);
    
    setColor(cor); 
    cout << " .--------------------------.\n";
    cout << " | " << left << setw(24) << c.nome << " |\n";
    cout << " |==========================|\n";
    
    // Atributos sempre brancos
    resetColor(); 
    
    // Alinhamento com iomanip:
    // setw(17) reserva 17 espacos para o nome do atributo
    // left alinha o nome a esquerda
    // setw(2) reserva 2 espacos para o numero
    // right alinha o numero a direita
    // Isso garante que todos os numeros fiquem alinhados
    cout << " | " << left << setw(17) << "Inteligencia:"   << right << setw(2) << c.inteligencia    << "     |\n";
    cout << " | " << left << setw(17) << "Influencia Hist:" << right << setw(2) << c.influencia      << "     |\n";
    cout << " | " << left << setw(17) << "Originalidade:"  << right << setw(2) << c.originalidade   << "     |\n";
    cout << " | " << left << setw(17) << "Ideologia:"      << right << setw(2) << c.ideologia       << "     |\n";
    cout << " | " << left << setw(17) << "Tempo de Infl.:" << right << setw(2) << c.tempoInfluencia << "     |\n";
    cout << " | " << left << setw(17) << "Relevancia Atual:" << right << setw(2) << c.relevancia      << "     |\n";
    
    // Volta para a cor da borda
    setColor(cor); 
    cout << " '--------------------------'\n";
    resetColor();

    // CORRECAO: O status de Super Trunfo e SEMPRE amarelo
    // e tem prioridade sobre a cor da borda
    if (c.superTrunfo) {
        setColor(COLOR_YELLOW);
        cout << "      *** SUPER TRUNFO ***\n";
        
        if (c.cooldown > 1) {
            cout << "   (Em Cooldown: " << c.cooldown - 1 << " rodadas restantes)\n";
        } else if (c.cooldown == 1) {
            cout << "   (Disponivel na proxima rodada)\n";
        }
        resetColor();
    }
}

void mostrarCartaVirada(bool super, bool roubada, bool onCooldown) {
    // Define a cor de fundo do verso da carta
    if (onCooldown) setColor(COLOR_RED);
    else if (roubada) setColor(COLOR_GREY);
    else if (super) setColor(COLOR_YELLOW);

    cout << "+============+";

    resetColor();
}

void mostrarCartasJogador(const vector<Carta>& mao, int destaque) {
    for (int linha = 0; linha < 7; linha++) {
        for (int i = 0; i < (int)mao.size(); i++) {
            
            bool super = mao[i].superTrunfo;
            bool selected = (i == destaque); 
            bool onCooldown = (mao[i].superTrunfo && mao[i].cooldown > 0);
            bool roubada = mao[i].roubada;

            // Prioridade de cor:
            // 1. Selecionada (Verde)
            // 2. Em Cooldown (Vermelho)
            // 3. Roubada (Cinza)
            // 4. Super Trunfo (Amarelo)
            // 5. Normal (Branco)
            if (selected) setColor(COLOR_GREEN); 
            else if (onCooldown) setColor(COLOR_RED);
            else if (roubada) setColor(COLOR_GREY);
            else if (super) setColor(COLOR_YELLOW); 

            // Mostra um 'X' na carta em cooldown
            switch (linha) {
                case 0: cout << "+============+"; break;
                case 1: cout << "| ?        ? |"; break;
                case 2: if(onCooldown) cout << "|      X     |"; else cout << "|            |"; break;
                case 3: if(onCooldown) cout << "|     XXX    |"; else cout << "|     ??     |"; break;
                case 4: if(onCooldown) cout << "|      X     |"; else cout << "|            |"; break;
                case 5: cout << "| ?        ? |"; break;
                case 6: cout << "+============+"; break;
            }

            resetColor();
            cout << "  "; 
        }
        cout << "\n"; 
    }
}


// --- Funcoes de Logica do Jogo (Gameplay) ---

// Arte em asc2
void mostrarTelaVitoria(const string& nomeVencedor) {
    limparTela();
    setColor(COLOR_GREEN);

    cout <<
" ________  ________  ________  ________  ________  _______   ________   ________           ___       \n"
"|\\   __  \\|\\   __  \\|\\   __  \\|\\   __  \\|\\   __  \\|\\  ___ \\ |\\   ___  \\|\\   ____\\         |\\  \\      \n"
"\\ \\  \\|\\  \\ \\  \\|\\  \\ \\  \\|\\  \\ \\  \\|\\  \\ \\  \\|\\ /\\ \\   __/|\\ \\  \\ \\  \\ \\  \\___|_        \\ \\  \\     \n"
" \\ \\   ____\\ \\   __  \\ \\   _  _\\ \\   __  \\ \\   __  \\ \\  \\_|/_\\ \\  \\ \\  \\ \\_____  \\        \\ \\  \\    \n"
"  \\ \\  \\___|\\ \\  \\ \\  \\ \\  \\\\  \\\\ \\  \\ \\  \\ \\  \\|\\  \\ \\  \\_|\\ \\ \\  \\ \\  \\|____|\\  \\        \\ \\__\\   \n"
"   \\ \\__\\    \\ \\__\\ \\__\\ \\__\\\\ _\\\\ \\__\\ \\__\\  \\______\\ \\______ \\ \\__\\ \\__\\____\\_\\  \\        \\|__|   \n"
"    \\|__|     \\|__|\\|__|\\|__|\\|__|\\|__|\\|__|\\|_______|\\|_______|\\|__| \\|__|\\_________\\           ___ \n"
"                                                                          \\|_________|          |\\__\\\n"
"                                                                                                \\|__|\n\n";


    cout << "\n\n        Jogador Vencedor: " << nomeVencedor << "!\n\n";
    resetColor();
}


int sorteioAnimado(const string& nomeJogador) {
    limparTela();
    cout << "Sorteando numero para " << nomeJogador << "...\n\n";

    int numeroFinal = 1 + rand() % 9; 

    for (int i = 0; i < 20; i++) {
        int n = 1 + rand() % 9;
        setColor(COLOR_CYAN);
        cout << "\rNumero: " << n << "   "; 
        resetColor();
        espera(60 + (i * 5)); 
    }

    cout << "\rNumero: ";
    setColor(COLOR_GREEN);
    cout << numeroFinal << "   \n\n";
    resetColor();

    espera(700);
    return numeroFinal;
}

// ATUALIZADO: Checa por 1 Super Trunfo
bool superTrunfosOk(const vector<Carta>& mao) {
    int qnt = 0;
    for (auto &c : mao) {
        if (c.superTrunfo) qnt++;
    }
    return ( qnt <= 1 ); // Regra de 1 ST
}

// ATUALIZADO: Tenta 1000 vezes garantir a regra de 1 ST (O melhor que consegui fazer)
void distribuirCartas(const vector<Carta>& baralhoBase,
                      vector<Carta>& mao1,
                      vector<Carta>& mao2)
{
    int tentativas = 0;
    while (true) {
        vector<Carta> baralho = baralhoBase; 
        random_shuffle(baralho.begin(), baralho.end());

        mao1.clear(); 
        mao2.clear();

        for (int i = 0; i < 12; i++) {
            if (i % 2 == 0) 
                mao1.push_back(baralho[i]); 
            else 
                mao2.push_back(baralho[i]); 
        }

        // Tenta garantir a regra de 1 ST
        if (superTrunfosOk(mao1) && superTrunfosOk(mao2)) {
            return; // Distribuicao valida!
        }

        tentativas++;
        // Aumenta o limite de tentativas para 1000
        if (tentativas > 1000) {
            cout << "Aviso: Nao foi possivel garantir a regra de 1 ST. O jogo comecara.\n";
            espera(1500);
            return;
        }
    }
}

void processoSorteioInicial(vector<Carta>& mao1,
                             vector<Carta>& mao2,
                             int& jogadorInicial,
                             const string& nome1,
                             const string& nome2)
{
    vector<Carta> baralho = gerarBaralho();
    int n1 = 0, n2 = 0;

    while (true) {
        n1 = sorteioAnimado(nome1);
        n2 = sorteioAnimado(nome2);

        limparTela();
        cout << "Resultado final do sorteio:\n\n";

        cout << nome1 << ": ";
        if (n1 > n2) setColor(COLOR_GREEN);
        else if (n1 < n2) setColor(COLOR_RED);
        else setColor(COLOR_YELLOW);
        cout << n1 << "\n";
        resetColor();

        cout << nome2 << ": ";
        if (n2 > n1) setColor(COLOR_GREEN);
        else if (n2 < n1) setColor(COLOR_RED);
        else setColor(COLOR_YELLOW);
        cout << n2 << "\n";
        resetColor();

        if (n1 != n2) break; 

        cout << "\nEmpate! Sorteando novamente...\n";
        espera(1000);
    }

    jogadorInicial = (n1 > n2 ? 1 : 2); 

    cout << "\nJogador que inicia a partida: ";
    setColor(COLOR_CYAN);
    cout << (jogadorInicial == 1 ? nome1 : nome2) << "\n\n";
    resetColor();
    espera(1200);

    limparTela();
    efeitoCarregando("Sorteando as cartas", 3, 140);
    distribuirCartas(baralho, mao1, mao2);

    limparTela();
    cout << "Cartas sorteadas com sucesso!\n";
    cout << "Cada jogador recebeu 6 cartas.\n\n";
    espera(1200);
}

int escolherCartaParaJogar(const vector<Carta>& mao, const string& nomeJogador) {
    int escolha = 0; 

    while (true) {
        limparTela();
        setColor(COLOR_CYAN);
        cout << "--- VEZ DE " << nomeJogador << " ---\n";
        resetColor();
        cout << "Navegue com (<- ->) ou (A / D) e pressione ENTER para confirmar.\n\n";

        cout << "SUA MAO (" << mao.size() << " cartas):\n";
        mostrarCartasJogador(mao, escolha);

        cout << "\n\n";
        cout << "CARTA SELECIONADA PARA ANALISAR:\n";
        
        mostrarCartaFrente(mao[escolha]);

        int tecla = _getch();

        if (tecla == 0 || tecla == 224) {
            int t = _getch();
            if (t == 75) {  // Seta Esquerda
                escolha = (escolha - 1 + mao.size()) % mao.size();
            }
            else if (t == 77) { // Seta Direita
                escolha = (escolha + 1) % mao.size();
            }
        }
        else if (tecla == 'a' || tecla == 'A') {
            escolha = (escolha - 1 + mao.size()) % mao.size();
        }
        else if (tecla == 'd' || tecla == 'D') {
            escolha = (escolha + 1) % mao.size();
        }
        else if (tecla == 13) {
            // ENTER -> confirmar
            
            if (mao[escolha].superTrunfo && mao[escolha].cooldown > 0) {
                setColor(COLOR_RED);
                cout << "\nEsta carta Super Trunfo esta em cooldown! Escolha outra.\n";
                resetColor();
                espera(1500);
                continue; 
            }
            
            limparTela();
            cout << nomeJogador << " selecionou sua carta (secreta).\n\n";
            espera(1000); // Pausa para o jogador ler
            return escolha; 
        }
    }
}

int sortearAtributoAnimado() {
    limparTela();
    cout << "Sorteando atributo da rodada...\n\n";

    int finalAttr = rand() % 6; 

    for (int i = 0; i < 20; i++) {
        int r = rand() % 6;
        setColor(COLOR_CYAN);
        cout << "\rAtributo: " << NOMES_ATRIBUTOS[r] << "          ";
        resetColor();
        espera(60 + i * 5);
    }

    cout << "\rAtributo: ";
    setColor(COLOR_CYAN);
    cout << NOMES_ATRIBUTOS[finalAttr] << "          \n";
    resetColor();

    espera(1000);

    return finalAttr;
}

int getAtributo(const Carta& c, int atributo) {
    switch (atributo) {
        case 0: return c.inteligencia;
        case 1: return c.influencia;
        case 2: return c.originalidade;
        case 3: return c.ideologia;
        case 4: return c.tempoInfluencia;
        case 5: return c.relevancia;
    }
    return 0; 
}

int compararCartas(const Carta& c1, const Carta& c2, int atributo) {
    if (c1.superTrunfo && !c2.superTrunfo) return 1; 
    if (c2.superTrunfo && !c1.superTrunfo) return 2; 

    int v1 = getAtributo(c1, atributo);
    int v2 = getAtributo(c2, atributo);

    if (v1 > v2) return 1;
    if (v2 > v1) return 2;
    return 0; // Empate
}

void mostrarResultadoComparacao(const Carta& c1, const Carta& c2, int atributo, const string& nome1, const string& nome2) {
    
    int v1 = getAtributo(c1, atributo);
    int v2 = getAtributo(c2, atributo);
    int resultado = compararCartas(c1, c2, atributo);

    limparTela();
    cout << "--- BATALHA DA RODADA ---\n\n";
    cout << "Atributo Sorteado: ";
    setColor(COLOR_CYAN);
    cout << NOMES_ATRIBUTOS[atributo] << "\n\n";
    resetColor();

    // Carta Jogador 1
    cout << nome1 << " (" << c1.nome;
    // Define a cor do status [Roubada]
    if (c1.roubada) { setColor(COLOR_GREY); cout << " [Roubada]"; resetColor(); }
    cout << ")\n";
    
    // Define a cor do atributo (verde, vermelho, amarelo)
    if (resultado == 1) setColor(COLOR_GREEN); 
    else if (resultado == 2) setColor(COLOR_RED); 
    else setColor(COLOR_YELLOW); 
    cout << NOMES_ATRIBUTOS[atributo] << ": " << v1 << "\n";
    // Status de ST sempre Amarelo
    if(c1.superTrunfo) { setColor(COLOR_YELLOW); cout << "*** SUPER TRUNFO ***\n"; }
    resetColor();
    cout << "\n";

    // Carta Jogador 2
    cout << nome2 << " (" << c2.nome;
    if (c2.roubada) { setColor(COLOR_GREY); cout << " [Roubada]"; resetColor(); }
    cout << ")\n";
    
    if (resultado == 2) setColor(COLOR_GREEN);
    else if (resultado == 1) setColor(COLOR_RED);
    else setColor(COLOR_YELLOW);
    cout << NOMES_ATRIBUTOS[atributo] << ": " << v2 << "\n";
    if(c2.superTrunfo) { setColor(COLOR_YELLOW); cout << "*** SUPER TRUNFO ***\n"; }
    resetColor();
    cout << "\n\n";

    // Texto do resultado
    if (resultado == 1) {
        setColor(COLOR_GREEN);
        cout << nome1 << " venceu a rodada!\n";
    }
    else if (resultado == 2) {
        setColor(COLOR_GREEN);
        cout << nome2 << " venceu a rodada!\n";
    }
    else {
        setColor(COLOR_YELLOW);
        cout << "Empate! As cartas vao para o monte de acumulacao.\n";
    }

    resetColor();
    espera(3500); 
}

void modo2JogadoresCompleto()
{
    string nome1, nome2;
    vector<Carta> mao1, mao2;
    vector<Carta> monteAcum; 
    int jogadorInicial = 1;
    int roubadas1 = 0;
    int roubadas2 = 0;
    int vez = 0;
    int rodada = 1;

    // --- Preparacao ---
    limparTela();
    
    cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n');

    cout << "Nome do Jogador 1: ";
    getline(cin, nome1); 
    if (nome1.empty()) nome1 = "Jogador 1";

    cout << "Nome do Jogador 2: ";
    getline(cin, nome2);
    if (nome2.empty()) nome2 = "Jogador 2";

    processoSorteioInicial(mao1, mao2, jogadorInicial, nome1, nome2);
    vez = jogadorInicial;

    // --- Loop Principal do Jogo ---
    while (true)
    {
        limparTela();
        cout << "==================== RODADA " << rodada << " ====================\n";
        
        // Reduz o cooldown de todas as cartas no inicio da rodada
        for (int i = 0; i < (int)mao1.size(); ++i) {
            if (mao1[i].cooldown > 0) mao1[i].cooldown--;
        }
        for (int i = 0; i < (int)mao2.size(); ++i) {
            if (mao2[i].cooldown > 0) mao2[i].cooldown--;
        }

        cout << "Vez de: ";
        setColor(COLOR_CYAN);
        cout << (vez == 1 ? nome1 : nome2) << " (Atacante)\n\n";
        resetColor();
        cout << nome1 << " [Cartas: " << mao1.size() << " | Roubadas: " << roubadas1 << "]\n";
        cout << nome2 << " [Cartas: " << mao2.size() << " | Roubadas: " << roubadas2 << "]\n";
        
        if (!monteAcum.empty()) {
            setColor(COLOR_YELLOW);
            cout << "Monte de Acumulacao: " << monteAcum.size() << " cartas\n";
            resetColor();
        }
        cout << "\n";
        pausa();

        // --- Selecao de Cartas (SECRETA) ---
        int idx1 = -1, idx2 = -1;
        
        if (vez == 1)
        {
            idx1 = escolherCartaParaJogar(mao1, nome1 + " (Atacante)"); 
            limparTela();
            cout << nome1 << " escolheu sua carta.\n\n";
            cout << "Pressione QUALQUER TECLA para " << nome2 << " (Defensor) escolher.\n";
            _getch();
            idx2 = escolherCartaParaJogar(mao2, nome2 + " (Defensor)"); 
        }
        else
        {
            idx2 = escolherCartaParaJogar(mao2, nome2 + " (Atacante)"); 
            limparTela();
            cout << nome2 << " escolheu sua carta.\n\n";
            cout << "Pressione QUALQUER TECLA para " << nome1 << " (Defensor) escolher.\n";
            _getch();
            idx1 = escolherCartaParaJogar(mao1, nome1 + " (Defensor)"); 
        }
        
        limparTela();
        cout << "Ambos os jogadores escolheram.\n";
        cout << "Pressione QUALQUER TECLA para a batalha!\n";
        _getch();

        // --- Comparacao ---
        Carta carta1 = mao1[idx1];
        Carta carta2 = mao2[idx2];

        // Define o cooldown (3 rodadas = esta + 2 de espera)
        if (carta1.superTrunfo) carta1.cooldown = 3;
        if (carta2.superTrunfo) carta2.cooldown = 3;

        int atributo = sortearAtributoAnimado();
        mostrarResultadoComparacao(carta1, carta2, atributo, nome1, nome2);
        
        int resultado = compararCartas(carta1, carta2, atributo);

        // Remove as cartas das maos
        mao1.erase(mao1.begin() + idx1);
        mao2.erase(mao2.begin() + idx2);

        // --- Transferencia de Cartas ---
        if (resultado == 1) // Jogador 1 Vence
        {
            setColor(COLOR_GREEN);
            cout << nome1 << " venceu e leva as cartas!\n";
            resetColor();

            // Marca a carta do oponente como roubada
            carta1.roubada = false;
            carta2.roubada = true; 
            
            mao1.push_back(carta1); 
            mao1.push_back(carta2); 
            roubadas1++;

            if (!monteAcum.empty()) {
                cout << nome1 << " tambem leva " << monteAcum.size() << " cartas acumuladas!\n";
                // Marca todas as cartas do monte como roubadas (se vieram do oponente)
                for (auto &c : monteAcum) {
                    if (c.familia != mao1[0].familia) c.roubada = true; // Simplificacao
                    mao1.push_back(c);
                }
                monteAcum.clear(); 
            }
            vez = 1; 
        }
        else if (resultado == 2) // Jogador 2 Vence
        {
            setColor(COLOR_GREEN);
            cout << nome2 << " venceu e leva as cartas!\n";
            resetColor();

            carta1.roubada = true;
            carta2.roubada = false;

            mao2.push_back(carta2);
            mao2.push_back(carta1);
            roubadas2++;

            if (!monteAcum.empty()) {
                cout << nome2 << " tambem leva " << monteAcum.size() << " cartas acumuladas!\n";
                for (auto &c : monteAcum) {
                     if (c.familia != mao2[0].familia) c.roubada = true; // Simplificacao
                    mao2.push_back(c);
                }
                monteAcum.clear();
            }
            vez = 2; 
        }
        else // Empate
        {
            setColor(COLOR_YELLOW);
            cout << "Empate! Cartas vao para o Monte de Acumulo.\n";
            resetColor();
            // Cartas mantem seu status de 'roubada'
            monteAcum.push_back(carta1);
            monteAcum.push_back(carta2);
        }

        espera(2000);

        // --- Verificacao de Fim de Jogo ---
        bool fimDeJogo = false;
        string vencedor = "";

        if (roubadas1 >= 3) {
            vencedor = nome1;
            fimDeJogo = true;
        } else if (roubadas2 >= 3) {
            vencedor = nome2;
            fimDeJogo = true;
        } else if ((int)mao1.size() >= 9) {
            vencedor = nome1;
            fimDeJogo = true;
        } else if ((int)mao2.size() >= 9) {
            vencedor = nome2;
            fimDeJogo = true;
        } else if (mao1.empty()) {
            vencedor = nome2;
            fimDeJogo = true;
        } else if (mao2.empty()) {
            vencedor = nome1;
            fimDeJogo = true;
        }

        if (fimDeJogo) {
            mostrarTelaVitoria(vencedor);
            
            cout << "Pressione ENTER para voltar ao Menu, ou ESC para Sair.\n";
            
            
            // Limpa qualquer 'Enter' ou caractere "fantasma"
            // que possa ter sobrado no buffer de entrada (stdin)
            // antes de esperar a proxima tecla.
            // _kbhit() (keyboard hit) esta em conio.h
            while (_kbhit()) { 
                _getch(); // "Come" o caractere e o descarta
            }
            

            int tecla = _getch(); 
            
            if (tecla == 27) { // 27 = ESC
                limparTela();
                efeitoCarregando("Saindo", 3, 160);
                exit(0); 
            } else {
                break; // Volta ao menu principal
            }
        }

        rodada++; 
    }
}
	
