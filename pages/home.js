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
                          <Text style={styles.texto}>Este aplicativo irá te auxiliar a gerenciar a sua menstruação assim te ajudando a cuidar da sua saúde</Text>
          <Image
            source={require('../assets/socorro.gif')}
            style={styles.Imagem1}
          />
                      </View>
                      <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"#f2e0d4"}}>
                          <Text style={styles.texto}>Além de marcar e saber se o seu periodo está correto, você tambem poderá saber mais sobre seu corpo.</Text>
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
            <Text style={styles.modalText1}>O que é menstruação?</Text>
            <Text style={styles.modalText2}>A menstruação faz parte do ciclo reprodutivo da mulher, ou melhor, é o fim desse ciclo. Todos os meses, o útero prepara um revestimento interno, chamado endométrio, para aninhar o embrião (óvulo fecundado). Quando a fecundação não ocorre, esse tecido é descartado. Aí vem a menstruação, que nada mais é do que uma descamação do endométrio, que era para ser uma "casinha" para a gravidez.</Text>
          <Text style={styles.modalText2}>Observações:</Text>
            <Text style={styles.modalText2}>
            1. É possivel engravidar estando no periodo menstrual portanto ao ter relações durante este periodo proteja-se para evitar além da gravidez as IST´s.
            </Text>
            <Text style={styles.modalText2}>
            2. É possivel também estar gravida e continuar menstruando mas são casos raros.
            3. A secreção vaginal é normal e serve tanto para indicar o periodo em que está tanto para indicar algum problema de saude na região como IST´s. Existem aproximadamente 5 tipos de secreção que devem ser observadas, qualquer alteração ou odor forte nelas deve ser relatado ao medico.
            </Text>
            <Text style={styles.modalText2}>
            3. A secreção vaginal é normal e serve tanto para indicar o periodo em que está tanto para indicar algum problema de saude na região como IST´s. Existem aproximadamente 5 tipos de secreção que devem ser observadas, qualquer alteração ou odor forte nelas deve ser relatado ao medico.
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
        <Text style={styles.textStyle}>O que é</Text>
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
            <Text style={styles.modalText2}>O absorvente externo é geralmente a opção mais usada pelas mulheres e é um produto que pode ser encontrado em diversos tamanhos e formas e diferentes espessuras e componentes.</Text>
            <Text style={styles.modalText2}>2. Absorvente interno</Text>
            <Text style={styles.modalText2}>Os absorventes internos também são muito usados pelas mulheres e são uma ótima opção para aquelas que desejam continuar a ir à praia, à piscina ou fazer exercícios durante o período menstrual.</Text>
            <Text style={styles.modalText2}>3. Coletor menstrual</Text>
            <Text style={styles.modalText2}>Os coletores menstruais são uma alternativa aos absorventes internos, com a vantagem de não poluir o ambiente e de ter uma duração de cerca de 10 anos. Geralmente, estes produtos são feitos de silicone medicinal ou de uma espécie de borracha utilizada na produção de material cirúrgico, tornando-os muito maleáveis e hipoalergênicos</Text>
            <Text style={styles.modalText2}>4. Esponja absorvente</Text>
            <Text style={styles.modalText2}>Embora ainda não seja um produto muito usado, as esponjas absorventes são também uma opção bastante cômoda e prática e são livres de produtos químicos, evitando assim irritações e manifestações alérgicas.</Text>
            <Text style={styles.modalText2}>5. Calcinhas absorventes</Text>
            <Text style={styles.modalText2}>As calcinhas absorventes têm a aparência de umas calcinhas normais, mas com capacidade de absorver a menstruação e secar rapidamente, evitando reações alérgicas, até porque não possuem nenhum ingredientes irritante</Text>
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
            <Text style={styles.modalText1}>Quais cuidados tomar com os recursos de absorção?</Text>
            <Text style={styles.modalText}>
— Os absorventes externos são os mais tradicionais. Usá-los por muito tempo pode alterar o pH vaginal, causar assaduras e provocar reações alérgicas por causa dos componentes químicos que dão cheiro, por exemplo. O ideal é trocá-lo a cada três ou quatro horas.
</Text>
            <Text style={styles.modalText}>
— O interno — inserido no canal vaginal — também precisa ser trocado nesse mesmo intervalo de tempo. Caso contrário, pode causar proliferação bacteriana e infecções. 
</Text>
            <Text style={styles.modalText}>
— O coletor também fica no canal vaginal, mas pode ficar por mais tempo. Alguns fabricantes afirmam que é possível utilizá-lo por até 12 horas. O tempo de uso vai depender de cada mulher,  e por isso é importante entender como é seu fluxo para evitar vazamentos. O coletor deve ser lavado em água corrente e higienizado sempre, a cada troca.
</Text>
            <Text style={styles.modalText}>
— A calcinha absorvente e os absorventes de pano também podem causar alergia. 
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