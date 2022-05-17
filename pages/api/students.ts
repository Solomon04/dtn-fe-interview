import {NextApiRequest, NextApiResponse} from "next";
import {createStudent, deleteStudent, getAllStudents, getStudent, updateStudent} from "../../prisma/student";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        switch (req.method) {
            case 'GET': {
                if (req.query.id) {
                    // Get a single student if id is provided is the query
                    // api/students?id=1
                    const student = await getStudent(req.query.id as string)
                    return res.status(200).json(student)
                } else {
                    // Otherwise, fetch all students
                    const students = await getAllStudents()
                    return res.json(students)
                }
            }
            case 'POST': {
                if (!req.body.firstName || !req.body.lastName) {
                    return res.status(405).json({message: 'First name & last name are required'})
                }

                // create new student
                const newStudent = await createStudent(req.body);
                return res.status(201).json(newStudent)
            }
            case 'PUT': {
                // Update an existing student
                const {id, ...updateData} = req.body
                const student = await updateStudent(id, updateData)
                return res.json(student)
            }
            case 'DELETE': {
                // Delete an existing student
                const {id} = req.body
                const student = await deleteStudent(id)
                return res.json(student)
            }
            default:
                break
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: 'Something went wrong'})
    }
}
