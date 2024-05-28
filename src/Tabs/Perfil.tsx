import { VStack, Text, ScrollView, Avatar, Divider } from 'native-base'
import { Titulo } from '../componentes/Titulo'
import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { pegarDadosPaciente } from '../servicos/PacienteServico'
import { Paciente } from '../interfaces/Paciente'

export default function Perfil(){
  const [dadosPaciente, setDadosPaciente] = useState({} as Paciente)

  useEffect(()=>{
    async function dadosPaciente() {
      const pacienteId = await AsyncStorage.getItem('pacienteId')
      if(!pacienteId) return null

      const resultado = await pegarDadosPaciente(pacienteId)
      if(resultado){
        setDadosPaciente(resultado)
        console.log(resultado)
      }
    }
    dadosPaciente();
  })
  return(
    <ScrollView flex={1}>
      <VStack flex={1} alignItems="center" p={5}>
        <Titulo color="blue.500">Meu Perfil</Titulo>

        <Avatar size="xl" source={{ uri: "https://github.com/robertoSRMJunior.png" }} mt={5} />

        <Titulo color="blue.500">Informações pessoais</Titulo>
        <Titulo fontSize="lg" mb={1}>{dadosPaciente.nome}</Titulo>
        <Text>01/04/1988</Text>
        <Text>São Paulo</Text>

        <Divider mt={5} />

        <Titulo color="blue.500" mb={1}>Histórico médico</Titulo>
        <Text>Bronquite</Text>
        <Text>Sinusite</Text>
      </VStack>
    </ScrollView>
  )
}