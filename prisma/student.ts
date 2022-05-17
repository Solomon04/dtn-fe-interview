import prisma from './prisma'

export const getAllStudents = async () => {
    return await prisma.student.findMany({})
}

export const getStudent = async (id: string) => {
    return await prisma.student.findUnique({
        where: {id}
    })
}

export const createStudent = async (student: Student) => {
    return await prisma.student.create({
        data: {
            firstName: student.firstName,
            lastName: student.firstName,
            email: student.email ?? '',
            age: student.age ?? 0,
            grade: student.grade ?? ''
        }
    });
}

export const updateStudent = async (id: string, updatedStudent: Student) => {
    return await prisma.student.update({
        where: {
            id
        },
        data: {
            ...updatedStudent
        }
    })
}

export const deleteStudent = async (id: string) => {
    return await prisma.student.delete({
        where: {
            id
        }
    })
}
