// Arquivo: src/components/Header.js
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Componente reutilizável de Cabeçalho que recebe 'titulo' e 'subtitulo' via Props
export default function HeaderCatalogo({ titulo, subtitulo, totalInscritos, aoAbrirMenu }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.botaoMenu}
        activeOpacity={0.7}
        onPress={aoAbrirMenu}
        accessibilityRole="button"
        accessibilityLabel="Abrir menu lateral"
        accessibilityHint="Exibe as configurações da aplicação"
      >
        <View style={styles.linhaMenu} />
        <View style={styles.linhaMenu} />
        <View style={styles.linhaMenu} />
      </TouchableOpacity>
      <View style={styles.conteudo}>
        <Text style={styles.titulo}>{titulo}</Text>
        {subtitulo ? <Text style={styles.subtitulo}>{subtitulo}</Text> : null}
      </View>
      <View style={styles.acoes}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{totalInscritos}</Text>
          <Text style={styles.badgeText}>cursos</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E293B',
    paddingTop: 48,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    marginBottom: 16,
  },
  conteudo: {
    flex: 1,
    paddingHorizontal: 12,
  },
  botaoMenu: {
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderColor: 'rgba(255,255,255,0.22)',
    borderRadius: 12,
    borderWidth: 1,
    height: 44,
    justifyContent: 'center',
    width: 44,
  },
  linhaMenu: {
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
    height: 2,
    marginVertical: 2,
    width: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#F8FAFC',
  },
  subtitulo: {
    fontSize: 14,
    color: '#94A3B8',
    marginTop: 4,
  },
  badge: {
    backgroundColor: '#3B82F6',
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 8,
    minWidth: 36,
    alignItems: 'center',
  },
  acoes: {
    alignItems: 'center',
    gap: 8,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
});