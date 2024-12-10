/* eslint-disable no-unused-vars */
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useState } from 'react';
import { Board } from '../../data/board';
import AddModal from '../../components/Modals/AddModal';
import Task from '../../components/Task';
import { onDragEnd } from '../../helpers/onDragEnd';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const Home = () => {
  const [columns, setColumns] = useState(Board);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedColumn, setSelectedColumn] = useState('');

  const openModal = (columnId) => {
    setSelectedColumn(columnId);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleAddTask = (taskData) => {
    const newBoard = { ...columns };
    newBoard[selectedColumn].items.push(taskData);
    setColumns(newBoard);
  };

  return (
    <>
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'start',
            justifyContent: 'space-between',
            px: 2,
            pb: 3,
            gap: { xs: 3, md: 0 },
            flexWrap: { xs: 'wrap', md: 'nowrap' },
          }}>
          {Object.entries(columns).map(([columnId, column]) => (
            <Box
              key={columnId}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                width: '100%',
                maxWidth: { xs: '250px', md: '290px' },
              }}>
              <Droppable droppableId={columnId} key={columnId}>
                {(provided) => (
                  <Box
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 2,
                      py: 2,
                      alignItems: 'center',
                      width: '100%',
                    }}>
                    {/* Column Header */}
                    <Paper
                      elevation={1}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        py: 1,
                        borderRadius: 1,
                        backgroundColor: 'white',
                      }}>
                      <Typography
                        sx={{
                          color: '#555',
                          fontWeight: 'medium',
                          fontSize: '15px',
                        }}>
                        {column.name}
                      </Typography>
                    </Paper>

                    {/* Tasks */}
                    {column.items.map((task, index) => (
                      <Draggable
                        key={task.id.toString()}
                        draggableId={task.id.toString()}
                        index={index}>
                        {(provided) => <Task provided={provided} task={task} />}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </Box>
                )}
              </Droppable>

              {/* Add Task Button */}
              <Button
                variant='contained'
                startIcon={<AddCircleOutlineIcon />}
                onClick={() => openModal(columnId)}
                sx={{
                  width: '100%',
                  py: 1,
                  backgroundColor: 'white',
                  color: '#555',
                  boxShadow: 1,
                  '&:hover': { backgroundColor: '#f3f3f3' },
                  textTransform: 'none',
                  fontSize: '15px',
                  fontWeight: 'medium',
                }}>
                Add Task
              </Button>
            </Box>
          ))}
        </Box>
      </DragDropContext>

      {/* Modal */}
      <AddModal
        isOpen={modalOpen}
        onClose={closeModal}
        setOpen={setModalOpen}
        handleAddTask={handleAddTask}
      />
    </>
  );
};

export default Home;
