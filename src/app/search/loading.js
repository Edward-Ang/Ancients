import { Box } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';

export default function Loading() {
  const skeletons = Array.from({ length: 4 });

  return (
    <>
      <div style={{ width: '1110px', margin: '20px auto' }}>
        {skeletons.map((_, index) => (
          <div key={index} className='news-card' style={{ display: 'flex', marginBottom: '20px' }}>
            <div className="img-container">
              <Skeleton animation="wave" variant='rectangle' width={250} height={150} sx={{ borderRadius: '8px' }} />
            </div>
            <div className="content-container" style={{ marginLeft: '20px' }}>
              <Box className='article-title' sx={{ width: 510 }}>
                <Skeleton />
                <Skeleton width={390} />
              </Box>
              <Box className='article-desc' sx={{ width: 510 }}>
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </Box>
              <Skeleton className='article-date' width={100} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}