import React from 'react';
import { SetStateAction, useState } from 'react';
import { Button, FormWrapper, Input, LinkButton, Textarea } from '@helpdice/ui';
import { Edit } from '@helpdice/icons';

const ProfileBody = () => {
    // Initial form data
    const initialValues = {
        name: 'John Doe',
        email: 'johndoe@example.com',
        bio: 'Passionate software engineer with 5+ years of experience in developing web applications.',
        skills: ['JavaScript', 'React', 'Node.js', 'HTML/CSS', 'MongoDB'],
        experience: [
            { title: 'Senior Software Engineer', company: 'XYZ Corp', dates: 'Jan 2020 - Present', description: ['Developed scalable web applications using React and Node.js.', 'Collaborated with cross-functional teams to deliver features on time.'] },
            { title: 'Software Engineer', company: 'ABC Ltd', dates: 'May 2017 - Dec 2019', description: ['Built and maintained APIs using Express and MongoDB.', 'Worked on performance optimization and bug fixes.'] },
        ],
        education: [{ degree: 'Bachelor of Computer Science', school: 'University of Tech', dates: '2013 - 2017' }],
        certifications: [
            {
                name: 'Certified JavaScript Developer',
                fromDate: '2019-01-01',
                toDate: '2019-12-31',
                institution: 'XYZ Institute',
                file: null,
            },
        ],
        contact: { phone: '+123 456 7890', linkedin: 'linkedin.com/in/johndoe' },
    };

    //   const validationSchema = Yup.object({
    //     name: Yup.string().required('Name is required'),
    //     email: Yup.string().email('Invalid email format').required('Email is required'),
    //     bio: Yup.string().required('Bio is required'),
    //     certifications: Yup.array().of(
    //       Yup.object({
    //         name: Yup.string().required('Certificate name is required'),
    //         fromDate: Yup.date().required('From date is required'),
    //         toDate: Yup.date().required('To date is required'),
    //         institution: Yup.string().required('Institution is required'),
    //         file: Yup.mixed().required('Certificate upload is required'),
    //       })
    //     ),
    //   });

    // Handle edit toggle
    const [editSection, setEditSection] = useState(null);

    const toggleEdit = (section: any) => {
        setEditSection(editSection === section ? null : section);
    };

    return (
        <div className="flex max-w-6xl mx-auto p-6">
            {/* Sidebar */}
            <div className="w-80 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <div className="text-center mb-6">
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Profile Picture"
                        className="w-36 h-36 rounded-full mx-auto mb-4"
                    />
                    <h2 className="text-xl font-semibold text-gray-800">John Doe</h2>
                    <p className="text-gray-500">Software Engineer</p>
                </div>
                <ul className="space-y-4">
                    <li className="text-lg cursor-pointer hover:bg-gray-200 hover:text-gray-800 rounded-lg p-2">Overview</li>
                    <li className="text-lg cursor-pointer hover:bg-gray-200 rounded-lg p-2">Skills</li>
                    <li className="text-lg cursor-pointer hover:bg-gray-200 rounded-lg p-2">Experience</li>
                    <li className="text-lg cursor-pointer hover:bg-gray-200 rounded-lg p-2">Education</li>
                    <li className="text-lg cursor-pointer hover:bg-gray-200 rounded-lg p-2">Certifications</li>
                    <li className="text-lg cursor-pointer hover:bg-gray-200 rounded-lg p-2">Contact</li>
                </ul>
            </div>

            {/* Profile Content */}
            <div className="flex-1 p-6">
                <FormWrapper
                    initialValues={initialValues}
                    //   validationSchema={validationSchema}
                    onSubmit={(values) => {
                        console.log('Form data submitted:', values);
                    }}
                >
                    {({ values, errors, touched, handleChange, setFieldValue }) => (
                        <form>
                            {/* Overview Section */}
                            <section className="mb-8">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-400">Overview</h3>
                                    <Button
                                        type="button"
                                        className="text-blue-500"
                                        icon={editSection === 'bio' ? 'Cancel' : <Edit />}
                                        onClick={() => toggleEdit('bio')}
                                    />
                                </div>
                                {editSection === 'bio' ? (
                                    <Textarea
                                        name="bio"
                                        width="100%"
                                        rows={4}
                                        className="w-full p-3 border border-gray-300 rounded-lg"
                                    />
                                ) : (
                                    <p className="text-gray-600">{values.bio}</p>
                                )}
                                {errors.bio && touched.bio && (
                                    <div className="text-red-500 text-sm">{errors.bio}</div>
                                )}
                            </section>

                            {/* Skills Section */}
                            <section className="mb-8">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-400">Skills</h3>
                                    <Button
                                        type="button"
                                        className="text-blue-500"
                                        icon={editSection === 'skills' ? 'Cancel' : <Edit />}
                                        onClick={() => toggleEdit('skills')}
                                    />
                                </div>
                                {editSection === 'skills' ? (
                                    <div>
                                        {values.skills.map((skill, index) => (
                                            <div key={`${index}-${skill}`} className="mb-4">
                                                <Input
                                                    name={`skills[${index}]`}
                                                    className="w-full p-3 border border-gray-300 rounded-lg"
                                                    placeholder="Enter skill"
                                                />
                                                <button
                                                    type="button"
                                                    // onClick={() => values.remove(index)}
                                                    className="text-red-500 mt-2"
                                                >
                                                    Remove Skill
                                                </button>
                                            </div>
                                        ))}
                                        <button
                                            type="button"
                                            className="mt-4 bg-blue-500 text-white p-2 rounded"
                                        // onClick={() => arrayHelpers.push('')}
                                        >
                                            Add Skill
                                        </button>
                                    </div>
                                ) : (
                                    <ul className="list-disc pl-6 text-gray-600">
                                        {values.skills.map((skill, index) => (
                                            <li key={index}>{skill}</li>
                                        ))}
                                    </ul>
                                )}
                            </section>

                            {/* Experience Section */}
                            <section className="mb-8">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-400">Experience</h3>
                                    <Button
                                        type="button"
                                        className="text-blue-500"
                                        icon={editSection === 'experience' ? 'Cancel' : 'Edit'}
                                        onClick={() => toggleEdit('experience')}
                                    />
                                </div>
                                {editSection === 'experience' ? (
                                    <div>
                                        {values.experience.map((exp, index) => (
                                            <div key={index} className="mb-6">
                                                <Input
                                                    name={`experience[${index}].title`}
                                                    className="w-full p-3 border border-gray-300 rounded-lg mb-2"
                                                    placeholder="Job Title"
                                                />
                                                <Input
                                                    name={`experience[${index}].company`}
                                                    className="w-full p-3 border border-gray-300 rounded-lg mb-2"
                                                    placeholder="Company"
                                                />
                                                <Input
                                                    name={`experience[${index}].dates`}
                                                    className="w-full p-3 border border-gray-300 rounded-lg mb-2"
                                                    placeholder="Dates"
                                                />
                                                <Input
                                                    name={`experience[${index}].description`}
                                                    className="w-full p-3 border border-gray-300 rounded-lg mb-2"
                                                    placeholder="Responsibilities"
                                                />
                                                <button
                                                    type="button"
                                                    // onClick={() => arrayHelpers.remove(index)}
                                                    className="text-red-500 mt-2"
                                                >
                                                    Remove Experience
                                                </button>
                                            </div>
                                        ))}
                                        <button
                                            type="button"
                                            className="mt-4 bg-blue-500 text-white p-2 rounded"
                                        // onClick={() => arrayHelpers.push({ title: '', company: '', dates: '', description: '' })}
                                        >
                                            Add Experience
                                        </button>
                                    </div>
                                ) : (
                                    values.experience.map((exp, index) => (
                                        <div key={index}>
                                            <h4 className="text-xl font-semibold text-gray-700">{exp.title}</h4>
                                            <p className="text-gray-500">{exp.company}</p>
                                            <p className="text-gray-600">{exp.dates}</p>
                                            <ul className="list-disc pl-6 text-gray-600">
                                                {exp.description.map((desc, idx) => (
                                                    <li key={idx}>{desc}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))
                                )}
                            </section>

                            {/* Certifications Section */}
                            <section className="mb-8">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-400">Certifications</h3>
                                    <button
                                        type="button"
                                        className="text-blue-500"
                                        onClick={() => toggleEdit('certifications')}
                                    >
                                        {editSection === 'certifications' ? 'Cancel' : 'Edit'}
                                    </button>
                                </div>
                                {editSection === 'certifications' ? (
                                    <div>
                                        {values.certifications.map((certification, index) => (
                                            <div key={index} className="mb-6">
                                                <Input
                                                    name={`certifications[${index}].name`}
                                                    className="w-full p-3 border border-gray-300 rounded-lg mb-2"
                                                    placeholder="Certificate Name"
                                                />
                                                <Input
                                                    name={`certifications[${index}].fromDate`}
                                                    type="date"
                                                    className="w-full p-3 border border-gray-300 rounded-lg mb-2"
                                                />
                                                <Input
                                                    name={`certifications[${index}].toDate`}
                                                    type="date"
                                                    className="w-full p-3 border border-gray-300 rounded-lg mb-2"
                                                />
                                                <Input
                                                    name={`certifications[${index}].institution`}
                                                    className="w-full p-3 border border-gray-300 rounded-lg mb-2"
                                                    placeholder="Institution"
                                                />
                                                <input
                                                    type="file"
                                                    name={`certifications[${index}].file`}
                                                    onChange={(event) => {
                                                        // setFieldValue(
                                                        //     `certifications[${index}].file`,
                                                        //     event.currentTarget.files[0]
                                                        // )
                                                    }
                                                    }
                                                    className="w-full p-3 border border-gray-300 rounded-lg mb-2"
                                                />
                                                {/* {errors.certifications?.[index]?.file && touched.certifications?.[index]?.file && (
                                                    <div className="text-red-500 text-sm">{errors.certifications[index].file}</div>
                                                )} */}
                                                <button
                                                    type="button"
                                                    // onClick={() => arrayHelpers.remove(index)}
                                                    className="text-red-500 mt-2"
                                                >
                                                    Remove Certification
                                                </button>
                                            </div>
                                        ))}
                                        <button
                                            type="button"
                                            className="mt-4 bg-blue-500 text-white p-2 rounded"
                                            onClick={() => {
                                                // arrayHelpers.push({
                                                //     name: '',
                                                //     fromDate: '',
                                                //     toDate: '',
                                                //     institution: '',
                                                //     file: null,
                                                // })
                                            }
                                            }
                                        >
                                            Add Certification
                                        </button>
                                    </div>
                                ) : (
                                    <ul className="list-none pl-0 text-gray-600">
                                        {values.certifications.map((certification, index) => (
                                            <li key={index} className="mb-4">
                                                <p className="font-semibold text-lg">{certification.name}</p>
                                                <p className="text-sm text-gray-500">{certification.institution}</p>
                                                <p className="text-sm text-gray-600">{certification.fromDate} - {certification.toDate}</p>
                                                {certification.file && (
                                                    <p className="text-blue-500 text-sm">
                                                        <a href={URL.createObjectURL(certification.file)} target="_blank" rel="noopener noreferrer">
                                                            View Certificate
                                                        </a>
                                                    </p>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </section>

                            {/* Submit Button */}
                            <div className="mt-8">
                                <button type="submit" className="bg-blue-600 text-white p-3 rounded-lg w-full">
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    )}
                </FormWrapper>
            </div>
        </div>
    );
};

export default ProfileBody;
