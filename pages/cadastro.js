import React from 'react';
import { StyleSheet, Text, View, Button,TextInput,ScrollView,Picker, Image,TouchableOpacity} from 'react-native';
import  {useEffect} from 'react';
import  {useState} from 'react';
import MaskInput from 'react-native-mask-input';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { DynamicColorIOS } from 'react-native/Libraries/StyleSheet/PlatformColorValueTypesIOS';

const Cadastro  = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const [
    isRegistraionSuccess,
    setIsRegistraionSuccess
  ] = useState(false);



/* PARA A DATA DE NASCIMENTO */

const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

const showDatePicker = () => {
  setDatePickerVisibility(true);
};

const hideDatePicker = () => {
  setDatePickerVisibility(false);
};

const handleConfirm = (date) => {
  console.warn("A date has been picked: ", date);
  hideDatePicker();
};

/* PARA OS INPUTS */


    const [nome, setNome] = React.useState("");
    const [sobrenome, setSobrenome] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState('');
    const [senha, setSenha] = React.useState("");
    const [senhad, setSenhad] = React.useState("");
    const [cpf, setCpf] = React.useState("");
    const [dn, setDn] = React.useState("");
    const [cep, setCep] = React.useState("");
    const [logradouro, setLogradouro] = React.useState("");
    const [numero, setNumero] = React.useState("");
    const [complemento, setComplemento] = React.useState("");
    const [bairro, setBairro] = React.useState("");
    const [cidade, setCidade] = React.useState("");
    let re = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$';

/* PARA OS GÊNERO */

    const [selectedValue, setSelectedValue] = useState("Mulher","Homen","Não binario","Outro");

    const enviar = () => {
      setErrortext('');
      if (!nome) {
        alert('Por favor, preencha seu nome');
        return;
      }
      if (!email) {
        alert('Por favor, preencha seu Email');
        return;
      }
      if (!phone) {
        alert('Por favor, preencha sua idade');
        return;
      }
      if (!senha) {
        alert('Por favor, preencha seu endereço');
        return;
      }
      if (!cpf) {
        alert('Por favor, preencha seu CPF');
        return;
      }
      if (!logradouro) {
        alert('Por favor, preencha Logradouro');
        return;
      }
      if (!cep) {
        alert('Por favor, preencha seu Cep');
        return;
      }
      if (!numero) {
        alert('Por favor, preencha seu numero');
        return;
      }
      if (!bairro) {
        alert('Por favor, preencha seu bairro');
        return;
      }
      if (!cidade) {
        alert('Por favor, preencha sua cidade');
        return;
      }
      if (senha.length < 8) {
        alert('Senha deve ter no minimo 8 digitos');
        return;
      }
      if (!senhad) {
        alert('Por favor, preencha sua senha');
        return;
      }
      if(senha != senhad){
        alert('senha e confirmação de senha não estão iguais!');
        return;
      }
      if(re.test(String(senha).toLowerCase())){
        alert('Sua senha deve ter numeros,letras maiusculas e minusculas!');
        return;
      }
      else{
        navigation.navigate('LoginScreen');
      }
      setLoading(true);
      var dataToSend = {
        name: nome,
        email: email,
        dn: dn,
        password: senha,
        phone: phone,
        cpf: cpf,
        cep:cep,
        logradouro:logradouro,
        numero:numero,
        complemento:complemento,
        bairro: bairro,
        cidade:cidade
      };
      var formBody = [];
      for (var key in dataToSend) {
        var encodedKey = encodeURIComponent(key);
        var encodedValue = encodeURIComponent(dataToSend[key]);
        formBody.push(encodedKey + '=' + encodedValue);
      }
      formBody = formBody.join('&');
  
      fetch('http://localhost:3000/api/user/register', {
        method: 'POST',
        body: formBody,
        headers: {
          'Content-Type':
          'application/x-www-form-urlencoded;charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((responseJson) => {
          setLoading(false);
          console.log(responseJson);
          if (responseJson.status === 'success') {
            setIsRegistraionSuccess(true);
            console.log(
              'Registro bem-sucedido. Faça login para continuar'
            );
          } else {
            setErrortext(responseJson.msg);
          }
        })
        .catch((error) => {
          setLoading(false);
          console.error(error);
        });
    };
    if (isRegistraionSuccess) {
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: '#307ecc',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../assets/success.png')}
            style={{
              height: 150,
              resizeMode: 'contain',
              alignSelf: 'center'
            }}
          />
          <Text style={styles.successTextStyle}>
            Registration Successful
          </Text>
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={() => props.navigation.navigate('LoginScreen')}>
            <Text style={styles.buttonTextStyle}>Conecte-se agora</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <ScrollView>
      <View style={styles.container}>
      <View style={styles.container1}>
      <View style={styles.container2}>
      <Image 
      style={{
          height:200,
          width:200,}}
      source={require('../assets/logo.png')}/>
      </View>
      <Text style={styles.label}>Nome:</Text>
        <TextInput
        style={styles.input}
        onChangeText={setNome}
        value={nome}
        placeholder="Mingi"
        keyboardType="default"
      />


      <Text style={styles.label}>Sobrenome:</Text>
        <TextInput
        style={styles.input}
        onChangeText={setSobrenome}
        value={sobrenome}
        placeholder="Song"
        keyboardType="default"
      />
        <Text style={styles.label}>CPF:</Text>
        <View style={styles.teste1}>
      <MaskInput
      value={cpf}
      style={{ height: 40, 
        width: 250,
        borderRadius: 10,margin: 12,
        color: 'grey',
        fontWeight: 'bold',
        fontSize: 14,
         }}
      onChangeText={(masked, unmasked, obfuscated) => {
        setCpf(masked);
        console.log(masked); 
        console.log(unmasked); 
        console.log(obfuscated); 
      }}
      mask={[
        /\d/, 
        /\d/,
        /\d/,
        '.',
        /\d/,
        /\d/,
        /\d/,
        '.',        
        /\d/,
        /\d/,
        /\d/,
        '-',        
        /\d/,
        /\d/,
      ]}
    />
    </View>
      <Text style={styles.label}>Email:</Text>
        <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="choimingi@gmail.com.br"
        keyboardType="email-address"
      /> 
       <Text style={styles.label}>Data de nascimento:</Text>   
    <View style={styles.teste2}>
    <Button title="00/00/0000" 
    backgroundColor = "blue"  
    color="#5a4bb7"
    onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        value={dn}
      />
      </View>
      <Text style={styles.label}>Telefone:</Text>
      <View style={styles.teste1}>
      <MaskInput
      value={phone}
      style={{ height: 40, 
        width: 250,
        borderRadius: 10,margin: 12,
        color: 'grey',
        fontWeight: 'bold',
        fontSize: 14,
         }}
      onChangeText={(masked, unmasked, obfuscated) => {
        setPhone(masked); 
        console.log(masked);
        console.log(unmasked);
        console.log(obfuscated); 
      }}
      mask={[
        '+',
        /\d/, 
        /\d/,
        ' ',        
        '(',
        /\d/, 
        /\d/,
        ')',
        ' ',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
      ]}
    />
    </View>

    <Text style={styles.label}>CEP:</Text>
        <TextInput
        style={styles.input}
        onChangeText={setCep}
        value={cep}
        placeholder=""
        keyboardType="numeric"
      />

    <Text style={styles.label}>Logradouro:</Text>
        <TextInput
        style={styles.input}
        onChangeText={setLogradouro}
        value={logradouro}
        placeholder=""
        keyboardType="default"
      />

      <Text style={styles.label}>Numero:</Text>
        <TextInput
        style={styles.input}
        onChangeText={setNumero}
        value={numero}
        placeholder=""
        keyboardType="numeric"
      />

      <Text style={styles.label}>Complemento:</Text>
        <TextInput
        style={styles.input}
        onChangeText={setComplemento}
        value={complemento}
        placeholder=""
        keyboardType="default"
      />

      <Text style={styles.label}>Bairro:</Text>
        <TextInput
        style={styles.input}
        onChangeText={setBairro}
        value={bairro}
        placeholder=""
        keyboardType="default"
      />

      <Text style={styles.label}>Cidade:</Text>
        <TextInput
        style={styles.input}
        onChangeText={setCidade}
        value={cidade}
        placeholder=""
        keyboardType="default"
      />

      <Text style={styles.label}>Senha:</Text>
        <TextInput
        style={styles.input}
        onChangeText={setSenha}
        value={senha}
        placeholder=""
        secureTextEntry = {true}
        keyboardType="password"
      />
      <Text style={styles.label}>Repetir a senha:</Text>
        <TextInput
        style={styles.input}
        onChangeText={setSenhad}
        value={senhad}
        placeholder=""
        secureTextEntry = {true}
        keyboardType="password"
      />
      <Text style={styles.label}>Gênero:</Text>
      <View style={styles.teste}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 40, 
        felx: 1,
        borderRadius: 10,margin: 12,
        color: 'grey',
        fontWeight: 'bold',
        fontSize: 20,
         }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Mulher" value="M" />
        <Picker.Item label="Homem" value="H" />
        <Picker.Item label="Não binario" value="NB" />
        <Picker.Item label="outro" value="OU" />
      </Picker>
    </View>
    <View style={styles.teste2}>
      <Button
      onPress={enviar}
      backgroundColor = '#fff'  
      color="#5a4bb7"
      title="Cadastrar" />
      </View>
      </View>
      </View>
      </ScrollView>
    );
  }
const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  container1:{
    flex: 1,
    margin:20
  },
  container2:{
    margin:5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    color: 'grey',
    flex:1,
    margin: 5,
    borderRadius: 10,
    padding: 10,
    fontWeight: 'bold',
    fontSize: 14,
  },
  label : {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'grey',
    margin : 5
  },
  teste:{
    borderWidth: 1,
    borderColor: 'grey',
    height: 45, 
    borderRadius: 10,
    backgroundColor: '#fff',
    margin : 5,
    flex: 1,
  },
  teste1:{
    borderWidth: 1,
    borderColor: 'grey',
    flex:1,
    borderRadius: 10,
    backgroundColor: '#fff',
    margin : 5,
    height: 45,
  },
    teste2:{
    borderWidth: 1,
    borderColor: 'grey',
    height: 45, 
    margin : 5,
    flex: 1
  }
});
export default Cadastro;