import React, { useState } from 'react';
import { getRandomColors } from '../../helpers/getRandomColors';
import {
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Chip,
  Modal,
  Box,
} from '@mui/material';

const AddModal = ({ isOpen, onClose, setOpen, handleAddTask }) => {
  const initialTaskData = {
    id: crypto.randomUUID(),
    title: '',
    description: '',
    priority: '',
    deadline: 0,
    image: '',
    alt: '',
    tags: [],
  };

  const [taskData, setTaskData] = useState(initialTaskData);
  const [tagTitle, setTagTitle] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        if (e.target) {
          setTaskData({ ...taskData, image: e.target.result });
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleAddTag = () => {
    if (tagTitle.trim() !== '') {
      const { bg, text } = getRandomColors();
      const newTag = { title: tagTitle.trim(), bg, text };
      setTaskData({ ...taskData, tags: [...taskData.tags, newTag] });
      setTagTitle('');
    }
  };

  const closeModal = () => {
    setOpen(false);
    onClose();
    setTaskData(initialTaskData);
  };

  const handleSubmit = () => {
    handleAddTask(taskData);
    closeModal();
  };

  return (
    <Modal
      open={isOpen}
      onClose={closeModal}
      aria-labelledby='add-task-modal'
      aria-describedby='add-task-form'>
      <Box
        sx={{
          width: '90%',
          maxWidth: 400,
          bgcolor: 'background.paper',
          borderRadius: 2,
          p: 3,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          boxShadow: 24,
        }}>
        <TextField
          label='Title'
          name='title'
          value={taskData.title}
          onChange={handleChange}
          variant='outlined'
          fullWidth
        />
        <TextField
          label='Description'
          name='description'
          value={taskData.description}
          onChange={handleChange}
          variant='outlined'
          fullWidth
        />
        <FormControl fullWidth variant='outlined'>
          <InputLabel>Priority</InputLabel>
          <Select
            name='priority'
            value={taskData.priority}
            onChange={handleChange}
            label='Priority'>
            <MenuItem value='low'>Low</MenuItem>
            <MenuItem value='medium'>Medium</MenuItem>
            <MenuItem value='high'>High</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label='Deadline'
          name='deadline'
          value={taskData.deadline}
          onChange={handleChange}
          variant='outlined'
          fullWidth
          type='number'
        />
        <TextField
          label='Tag Title'
          value={tagTitle}
          onChange={(e) => setTagTitle(e.target.value)}
          variant='outlined'
          fullWidth
        />
        <Button
          variant='contained'
          color='primary'
          onClick={handleAddTag}
          fullWidth>
          Add Tag
        </Button>
        <div className='w-full'>
          {taskData.tags && <span>Tags:</span>}
          {taskData.tags.map((tag, index) => (
            <Chip
              key={index}
              label={tag.title}
              style={{ backgroundColor: tag.bg, color: tag.text }}
              className='m-1'
            />
          ))}
        </div>
        <div className='w-full flex items-center gap-4 justify-between'>
          <TextField
            label='Image Alt'
            name='alt'
            value={taskData.alt}
            onChange={handleChange}
            variant='outlined'
            fullWidth
          />
          <input
            type='file'
            name='image'
            onChange={handleImageChange}
            style={{ width: '100%' }}
          />
        </div>
        <Button
          variant='contained'
          color='secondary'
          onClick={handleSubmit}
          fullWidth
          style={{ marginTop: 16 }}>
          Submit Task
        </Button>
      </Box>
    </Modal>
  );
};

export default AddModal;
