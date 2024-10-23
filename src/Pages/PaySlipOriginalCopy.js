import React, { useState } from 'react';
import { Form, Button, Alert, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const PaySlip = ({ payrunPeriod, payrunType, basicSalary, allowance, bonus, overtime, pensionContributions, welfareContributions }) => {
    const [bankAccountNumber, setBankAccountNumber] = useState('');
    const [bank, setBank] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleGeneratePaySlip = () => {
        // Validate the form fields
        if (!bankAccountNumber || !bank) {
            setErrorMessage('Please fill all fields.');
            return;
        }

        // Clear error message
        setErrorMessage('');

        // Generate Payslip as PDF
        const doc = new jsPDF();
        
        // Payrun details
        doc.text('PaySlip', 105, 10, null, null, 'center');
        doc.text(`Payrun Period: ${payrunPeriod}`, 10, 30);
        doc.text(`Payrun Generating Type: ${payrunType}`, 10, 40);

        // Employee bank details
        doc.text('Employee Bank Details:', 10, 60);
        doc.text(`Bank Account Number: ${bankAccountNumber}`, 10, 70);
        doc.text(`Bank: ${bank}`, 10, 80);

        // Salary and earnings details
        doc.text('Earnings:', 10, 100);
        doc.text(`Basic Salary: ${basicSalary}`, 10, 110);
        doc.text(`Allowance: ${allowance}`, 10, 120);
        doc.text(`Bonus: ${bonus}`, 10, 130);
        doc.text(`Overtime: ${overtime}`, 10, 140);

        // Deductions
        doc.text('Deductions:', 10, 160);
        doc.text(`Pension Scheme Contributions: ${pensionContributions}`, 10, 170);
        doc.text(`Welfare Fund Contributions: ${welfareContributions}`, 10, 180);

        // Save the PDF
        doc.save(`Payslip_${bankAccountNumber}.pdf`);
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