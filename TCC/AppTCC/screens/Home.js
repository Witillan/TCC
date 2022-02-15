import { Text, View, Button } from 'react-native';
import { ButtonRed } from '../Styled/styles';


export function HomeScreen () {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* <Button title='Meu Botão'/> */}
      <ButtonRed>
        Eu
      </ButtonRed>
    </View>
  );
}