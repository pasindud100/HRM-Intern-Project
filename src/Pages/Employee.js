// import React from 'react';
// import { Card, Nav, Tab } from 'react-bootstrap';
// import AllEmployees from './AllEmployees';  // Correct component name
// import Appointment from './Appointment';  // Correct component name

// const Employee = () => {
//     return (
//         <Tab.Container defaultActiveKey="AllEmployees"> {/* Corrected defaultActiveKey */}
//             <Card>
//                 {/* Horizontal Navbar in Card.Header */}
//                 <Card.Header>
//                     <Nav variant="tabs">
//                         <Nav.Item>
//                             <Nav.Link eventKey="AllEmployees">All Employees</Nav.Link>  {/* Corrected eventKey */}
//                         </Nav.Item>
//                         <Nav.Item>
//                             <Nav.Link eventKey="Appointment">Appointment</Nav.Link>  {/* Corrected eventKey */}
//                         </Nav.Item>
//                     </Nav>
//                 </Card.Header>

//                 <Card.Body>
//                     <Tab.Content>
//                         {/* All Employees Content */}
//                         <Tab.Pane eventKey="AllEmployees">  {/* Corrected eventKey */}
//                             <AllEmployees />  {/* Corrected component name */}
//                         </Tab.Pane>

//                         {/* Appointment Content */}
//                         <Tab.Pane eventKey="Appointment">  {/* Corrected eventKey */}
//                             <Appointment />  {/* Corrected component name */}
//                         </Tab.Pane>
//                     </Tab.Content>
//                 </Card.Body>
//             </Card>
//         </Tab.Container>
//     );
// };

// export default Employee;


import React, { useState } from 'react';
import { Card, Nav, Tab } from 'react-bootstrap';
import AllEmployees from './AllEmployees';
import Appointment from './Appointment';

// Define constants for event keys
const ALL_EMPLOYEES_KEY = 'AllEmployees';
const APPOINTMENT_KEY = 'Appointment';

const Employee = () => {
    const [activeKey, setActiveKey] = useState(ALL_EMPLOYEES_KEY);

    return (
        <Tab.Container activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
            <Card>
                {/* Horizontal Navbar in Card.Header */}
                <Card.Header>
                    <Nav variant="tabs">
                        <Nav.Item>
                            <Nav.Link eventKey={ALL_EMPLOYEES_KEY}>All Employees</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey={APPOINTMENT_KEY}>Appointment</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Card.Header>

                <Card.Body>
                    <Tab.Content>
                        {/* All Employees Content */}
                        <Tab.Pane eventKey={ALL_EMPLOYEES_KEY}>
                            <React.Suspense fallback={<div>Loading All Employees...</div>}>
                                <AllEmployees />
                            </React.Suspense>
                        </Tab.Pane>

                        {/* Appointment Content */}
                        <Tab.Pane eventKey={APPOINTMENT_KEY}>
                            <React.Suspense fallback={<div>Loading Appointment...</div>}>
                                <Appointment />
                            </React.Suspense>
                        </Tab.Pane>
                    </Tab.Content>
                </Card.Body>
            </Card>
        </Tab.Container>
    );
};

export default Employee;
