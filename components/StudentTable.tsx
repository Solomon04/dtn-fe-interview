import {FunctionComponent} from "react";

type TableProps = {
    students: Student[]
}

const StudentTable: FunctionComponent<TableProps> = ({students}) => {
    const deleteStudent = async (student: Student) => {
        if (confirm(`Are you sure you want to delete ${student.firstName}?`)) {
            const response = fetch(`/api/`)
        }
    }

    const editStudent = () => {
        // Show Edit Student Modal
    }

    return (
        <>
            <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-6"
                                    >
                                        First Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                                    >
                                        Last Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                                    >
                                        Email
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                                    >
                                        Age
                                    </th>
                                    <th scope="col" className="relative py-3 pl-3 pr-4 sm:pr-6">
                                        <span className="sr-only">Edit / Delete</span>
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                {students.map((student) => (
                                    <tr key={student.email}>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                            {student.firstName}
                                        </td>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                            {student.lastName}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{student.email}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{student.age}</td>
                                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 space-x-2 text-right text-sm font-medium sm:pr-6">
                                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                Edit<span className="sr-only">, {`${student.firstName} ${student.lastName}`}</span>
                                            </a>
                                            <a href="#" className="text-red-600 hover:text-indigo-900">
                                                Delete<span className="sr-only">, {`${student.firstName} ${student.lastName}`}</span>
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StudentTable;
