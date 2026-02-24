/**
 * Home screen - shared between web and mobile
 */

import { useNavigator } from '@idealyst/navigation';
import { HelloWorld } from '../components';

export default function Home() {
  const { navigate } = useNavigator();

  return (
    <HelloWorld
      name="Chore Hub"
      onPress={() => navigate({ path: '/about' })}
    />
  );
}
