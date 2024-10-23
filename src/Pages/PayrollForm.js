//--------------------------------------------------------------------------------------------------------------------------------

// import React, { useState } from 'react';
// import { Card, Nav, Tab, Breadcrumb, Alert, Form, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import ValueForm from './ValueForm';  
// import PaySlip from './PaySlip';  
// import { employeesData } from './AllEmployees';  
// import { employeesAttendanceDetails } from './AttendanceDetails'; 

// const Payroll = () => {
//     const [selectedEmployeeId, setSelectedEmployeeId] = useState('');
//     const [employeeDetails, setEmployeeDetails] = useState(null);
//     const [payMonth, setPayMonth] = useState('');
//     const [payYear, setPayYear] = useState('');
//     const [workedHours, setWorkedHours] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');

//     const handleEmployeeSelect = (e) => {
//         const selectedId = e.target.value;
//         setSelectedEmployeeId(selectedId);

//         const selectedEmployee = employeesData.find(emp => emp.id === selectedId);
//         if (selectedEmployee) {
//             setEmployeeDetails(selectedEmployee);
//             setWorkedHours(''); // Reset worked hours when changing employee
//         }
//     };

//     const handleMonthChange = (e) => {
//         const selectedMonth = e.target.value;
//         setPayMonth(selectedMonth);

//         if (employeeDetails) {
//             const hours = getWorkedHours(employeeDetails.profile, selectedMonth);
//             setWorkedHours(hours);
//         }
//     };

//     const getWorkedHours = (employeeName, month) => {
//         const employeeData = employeesAttendanceDetails.find(emp => emp.EmployeeNames === employeeName);
//         return employeeData ? employeeData[month] : 'N/A';
//     };

//     const handleSave = () => {
//         if (!selectedEmployeeId || !payMonth || !payYear) {
//             setErrorMessage('Please fill in all fields');
//             return;
//         } else {
//             setErrorMessage('');
//             alert("Data saved successfully.");
//         }
//     };

//     const handleCancel = () => {
//         setSelectedEmployeeId('');
//         setEmployeeDetails(null);
//         setPayMonth('');
//         setPayYear('');
//         setWorkedHours('');
//         setErrorMessage('');
//     };

//     // Array of months
//     const months = [
//         { value: '', label: 'Select Month' },
//         { value: 'January', label: 'January' },
//         { value: 'February', label: 'February' },
//         { value: 'March', label: 'March' },
//         { value: 'April', label: 'April' },
//         { value: 'May', label: 'May' },
//         { value: 'June', label: 'June' },
//         { value: 'July', label: 'July' },
//         { value: 'August', label: 'August' },
//         { value: 'September', label: 'September' },
//         { value: 'October', label: 'October' },
//         { value: 'November', label: 'November' },
//         { value: 'December', label: 'December' },
//     ];

//     const years = [];
//     for (let year = new Date().getFullYear(); year <= new Date().getFullYear() + 5; year++) {
//         years.push({ value: year, label: year });
//     }

//     return (
//         <Tab.Container defaultActiveKey="defaultPayrun">
//             <Card>
//                 <Card.Header>
//                     <Nav variant="tabs">
//                         <Nav.Item>
//                             <Nav.Link eventKey="defaultPayrun">Payrun</Nav.Link>
//                         </Nav.Item>
//                         <Nav.Item>
//                             <Nav.Link eventKey="value">Value</Nav.Link>
//                         </Nav.Item>
//                         <Nav.Item>
//                             <Nav.Link eventKey="payslip">Payslip</Nav.Link>
//                         </Nav.Item>
//                     </Nav>
//                 </Card.Header>

//                 <Card.Body>
//                     <Tab.Content>
//                         <Tab.Pane eventKey="defaultPayrun">
//                             <Breadcrumb>
//                                 <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/hrm" }}>HRM</Breadcrumb.Item>
//                                 <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/payroll" }}>Payroll</Breadcrumb.Item>
//                                 <Breadcrumb.Item active>Payrun</Breadcrumb.Item>
//                             </Breadcrumb>

//                             <Alert variant="info">
//                                 <Alert.Heading>How payrun works?</Alert.Heading>
//                                 <p>1. Pay run is applicable to generate pay slip for employees.</p>
//                                 <p>2. You can set pay run individually over the default from the <b>Employees</b> details.</p>
//                             </Alert>

//                             {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

//                             <Form>
//                                 <Form.Group controlId="employeeId">
//                                     <Form.Label>Employee ID</Form.Label>
//                                     <Form.Control as="select" value={selectedEmployeeId} onChange={handleEmployeeSelect}>
//                                         <option value="">Select Employee ID</option>
//                                         {employeesData.map((employee) => (
//                                             <option key={employee.id} value={employee.id}>{employee.id}</option>
//                                         ))}
//                                     </Form.Control>
//                                 </Form.Group>

//                                 {employeeDetails && (
//                                     <>
//                                         <Form.Group controlId="employeeName" className="mt-2">
//                                             <Form.Label>Employee Name</Form.Label>
//                                             <Form.Control type="text" value={employeeDetails.profile} readOnly />
//                                         </Form.Group>

//                                         <Form.Group controlId="joiningDate" className="mt-2">
//                                             <Form.Label>Joining Date</Form.Label>
//                                             <Form.Control type="text" value={employeeDetails.joiningDate} readOnly />
//                                         </Form.Group>

//                                         <Form.Group controlId="department" className="mt-2">
//                                             <Form.Label>Department</Form.Label>
//                                             <Form.Control type="text" value={employeeDetails.department} readOnly />
//                                         </Form.Group>

//                                         <Form.Group controlId="role" className="mt-2">
//                                             <Form.Label>Designation</Form.Label>
//                                             <Form.Control type="text" value={employeeDetails.role} readOnly />
//                                         </Form.Group>
//                                     </>
//                                 )}
//                                 <br></br>

//                                 <Form.Group controlId="payPeriod" className="d-flex align-items-center">
//                                     <Form.Label className="me-2">Pay Period:</Form.Label>
//                                     <Form.Control
//                                         as="select"
//                                         className="me-2"
//                                         value={payMonth}
//                                         onChange={handleMonthChange}
//                                     >
//                                         {months.map((month) => (
//                                             <option key={month.value} value={month.value}>
//                                                 {month.label}
//                                             </option>
//                                         ))}
//                                     </Form.Control>

//                                     <Form.Control
//                                         as="select"
//                                         value={payYear}
//                                         onChange={(e) => setPayYear(e.target.value)}
//                                     >
//                                         {years.map((year) => (
//                                             <option key={year.value} value={year.value}>
//                                                 {year.label}
//                                             </option>
//                                         ))}
//                                     </Form.Control>
//                                 </Form.Group>

//                                 <Form.Group controlId="workedHours" className="mt-2">
//                                     <Form.Label>Worked Hours for {payMonth}</Form.Label>
//                                     <Form.Control
//                                         type="text"
//                                         value={workedHours}
//                                         readOnly
//                                     />
//                                 </Form.Group>

//                                 <div className="mt-4">
//                                     <Button variant="primary" onClick={handleSave}>Save</Button>
//                                     <Button variant="secondary" className="ms-2" onClick={handleCancel}>Cancel</Button>
//                                 </div>
//                             </Form>
//                         </Tab.Pane>

//                         <Tab.Pane eventKey="value">
//                             <ValueForm />
//                         </Tab.Pane>

//                         <Tab.Pane eventKey="payslip">
//                             <PaySlip />
//                         </Tab.Pane>
//                     </Tab.Content>
//                 </Card.Body>
//             </Card>
//         </Tab.Container>
//     );
// };

// export default Payroll;

//-------------------------------------Base code------------------------------------------------------------------------------------------------


// import React, { useState } from 'react';
// import { Card, Nav, Tab, Breadcrumb, Alert, Form, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import ValueForm from './ValueForm';  
// import PaySlip from './PaySlip';  
// import { employeesData } from './AllEmployees';  
// import { employeesAttendanceDetails } from './AttendanceDetails'; 

// export const PayrollFormDetails = [
//     {
//         EmployeeID: "",
//         EmployeeName: "",
//         JoiningDate: "",
//         PayPeriod: "",
//         WorkedHoursfor: "",
//     },
// ];

// const Payroll = () => {
//     const [selectedEmployeeId, setSelectedEmployeeId] = useState('');
//     const [employeeDetails, setEmployeeDetails] = useState(null);
//     const [payMonth, setPayMonth] = useState('');
//     const [payYear, setPayYear] = useState('');
//     const [workedHours, setWorkedHours] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');

//     const handleEmployeeSelect = (e) => {
//         const selectedId = e.target.value;
//         setSelectedEmployeeId(selectedId);

//         const selectedEmployee = employeesData.find(emp => emp.id === selectedId);
//         if (selectedEmployee) {
//             setEmployeeDetails(selectedEmployee);
//             setWorkedHours(''); // Reset worked hours when changing employee
//         }
//     };

//     const handleMonthChange = (e) => {
//         const selectedMonth = e.target.value;
//         setPayMonth(selectedMonth);

//         if (employeeDetails) {
//             const hours = getWorkedHours(employeeDetails.profile, selectedMonth);
//             setWorkedHours(hours);
//         }
//     };

//     const getWorkedHours = (employeeName, month) => {
//         const employeeData = employeesAttendanceDetails.find(emp => emp.EmployeeNames === employeeName);
//         return employeeData ? employeeData[month] : 'N/A';
//     };

//     const handleSave = () => {
//         if (!selectedEmployeeId || !payMonth || !payYear) {
//             setErrorMessage('Please fill in all fields');
//             return;
//         } else {
//             setErrorMessage('');
//             alert("Data saved successfully.");
//         }
//     };

//     const handleCancel = () => {
//         setSelectedEmployeeId('');
//         setEmployeeDetails(null);
//         setPayMonth('');
//         setPayYear('');
//         setWorkedHours('');
//         setErrorMessage('');
//     };

//     // Array of months
//     const months = [
//         { value: '', label: 'Select Month' },
//         { value: 'January', label: 'January' },
//         { value: 'February', label: 'February' },
//         { value: 'March', label: 'March' },
//         { value: 'April', label: 'April' },
//         { value: 'May', label: 'May' },
//         { value: 'June', label: 'June' },
//         { value: 'July', label: 'July' },
//         { value: 'August', label: 'August' },
//         { value: 'September', label: 'September' },
//         { value: 'October', label: 'October' },
//         { value: 'November', label: 'November' },
//         { value: 'December', label: 'December' },
//     ];

//     const years = [{ value: '', label: 'Select Year' }];
//     for (let year = new Date().getFullYear(); year <= new Date().getFullYear() + 5; year++) {
//         years.push({ value: year, label: year });
//     }

//     return (
//         <Tab.Container defaultActiveKey="defaultPayrun">
//             <Card>
//                 <Card.Header>
//                     <Nav variant="tabs">
//                         <Nav.Item>
//                             <Nav.Link eventKey="defaultPayrun">Payrun</Nav.Link>
//                         </Nav.Item>
//                         <Nav.Item>
//                             <Nav.Link eventKey="value">Value</Nav.Link>
//                         </Nav.Item>
//                         <Nav.Item>
//                             <Nav.Link eventKey="payslip">Payslip</Nav.Link>
//                         </Nav.Item>
//                     </Nav>
//                 </Card.Header>

//                 <Card.Body>
//                     <Tab.Content>
//                         <Tab.Pane eventKey="defaultPayrun">
//                             <Breadcrumb>
//                                 <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/hrm" }}>HRM</Breadcrumb.Item>
//                                 <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/payroll" }}>Payroll</Breadcrumb.Item>
//                                 <Breadcrumb.Item active>Payrun</Breadcrumb.Item>
//                             </Breadcrumb>

//                             <Alert variant="info">
//                                 <Alert.Heading>How payrun works?</Alert.Heading>
//                                 <p>1. Pay run is applicable to generate pay slip for employees.</p>
//                                 <p>2. You can set pay run individually over the default from the <b>Employees</b> details.</p>
//                             </Alert>

//                             {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

//                             <Form>
//                                 <Form.Group controlId="employeeId">
//                                     <Form.Label>Employee ID</Form.Label>
//                                     <Form.Control as="select" value={selectedEmployeeId} onChange={handleEmployeeSelect}>
//                                         <option value="">Select Employee ID</option>
//                                         {employeesData.map((employee) => (
//                                             <option key={employee.id} value={employee.id}>{employee.id}</option>
//                                         ))} 
//                                     </Form.Control>
//                                 </Form.Group>

//                                 {employeeDetails && (
//                                     <>
//                                         <Form.Group controlId="employeeName" className="mt-2">
//                                             <Form.Label>Employee Name</Form.Label>
//                                             <Form.Control type="text" value={employeeDetails.profile} readOnly />
//                                         </Form.Group>

//                                         <Form.Group controlId="joiningDate" className="mt-2">
//                                             <Form.Label>Joining Date</Form.Label>
//                                             <Form.Control type="text" value={employeeDetails.joiningDate} readOnly />
//                                         </Form.Group>

//                                         <Form.Group controlId="department" className="mt-2">
//                                             <Form.Label>Department</Form.Label>
//                                             <Form.Control type="text" value={employeeDetails.department} readOnly />
//                                         </Form.Group>

//                                         <Form.Group controlId="role" className="mt-2">
//                                             <Form.Label>Designation</Form.Label>
//                                             <Form.Control type="text" value={employeeDetails.role} readOnly />
//                                         </Form.Group>
//                                     </>
//                                 )}
//                                 <br></br>

//                                 <Form.Group controlId="payPeriod" className="d-flex align-items-center">
//                                     <Form.Label className="me-2">Pay Period:</Form.Label>
//                                     <Form.Control
//                                         as="select"
//                                         className="me-2"
//                                         value={payMonth}
//                                         onChange={handleMonthChange}
//                                     >
//                                         {months.map((month) => (
//                                             <option key={month.value} value={month.value}>
//                                                 {month.label}
//                                             </option>
//                                         ))}
//                                     </Form.Control>

//                                     <Form.Control
//                                         as="select"
//                                         value={payYear}
//                                         onChange={(e) => setPayYear(e.target.value)}
//                                     >
//                                         {years.map((year) => (
//                                             <option key={year.value} value={year.value}>
//                                                 {year.label}
//                                             </option>
//                                         ))}
//                                     </Form.Control>
//                                 </Form.Group>

//                                 <Form.Group controlId="workedHours" className="mt-2">
//                                     <Form.Label>Worked Hours for {payMonth}</Form.Label>
//                                     <Form.Control
//                                         type="text"
//                                         value={workedHours}
//                                         readOnly
//                                     />
//                                 </Form.Group>

//                                 <div className="mt-4">
//                                     <Button variant="primary" onClick={handleSave}>Save</Button>
//                                     <Button variant="secondary" className="ms-2" onClick={handleCancel}>Cancel</Button>
//                                 </div>
//                             </Form>
//                         </Tab.Pane>

//                         <Tab.Pane eventKey="value">
//                             <ValueForm />
//                         </Tab.Pane>

//                         <Tab.Pane eventKey="payslip">
//                             <PaySlip />
//                         </Tab.Pane>
//                     </Tab.Content>
//                 </Card.Body>
//             </Card>
//         </Tab.Container>
//     );
// };

// export default Payroll;

//-----------------------------------------------------consist important update-------------------------------------------

import React, { useState } from 'react';
import { Card, Nav, Tab, Breadcrumb, Alert, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ValueForm from './ValueForm';  
import PaySlip from './PaySlip';  
import { employeesData } from './AllEmployees';  
import { employeesAttendanceDetails } from './AttendanceDetails'; 

export const PayrollFormDetails = [
    {
        EmployeeID: "",
        EmployeeName: "",
        JoiningDate: "",
        PayPeriod: "",
        WorkedHoursfor: "",
    },
];

const Payroll = () => {
    const [selectedEmployeeId, setSelectedEmployeeId] = useState('');
    const [employeeDetails, setEmployeeDetails] = useState(null);
    const [payMonth, setPayMonth] = useState('');
    const [payYear, setPayYear] = useState('');
    const [workedHours, setWorkedHours] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [payrollData, setPayrollData] = useState(null); // Added state to store payroll data

    const handleEmployeeSelect = (e) => {
        const selectedId = e.target.value;
        setSelectedEmployeeId(selectedId);

        const selectedEmployee = employeesData.find(emp => emp.id === selectedId);
        if (selectedEmployee) {
            setEmployeeDetails(selectedEmployee);
            setWorkedHours(''); // Reset worked hours when changing employee
        }
    };

    const handleMonthChange = (e) => {
        const selectedMonth = e.target.value;
        setPayMonth(selectedMonth);

        if (employeeDetails) {
            const hours = getWorkedHours(employeeDetails.profile, selectedMonth);
            setWorkedHours(hours);
        }
    };

    const getWorkedHours = (employeeName, month) => {
        const employeeData = employeesAttendanceDetails.find(emp => emp.EmployeeNames === employeeName);
        return employeeData ? employeeData[month] : 'N/A';
    };

    const handleSave = () => {
        if (!selectedEmployeeId || !payMonth || !payYear) {
            setErrorMessage('Please fill in all fields');
            return;
        } else {
            setErrorMessage('');

            // Gather all the relevant data
            const dataToExport = {
                EmployeeID: selectedEmployeeId,
                EmployeeName: employeeDetails.profile,
                JoiningDate: employeeDetails.joiningDate,
                Department: employeeDetails.department,
                Designation: employeeDetails.role,
                PayPeriod: `${payMonth} ${payYear}`,
                WorkedHours: workedHours,
            };

            // Export data to PaySlip
            setPayrollData(dataToExport);

            alert("Data saved successfully.");
        }
    };

    const handleCancel = () => {
        setSelectedEmployeeId('');
        setEmployeeDetails(null);
        setPayMonth('');
        setPayYear('');
        setWorkedHours('');
        setErrorMessage('');
    };

    // Array of months
    const months = [
        { value: '', label: 'Select Month' },
        { value: 'January', label: 'January' },
        { value: 'February', label: 'February' },
        { value: 'March', label: 'March' },
        { value: 'April', label: 'April' },
        { value: 'May', label: 'May' },
        { value: 'June', label: 'June' },
        { value: 'July', label: 'July' },
        { value: 'August', label: 'August' },
        { value: 'September', label: 'September' },
        { value: 'October', label: 'October' },
        { value: 'November', label: 'November' },
        { value: 'December', label: 'December' },
    ];

    const years = [{ value: '', label: 'Select Year' }];
    for (let year = new Date().getFullYear(); year <= new Date().getFullYear() + 5; year++) {
        years.push({ value: year, label: year });
    }

    return (
        <Tab.Container defaultActiveKey="defaultPayrun">
            <Card>
                <Card.Header>
                    <Nav variant="tabs">
                        <Nav.Item>
                            <Nav.Link eventKey="defaultPayrun">Payrun</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="value">Value</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="payslip">Payslip</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Card.Header>

                <Card.Body>
                    <Tab.Content>
                        <Tab.Pane eventKey="defaultPayrun">
                            <Breadcrumb>
                                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/hrm" }}>HRM</Breadcrumb.Item>
                                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/payroll" }}>Payroll</Breadcrumb.Item>
                                <Breadcrumb.Item active>Payrun</Breadcrumb.Item>
                            </Breadcrumb>

                            <Alert variant="info">
                                <Alert.Heading>How payrun works?</Alert.Heading>
                                <p>1. Pay run is applicable to generate pay slip for employees.</p>
                                <p>2. You can set pay run individually over the default from the <b>Employees</b> details.</p>
                            </Alert>

                            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

                            <Form>
                                <Form.Group controlId="employeeId">
                                    <Form.Label>Employee ID</Form.Label>
                                    <Form.Control as="select" value={selectedEmployeeId} onChange={handleEmployeeSelect}>
                                        <option value="">Select Employee ID</option>
                                        {employeesData.map((employee) => (
                                            <option key={employee.id} value={employee.id}>{employee.id}</option>
                                        ))} 
                                    </Form.Control>
                                </Form.Group>

                                {employeeDetails && (
                                    <>
                                        <Form.Group controlId="employeeName" className="mt-2">
                                            <Form.Label>Employee Name</Form.Label>
                                            <Form.Control type="text" value={employeeDetails.profile} readOnly />
                                        </Form.Group>

                                        <Form.Group controlId="joiningDate" className="mt-2">
                                            <Form.Label>Joining Date</Form.Label>
                                            <Form.Control type="text" value={employeeDetails.joiningDate} readOnly />
                                        </Form.Group>

                                        <Form.Group controlId="department" className="mt-2">
                                            <Form.Label>Department</Form.Label>
                                            <Form.Control type="text" value={employeeDetails.department} readOnly />
                                        </Form.Group>

                                        <Form.Group controlId="role" className="mt-2">
                                            <Form.Label>Designation</Form.Label>
                                            <Form.Control type="text" value={employeeDetails.role} readOnly />
                                        </Form.Group>
                                    </>
                                )}
                                <br></br>

                                <Form.Group controlId="payPeriod" className="d-flex align-items-center">
                                    <Form.Label className="me-2">Pay Period:</Form.Label>
                                    <Form.Control
                                        as="select"
                                        className="me-2"
                                        value={payMonth}
                                        onChange={handleMonthChange}
                                    >
                                        {months.map((month) => (
                                            <option key={month.value} value={month.value}>
                                                {month.label}
                                            </option>
                                        ))}
                                    </Form.Control>

                                    <Form.Control
                                        as="select"
                                        value={payYear}
                                        onChange={(e) => setPayYear(e.target.value)}
                                    >
                                        {years.map((year) => (
                                            <option key={year.value} value={year.value}>
                                                {year.label}
                                            </option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group controlId="workedHours" className="mt-2">
                                    <Form.Label>Worked Hours for {payMonth}</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={workedHours}
                                        readOnly
                                    />
                                </Form.Group>

                                <div className="mt-4">
                                    <Button variant="primary" onClick={handleSave}>Save</Button>
                                    <Button variant="secondary" className="ms-2" onClick={handleCancel}>Cancel</Button>
                                </div>
                            </Form>
                        </Tab.Pane>

                        <Tab.Pane eventKey="value">
                            <ValueForm />
                        </Tab.Pane>

                        <Tab.Pane eventKey="payslip">
                            <PaySlip payrollData={payrollData} /> {/* Passing data to PaySlip via props */}
                        </Tab.Pane>
                    </Tab.Content>
                </Card.Body>
            </Card>
        </Tab.Container>
    );
};

export default Payroll;

