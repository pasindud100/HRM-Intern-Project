import React, { useState } from 'react';
import { Card, Table, Button, Form, Dropdown, Pagination } from 'react-bootstrap';
import { BsCheckCircle } from 'react-icons/bs'; // Importing a check mark icon
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import DatePicker styles

const Request = () => {
    const initialTableData = [
        { profile: 'Jeremy Neigh', punchIn: '10/08/2024', punchOut: 'Design', type: 'Design', totalHours: '15h 40m', status: 'Success', approved: false },
        { profile: 'Annette Black', punchIn: '10/08/2024', punchOut: 'Product', type: 'Product', totalHours: '11h 45m', status: 'Busy', approved: false },
        { profile: 'Theresa Webb', punchIn: '10/08/2024', punchOut: 'Marketing', type: 'Marketing', totalHours: '10h 25m', status: 'Ready', approved: false },
        { profile: 'Kathryn Murphy', punchIn: '10/08/2024', punchOut: 'Support', type: 'Support', totalHours: '16h 55m', status: 'Loop', approved: false },
        { profile: 'Courtney Henry', punchIn: '10/08/2024', punchOut: 'Operations', type: 'Operations', totalHours: '15h 45m', status: 'No actions performed', approved: false },
        { profile: 'Jane Cooper', punchIn: '10/08/2024', punchOut: 'HR', type: 'HR', totalHours: '10h 45m', status: 'Config change', approved: false },
    ];

    const [tableData, setTableData] = useState(initialTableData);
    const [editIndex, setEditIndex] = useState(null);
    const [editedRow, setEditedRow] = useState({});
    const [searchTerm, setSearchTerm] = useState('');

    const handleEdit = (index) => {
        setEditIndex(index);
        setEditedRow({ ...tableData[index] });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedRow((prev) => ({ ...prev, [name]: value }));
    };

    const handleDateChange = (date) => {
        setEditedRow((prev) => ({ ...prev, punchIn: date }));
    };

    const handleSave = () => {
        const newData = [...tableData];
        newData[editIndex] = { ...editedRow, punchIn: formatDate(editedRow.punchIn) }; // Save with formatted date
        setTableData(newData);
        setEditIndex(null);
    };

    const handleApprove = (index) => {
        const newData = [...tableData];
        newData[index].approved = !newData[index].approved;
        setTableData(newData);
    };

    const handleDelete = (index) => {
        const newData = tableData.filter((_, i) => i !== index);
        setTableData(newData);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const formatDate = (date) => {
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        return new Date(date).toLocaleDateString('en-US', options); // Format date to MM/DD/YYYY
    };

    const filteredData = tableData.filter((row) =>
        row.profile.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.punchIn.includes(searchTerm) ||
        row.status.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const punchOutOptions = ['Design', 'Product', 'Marketing', 'Support', 'Operations', 'HR'];
    const statusOptions = ['Success', 'Busy', 'Ready', 'Loop', 'No actions performed', 'Config change'];

    return (
        <Card>
            <Card.Header className="d-flex justify-content-between align-items-center">
                <h5>Request</h5>
                <Button variant="primary">{tableData.length} Req Attendance</Button>
            </Card.Header>

            <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="btn-group" role="group">
                        <Button variant="outline-primary" className="me-2">Apply between</Button>
                        <Button variant="outline-primary" className="me-2">Department</Button>
                        <Button variant="outline-primary" className="me-2">Work shift</Button>
                        <Button variant="outline-primary" className="me-2">Rejected</Button>
                        <Button variant="outline-primary">Duration</Button>
                    </div>
                    <Form className="d-flex" style={{ width: '400px' }}>
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </Form>
                </div>

                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Employee Names</th>
                            <th>Punch In</th>
                            <th>Punch Out</th>
                            <th>Type</th>
                            <th>Total Hours</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((row, index) => (
                            <tr key={index}>
                                <td>
                                    {editIndex === index ? (
                                        <Form.Control
                                            type="text"
                                            name="profile"
                                            value={editedRow.profile}
                                            onChange={handleChange}
                                        />
                                    ) : (
                                        <>
                                            {row.approved && <BsCheckCircle color="green" />} {row.profile}
                                        </>
                                    )}
                                </td>
                                <td>
                                    {editIndex === index ? (
                                        <DatePicker
                                            selected={new Date(editedRow.punchIn)}
                                            onChange={handleDateChange}
                                            dateFormat="MM/dd/yyyy"
                                        />
                                    ) : (
                                        row.punchIn
                                    )}
                                </td>
                                <td>
                                    {editIndex === index ? (
                                        <Form.Control
                                            as="select"
                                            name="punchOut"
                                            value={editedRow.punchOut}
                                            onChange={handleChange}
                                        >
                                            {punchOutOptions.map((option) => (
                                                <option key={option} value={option}>{option}</option>
                                            ))}
                                        </Form.Control>
                                    ) : (
                                        row.punchOut
                                    )}
                                </td>
                                <td>
                                    {editIndex === index ? (
                                        <Form.Control
                                            as="select"
                                            name="type"
                                            value={editedRow.type}
                                            onChange={handleChange}
                                        >
                                            {punchOutOptions.map((option) => (
                                                <option key={option} value={option}>{option}</option>
                                            ))}
                                        </Form.Control>
                                    ) : (
                                        row.type
                                    )}
                                </td>
                                <td>
                                    {editIndex === index ? (
                                        <Form.Control
                                            type="text"
                                            name="totalHours"
                                            value={editedRow.totalHours}
                                            onChange={handleChange}
                                        />
                                    ) : (
                                        row.totalHours
                                    )}
                                </td>
                                <td>
                                    {editIndex === index ? (
                                        <Form.Control
                                            as="select"
                                            name="status"
                                            value={editedRow.status}
                                            onChange={handleChange}
                                        >
                                            {statusOptions.map((option) => (
                                                <option key={option} value={option}>{option}</option>
                                            ))}
                                        </Form.Control>
                                    ) : (
                                        row.status
                                    )}
                                </td>
                                <td className="text-center">
                                    <Dropdown>
                                        <Dropdown.Toggle variant="link" className="text-dark">
                                            <i className="bi bi-three-dots"></i>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            {editIndex === index ? (
                                                <>
                                                    <Dropdown.Item onClick={handleSave}>Save</Dropdown.Item>
                                                    <Dropdown.Item onClick={() => handleApprove(index)}>
                                                        {row.approved ? 'Unapprove' : 'Approve'}
                                                    </Dropdown.Item>
                                                    <Dropdown.Item onClick={() => handleDelete(index)} className="text-danger">Delete</Dropdown.Item>

                                                </>
                                            ) : (
                                                <>
                                                    <Dropdown.Item onClick={() => handleEdit(index)}>Edit</Dropdown.Item>
                                                    <Dropdown.Item onClick={() => handleApprove(index)}>
                                                        {row.approved ? 'Unapprove' : 'Approve'}
                                                    </Dropdown.Item>
                                                    <Dropdown.Item onClick={() => handleDelete(index)} className="text-danger">Delete</Dropdown.Item>
                                                </>
                                            )}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

                <div className="d-flex justify-content-between align-items-center">
                    <Pagination>
                        <Pagination.Prev />
                        <Pagination.Item>1</Pagination.Item>
                        <Pagination.Item>2</Pagination.Item>
                        <Pagination.Item>3</Pagination.Item>
                        <Pagination.Next />
                    </Pagination>

                    <Form.Group controlId="formPageSize" className="d-flex align-items-center">
                        <Form.Label className="me-2 mb-0">Page:</Form.Label>
                        <Form.Control as="select" defaultValue="10" style={{ width: 'auto' }}>
                            <option>10</option>
                            <option>20</option>
                            <option>50</option>
                            <option>100</option>
                        </Form.Control>
                    </Form.Group>
                </div>
            </Card.Body>
        </Card>
    );
};

export default Request;
