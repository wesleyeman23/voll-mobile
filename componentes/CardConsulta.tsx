import { Text, Avatar, VStack } from "native-base";
import { Botao } from "./Botao";

interface CardProps {
    nome: string,
    foto: string,
    especialidade: string,
    data?: string,
    foiAtendido?: boolean,
    foiAgendado?: boolean
}

export function CardConsulta({ nome, foto, especialidade, data, foiAtendido, foiAgendado }: CardProps) {
    return (
        <VStack w="100%" bg={foiAtendido ? 'blue.100' : 'white'} p="5" borderRadius="lg" shadow="2" textAlign="center" justifyContent="center">
            <VStack flexDir="row" textAlign="center" alignItems="center">
                <Avatar source={{ uri: foto }} mt={5} size="xl" />
                <VStack pl="4">
                    <Text fontSize="md">{nome}</Text>
                    <Text>{especialidade}</Text>
                    <Text>{data}</Text>
                </VStack>
            </VStack>
            <Botao mt={4}>{foiAgendado ? 'Cancelar' : 'Agendar Consulta'}</Botao>
        </VStack>
    );
}