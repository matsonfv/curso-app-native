import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CursoCard({ curso, matriculado, aoAbrir, altoContraste, textoGrande, compacto }) {
  const vagasDisponiveis = matriculado ? Math.max(0, curso.vagas - 1) : curso.vagas;

  return (
    <TouchableOpacity
      activeOpacity={0.82}
      onPress={() => aoAbrir(curso)}
      style={[
        styles.card,
        matriculado && styles.cardMatriculado,
        altoContraste && styles.cardContraste,
        compacto && styles.cardCompacto,
      ]}
      accessibilityRole="button"
      accessibilityLabel={`${curso.titulo}, categoria ${curso.categoria}, ${curso.nivel}, ${curso.cargaHoraria} horas`}
    >
      <View style={styles.linhaTopo}>
        <Text style={[styles.titulo, textoGrande && styles.tituloGrande]}>{curso.titulo}</Text>
        <Text style={styles.categoria}>{curso.categoria}</Text>
      </View>

      <Text style={styles.descricao}>{curso.descricao}</Text>
      <View style={styles.detalhes}>
        <Text style={styles.detalhe}>Nível: {curso.nivel}</Text>
        <Text style={styles.detalhe}>{curso.cargaHoraria}h</Text>
        <Text style={styles.detalhe}>Instrutor: {curso.instrutor}</Text>
      </View>
      <Text style={styles.vagas}>Vagas disponíveis: {vagasDisponiveis}</Text>
      <Text style={styles.verDetalhes}>Toque para ver detalhes →</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E2E8F0',
    borderRadius: 14,
    borderWidth: 1,
    marginBottom: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 3,
    elevation: 2,
  },
  cardMatriculado: {
    borderColor: '#10B981',
    borderWidth: 2,
  },
  cardContraste: {
    borderColor: '#0F172A',
  },
  cardCompacto: {
    paddingVertical: 12,
  },
  linhaTopo: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
  titulo: {
    color: '#0F172A',
    flex: 1,
    fontSize: 18,
    fontWeight: '700',
  },
  tituloGrande: {
    fontSize: 21,
  },
  categoria: {
    backgroundColor: '#DBEAFE',
    borderRadius: 12,
    color: '#1D4ED8',
    fontSize: 12,
    fontWeight: '700',
    overflow: 'hidden',
    paddingHorizontal: 9,
    paddingVertical: 5,
  },
  descricao: {
    color: '#475569',
    fontSize: 14,
    lineHeight: 20,
    marginTop: 10,
  },
  detalhes: {
    gap: 4,
    marginTop: 12,
  },
  detalhe: {
    color: '#64748B',
    fontSize: 13,
  },
  vagas: {
    color: '#0F766E',
    fontSize: 14,
    fontWeight: '700',
    marginTop: 12,
  },
  verDetalhes: {
    color: '#2563EB',
    fontSize: 13,
    fontWeight: '700',
    marginTop: 10,
  },
});
