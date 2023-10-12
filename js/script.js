                                        /*Programando ás interações com o utilizador*/
/* Objeto de Validação */
var dados = 
{
    NomeCompl: 'Alberto Chico Francisco', 
    filiacao: 'Delmo Santos Francisco e Sandra Elizabeth Chico',
    Bilhete_Identidade: '004056103GA041',
    residencia: '4 de Abril', 
    bairro: 'Casa Verde',
    naturalidade: 'Lubango',
    provincia: 'Huila',
    Data_Nascimento: '22/03/1997',
    sexo: 'Masculino',
    altura: 1.70,
    Data_Emissao: '10/02/2023',
    Data_Caducidade: '10/03/2024'
}

/* Função de Verificação */
function verificar() {

    var nome = window.document.getElementById('nomecompleto')
    var nome_completo = nome.value

    var filiacao = window.document.getElementById('filiacao')
    var filiacao_completo = filiacao.value

    var Bilhete_Identidade = window.document.getElementById('bilhete_identidade')
    var Bilhete_Identidade_completo = Bilhete_Identidade.value

    var residencia = window.document.getElementById('residencia')
    var residencia_completo = residencia.value

    var bairro = window.document.getElementById('bairro')
    var bairro_completo = bairro.value

    var naturalidade = window.document.getElementById('naturalidade')
    var naturalidade_completo = naturalidade.value

    var provincia = window.document.getElementById('provincia')
    var provincia_completo = provincia.value

    var Data_Nascimento = window.document.getElementById('data_nascimento')
    var Data_Nascimento_completo = Data_Nascimento.value

    var sexo = window.document.getElementById('sexo')
    var sexo_completo = sexo.value

    var altura = window.document.getElementById('altura')
    var altura_completo = altura.value

    var Data_Emissao = window.document.getElementById('data_emissao')
    var Data_Emissao_completo = Data_Emissao.value

    var Data_Caducidade = window.document.getElementById('data_caducidade')
    var data_caducidade_completo = Data_Caducidade.value


    /* Validando os Dados */
    if (
            dados.NomeCompl == nome_completo || 
            dados.filiacao == filiacao_completo || 
            dados.Bilhete_Identidade == Bilhete_Identidade_completo || 
            dados.residencia == residencia_completo || 
            dados.bairro == bairro_completo || 
            dados.naturalidade == naturalidade_completo || 
            dados.provincia == provincia_completo || 
            dados.Data_Nascimento == Data_Nascimento_completo || 
            dados.sexo == sexo_completo || 
            dados.altura == altura_completo || 
            dados.Data_Emissao == Data_Emissao_completo || 
            dados.Data_Caducidade == data_caducidade_completo)
        {

            window.alert('Dados verificados com sucesso!')

    } else if (
            dados.NomeCompl != nome_completo && 
            dados.filiacao != filiacao_completo && 
            dados.Bilhete_Identidade != Bilhete_Identidade_completo && 
            dados.residencia != residencia_completo && 
            dados.bairro != bairro_completo && 
            dados.naturalidade != naturalidade_completo && 
            dados.provincia != provincia_completo && 
            dados.Data_Nascimento != Data_Nascimento_completo && 
            dados.sexo != sexo_completo && 
            dados.altura != altura_completo && 
            dados.Data_Emissao != Data_Emissao_completo && 
            dados.Data_Caducidade != data_caducidade_completo)
        {
            window.alert('[Erro!] Verifique os dados e tente novamente.')
    }   

                                                /* EM DESENVOLVIMENTO */
}