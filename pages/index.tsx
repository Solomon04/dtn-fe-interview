import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Container from "../components/Layout/Container";
import StudentTable from "../components/StudentTable";
import {useEffect, useState} from "react";
import Button from "../components/Layout/Button";
import Heading from "../components/Layout/Heading";
import Text from "../components/Layout/Text";
import SubContainer from "../components/Layout/SubContainer";
import BtnContainer from "../components/Layout/BtnContainer";
import Flex from "../components/Layout/Flex";

const Home: NextPage = () => {
    const [students, setStudents] = useState<Student[]>([]);
    const [showModal, setShowModal] = useState<boolean>(false);

    const getStudents = async () => {
        const r = await fetch(`/api/students`, {
            method: 'GET'
        });

        const data = await r.json();
        setStudents(data);
    }

    useEffect(() => {
        getStudents();
    }, [students])

    return (
        <>
            <Head>
                <title>DTN Frontend Interview</title>
            </Head>

            <Container>
                <SubContainer>
                    <Flex>
                        <Heading>Students</Heading>
                        <Text>
                            A list of all the students including their name, email and age.
                        </Text>
                    </Flex>
                    <BtnContainer>
                        <Button type='button'>
                            Add Student
                        </Button>
                    </BtnContainer>
                </SubContainer>
                <StudentTable students={students}/>
            </Container>
        </>
    )
}

export default Home
