import java.util.Scanner;  // Importa a classe Scanner para leitura de entrada

public class ClassificadorHeroi {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);  // Cria um objeto Scanner para ler entradas

        // Entrada de dados
        System.out.print("Digite o nome do herói: ");  // Solicita o nome do herói
        String nomeHeroi = scanner.nextLine();  // Lê o nome do herói

        System.out.print("Digite a quantidade de experiência (XP) do herói: ");  // Solicita o XP do herói
        int xpHeroi = scanner.nextInt();  // Lê o XP do herói

        // Classificação do nível
        String nivel = classificarHeroi(xpHeroi);  // Chama a função para classificar o nível

        // Saída
        System.out.println("\nO Herói de nome " + nomeHeroi + " está no nível de " + nivel);  // Exibe o resultado

        // Exibir tabela de níveis
        exibirTabelaNiveis();  // Chama a função para exibir a tabela

        // Créditos
        System.out.println("\nDesenvolvido por Marcelo Mekaro 2025");  // Mensagem de créditos
    }

    // Função para classificar o nível do herói
    public static String classificarHeroi(int xp) {
        if (xp < 1000) return "Ferro";  // Nível Ferro para XP menor que 1000
        else if (xp <= 2000) return "Bronze";  // Nível Bronze para XP entre 1001 e 2000
        else if (xp <= 5000) return "Prata";  // Nível Prata para XP entre 2001 e 5000
        else if (xp <= 7000) return "Ouro";  // Nível Ouro para XP entre 5001 e 7000
        else if (xp <= 8000) return "Platina";  // Nível Platina para XP entre 7001 e 8000
        else if (xp <= 9000) return "Ascendente";  // Nível Ascendente para XP entre 8001 e 9000
        else if (xp <= 10000) return "Imortal";  // Nível Imortal para XP entre 9001 e 10000
        else return "Radiante";  // Nível Radiante para XP maior que 10001
    }

    // Função para exibir a tabela de níveis
    public static void exibirTabelaNiveis() {
        System.out.println("\nTabela de Níveis de Herói:");
        System.out.println("+------------+------------+-------------+");
        System.out.println("| XP Mínimo  | XP Máximo  | Nível       |");
        System.out.println("+------------+------------+-------------+");
        System.out.println("| 0          | 1000       | Ferro       |");
        System.out.println("| 1001       | 2000       | Bronze      |");
        System.out.println("| 2001       | 5000       | Prata       |");
        System.out.println("| 5001       | 7000       | Ouro        |");
        System.out.println("| 7001       | 8000       | Platina     |");
        System.out.println("| 8001       | 9000       | Ascendente  |");
        System.out.println("| 9001       | 10000      | Imortal     |");
        System.out.println("| 10001      | ∞          | Radiante    |");
        System.out.println("+------------+------------+-------------+");
    }
}