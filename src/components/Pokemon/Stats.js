import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'

const Stats = (props) => {
  const { stats } = props;

  const [maxStat, setMaxStat] = useState(100)

    useEffect(() => {
        const max = Math.max(...stats.map(s => s.base_stat))
        if (max > 100)
            setMaxStat(max)
    }, [stats])

  const barStyles = (num) => {
    let bgColorized;

    if (num <= 25) {
      bgColorized = "#ff3e3e";
    } else if (num > 25 && num < 50) {
      bgColorized = "#F08700";
    } else if (num >= 50 && num < 75) {
      bgColorized = "#EFCA08";
    } else if (num >= 75) {
      bgColorized = "#6EEB83";
    }

    const width = (num * 100 / maxStat).toFixed(2);

    return {
      backgroundColor: bgColorized,
      width: `${width}%`,
    };
  };

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Base Stats</Text>
      {stats.map(item => (
          <View key={item.stat.name} style={styles.block}>
              <View style={styles.blockTitle}>
                  <Text style={styles.statName}>{item.stat.name}</Text>
              </View>
              <View style={styles.blockInfo}>
                  <Text style={styles.number}>{item.base_stat}</Text>
                  <View style={styles.bgBar}>
                      <View style={[styles.bar, barStyles(item.base_stat)]}></View>
                  </View>
              </View>
          </View>
      ))
      }
    </View>
  )
}

export default Stats

const styles = StyleSheet.create({
  content: {
    marginTop: 20,
    marginBottom: 60,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  block: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  blockTitle: {
    width: '30%',
  },
  statName: {
    fontSize: 14,
    color: '#6b6b6b',
    textTransform: "capitalize"
  },
  blockInfo: {
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  number: {
    width: '14%',
    fontSize: 14,
    fontWeight: 500
  },
  bgBar: {
    backgroundColor: '#dedede',
    width: '80%',
    height: 10,
    borderRadius: 20,
    overflow: 'hidden'
  },
  bar: {
    height: 10,
    borderRadius: 20,
  }
})