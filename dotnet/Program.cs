using System;  // Importa o namespace System para usar funções básicas

class Program
{
    static void Main()
    {
        // Entrada de dados
        Console.Write("Digite o nome do herói: ");  // Solicita o nome do herói
        string nomeHeroi = Console.ReadLine();  // Lê o nome do herói

        Console.Write("Digite a quantidade de experiência (XP) do herói: ");  // Solicita o XP do herói
        int xpHeroi = int.Parse(Console.ReadLine());  // Lê o XP do herói

        // Classificação do nível
        string nivel = ClassificarHeroi(xpHeroi);  // Chama a função para classificar o nível

        // Saída
        Console.WriteLine($"\nO Herói de nome {nomeHeroi} está no nível de {nivel}");  // Exibe o resultado

        // Exibir tabela de níveis
        ExibirTabelaNiveis();  // Chama a função para exibir a tabela

        // Créditos
        Console.WriteLine("\nDesenvolvido por Marcelo Mekaro 2025");  // Mensagem de créditos
    }

    // Função para classificar o nível do herói
    static string ClassificarHeroi(int xp)
    {
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
    static void ExibirTabelaNiveis()
    {
        Console.WriteLine("\nTabela de Níveis de Herói:");
        Console.WriteLine("+------------+------------+-------------+");
        Console.WriteLine("| XP Mínimo  | XP Máximo  | Nível       |");
        Console.WriteLine("+------------+------------+-------------+");
        Console.WriteLine("| 0          | 1000       | Ferro       |");
        Console.WriteLine("| 1001       | 2000       | Bronze      |");
        Console.WriteLine("| 2001       | 5000       | Prata       |");
        Console.WriteLine("| 5001       | 7000       | Ouro        |");
        Console.WriteLine("| 7001       | 8000       | Platina     |");
        Console.WriteLine("| 8001       | 9000       | Ascendente  |");
        Console.WriteLine("| 9001       | 10000      | Imortal     |");
        Console.WriteLine("| 10001      | ∞          | Radiante    |");
        Console.WriteLine("+------------+------------+-------------+");
    }
}