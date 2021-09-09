import React, {useState} from "react";
import { SafeAreaView, StyleSheet, TextInput, Button, Text, TouchableOpacity, View } from "react-native";

const RedefinirSenha = () => {
  const [cpf, onChangeCPF] = useState(''); 
  const [birthday, onChangeBirthday] = useState('');
  const [email, onChangeEmail] = useState('');

  const [newPassword, onChangeNewPassword] = useState('');
  const [confirmNewPassword, onChangeConfirmNewPassword] = useState('');

  

  const [onEmail, setEmail] = useState(false);
  function isEmail(){
    setEmail(!onEmail);
  }
  const [noVerify, setNoVerify] = useState(true);
  function isVerify(){
    setNoVerify(!noVerify);
  }

  function senhaAlterada(){
    return alert('Senha alterada com sucessso!');
  }

  return (
    <View style={styles.container}>

    <Text style={{fontSize:22, fontWeight: 'bold', color: '#5a4bb7', marginVertical:30 }}> Redefinir a senha </Text>
    
    { noVerify ? 

      <View style={styles.container2}>
      {onEmail ?
        <TextInput
          style={[styles.input, ]}
          onChangeText={onChangeCPF}
          value={cpf}
          placeholder='CPF'
          keyboardType='numeric'
        />
        :
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="Email"
          keyboardType="email-adress"

        />
      
      }
      <TextInput
          style={styles.input}
          onChangeText={onChangeBirthday}
          value={birthday}
          placeholder="Data de nascimento"
          keyboardType="numeric"
        />
      <TouchableOpacity onPress={isEmail}>
        <Text style={{fontSize: 13, fontWeight: '700', color: '#5a4bb7', marginBottom: 30}}> Trocar forma de verificação</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnVerificar} activeOpacity={0.8} onPress={isVerify}>
        <Text style={{color: 'white'}}>Verificar</Text>
      </TouchableOpacity>
    </View>

    :

    <View style={styles.container2}>
      <TextInput
          style={styles.input}
          onChangeText={onChangeNewPassword}
          value={newPassword}
          placeholder="Nova senha"

        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeConfirmNewPassword}
          value={confirmNewPassword}
          placeholder="Repita a nova senha"
          
        />
        <TouchableOpacity style={styles.btnVerificar} activeOpacity={0.8} onPress={senhaAlterada}>
          <Text style={{color: 'white'}}> Alterar senha</Text>
        </TouchableOpacity>
    </View>

    }
    
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 40
  },
  container2:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  input: {
    height: 40,
    width: '100%',
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#dadae8',
    marginBottom:20
    
  },
  btnVerificar:{
    height: 35,
    width: '35%',
    backgroundColor: '#5a4bb7',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default RedefinirSenha;

