import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function DetalhesCurso({
  curso,
  matriculado,
  aoAlternarMatricula,
  aoVoltar,
  textoGrande,
  altoContraste,
}) {
  const vagasDisponiveis = matriculado
    ? Math.max(0, curso.vagas - 1)
    : curso.vagas;

  return (
    <SafeAreaView style={[styles.container, altoContraste && styles.containerContraste]}>
      <View style={styles.topo}>
        <TouchableOpacity
          style={styles.botaoVoltar}
          activeOpacity={0.7}
          onPress={aoVoltar}
          accessibilityRole="button"
          accessibilityLabel="Voltar ao catálogo"
        >
          <Text style={styles.textoVoltar}>←</Text>
        </TouchableOpacity>
        <Text style={styles.tituloTopo}>Detalhes do curso</Text>
        <View style={styles.espacoTopo} />
      </View>

      <ScrollView contentContainerStyle={styles.conteudo}>
        <View style={styles.cabecalho}>
          <Text style={styles.categoria}>{curso.categoria}</Text>
          <Text style={[styles.titulo, textoGrande && styles.tituloGrande]}>
            {curso.titulo}
          </Text>
          <Text style={styles.descricao}>{curso.descricao}</Text>
        </View>

        <View style={styles.gradeInformacoes}>
          <View style={styles.informacao}>
            <Text style={styles.rotulo}>Nível</Text>
            <Text style={styles.valor}>{curso.nivel}</Text>
          </View>
          <View style={styles.informacao}>
            <Text style={styles.rotulo}>Carga horária</Text>
            <Text style={styles.valor}>{curso.cargaHoraria} horas</Text>
          </View>
          <View style={styles.informacao}>
            <Text style={styles.rotulo}>Instrutor</Text>
            <Text style={styles.valor}>{curso.instrutor}</Text>
          </View>
          <View style={styles.informacao}>
            <Text style={styles.rotulo}>Vagas</Text>
            <Text style={styles.valor}>{vagasDisponiveis} disponíveis</Text>
          </View>
        </View>

        <View style={styles.aprendizado}>
          <Text style={styles.subtitulo}>O que você vai aprender</Text>
          <Text style={styles.item}>• Prática com exercícios e projetos</Text>
          <Text style={styles.item}>• Conceitos organizados para o mercado</Text>
          <Text style={styles.item}>• Orientação com instrutor especializado</Text>
        </View>

        <TouchableOpacity
          style={[
            styles.botaoMatricula,
            matriculado && styles.botaoMatriculado,
          ]}
          activeOpacity={0.75}
          onPress={() => aoAlternarMatricula(curso.id)}
          accessibilityRole="button"
          accessibilityState={{ selected: matriculado }}
          accessibilityLabel={
            matriculado
              ? 'Cancelar matrícula neste curso'
              : 'Garantir vaga neste curso'
          }
        >
          <Text style={styles.textoBotao}>
            {matriculado
              ? '✓ Matriculado — cancelar'
              : 'Garantir Vaga'}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8FAFC',
    flex: 1,
  },
  containerContraste: {
    backgroundColor: '#E2E8F0',
  },
  topo: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderBottomColor: '#E2E8F0',
    borderBottomWidth: 1,
    flexDirection: 'row',
    height: 64,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  botaoVoltar: {
    alignItems: 'center',
    backgroundColor: '#F1F5F9',
    borderRadius: 10,
    height: 40,
    justifyContent: 'center',
    width: 40,
  },
  textoVoltar: {
    color: '#0F172A',
    fontSize: 24,
  },
  tituloTopo: {
    color: '#0F172A',
    fontSize: 18,
    fontWeight: '700',
  },
  espacoTopo: {
    width: 40,
  },
  conteudo: {
    padding: 16,
    paddingBottom: 32,
  },
  cabecalho: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E2E8F0',
    borderRadius: 16,
    borderWidth: 1,
    padding: 18,
  },
  categoria: {
    alignSelf: 'flex-start',
    backgroundColor: '#DBEAFE',
    borderRadius: 12,
    color: '#1D4ED8',
    fontSize: 12,
    fontWeight: '700',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  titulo: {
    color: '#0F172A',
    fontSize: 24,
    fontWeight: '800',
    marginTop: 12,
  },
  tituloGrande: {
    fontSize: 28,
  },
  descricao: {
    color: '#475569',
    fontSize: 15,
    lineHeight: 23,
    marginTop: 10,
  },
  gradeInformacoes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 12,
  },
  informacao: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E2E8F0',
    borderRadius: 12,
    borderWidth: 1,
    minWidth: '48%',
    padding: 14,
  },
  rotulo: {
    color: '#64748B',
    fontSize: 12,
  },
  valor: {
    color: '#0F172A',
    fontSize: 15,
    fontWeight: '700',
    marginTop: 4,
  },
  aprendizado: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E2E8F0',
    borderRadius: 16,
    borderWidth: 1,
    marginTop: 12,
    padding: 18,
  },
  subtitulo: {
    color: '#0F172A',
    fontSize: 18,
    fontWeight: '700',
  },
  item: {
    color: '#475569',
    fontSize: 14,
    lineHeight: 22,
    marginTop: 8,
  },
  botaoMatricula: {
    alignItems: 'center',
    backgroundColor: '#2563EB',
    borderRadius: 12,
    height: 52,
    justifyContent: 'center',
    marginTop: 16,
  },
  botaoMatriculado: {
    backgroundColor: '#059669',
  },
  textoBotao: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
  },
});
