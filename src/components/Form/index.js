import React, { useState } from "react"
import { 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity,
    Vibration,
    Pressable,
    Keyboard,
    FlatList,
 } from "react-native"
import ResultImc from "./ResultImc";
import styles from "./style";


export default function Form() {

        // Variáveis
const [height, setHeight]= useState(null)
const [Weight, setWeight]= useState(null)
const [messageImc, setMessageImc]= useState("Preencha a Altura e Peso")
const [imc, setImc]= useState(null)
const [textButton, setTextButton]= useState("Calcular")
const [errorMessage, setErrorMessage] = useState(null)
const [imcList, setImcList] = useState([])

        // Cálculo do IMC
function imcCalculator() {
        // Transformando a "," em "." para o sistema IOS
    let heightFormat = height.replace(",", ".")
    let totalImc = (Weight / (heightFormat * heightFormat)).toFixed(2);
    setImcList ((arr) => [...arr, {id: new Date().getTime(), imc:totalImc }])
    setImc(totalImc)
}


function verificationImc() {
    if (imc == null) {
        // Api para vibração do celular
        Vibration.vibrate();
        setErrorMessage("Campo Obrigatório*")
    }
}

        // Validando os campos
function validationImc() {
    if(Weight != null && height != null) {
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setMessageImc("Seu IMC é:")
        setTextButton("Calcular Novamente")
        setErrorMessage(null)
    }
    else{
        verificationImc()
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Preencha a Altura e Peso")
    }
}


    return(
            // Quando pressionado em qualquer lugar ele fecha o teclado
        <View style={styles.formContext}>
                {imc == null ? 
            <Pressable onPress={Keyboard.dismiss} style={styles.form}>
                    {/* Formulário */}
                    {/* Altura */}
                <Text style={styles.formLabel}>Altura</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput style={styles.input}
                onChangeText={setHeight}
                value={height}
                placeholder="Ex. 1.70"
                keyboardType="numeric"
                />

                    {/* Peso */}
                <Text style={styles.formLabel}>Peso</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput style={styles.input}
                onChangeText={setWeight}
                value={Weight}
                placeholder="Ex. 70.00 Kg"
                keyboardType="numeric"
                />

                    {/* Botão de calcular */}
                <TouchableOpacity style={styles.buttonCalculator}  onPress={() => validationImc()}>
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                 </TouchableOpacity>
            </Pressable>
            : 
            <View style={styles.exibitionResultImc}>

                        {/* Resultado */}
                <ResultImc messageResultImc={messageImc} ResultImc={imc} />
                <TouchableOpacity style={styles.buttonCalculator}  onPress={() => validationImc()} >
                <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            }
            <FlatList 
                showsVerticalScrollIndicator={false}
                style={styles.listImcs} 
                data={imcList.reverse()} 
                renderItem={({item}) => {
                    return (
                        <Text style={styles.resultImcItem}>
                            <Text style={styles.textResultItemList}>Resultado IMC = </Text>
                            {item.imc}
                        </Text>
                    )
                }} 
                keyExtractor={(item) =>  {
                    item.id
                }}
            />
        </View>

    );
}