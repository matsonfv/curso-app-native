import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function FiltroCategoria({ categorias, ativa, aoSelecionar }) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {categorias.map((categoria) => {
        const selecionada = categoria === ativa;

        return (
          <TouchableOpacity
            key={categoria}
            activeOpacity={0.75}
            style={[
              styles.chip,
              selecionada ? styles.chipAtivo : null,
            ]}
            onPress={() => aoSelecionar(categoria)}
            accessibilityRole="button"
            accessibilityState={{ selected: selecionada }}
            accessibilityLabel={`Filtrar por ${categoria}`}
            hitSlop={4}
          >
            <Text
              style={[styles.texto, selecionada && styles.textoAtivo]}
              numberOfLines={1}
            >
              {categoria}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 8,
    gap: 8,
  },
  chip: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 20,
    height: 40,
    minWidth: 72,
    maxHeight: 40,
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 0,
    backgroundColor: '#FFFFFF',
  },
  chipAtivo: {
    borderColor: '#2563EB',
    backgroundColor: '#2563EB',
  },
  texto: {
    color: '#475569',
    fontSize: 14,
    fontWeight: '600',
  },
  textoAtivo: {
    color: '#FFFFFF',
  },
});