/** Profile → Gladiator: rank, character sheet, wallet and the cell. */
import { StyleSheet, Text, View } from 'react-native';

import { GlassCard } from '@/components/Glass';
import { Coins } from '@/components/icons';
import { SectionHeader } from '@/components/List';
import { DENARII, XP } from '@/lib/game/config';
import { nextRank } from '@/lib/game/levels';
import { colors, tabular, type } from '@/theme/tokens';
import { useWallet } from './api';
import { AttributesCard, CellView, RankLadder } from './GameViews';
import { useMyAttributes, useMyGame } from './hooks';

export function GladiatorView() {
  const game = useMyGame();
  const attrs = useMyAttributes();
  const wallet = useWallet(game.denariiEarned);
  const next = nextRank(game.level);

  return (
    <View style={{ gap: 14 }}>
      <View style={styles.tiles}>
        <GlassCard radius={22} style={styles.tile}>
          <Text style={[styles.big, tabular]}>{game.xp.toLocaleString('en-US')}</Text>
          <Text style={type.small}>XP in total</Text>
        </GlassCard>
        <GlassCard radius={22} style={styles.tile}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
            <Coins size={16} color={colors.accent} strokeWidth={2.2} />
            <Text style={[styles.big, tabular]}>{wallet.data ?? '—'}</Text>
          </View>
          <Text style={type.small}>Denarii to give</Text>
        </GlassCard>
      </View>

      <SectionHeader title="Rank" />
      <RankLadder level={game.level} />
      {next ? (
        <Text style={[type.small, { paddingHorizontal: 4 }]}>
          {next.name} at level {next.from}.
        </Text>
      ) : null}

      <SectionHeader title="Attributes" />
      <AttributesCard attrs={attrs} />

      <SectionHeader title="Your cell" />
      <CellView level={game.level} />

      <GlassCard radius={22} style={{ gap: 6, padding: 16 }}>
        <Text style={type.bodyStrong}>Earned only by training</Text>
        <Text style={type.caption}>
          {XP.workout} XP per workout (3 sets or more), +{XP.pr} per PR, +{XP.verified} when
          verified at the gym, +{XP.streakWeek} per week of your streak. Never for volume, so extra
          sets earn nothing. At most {XP.dailyCap} XP and {DENARII.dailyCap} denarii a day.
        </Text>
      </GlassCard>
    </View>
  );
}

const styles = StyleSheet.create({
  tiles: { flexDirection: 'row', gap: 10 },
  tile: { flex: 1, padding: 16, gap: 2 },
  big: { fontSize: 22, fontWeight: '700', letterSpacing: -0.5, color: colors.text },
});
