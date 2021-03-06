import React, { useState } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  Modal,
  Alert,
  Pressable,
  ScrollView
} from 'react-native';

import Swiper from "react-native-web-swiper";
const Home = ({ navigation }) => {
const [modalVisible1, setModalVisible1] = useState(false);
const [modalVisible2, setModalVisible2] = useState(false);
const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.container}>
     <Swiper
                    from={1}
                    minDistanceForAction={0.1}
                    controlsProps={{
                      dotsTouchable: true,
                      prevPos: 'left',
                      nextPos: 'right',
                      nextTitle: '>',
                      nextTitleStyle: { color: 'red', fontSize: 24, fontWeight: '500' },
                      PrevComponent: ({ onPress }) => (
                        <TouchableOpacity onPress={onPress}>
                          <Text style={{ color: 'white', fontSize: 24, fontWeight: '500' }}>
                            {'<'}
                          </Text>
                        </TouchableOpacity>
                      ),
                    }}
                  >
                  </Swiper>
              </View>
              <View style={{flex:1}}>
                  <Swiper
                    vertical
                    loop
                    timeout={-4.5}
                    controlsProps={{
                      dotActiveStyle: { backgroundColor: 'red' },
                      cellsContent: {
                        'bottom-left': (<Text></Text>),
                      }
                    }}
                  >
                      <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"#badaf1"}}>
                          <Text style={styles.texto1}>Seja Bem-Vinde!</Text>
          <Image
            source={require('../assets/img1.jpeg')}
            style={styles.Imagem1}
          />
                      </View>
                      <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"#ffffff"}}>
                          <Text style={styles.texto}>Este aplicativo ir?? te auxiliar a gerenciar a sua menstrua????o assim te ajudando a cuidar da sua sa??de</Text>
          <Image
            source={require('../assets/socorro.gif')}
            style={styles.Imagem1}
          />
                      </View>
                      <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"#f2e0d4"}}>
                          <Text style={styles.texto}>Al??m de marcar e saber se o seu periodo est?? correto, voc?? tambem poder?? saber mais sobre seu corpo.</Text>
           <Image
            source={require('../assets/img2.jpeg')}
            style={styles.Imagem2}
          />
                      </View>
                  </Swiper>

 <View style={styles.container1}>
<TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}>
       <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible1}
        onRequestClose={() => {
          setModalVisible1(!modalVisible1);
        }}
      >
      <ScrollView>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText1}>O que ?? menstrua????o?</Text>
            <Text style={styles.modalText2}>A menstrua????o faz parte do ciclo reprodutivo da mulher, ou melhor, ?? o fim desse ciclo. Todos os meses, o ??tero prepara um revestimento interno, chamado endom??trio, para aninhar o embri??o (??vulo fecundado). Quando a fecunda????o n??o ocorre, esse tecido ?? descartado. A?? vem a menstrua????o, que nada mais ?? do que uma descama????o do endom??trio, que era para ser uma "casinha" para a gravidez.</Text>
          <Text style={styles.modalText2}>Observa????es:</Text>
            <Text style={styles.modalText2}>
            1. ?? possivel engravidar estando no periodo menstrual portanto ao ter rela????es durante este periodo proteja-se para evitar al??m da gravidez as IST??s.
            </Text>
            <Text style={styles.modalText2}>
            2. ?? possivel tamb??m estar gravida e continuar menstruando mas s??o casos raros.
            3. A secre????o vaginal ?? normal e serve tanto para indicar o periodo em que est?? tanto para indicar algum problema de saude na regi??o como IST??s. Existem aproximadamente 5 tipos de secre????o que devem ser observadas, qualquer altera????o ou odor forte nelas deve ser relatado ao medico.
            </Text>
            <Text style={styles.modalText2}>
            3. A secre????o vaginal ?? normal e serve tanto para indicar o periodo em que est?? tanto para indicar algum problema de saude na regi??o como IST??s. Existem aproximadamente 5 tipos de secre????o que devem ser observadas, qualquer altera????o ou odor forte nelas deve ser relatado ao medico.
            </Text>
            <Pressable
              style={[styles.button1, styles.buttonClose]}
              onPress={() => setModalVisible1(!modalVisible1)}
            >
              <Text style={styles.textStyle}>Fechar</Text>
            </Pressable>
          </View>
        </View>
        </ScrollView>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible1(true)}
      >
          <Image
            source={require('../assets/utfeliz.png')}
            style={styles.Imagem}
          />
        <Text style={styles.textStyle}>O que ??</Text>
      </Pressable>
    </View>
        </TouchableOpacity>
<TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}>
              <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible2}
        onRequestClose={() => {
          setModalVisible2(!modalVisible2);
        }}
      >
      <ScrollView>
        <View style={styles.centeredView2}>
          <View style={styles.modalView}>
            <Text style={styles.modalText1}>Tipos de absorvente</Text>
            <Text style={styles.modalText2}>1. Absorvente externo</Text>
            <Text style={styles.modalText2}>O absorvente externo ?? geralmente a op????o mais usada pelas mulheres e ?? um produto que pode ser encontrado em diversos tamanhos e formas e diferentes espessuras e componentes.</Text>
            <Text style={styles.modalText2}>2. Absorvente interno</Text>
            <Text style={styles.modalText2}>Os absorventes internos tamb??m s??o muito usados pelas mulheres e s??o uma ??tima op????o para aquelas que desejam continuar a ir ?? praia, ?? piscina ou fazer exerc??cios durante o per??odo menstrual.</Text>
            <Text style={styles.modalText2}>3. Coletor menstrual</Text>
            <Text style={styles.modalText2}>Os coletores menstruais s??o uma alternativa aos absorventes internos, com a vantagem de n??o poluir o ambiente e de ter uma dura????o de cerca de 10 anos. Geralmente, estes produtos s??o feitos de silicone medicinal ou de uma esp??cie de borracha utilizada na produ????o de material cir??rgico, tornando-os muito male??veis e hipoalerg??nicos</Text>
            <Text style={styles.modalText2}>4. Esponja absorvente</Text>
            <Text style={styles.modalText2}>Embora ainda n??o seja um produto muito usado, as esponjas absorventes s??o tamb??m uma op????o bastante c??moda e pr??tica e s??o livres de produtos qu??micos, evitando assim irrita????es e manifesta????es al??rgicas.</Text>
            <Text style={styles.modalText2}>5. Calcinhas absorventes</Text>
            <Text style={styles.modalText2}>As calcinhas absorventes t??m a apar??ncia de umas calcinhas normais, mas com capacidade de absorver a menstrua????o e secar rapidamente, evitando rea????es al??rgicas, at?? porque n??o possuem nenhum ingredientes irritante</Text>
            <Pressable
              style={[styles.button1, styles.buttonClose]}
              onPress={() => setModalVisible2(!modalVisible2)}
            >
              <Text style={styles.textStyle}>Fechar</Text>
            </Pressable>
          </View>
        </View>
        </ScrollView>
      </Modal>
      <Pressable
        style={[styles.button3, styles.buttonOpen]}
        onPress={() => setModalVisible2(true)}
      >
          <Image
            source={require('../assets/uttriste.png')}
            style={styles.Imagem}
          />
        <Text style={styles.textStyle}>Absorventes</Text>
      </Pressable>
    </View>
                  </TouchableOpacity>
<TouchableOpacity
  style={styles.button}
  activeOpacity={0.5}>
       <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
      <ScrollView>
        <View style={styles.centeredView1}>
          <View style={styles.modalView}>
            <Text style={styles.modalText1}>Quais cuidados tomar com os recursos de absor????o?</Text>
            <Text style={styles.modalText}>
??? Os absorventes externos s??o os mais tradicionais. Us??-los por muito tempo pode alterar o pH vaginal, causar assaduras e provocar rea????es al??rgicas por causa dos componentes qu??micos que d??o cheiro, por exemplo. O ideal ?? troc??-lo a cada tr??s ou quatro horas.
</Text>
            <Text style={styles.modalText}>
??? O interno ??? inserido no canal vaginal ??? tamb??m precisa ser trocado nesse mesmo intervalo de tempo. Caso contr??rio, pode causar prolifera????o bacteriana e infec????es. 
</Text>
            <Text style={styles.modalText}>
??? O coletor tamb??m fica no canal vaginal, mas pode ficar por mais tempo. Alguns fabricantes afirmam que ?? poss??vel utiliz??-lo por at?? 12 horas. O tempo de uso vai depender de cada mulher,  e por isso ?? importante entender como ?? seu fluxo para evitar vazamentos. O coletor deve ser lavado em ??gua corrente e higienizado sempre, a cada troca.
</Text>
            <Text style={styles.modalText}>
??? A calcinha absorvente e os absorventes de pano tamb??m podem causar alergia. 
</Text>
            <Pressable
              style={[styles.button1, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Fechar</Text>
            </Pressable>
          </View>
        </View>
        </ScrollView>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
          <Image
            source={require('../assets/utfeliz.png')}
            style={styles.Imagem}
          />
        <Text style={styles.textStyle}>Curiosidades</Text>
      </Pressable>
    </View>
        </TouchableOpacity>
    </View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
    container1:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  Imagem:{
    width: 65,
    height:65,
    margin:10
  },
    Imagem1:{
    width: 200,
    height:200
  },
    Imagem2:{
    width: 200,
    height:270
  },
  button:{
    margin:5,
    alignItems: 'center'
  },
    buttonOpen: {
  },
  buttonClose: {
    backgroundColor: "rgba(20,20,200,0.3)",
  },
  textStyle: {
    color: "black",
    textAlign: "center",
    fontWeight: 'bold' 
  },
  texto:{
    color: "black",
    textAlign: "center",
    fontSize:20,
    margin:5,
  },
  texto1:{
    color: "black",
    textAlign: "center",
    fontSize:45,
    margin:5,
    fontWeight: 'bold' 
  },
  modalText: {
    marginBottom: 15,
    textAlign: "left",
    fontSize:20,
  },
  modalText2: {
    marginBottom: 15,
    textAlign: "left",
    fontSize:14,
  },
  modalText1: {
    marginBottom: 15,
    textAlign: "center",
    fontSize:20,
    fontWeight: 'bold' 
  },
    centeredView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50
  },
  modalView: {
    justifyContent: "center",
    backgroundColor: "white",
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
    button1: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
});
export default Home;