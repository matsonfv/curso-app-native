import React, { useEffect, useMemo, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import HeaderCatalogo from '../src/components/HeaderCatalogo';
import FiltroCategoria from '../src/components/FiltroCategoria';
import CursoCard from '../src/components/CursoCard';
import { CATEGORIAS, LISTA_CURSOS } from '../src/data/cursos';

export default function CatalogoCurso({
  idsMatriculados,
  aoAbrirCurso,
  aoAbrirMenu,
  carregando,
  textoGrande,
  altoContraste,
  compacto,
}) {
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todos');
  const [busca, setBusca] = useState('');

  const cursosFiltrados = useMemo(() => {
    const termo = busca.trim().toLowerCase();

    return LISTA_CURSOS.filter((curso) => {
      const categoriaCorresponde =
        categoriaAtiva === 'Todos' || curso.categoria === categoriaAtiva;
      const buscaCorresponde =
        termo.length === 0 ||
        curso.titulo.toLowerCase().includes(termo) ||
        curso.descricao.toLowerCase().includes(termo) ||
        curso.instrutor.toLowerCase().includes(termo);

      return categoriaCorresponde && buscaCorresponde;
    });
  }, [busca, categoriaAtiva]);

  if (carregando) {
    return (
      <SafeAreaView style={styles.carregandoContainer}>
        <ActivityIndicator size="large" color="#2563EB" />
        <Text style={styles.carregandoTexto}>Carregando cursos...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.container, altoContraste && styles.containerContraste]}>
      <HeaderCatalogo
        titulo="Catálogo de Cursos"
        subtitulo="Escolha seu próximo aprendizado"
        totalInscritos={idsMatriculados.length}
        aoAbrirMenu={aoAbrirMenu}
      />

      <View style={styles.areaBusca}>
        <TextInput
          value={busca}
          onChangeText={setBusca}
          placeholder="Buscar cursos ou instrutores"
          placeholderTextColor="#94A3B8"
          style={[styles.busca, textoGrande && styles.buscaGrande]}
          returnKeyType="search"
          clearButtonMode="while-editing"
          accessibilityLabel="Buscar cursos"
        />
      </View>

      <FiltroCategoria
        categorias={CATEGORIAS}
        ativa={categoriaAtiva}
        aoSelecionar={setCategoriaAtiva}
      />

      <FlatList
        data={cursosFiltrados}
        keyExtractor={(curso) => String(curso.id)}
        renderItem={({ item }) => (
          <CursoCard
            curso={item}
            matriculado={idsMatriculados.includes(item.id)}
            aoAbrir={aoAbrirCurso}
            altoContraste={altoContraste}
            textoGrande={textoGrande}
            compacto={compacto}
          />
        )}
        contentContainerStyle={styles.lista}
        ListEmptyComponent={
          <View style={styles.vazioContainer}>
            <Text style={styles.vazioTitulo}>Nenhum resultado</Text>
            <Text style={styles.vazio}>Tente outro termo ou categoria.</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  carregandoContainer: {
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    flex: 1,
    justifyContent: 'center',
  },
  carregandoTexto: {
    color: '#475569',
    fontSize: 15,
    marginTop: 12,
  },
  container: {
    backgroundColor: '#F8FAFC',
    flex: 1,
  },
  containerContraste: {
    backgroundColor: '#E2E8F0',
  },
  areaBusca: {
    paddingBottom: 10,
    paddingHorizontal: 16,
  },
  busca: {
    backgroundColor: '#FFFFFF',
    borderColor: '#CBD5E1',
    borderRadius: 12,
    borderWidth: 1,
    color: '#0F172A',
    fontSize: 15,
    height: 48,
    paddingHorizontal: 14,
  },
  buscaGrande: {
    fontSize: 17,
  },
  lista: {
    paddingBottom: 24,
    paddingHorizontal: 16,
    paddingTop: 4,
  },
  vazioContainer: {
    alignItems: 'center',
    marginTop: 32,
  },
  vazioTitulo: {
    color: '#334155',
    fontSize: 18,
    fontWeight: '700',
  },
  vazio: {
    color: '#64748B',
    fontSize: 16,
    marginTop: 4,
    textAlign: 'center',
  },
});
