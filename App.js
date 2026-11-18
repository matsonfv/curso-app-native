import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CatalogoCurso from './sreens/catalogoCurso';
import DetalhesCurso from './sreens/detalhesCurso';

export default function App() {
  const [telaAtual, setTelaAtual] = useState('catalogo');
  const [cursoSelecionado, setCursoSelecionado] = useState(null);
  const [idsMatriculados, setIdsMatriculados] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [menuVisivel, setMenuVisivel] = useState(false);
  const [notificacoes, setNotificacoes] = useState(true);
  const [textoGrande, setTextoGrande] = useState(false);
  const [altoContraste, setAltoContraste] = useState(false);
  const [compacto, setCompacto] = useState(false);

  useEffect(() => {
    const temporizador = setTimeout(() => setCarregando(false), 700);
    return () => clearTimeout(temporizador);
  }, []);

  const abrirCurso = (curso) => {
    setCursoSelecionado(curso);
    setTelaAtual('detalhes');
  };

  const voltarAoCatalogo = () => {
    setTelaAtual('catalogo');
  };

  const alternarMatricula = (id) => {
    setIdsMatriculados((idsAtuais) => {
      if (idsAtuais.includes(id)) {
        return idsAtuais.filter((cursoId) => cursoId !== id);
      }
      return [...idsAtuais, id];
    });
  };

  const alternarOpcao = (valorAtual, definirValor) => {
    definirValor(!valorAtual);
  };

  return (
    <View style={styles.app}>
      {telaAtual === 'catalogo' ? (
        <CatalogoCurso
          idsMatriculados={idsMatriculados}
          aoAbrirCurso={abrirCurso}
          aoAbrirMenu={() => setMenuVisivel(true)}
          carregando={carregando}
          textoGrande={textoGrande}
          altoContraste={altoContraste}
          compacto={compacto}
        />
      ) : (
        <DetalhesCurso
          curso={cursoSelecionado}
          matriculado={idsMatriculados.includes(cursoSelecionado.id)}
          aoAlternarMatricula={alternarMatricula}
          aoVoltar={voltarAoCatalogo}
          textoGrande={textoGrande}
          altoContraste={altoContraste}
        />
      )}

      {menuVisivel ? (
        <View style={styles.sobreposicao}>
          <TouchableOpacity
            style={styles.fundoMenu}
            activeOpacity={1}
            onPress={() => setMenuVisivel(false)}
            accessibilityRole="button"
            accessibilityLabel="Fechar menu lateral"
          />
          <SafeAreaView style={styles.menuLateral}>
            <View style={styles.cabecalhoMenu}>
              <View>
                <Text style={styles.tituloMenu}>Configurações</Text>
                <Text style={styles.subtituloMenu}>Ajustes da aplicação</Text>
              </View>
              <TouchableOpacity
                style={styles.botaoFechar}
                activeOpacity={0.7}
                onPress={() => setMenuVisivel(false)}
                accessibilityRole="button"
                accessibilityLabel="Fechar menu"
              >
                <Text style={styles.textoFechar}>×</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.opcao}
              activeOpacity={0.7}
              onPress={() => alternarOpcao(notificacoes, setNotificacoes)}
              accessibilityRole="checkbox"
              accessibilityState={{ checked: notificacoes }}
            >
              <View style={styles.opcaoTexto}>
                <Text style={styles.opcaoTitulo}>Notificações</Text>
                <Text style={styles.opcaoDescricao}>Avisar sobre novas vagas</Text>
              </View>
              <View style={[styles.selecao, notificacoes && styles.selecaoAtiva]}>
                {notificacoes ? <Text style={styles.marca}>✓</Text> : null}
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.opcao}
              activeOpacity={0.7}
              onPress={() => alternarOpcao(textoGrande, setTextoGrande)}
              accessibilityRole="checkbox"
              accessibilityState={{ checked: textoGrande }}
            >
              <View style={styles.opcaoTexto}>
                <Text style={styles.opcaoTitulo}>Texto maior</Text>
                <Text style={styles.opcaoDescricao}>Aumentar títulos dos cursos</Text>
              </View>
              <View style={[styles.selecao, textoGrande && styles.selecaoAtiva]}>
                {textoGrande ? <Text style={styles.marca}>✓</Text> : null}
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.opcao}
              activeOpacity={0.7}
              onPress={() => alternarOpcao(altoContraste, setAltoContraste)}
              accessibilityRole="checkbox"
              accessibilityState={{ checked: altoContraste }}
            >
              <View style={styles.opcaoTexto}>
                <Text style={styles.opcaoTitulo}>Alto contraste</Text>
                <Text style={styles.opcaoDescricao}>Destacar bordas e elementos</Text>
              </View>
              <View style={[styles.selecao, altoContraste && styles.selecaoAtiva]}>
                {altoContraste ? <Text style={styles.marca}>✓</Text> : null}
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.opcao}
              activeOpacity={0.7}
              onPress={() => alternarOpcao(compacto, setCompacto)}
              accessibilityRole="checkbox"
              accessibilityState={{ checked: compacto }}
            >
              <View style={styles.opcaoTexto}>
                <Text style={styles.opcaoTitulo}>Modo compacto</Text>
                <Text style={styles.opcaoDescricao}>Reduzir o espaçamento dos cards</Text>
              </View>
              <View style={[styles.selecao, compacto && styles.selecaoAtiva]}>
                {compacto ? <Text style={styles.marca}>✓</Text> : null}
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.botaoConcluir}
              activeOpacity={0.75}
              onPress={() => setMenuVisivel(false)}
              accessibilityRole="button"
              accessibilityLabel="Concluir configurações"
            >
              <Text style={styles.textoConcluir}>Concluir</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </View>
      ) : null}

      <StatusBar style={altoContraste ? 'light' : 'dark'} />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
  sobreposicao: {
    bottom: 0,
    flexDirection: 'row',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  fundoMenu: {
    backgroundColor: 'rgba(15,23,42,0.55)',
    flex: 1,
  },
  menuLateral: {
    backgroundColor: '#FFFFFF',
    maxWidth: 340,
    paddingHorizontal: 20,
    paddingTop: 12,
    width: '86%',
  },
  cabecalhoMenu: {
    alignItems: 'center',
    borderBottomColor: '#E2E8F0',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 16,
  },
  tituloMenu: {
    color: '#0F172A',
    fontSize: 22,
    fontWeight: '800',
  },
  subtituloMenu: {
    color: '#64748B',
    fontSize: 14,
    marginTop: 2,
  },
  botaoFechar: {
    alignItems: 'center',
    backgroundColor: '#F1F5F9',
    borderRadius: 18,
    height: 36,
    justifyContent: 'center',
    width: 36,
  },
  textoFechar: {
    color: '#334155',
    fontSize: 24,
    lineHeight: 26,
  },
  opcao: {
    alignItems: 'center',
    borderBottomColor: '#E2E8F0',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 68,
  },
  opcaoTexto: {
    flex: 1,
    paddingRight: 12,
  },
  opcaoTitulo: {
    color: '#0F172A',
    fontSize: 16,
    fontWeight: '700',
  },
  opcaoDescricao: {
    color: '#64748B',
    fontSize: 13,
    marginTop: 2,
  },
  selecao: {
    alignItems: 'center',
    borderColor: '#94A3B8',
    borderRadius: 6,
    borderWidth: 2,
    height: 24,
    justifyContent: 'center',
    width: 24,
  },
  selecaoAtiva: {
    backgroundColor: '#2563EB',
    borderColor: '#2563EB',
  },
  marca: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
  },
  botaoConcluir: {
    alignItems: 'center',
    backgroundColor: '#2563EB',
    borderRadius: 12,
    height: 48,
    justifyContent: 'center',
    marginTop: 18,
  },
  textoConcluir: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
  },
});
