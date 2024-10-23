// import React, { useState } from "react";
// import {
//   Table,
//   Button,
//   OverlayTrigger,
//   Tooltip,
//   Card,
//   Form,
// } from "react-bootstrap";

// const Taskallocation = ({ setActiveKey }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [showForm, setShowForm] = useState(false); // this for hide abd show the form
//   const tasksPerPage = 4;

//   const RecentlyAddedTasks = [
//     {
//       id: "001",
//       name: "UI Design",
//       assignedTo: "Kamal Perera",
//       assignedBy: "Saman Silva",
//       priority: "High",
//       estimatedTime: "4h",
//       deadline: "2024/10/15",
//       description:
//         "Design user interface for the main application page using Figma and Adobe tools.",
//     },
//     {
//       id: "002",
//       name: "API Development",
//       assignedTo: "Nimal Fernando",
//       assignedBy: "Sunil Jayasinghe",
//       priority: "Medium",
//       estimatedTime: "6h",
//       deadline: "2024/10/20",
//       description:
//         "Develop and integrate APIs for frontend communication and data flow.",
//     },
//     {
//       id: "003",
//       name: "Database Setup",
//       assignedTo: "Sunil Silva",
//       assignedBy: "Kasun Fernando",
//       priority: "Low",
//       estimatedTime: "2h",
//       deadline: "2024/10/18",
//       description:
//         "Set up MySQL database schema and initial configurations for data storage.",
//     },
//     {
//       id: "004",
//       name: "Frontend Development",
//       assignedTo: "Saman Weerasinghe",
//       assignedBy: "Chathura Jayawardena",
//       priority: "High",
//       estimatedTime: "8h",
//       deadline: "2024/10/25",
//       description:
//         "Implement responsive UI components and integrate with backend APIs.",
//     },
//     {
//       id: "005",
//       name: "Deployment",
//       assignedTo: "Chathura Jayawardena",
//       assignedBy: "Dinesh Wijesinghe",
//       priority: "Medium",
//       estimatedTime: "3h",
//       deadline: "2024/10/30",
//       description:
//         "Deploy the final version of the application to production servers.",
//     },
//     {
//       id: "006",
//       name: "Bug Fixing",
//       assignedTo: "Dinesh Wijesinghe",
//       assignedBy: "Kasun Fernando",
//       priority: "High",
//       estimatedTime: "5h",
//       deadline: "2024/10/12",
//       description:
//         "Identify and fix critical bugs reported during the testing phase.",
//     },
//   ];

//   // this for calculat current tasks for pagination
//   const indexOfLastTask = currentPage * tasksPerPage;
//   const indexOfFirstTask = indexOfLastTask - tasksPerPage;
//   const currentTasks = RecentlyAddedTasks.slice(
//     indexOfFirstTask,
//     indexOfLastTask
//   );

//   const viewAllTasks = () => {
//     setActiveKey("Taskdetails"); // to navigate to task details
//   };

//   const toggleForm = () => {
//     setShowForm((prev) => !prev); // show and hide(toggle) form visibility
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//   };

//   return (
//     <div>
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <h3>Task Allocation</h3>
//         <Button className="mr-4" variant="primary" onClick={toggleForm}>
//           Add new Task
//         </Button>{" "}
//       </div>
//       <Card className="p-4 mt-4">
//         {showForm && (
//           <>
//             <h5 className="text-center mb-4 text-decoration-underline">
//               Create new Task
//             </h5>
//             <Form onSubmit={handleSubmit} className="mb-4">
//               <Form.Group controlId="taskName" className="mb-3">
//                 <Form.Label>Task Name</Form.Label>
//                 <Form.Control type="text" required />
//               </Form.Group>
//               <Form.Group controlId="assignedTo" className="mb-3">
//                 <Form.Label>Assigned To</Form.Label>
//                 <Form.Control type="text" required />
//               </Form.Group>
//               <Form.Group controlId="assignedBy" className="mb-3">
//                 <Form.Label>Assigned By</Form.Label>
//                 <Form.Control type="text" required />
//               </Form.Group>
//               <Form.Group controlId="priority" className="mb-3">
//                 <Form.Label>Priority</Form.Label>
//                 <Form.Control as="select" required>
//                   <option value="">Select...</option>
//                   <option value="High">High</option>
//                   <option value="Medium">Medium</option>
//                   <option value="Low">Low</option>
//                 </Form.Control>
//               </Form.Group>
//               <Form.Group controlId="estimatedTime" className="mb-3">
//                 <Form.Label>Estimated Time</Form.Label>
//                 <Form.Control type="text" required />
//               </Form.Group>
//               <Form.Group controlId="deadline" className="mb-3">
//                 <Form.Label>Deadline</Form.Label>
//                 <Form.Control type="date" required />
//               </Form.Group>
//               <Form.Group controlId="description" className="mb-3">
//                 <Form.Label>Description</Form.Label>
//                 <Form.Control as="textarea" rows={3} required />
//               </Form.Group>
//               <Button variant="primary" type="submit">
//                 Add Task
//               </Button>
//               <Button variant="secondary" onClick={toggleForm} className="ms-2">
//                 Cancel
//               </Button>
//             </Form>
//           </>
//         )}
//         <h5 className="mt-4">Recently Added Tasks</h5>
//         <Table bordered hover responsive>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Task Name</th>
//               <th>Assigned To</th>
//               <th>Assigned By</th>
//               <th>Priority</th>
//               <th>Estimated</th>
//               <th>Deadline</th>
//               <th>Description</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentTasks.map((task) => (
//               <tr key={task.id}>
//                 <td>{task.id}</td>
//                 <td>{task.name}</td>
//                 <td>{task.assignedTo}</td>
//                 <td>{task.assignedBy}</td>
//                 <td>{task.priority}</td>
//                 <td>{task.estimatedTime}</td>
//                 <td>{task.deadline}</td>
//                 <OverlayTrigger
//                   placement="top"
//                   overlay={
//                     <Tooltip>
//                       {task.description.split(" ").slice(0, 10).join(" ")}
//                     </Tooltip>
//                   }
//                 >
//                   <td>
//                     {task.description.split(" ").slice(0, 2).join(" ")}...
//                   </td>
//                 </OverlayTrigger>
//               </tr>
//             ))}
//           </tbody>
//         </Table>

//         <div className="d-flex justify-content-end mt-2">
//           <Button variant="primary" onClick={viewAllTasks}>
//             View All Tasks
//           </Button>
//         </div>
//       </Card>
//     </div>
//   );
// };

// export default Taskallocation;


//------------------------------------------Based code----------------------------------------------------

import React, { useState } from "react";
import {
  Table,
  Button,
  OverlayTrigger,
  Tooltip,
  Card,
  Form,
  Row,
  Col,
  Modal,
} from "react-bootstrap";

const Taskallocation = () => {
  const [showForm, setShowForm] = useState(false); // toToggle form visibility
  const [tasks, setTasks] = useState([
    {
      id: "001",
      name: "UI Design",
      assignedTo: "Kamal Perera",
      assignedBy: "Saman Silva",
      priority: "High",
      estimatedTime: "4h",
      deadline: "2024-10-15",
      description:
        "Design user interface for the main application page using Figma and Adobe tools.",
    },
    {
      id: "002",
      name: "API test",
      assignedTo: "Nimal Fernando",
      assignedBy: "Sunil Jayasinghe",
      priority: "Medium",
      estimatedTime: "6h",
      deadline: "2024-10-20",
      description:
        "Develop and integrate APIs for frontend communication and data flow.",
    },
    {
      id: "003",
      name: "Database Setup",
      assignedTo: "Nimal Fernando",
      assignedBy: "Sunil Jayasinghe",
      priority: "kow",
      estimatedTime: "6h",
      deadline: "2024-10-25",
      description: "Develop and integrate.",
    },
  ]);

  const [formValues, setFormValues] = useState({
    taskName: "",
    assignedTo: "",
    assignedBy: "",
    priority: "",
    estimatedTime: "",
    deadline: "",
    description: "",
  });

  const [editTaskId, setEditTaskId] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false); // Control delete alert msg
  const [taskToDelete, setTaskToDelete] = useState(null); // Track task delete

  const toggleForm = () => {
    setShowForm((prev) => !prev); // Toggle for show
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTask = {
      id: editTaskId ? editTaskId : `00${tasks.length + 1}`, //this for  to auto generate new id fwhen create new task
      name: formValues.taskName,
      assignedTo: formValues.assignedTo,
      assignedBy: formValues.assignedBy,
      priority: formValues.priority,
      estimatedTime: formValues.estimatedTime,
      deadline: formValues.deadline,
      description: formValues.description,
    };

    if (editTaskId !== null) {
      // Updatingg existing task
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === editTaskId ? { ...newTask, id: editTaskId } : task
        )
      );
    } else {
      // to ading new task
      setTasks((prevTasks) => [...prevTasks, newTask]);
    }

    // Clear form data
    setFormValues({
      taskName: "",
      assignedTo: "",
      assignedBy: "",
      priority: "",
      estimatedTime: "",
      deadline: "",
      description: "",
    });
    setEditTaskId(null);
    setShowForm(false);
  };

  // editable date
  const handleEdit = (task) => {
    setFormValues({
      taskName: task.name,
      assignedTo: task.assignedTo,
      assignedBy: task.assignedBy,
      priority: task.priority,
      estimatedTime: task.estimatedTime,
      deadline: task.deadline,
      description: task.description,
    });
    setEditTaskId(task.id);
    setShowForm(true); // Show the form when user click edit btn
  };

  // hndle task deletion
  const handleDelete = () => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== taskToDelete)
    );
    setShowDeleteModal(false); //after deletion fotm disappper
  };

  const confirmDelete = (taskId) => {
    setTaskToDelete(taskId);
    setShowDeleteModal(true); // Show confirmation msg
  };

  const handleCancel = () => {
    // Clear form data
    setFormValues({
      taskName: "",
      assigner: "",
      assignedBy: "",
      priority: "",
      estimatedTime: "",
      deadline: "",
      description: "",
    });
    setEditTaskId(null);
    setShowForm(false); // Hide form
  };

 
  const truncateDescription = (description) => {
    const words = description.split(" ");
    if (words.length > 2) {
      return `${words[0]} ${words[1]}...`;
    }
    return description;
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3>All Tasks</h3>
        <Button className="mr-4" variant="primary" onClick={toggleForm}>
          {editTaskId ? "Edit Task" : "Add new Task"}
        </Button>
      </div>
      <Card className="p-4 mt-4">
        {showForm && (
          <>
            <h5 className="text-center mb-4 text-decoration-underline">
              {editTaskId ? "Edit Task" : "Create new Task"}
            </h5>
            <Form onSubmit={handleSubmit} className="mb-4">
              <Row>
                <Col md={6}>
                  <Form.Group controlId="taskName" className="mb-3">
                    <Form.Label>Task Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="taskName"
                      value={formValues.taskName}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="assignedTo" className="mb-3">
                    <Form.Label>Assigned To</Form.Label>
                    <Form.Control
                      type="text"
                      name="assignedTo"
                      value={formValues.assignedTo}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="assignedBy" className="mb-3">
                    <Form.Label>Assigned By</Form.Label>
                    <Form.Control
                      type="text"
                      name="assignedBy"
                      value={formValues.assignedBy}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="priority" className="mb-3">
                    <Form.Label>Priority</Form.Label>
                    <Form.Control
                      as="select"
                      name="priority"
                      value={formValues.priority}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select...</option>
                      <option value="High">High</option>
                      <option value="Medium">Medium</option>
                      <option value="Low">Low</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="estimatedTime" className="mb-3">
                    <Form.Label>Estimated Time</Form.Label>
                    <Form.Control
                      type="text"
                      name="estimatedTime"
                      value={formValues.estimatedTime}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="deadline" className="mb-3">
                    <Form.Label>Deadline</Form.Label>
                    <Form.Control
                      type="date"
                      name="deadline"
                      value={formValues.deadline}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId="description" className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  name="description"
                  value={formValues.description}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <div className="d-flex justify-content-end">
                <Button variant="primary" type="submit">
                  {editTaskId ? "Save Changes" : "Add Task"}
                </Button>
                <Button
                  variant="secondary"
                  onClick={handleCancel}
                  className="ms-2"
                >
                  Cancel
                </Button>
              </div>
            </Form>
          </>
        )}
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Assigner</th>
              <th>Assigner</th>
              <th>Priority</th>
              <th>Est Time</th>
              <th>Deadline</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.name}</td>
                <td>{task.assignedTo}</td>
                <td>{task.assignedBy}</td>
                <td>{task.priority}</td>
                <td>{task.estimatedTime}</td>
                <td>{task.deadline}</td>
                <td>
                  <OverlayTrigger
                    placement="top"
                    overlay={
                      <Tooltip id={`tooltip-${task.id}`}>
                        {task.description}
                      </Tooltip>
                    }
                  >
                    <span>{truncateDescription(task.description)}</span>
                  </OverlayTrigger>
                </td>
                <td className="d-flex">
                  <Button
                    variant="warning"
                    onClick={() => handleEdit(task)}
                    className="me-2"
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => confirmDelete(task.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>

      {/* delete confirmation msg */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this task?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Taskallocation;