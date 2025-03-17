# Função para classificar o nível do herói com base na experiência (XP)
def classificar_heroi(nome, xp):
    """
    Classifica o nível do herói com base na quantidade de experiência (XP).
    :param nome: Nome do herói (string)
    :param xp: Quantidade de experiência (int)
    :return: Nível do herói (string)
    """
    # Estrutura condicional para determinar o nível com base no XP
    if xp < 1000:
        nivel = "Ferro"  # Nível Ferro para XP menor que 1000
    elif 1001 <= xp <= 2000:
        nivel = "Bronze"  # Nível Bronze para XP entre 1001 e 2000
    elif 2001 <= xp <= 5000:
        nivel = "Prata"  # Nível Prata para XP entre 2001 e 5000
    elif 5001 <= xp <= 7000:
        nivel = "Ouro"  # Nível Ouro para XP entre 5001 e 7000
    elif 7001 <= xp <= 8000:
        nivel = "Platina"  # Nível Platina para XP entre 7001 e 8000
    elif 8001 <= xp <= 9000:
        nivel = "Ascendente"  # Nível Ascendente para XP entre 8001 e 9000
    elif 9001 <= xp <= 10000:
        nivel = "Imortal"  # Nível Imortal para XP entre 9001 e 10000
    else:
        nivel = "Radiante"  # Nível Radiante para XP maior que 10001
    return nivel  # Retorna o nível do herói

# Função para exibir a tabela de níveis
def exibir_tabela_niveis():
    """
    Exibe uma tabela com os níveis de herói e os intervalos de XP correspondentes.
    """
    print("\nTabela de Níveis de Herói:")
    print("+------------+------------+-------------+")
    print("| XP Mínimo  | XP Máximo  | Nível       |")
    print("+------------+------------+-------------+")
    # Lista de tuplas com os intervalos de XP e níveis correspondentes
    niveis = [
        (0, 1000, "Ferro"),
        (1001, 2000, "Bronze"),
        (2001, 5000, "Prata"),
        (5001, 7000, "Ouro"),
        (7001, 8000, "Platina"),
        (8001, 9000, "Ascendente"),
        (9001, 10000, "Imortal"),
        (10001, float('inf'), "Radiante")
    ]
    # Loop para exibir cada linha da tabela
    for min_xp, max_xp, nivel in niveis:
        print(f"| {min_xp:<10} | {max_xp:<10} | {nivel:<11} |")
    print("+------------+------------+-------------+")

# Entrada de dados
nome_heroi = input("Digite o nome do herói: ")  # Solicita o nome do herói
xp_heroi = int(input("Digite a quantidade de experiência (XP) do herói: "))  # Solicita o XP do herói

# Classificação e saída
nivel_heroi = classificar_heroi(nome_heroi, xp_heroi)  # Chama a função para classificar o nível
print(f"\nO Herói de nome {nome_heroi} está no nível de {nivel_heroi}")  # Exibe o resultado

# Exibir tabela de níveis
exibir_tabela_niveis()  # Chama a função para exibir a tabela

# Créditos
print("\nDesenvolvido por Marcelo Mekaro 2025")  # Mensagem de créditos