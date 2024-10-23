//------------------------------------------------------------------------------
// import React, { useState, useEffect } from 'react';
// import { Form, Button, Alert, Breadcrumb } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';

// const PaySlip = ({ payrunPeriod, payrunType, basicSalary, allowance, bonus, overtime, pensionContributions, welfareContributions }) => {
//     const [employeeID, setEmployeeID] = useState('');
//     const [employeeName, setEmployeeName] = useState('');
//     const [employeeBankDetails, setEmployeeBankDetails] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');

//     const handleGeneratePaySlip = () => {
//         // Validate the form fields
//         if (!employeeID || !employeeName || !employeeBankDetails) {
//             setErrorMessage('Please fill all fields.');
//             return;
//         }

//         // Clear error message
//         setErrorMessage('');

//         // Generate Payslip as PDF
//         const doc = new jsPDF();
        
//         // Payrun details
//         doc.text('PaySlip', 105, 10, null, null, 'center');
//         doc.text(`Payrun Period: ${payrunPeriod}`, 10, 30);
//         doc.text(`Payrun Generating Type: ${payrunType}`, 10, 40);

//         // Employee details
//         doc.text('Employee Details:', 10, 60);
//         doc.text(`Employee ID: ${employeeID}`, 10, 70);
//         doc.text(`Employee Name: ${employeeName}`, 10, 80);
//         doc.text(`Employee Bank Details: ${employeeBankDetails}`, 10, 90);

//         // Salary and earnings details
//         doc.text('Earnings:', 10, 110);
//         doc.text(`Basic Salary: ${basicSalary}`, 10, 120);
//         doc.text(`Allowance: ${allowance}`, 10, 130);
//         doc.text(`Bonus: ${bonus}`, 10, 140);
//         doc.text(`Overtime: ${overtime}`, 10, 150);

//         // Deductions
//         doc.text('Deductions:', 10, 170);
//         doc.text(`Pension Scheme Contributions: ${pensionContributions}`, 10, 180);
//         doc.text(`Welfare Fund Contributions: ${welfareContributions}`, 10, 190);

//         // Save the PDF
//         doc.save(`Payslip_${employeeName}_${employeeID}.pdf`);
//     };

//     const handleCancel = () => {
//         setEmployeeID('');
//         setEmployeeName('');
//         setEmployeeBankDetails('');
//         setErrorMessage('');
//     };

//     return (
//         <div>
//             <Breadcrumb>
//                 <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/hrm" }}>HRM</Breadcrumb.Item>
//                 <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/payroll" }}>Payroll</Breadcrumb.Item>
//                 <Breadcrumb.Item active>PaySlip</Breadcrumb.Item>
//             </Breadcrumb>

//             <Alert variant="info">
//                 <Alert.Heading>Payslip Information</Alert.Heading>
//                 <p>Enter the employee details to generate the pay slip.</p>
//             </Alert>

//             {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

//             <Form>
//                 <Form.Group controlId="employeeID">
//                     <Form.Label>Employee ID</Form.Label>
//                     <Form.Control
//                         type="text"
//                         value={employeeID}
//                         onChange={(e) => setEmployeeID(e.target.value)}
//                         placeholder="Enter Employee ID"
//                     />
//                 </Form.Group>

//                 <Form.Group controlId="employeeName">
//                     <Form.Label>Employee Name</Form.Label>
//                     <Form.Control
//                         type="text"
//                         value={employeeName}
//                         onChange={(e) => setEmployeeName(e.target.value)}
//                         placeholder="Enter Employee Name"
//                     />
//                 </Form.Group>

//                 <Form.Group controlId="employeeBankDetails">
//                     <Form.Label>Employee Bank Details</Form.Label>
//                     <Form.Control
//                         type="text"
//                         value={employeeBankDetails}
//                         onChange={(e) => setEmployeeBankDetails(e.target.value)}
//                         placeholder="Enter Employee Bank Details"
//                     />
//                 </Form.Group>

//                 <div className="mt-4">
//                     <Button variant="primary" onClick={handleGeneratePaySlip}>
//                         Generate PaySlip
//                     </Button>
//                     <Button variant="secondary" className="ms-2" onClick={handleCancel}>
//                         Cancel
//                     </Button>
//                 </div>
//             </Form>
//         </div>
//     );
// };

// export default PaySlip;

//-------------------------------Base code---------Important--------------------------------------

// import React, { useState } from 'react';
// import { Form, Button, Alert, Breadcrumb } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';

// const PaySlip = ({ payrunPeriod, payrunType, basicSalary, allowance, bonus, overtime, pensionContributions, welfareContributions }) => {
//     const [bankAccountNumber, setBankAccountNumber] = useState('');
//     const [bank, setBank] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');

//     const handleGeneratePaySlip = () => {
//         // Validate the form fields
//         if (!bankAccountNumber || !bank) {
//             setErrorMessage('Please fill all fields.');
//             return;
//         }

//         // Clear error message
//         setErrorMessage('');

//         // Generate Payslip as PDF
//         const doc = new jsPDF();
        
//         // Payrun details
//         doc.text('PaySlip', 105, 10, null, null, 'center');
//         doc.text(`Payrun Period: ${payrunPeriod}`, 10, 30);
//         doc.text(`Payrun Generating Type: ${payrunType}`, 10, 40);

//         // Employee bank details
//         doc.text('Employee Bank Details:', 10, 60);
//         doc.text(`Bank Account Number: ${bankAccountNumber}`, 10, 70);
//         doc.text(`Bank: ${bank}`, 10, 80);

//         // Salary and earnings details
//         doc.text('Earnings:', 10, 100);
//         doc.text(`Basic Salary: ${basicSalary}`, 10, 110);
//         doc.text(`Allowance: ${allowance}`, 10, 120);
//         doc.text(`Bonus: ${bonus}`, 10, 130);
//         doc.text(`Overtime: ${overtime}`, 10, 140);

//         // Deductions
//         doc.text('Deductions:', 10, 160);
//         doc.text(`Pension Scheme Contributions: ${pensionContributions}`, 10, 170);
//         doc.text(`Welfare Fund Contributions: ${welfareContributions}`, 10, 180);

//         // Save the PDF
//         doc.save(`Payslip_${bankAccountNumber}.pdf`);
//     };

//     const handleCancel = () => {
//         setBankAccountNumber('');
//         setBank('');
//         setErrorMessage('');
//     };

//     return (
//         <div>
//             <Breadcrumb>
//                 <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/hrm" }}>HRM</Breadcrumb.Item>
//                 <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/payroll" }}>Payroll</Breadcrumb.Item>
//                 <Breadcrumb.Item active>PaySlip</Breadcrumb.Item>
//             </Breadcrumb>

//             <Alert variant="info">
//                 <Alert.Heading>Payslip Information</Alert.Heading>
//                 <p>Enter the bank details to generate the pay slip.</p>
//             </Alert>

//             {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

//             <Form>
//                 <Form.Group controlId="bankAccountNumber">
//                     <Form.Label>Bank Account Number:</Form.Label>
//                     <Form.Control
//                         type="text"
//                         value={bankAccountNumber}
//                         onChange={(e) => setBankAccountNumber(e.target.value)}
//                         placeholder="Enter Bank Account Number"
//                     />
//                 </Form.Group>

//                 <Form.Group controlId="bank">
//                     <Form.Label>Bank:</Form.Label>
//                     <Form.Control
//                         type="text"
//                         value={bank}
//                         onChange={(e) => setBank(e.target.value)}
//                         placeholder="Enter Bank Name"
//                     />
//                 </Form.Group>

//                 <div className="mt-4">
//                     <Button variant="primary" onClick={handleGeneratePaySlip}>
//                         Generate PaySlip
//                     </Button>
//                     <Button variant="secondary" className="ms-2" onClick={handleCancel}>
//                         Cancel
//                     </Button>
//                 </div>
//             </Form>
//         </div>
//     );
// };

// export default PaySlip;

//-------------------------------------------Important and most relevant update---------------------------------------------------------------------------

// import React, { useState } from 'react';
// import { Form, Button, Alert, Breadcrumb } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';
// import { PayrollFormDetails } from './PayrollForm'; 

// const PaySlip = ({
//     employeeId,
//     employeeName,
//     joiningDate,
//     department,
//     designation,
//     payrunPeriod,
//     workedHours,
//     basicSalary,
//     allowance,
//     bonus,
//     overtime,
//     pensionContributions,
//     welfareContributions
// }) => {
//     const [bankAccountNumber, setBankAccountNumber] = useState('');
//     const [bank, setBank] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');

//     const handleGeneratePaySlip = () => {
//         // Validate the form fields
//         if (!bankAccountNumber || !bank) {
//             setErrorMessage('Please fill all fields.');
//             return;
//         }

//         // Clear error message
//         setErrorMessage('');

//         // Generate Payslip as PDF
//         const doc = new jsPDF();

//         // Payslip Header
//         doc.text('PaySlip', 105, 10, null, null, 'center');

//         // Employee Details
//         doc.text('Employee Details:', 10, 30);
//         doc.text(`Employee ID: ${employeeId}`, 10, 40);
//         doc.text(`Employee Name: ${employeeName}`, 10, 50);
//         doc.text(`Joining Date: ${joiningDate}`, 10, 60);
//         doc.text(`Department: ${department}`, 10, 70);
//         doc.text(`Designation: ${designation}`, 10, 80);

//         // Payrun and Attendance Details
//         doc.text('Payrun Details:', 10, 100);
//         doc.text(`Pay Period: ${payrunPeriod}`, 10, 110);
//         doc.text(`Worked Hours for ${payrunPeriod}: ${workedHours}`, 10, 120);

//         // Salary and Earnings
//         doc.text('Earnings:', 10, 140);
//         doc.text(`Basic Salary: ${basicSalary}`, 10, 150);
//         doc.text(`Allowance: ${allowance}`, 10, 160);
//         doc.text(`Bonus: ${bonus}`, 10, 170);
//         doc.text(`Overtime: ${overtime}`, 10, 180);

//         // Deductions
//         doc.text('Deductions:', 10, 200);
//         doc.text(`Pension Scheme Contributions: ${pensionContributions}`, 10, 210);
//         doc.text(`Welfare Fund Contributions: ${welfareContributions}`, 10, 220);

//         // Employee Bank Details
//         doc.text('Employee Bank Details:', 10, 240);
//         doc.text(`Bank Account Number: ${bankAccountNumber}`, 10, 250);
//         doc.text(`Bank: ${bank}`, 10, 260);

//         // Save the PDF
//         doc.save(`Payslip_${employeeId}.pdf`);
//     };

//     const handleCancel = () => {
//         setBankAccountNumber('');
//         setBank('');
//         setErrorMessage('');
//     };

//     return (
//         <div>
//             <Breadcrumb>
//                 <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/hrm" }}>HRM</Breadcrumb.Item>
//                 <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/payroll" }}>Payroll</Breadcrumb.Item>
//                 <Breadcrumb.Item active>PaySlip</Breadcrumb.Item>
//             </Breadcrumb>

//             <Alert variant="info">
//                 <Alert.Heading>Payslip Information</Alert.Heading>
//                 <p>Enter the bank details to generate the pay slip.</p>
//             </Alert>

//             {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

//             <Form>
//                 <Form.Group controlId="bankAccountNumber">
//                     <Form.Label>Bank Account Number:</Form.Label>
//                     <Form.Control
//                         type="text"
//                         value={bankAccountNumber}
//                         onChange={(e) => setBankAccountNumber(e.target.value)}
//                         placeholder="Enter Bank Account Number"
//                     />
//                 </Form.Group>

//                 <Form.Group controlId="bank">
//                     <Form.Label>Bank:</Form.Label>
//                     <Form.Control
//                         type="text"
//                         value={bank}
//                         onChange={(e) => setBank(e.target.value)}
//                         placeholder="Enter Bank Name"
//                     />
//                 </Form.Group>

//                 <div className="mt-4">
//                     <Button variant="primary" onClick={handleGeneratePaySlip}>
//                         Generate PaySlip
//                     </Button>
//                     <Button variant="secondary" className="ms-2" onClick={handleCancel}>
//                         Cancel
//                     </Button>
//                 </div>
//             </Form>
//         </div>
//     );
// };

// export default PaySlip;

//------------------------------------------------------------------------------

// import React, { useState } from 'react';
// import { Form, Button, Alert, Breadcrumb } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';

// const PaySlip = ({ payrollData }) => {
//     const [bankAccountNumber, setBankAccountNumber] = useState('');
//     const [bank, setBank] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');

//     const handleGeneratePaySlip = () => {
//         // Validate the form fields
//         if (!bankAccountNumber || !bank) {
//             setErrorMessage('Please fill all fields.');
//             return;
//         }

//         // Clear error message
//         setErrorMessage('');

//         // Check if payrollData is present
//         if (!payrollData) {
//             setErrorMessage('No payroll data available to generate PaySlip.');
//             return;
//         }

//         // Generate Payslip as PDF
//         const doc = new jsPDF();

//         // Payslip Header
//         doc.text('PaySlip', 105, 10, null, null, 'center');

//         // Employee Details from PayrollForm.js
//         doc.text('Employee Details:', 10, 30);
//         doc.text(`Employee ID: ${payrollData.EmployeeID}`, 10, 40);
//         doc.text(`Employee Name: ${payrollData.EmployeeName}`, 10, 50);
//         doc.text(`Joining Date: ${payrollData.JoiningDate}`, 10, 60);
//         doc.text(`Department: ${payrollData.Department}`, 10, 70);
//         doc.text(`Designation: ${payrollData.Designation}`, 10, 80);

//         // Payrun and Attendance Details
//         doc.text('Payrun Details:', 10, 100);
//         doc.text(`Pay Period: ${payrollData.PayPeriod}`, 10, 110);
//         doc.text(`Worked Hours: ${payrollData.WorkedHours}`, 10, 120);

//         // Employee Bank Details
//         doc.text('Employee Bank Details:', 10, 140);
//         doc.text(`Bank Account Number: ${bankAccountNumber}`, 10, 150);
//         doc.text(`Bank: ${bank}`, 10, 160);

//         // Save the PDF
//         doc.save(`Payslip_${payrollData.EmployeeID}.pdf`);
//     };

//     const handleCancel = () => {
//         setBankAccountNumber('');
//         setBank('');
//         setErrorMessage('');
//     };

//     return (
//         <div>
//             <Breadcrumb>
//                 <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/hrm" }}>HRM</Breadcrumb.Item>
//                 <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/payroll" }}>Payroll</Breadcrumb.Item>
//                 <Breadcrumb.Item active>PaySlip</Breadcrumb.Item>
//             </Breadcrumb>

//             <Alert variant="info">
//                 <Alert.Heading>Payslip Information</Alert.Heading>
//                 <p>Enter the bank details to generate the pay slip.</p>
//             </Alert>

//             {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

//             <Form>
//                 <Form.Group controlId="bankAccountNumber">
//                     <Form.Label>Bank Account Number:</Form.Label>
//                     <Form.Control
//                         type="text"
//                         value={bankAccountNumber}
//                         onChange={(e) => setBankAccountNumber(e.target.value)}
//                         placeholder="Enter Bank Account Number"
//                     />
//                 </Form.Group>

//                 <Form.Group controlId="bank">
//                     <Form.Label>Bank:</Form.Label>
//                     <Form.Control
//                         type="text"
//                         value={bank}
//                         onChange={(e) => setBank(e.target.value)}
//                         placeholder="Enter Bank Name"
//                     />
//                 </Form.Group>

//                 <div className="mt-4">
//                     <Button variant="primary" onClick={handleGeneratePaySlip}>
//                         Generate PaySlip
//                     </Button>
//                     <Button variant="secondary" className="ms-2" onClick={handleCancel}>
//                         Cancel
//                     </Button>
//                 </div>
//             </Form>
//         </div>
//     );
// };

// export default PaySlip;

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

import React, { useState } from 'react';
import { Form, Button, Alert, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const PaySlip = ({ payrollData }) => {
    const [bankAccountNumber, setBankAccountNumber] = useState('');
    const [bank, setBank] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Retrieve salary data from local storage
    const salaryData = JSON.parse(localStorage.getItem("salaryData")) || {};

    const handleGeneratePaySlip = () => {
        // Validate the form fields
        if (!bankAccountNumber || !bank) {
            setErrorMessage('Please fill all fields.');
            return;
        }

        // Clear error message
        setErrorMessage('');

        // Check if payrollData is present
        if (!payrollData) {
            setErrorMessage('No payroll data available to generate PaySlip.');
            return;
        }

        // Calculate Net Salary
        const basicSalary = parseFloat(salaryData.basicSalary) || 0;
        const allowance = parseFloat(salaryData.allowance) || 0;
        const bonus = parseFloat(salaryData.bonus) || 0;
        const overtime = parseFloat(salaryData.overtime) || 0;
        const pensionContributions = parseFloat(salaryData.pensionContributions) || 0;
        const welfareContributions = parseFloat(salaryData.welfareContributions) || 0;

        const netSalary = basicSalary + allowance + bonus + overtime - pensionContributions - welfareContributions;

        // Generate Payslip as PDF
        const doc = new jsPDF();

        // Payslip Header
        doc.text('PaySlip', 105, 10, null, null, 'center');

        // Employee Details from PayrollForm.js
        doc.text('Employee Details:', 10, 30);
        doc.text(`Employee ID: ${payrollData.EmployeeID}`, 10, 40);
        doc.text(`Employee Name: ${payrollData.EmployeeName}`, 10, 50);
        doc.text(`Joining Date: ${payrollData.JoiningDate}`, 10, 60);
        doc.text(`Department: ${payrollData.Department}`, 10, 70);
        doc.text(`Designation: ${payrollData.Designation}`, 10, 80);

        // Payrun and Attendance Details
        doc.text('Payrun Details:', 10, 100);
        doc.text(`Pay Period: ${payrollData.PayPeriod}`, 10, 110);
        doc.text(`Worked Hours: ${payrollData.WorkedHours}`, 10, 120);

        // Salary Details from ValueForm.js
        doc.text('Salary Details:', 10, 140);
        doc.text(`Basic Salary: ${basicSalary.toFixed(2)}`, 10, 150);
        doc.text(`Allowance: ${allowance.toFixed(2)}`, 10, 160);
        doc.text(`Bonus: ${bonus.toFixed(2)}`, 10, 170);
        doc.text(`Overtime: ${overtime.toFixed(2)}`, 10, 180);
        doc.text(`Pension Contributions: ${pensionContributions.toFixed(2)}`, 10, 190);
        doc.text(`Welfare Contributions: ${welfareContributions.toFixed(2)}`, 10, 200);

        // Print Net Salary directly after Welfare Contributions
        doc.text(`Net Salary: ${netSalary.toFixed(2)}`, 10, 210); // Adjusted position to 210

        // Employee Bank Details
        doc.text('Employee Bank Details:', 10, 230);
        doc.text(`Bank Account Number: ${bankAccountNumber}`, 10, 240);
        doc.text(`Bank: ${bank}`, 10, 250);

        // Save the PDF
        doc.save(`Payslip_${payrollData.EmployeeID}.pdf`);
    };

    const handleCancel = () => {
        setBankAccountNumber('');
        setBank('');
        setErrorMessage('');
    };

    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/hrm" }}>HRM</Breadcrumb.Item>
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/payroll" }}>Payroll</Breadcrumb.Item>
                <Breadcrumb.Item active>PaySlip</Breadcrumb.Item>
            </Breadcrumb>

            <Alert variant="info">
                <Alert.Heading>Payslip Information</Alert.Heading>
                <p>Enter the bank details to generate the pay slip.</p>
            </Alert>

            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

            <Form>
                <Form.Group controlId="bankAccountNumber">
                    <Form.Label>Bank Account Number:</Form.Label>
                    <Form.Control
                        type="text"
                        value={bankAccountNumber}
                        onChange={(e) => setBankAccountNumber(e.target.value)}
                        placeholder="Enter Bank Account Number"
                    />
                </Form.Group>

                <Form.Group controlId="bank">
                    <Form.Label>Bank:</Form.Label>
                    <Form.Control
                        type="text"
                        value={bank}
                        onChange={(e) => setBank(e.target.value)}
                        placeholder="Enter Bank Name"
                    />
                </Form.Group>

                <div className="mt-4">
                    <Button variant="primary" onClick={handleGeneratePaySlip}>
                        Generate PaySlip
                    </Button>
                    <Button variant="secondary" className="ms-2" onClick={handleCancel}>
                        Cancel
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default PaySlip;
