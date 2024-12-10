/* eslint-disable @typescript-eslint/no-explicit-any */
import { TimeOutline } from 'react-ionicons';
import { Chip, Box, Typography, Divider } from '@mui/material';

const Task = ({ task, provided }) => {
  const { title, description, priority, deadline, image, alt, tags } = task;

  return (
    <Box
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      sx={{
        width: '100%',
        cursor: 'grab',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: 3,
        alignItems: 'flex-start',
        boxShadow: 1,
        borderRadius: '12px',
        padding: 2,
      }}>
      {/* {image && alt && (
				<img
					src={image}
					alt={alt}
					style={{ width: "100%", height: "170px", borderRadius: "8px" }}
				/>
			)} */}
      <Box sx={{ display: 'flex', gap: 1 }}>
        {tags.map((tag) => (
          <Chip
            key={tag.title}
            label={tag.title}
            style={{
              backgroundColor: tag.bg,
              color: tag.text,
              fontSize: '13px',
              fontWeight: '500',
            }}
          />
        ))}
      </Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: 0,
        }}>
        <Typography variant='body1' sx={{ fontWeight: '500', color: '#555' }}>
          {title}
        </Typography>
        <Typography variant='body2' sx={{ color: 'gray' }}>
          {description}
        </Typography>
      </Box>
      <Divider sx={{ width: '100%', borderStyle: 'dashed' }} />
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center' }}>
          <TimeOutline color={'#666'} width='19px' height='19px' />
          <Typography variant='body2' sx={{ color: 'gray' }}>
            {deadline} mins
          </Typography>
        </Box>
        <Box
          sx={{
            width: '60px',
            height: '5px',
            borderRadius: '50px',
            backgroundColor:
              priority === 'high'
                ? 'red'
                : priority === 'medium'
                ? 'orange'
                : 'blue',
          }}></Box>
      </Box>
    </Box>
  );
};

export default Task;
